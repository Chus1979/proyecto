const express =  require('express');
const multer  = require('multer');
const session = require('express-session');
const cors = require('cors');
const bodyParser = require('body-parser');

//const mimeParser = multer();

const secret = "s4VbV3z4hjlTApzzQYalJRpPUBbacSUFZ3sTZ4MS7aqa"
const sessionOptions = {
    secret: secret,
    resave: true,
    saveUninitialized: false,
    cookie: {},
};

const app = express();

app.use(cors());
app.use(session(sessionOptions));


const jsonParser = bodyParser.json();

const MongoClient = require('mongodb').MongoClient;
/** Para usar _id de MongoDB */
const ObjectId = require('mongodb').ObjectId;
const crypto = require ('crypto');
//
const mongoURL = 'mongodb://localhost:27017/cliente_proveedor';

//const multer = require('multer');
const {ClientRequest} = require('http');
const mimeParser = multer({
        dest: './altaUsuario/',
        limits: {
            fileSize: 1000,
		},
});
const appPort = 3000;

var collection;
//var collClien;
//var collProv;
var collProduc;

//conectar a la BD antes pq hacemos busquedas desde las funciones.
async function conectadb () {
	var conexionMongo = await MongoClient.connect(mongoURL);
	collection = await conexionMongo.db().collection('usuario');
	//collProv = await client.db().collection('proveedores');
	collProduc = await conexionMongo.db().collection('productos');
}

async function autenticate(telefono,pwd) {
    /**
     * Modifica esta función según tus necesidades.
     * Comprueba si las credenciales son correctas y retorna 'true' o 'false' según corresponda.
     */
    
    const hash = crypto.createHash('sha256');
    hash.update(pwd);
    var hashString = hash.digest('base64');
    var filtro = {
            telefono: telefono,
            clave: hashString,
    };
    var usuario = await collection.findOne(filtro);
    if ( usuario.hasOwnProperty(telefono) && usuario[telefono] === pwd) {
        console.log('Todo correcto, puede continuar');
        return true;
    } else {
        console.log('Vuelva a intentarlo, algo salió mal')
        return false;
    }
}
 /**
     * Middleware que verifica si la petición pertenece a una sesión iniciada.
     * En caso contrario, contesta con un error de no autorizado.
     * Añadiremos este middleware a todos los endpoints a los que no permitamos acceder sin iniciar sesión.
     * Status codes: https://developer.mozilla.org/es/docs/Web/HTTP/Status
     */
async function autenticatedSession (req,res,next) {
    if ( ! req.session.hasOwnProperty('authenticated') || req.session.authenticated !== true ) {
        console.log('Petición no autorizada.')
        res.sendStatus(403);
    } else {
        console.log('Petición autorizada.')
        next();
    }
}


conectadb();
//port = 3000;

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
        nifCif:req.body.nifCif,
        //direccion:req.query.direccion,
        email:req.body.email,
        telefono:req.body.telefono,
        nick:req.body.nick,
        clave: hashString,
            //FormaPago:req.query.FormaPago,
           // HistorialPedidos:req.query.HistorialPedidos,
            //Carro:req.query.Carro,	
        avatar:req.body.avatar,
            //file:req.body.file,
        };
        //var result = await collFiles.insertOne(file);
        var mongoRes = await collection.insertOne(documento);
        //var usuario = await collection.find().toArray();
        //var json = JSON.stringify(usuario);
        //console.log(file);
        //res.send(result.insertedId);
        console.log(mongoRes.ops[0]._id);
        res.send(mongoRes.ops[0]._id);
    });
    app.post('/login/',mimeParser.none(), async (req, res)=>{
         /**
     * Recibe los datos del formulario de login.
     * Comprueba la validez de los datos.
     * Si los datos son validos, marca la sesión como autenticada.
     */
    var telefono = req.body.telefono;
    var pwd = req.body.clave;
    var validates = autenticate(telefono, pwd);
    req.session.authenticated = validates;
    res.send(JSON.stringify(validates));
       
    });
    
    app.get('/listadoUsuarios/', async (req,res)=>{
        var nombre = req.query.nombre;
        var telefono = req.query.telefono;
        var direccion = req.query.direccion;
        var email = req.query.email;
        var doc = {
            nombre:nombre,
            direccion:direccion,
            email:email,
            telefono:telefono,
        };
        //var usuario = await collection.findOne({nick: nick},{direccion:direccion},{email:email});
        var usuario = await collection.findOne(doc);
        res.send(JSON.stringify(usuario._id));
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
    
    /*app.listen(port,()=>{
        console.log(`Todo listo y escuchando en http://localhost:${port}/`);
    });*/
    app.listen( appPort , ()=>{
        console.log(`Listo!: http://localhost:${appPort}/`)
    });
    