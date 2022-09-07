const express =  require('express');
const app = express();
// https://www.npmjs.com/package/express-session

// Load .env environmet variables if not in production.
if (process.env.NODE_ENV !== "production") require('dotenv').config()

const multer  = require('multer');
const appPort = 3000;
const cors = require('cors');
app.use(cors());

//const bodyParser = require('body-parser');
//const jsonParser = bodyParser.json();

const MongoClient = require('mongodb').MongoClient;
/** Para usar _id de MongoDB */
const ObjectId = require('mongodb').ObjectId;
const crypto = require ('crypto');
//

const {ClientRequest} = require('http');

const mimeParser = multer({
        dest: './altaUsuario/',
        limits: {
            fileSize: 1000,
		},
});
/**
 * La siguiente variable contiene un valor aleatorio. Debes de generar tu propio valor.
 * Hace impredecibles para terceros las identidades de las sesiones.
 * Puedes hacerlo ejecutando el siguiente comando en el terminal de Linux:
 *      $ openssl rand -base64 33
 */
const session = require('express-session');
const secret = "s4VbV3z4hjlTApzzQYalJRpPUBbacSUFZ3sTZ4MS7aqa"
const sessionOptions = {
    secret: secret,
    resave: true,
    saveUninitialized: false,
    cookie: {},
};
app.use(session(sessionOptions));


var collection;
//var collClien;
//var collProv;
var collProduc;
async function conectadb () {
    // Connect to server defined in MONGO_URL environment variable.
	var conexionMongo = await MongoClient.connect(process.env.MONGO_URL);
	collection = await conexionMongo.db().collection('usuario');
	//collProv = await client.db().collection('proveedores');
	collProduc = await conexionMongo.db().collection('productos');
};
conectadb();

/**
 * Por simplicidad, empleamos un objeto con los datos de autenticación.
 * Normalmente esta información estará en una base de datos o algún servicio de autenticación.
 */
function autenticate(telefono,pwd) {
    /**
     * Modifica esta función según tus necesidades.
     * Comprueba si las credenciales son correctas y retorna 'true' o 'false' según corresponda.
     */
    if ( usuario.hasOwnProperty(telefono) && usuario[telefono] === pwd ) {
        console.log('Usuario y contraseña correctos');
        return true;
    } else {
        console.log('Usuario y contraseña no validos')
        return false;
    }
}
function autenticatedSession (req,res,next) {
    /**
     * Middleware que verifica si la petición pertenece a una sesión iniciada.
     * En caso contrario, contesta con un error de no autorizado.
     * Añadiremos este middleware a todos los endpoints a los que no permitamos acceder sin iniciar sesión.
     * Status codes: https://developer.mozilla.org/es/docs/Web/HTTP/Status
     */
    if ( ! req.session.hasOwnProperty('authenticated') || req.session.authenticated !== true ) {
        console.log('Petición no autorizada.')
        res.sendStatus(403);
    } else {
        console.log('Petición autorizada.')
        next();
    }
}
/*
app.post('/logout/',autenticatedSession,(req,res)=>{
    console.log('Cerrando sesión.')
    req.session.authenticated = false;
    res.sendStatus(200);
});*/
app.get( '/private/', autenticatedSession, function( req, res ) {
    /**
     * Si el middleware de autenticación lo permite muestra el área privada.
     */
    const secret = [
        'https://www.jesusda.com/docs/ebooks/ebook_memorias%20de%20un%20ingeniero.pdf',
        '42',
        'https://es.wikipedia.org/wiki/El_sentido_de_la_vida,_el_universo_y_todo_lo_dem%C3%A1s#El_n%C3%BAmero_42',
        'https://es.wikipedia.org/wiki/Bastard_Operator_from_Hell',
        'https://es.wikipedia.org/wiki/The_IT_Crowd',
    ];
    console.log('Dando respuestas a la vida.')
    return res.send( JSON.stringify(secret) ) ;
});
/**
 * #####################################
 * ############## Inicio de los endpoint
 * #####################################
 */
 /**
  * ############# Endpoints clientes ###
  * ####################################
  */
app.post('/nuevoUsuario/', mimeParser.none(), async (req,res)=>{
    try{
        var nuevoUsuario = req.body.usuario; 
        var pwd = req.body.clave;   //para q coincida con el input y el data.append
        const hash = crypto.createHash('sha256');
        hash.update(pwd);
        var hashString = hash.digest('base64');
        /*var file = {
            folder: req.file.destination,
            name: req.file.filename,
            oldName: req.file.originalname,
            mime: req.file.mimetype,
        }*/
        var documento = {
            nombre:req.body.nombre,
            dni:req.body.dni,
            //nifCif:req.body.nifCif,
            //direccion:req.body.direccion,
            email:req.body.email,
            telefono:req.body.telefono,
            nick:req.body.nick,
            clave: hashString,
        // HistorialPedidos:req.body.HistorialPedidos,
            //Carro:req.body.Carro,	
            avatar:req.body.avatar,
            //file:req.body.file,
        };
        //var result = await collFiles.insertOne(file);
        var usuario = await collection.findOne(
            {$or:[
                {nombre:req.body.nombre},
                {dni:req.body.dni},
                {email:req.body.email},
                {telefono:req.body.telefono},
                {nick:req.body.nick},
                {clave: hashString},
            ]}
        );
        console.log(usuario)
            if(usuario !== null ){
                console.log('El usuario ya existe, prueba otra vez');
                res.status(418);
            }else{
                var mongoRes = await collection.insertOne(documento);                
                var json = JSON.stringify(documento);
                res.send('ok');
                console.log(json);
            };
    }catch(err){
        console.error(err)
        res.status(418).send(err);
    };  
});   
    //var validates = autenticate(telefono,pwd);
    //req.session.authenticated = validates;
    //res.send(JSON.stringify(validates));

app.post('/login/', mimeParser.none() , async (req, res)=>{
    var telefono = req.body.telefono;
    var pwd = req.body.clave;
    var icono = req.body.avatar;
    const hash = crypto.createHash('sha256');
	hash.update(pwd);
    var hashString = hash.digest('base64');
    var filtro = {
        telefono: telefono,
        clave: hashString,
        sicono: icono,
    };
    var usuario = await collection.findOne(filtro);
    var response;
    if (usuario) {
        response = usuario;
        req.session.authenticated = true;
    } else {
        response = false;
        req.session.authenticated = false;
    }
    res.send(JSON.stringify(usuario));
});
    /**
     * Recibe los datos del formulario de login.
     * Comprueba la validez de los datos.
     * Si los datos son validos, marca la sesión como autenticada.
     */
app.get('/listadoUsuarios/', async (req,res)=>{
    var telefono = req.query.telefono;
	var usuario = await collection.findOne({telefono: telefono});
    var json = JSON.stringify(usuario);
    res.send(json);
});
/*
app.get('/eliminarCli/', async(req, res)=>{
	var id = req.query.id;
	var filtro = {
		_id:ObjectId(id),
	}
	var bajaUsuario = await collClien.deleteOne(filtro);
	var clientes = await collClien.find().toArray();
	var json = JSON.stringify(clientes);
	res.send(json);
})
*/
 /**
  * ############# Endpoints proveedores 
  * ####################################
  */
/*
app.get('/listadoProv/', async (req, res)=>{
    var proveedor = await collection.find().toArray();
    var json = JSON.stringify(proveedor);
        res.send(json);
})
*/
app.post('/nuevoProduc/',mimeParser.none(), async (req,res)=>{
    var ficha = {
        producto:req.body.producto,
        precio: parseFloat(req.body.precio),
        unidades:req.body.unidades,
        stock: parseFloat(req.body.stock),
        proveedor:req.body.proveedor,   
    };
    try {
        var mongoRes = await collProduc.insertOne(ficha);
        res.send('Ok');
    } catch (err) {
        res.status(500).send('Error');
    }
});
app.get('/listadoProduc/', async (req,res)=>{
	var ficha = await collProduc.find().toArray();
	var fichaJson = JSON.stringify(ficha);
        res.send(fichaJson);		
});
/*
app.get('/modificarProv/', async (req, res)=>{
    var proveedor = await collection.find().toArray();
    var json = JSON.stringify(proveedor);
        res.send(json);
})
*/
/*
app.get('/modificarProduc/',async (req, res)=>{
    var productos = await collProduc.find().toArray();
    var json = JSON.stringify(productos);
        res.send(json);
})
*/
/**
 * #####################################
 * ############## Fin de los endpoint
 * #####################################
 */
/*
app.listen(port,()=>{
	console.log(`Todo listo y escuchando en http://localhost:${port}/`);
})
*/
app.listen( appPort , ()=>{
    console.log(`Listo!: http://localhost:${appPort}/`)
}) ;
