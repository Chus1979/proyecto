const express =  require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const MongoClient = require('mongodb').MongoClient;
/** Para usar _id de MongoDB */
const ObjectId = require('mongodb').ObjectId;
const crypto = require ('crypto');
//
const mongoURL = 'mongodb://localhost:27017/cliente_proveedor';

const multer = require('multer');
const {ClientRequest} = require('http');
const mimeParser = multer({
        dest: './altaUsuario/',
        limits: {
            fileSize: 1000,
		},
});
var collection;

//var collClien;
//var collProv;
//var collProduc;

async function conectadb () {
	var usuario = await MongoClient.connect(mongoURL);
	collection = await usuario.db().collection('usuario');
	//collProv = await client.db().collection('proveedores');
	//collProduc = await client.db().collection('productos');
}

conectadb();
port = 3000;

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
        //apellido1:req.query.apellido1,
        //apellido2:req.query.apellido2,
        dni:req.body.dni,
        nifCif:req.body.nifCif,
        //direccion:req.query.direccion,
        email:req.body.email,
        //telefono:req.query.telefono,
        nick:req.body.nick,
        clave: hashString,
        //FormaPago:req.query.FormaPago,
       // HistorialPedidos:req.query.HistorialPedidos,
        //Carro:req.query.Carro,	
		//avatar:req.body.avatar,
		//file:req.body.file,
	};
	//var result = await collFiles.insertOne(file);
	var mongoRes = await collection.insertOne(documento);
	var usuario = await collection.find().toArray();
	var json = JSON.stringify(usuario);
	//console.log(file);
	//res.send(result.insertedId);
	console.log(mongoRes);
	res.send(json);
});
app.get('/login/', async (req, res){
    var nick = req.query.nick;
    var pwd = req.query.clave;
    const hash = crypto.createHash('sha256');
	hash.update(pwd);
    var hashString = hash.digest('base64');
    var filtro {
        nick: nick,
        clave: hashString,
    };
    var usuario = await collection.findOne(filtro);
    if(usuario){
        res.send(JSON.stringify('usuario_id'));
    } else {
        res.send(JSON.stringify('false'));
    };
});


/*app.get('/listadoUsuarios/', async (req,res)=>{
	var usuario = await collection.find().toArray();
	var json = JSON.stringify(usuario)
		res.send(json);		
})*/

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
app.post('/nuevoProv/',async (req,res)=>{
    var nuevoProv= req.body.proveedor;
    var pwd = req.body.pwd;
	const hash = crypto.createHash('sha256');
	hash.update(pwd);
    var hashString = hash.digest('base64');
    var datosProv = {
        proveedor:req.body.proveedor,      
        email:req.body.email,
        clave:hashString,        
    };
    var mongoRes = await collection.insertOne(datosProv);
    var proveedor = await collection.find().toArray();
    var json = JSON.stringify(proveedor);
    res.send(json);
})
*/

/*
app.get('/listadoProv/', async (req, res)=>{
    var proveedor = await collection.find().toArray();
    var json = JSON.stringify(proveedor);
        res.send(json);
})
*/

/*
app.post('/listadoProduc/', async (req,res)=>{
    var productos = {
        producto:req.body.productos,
        precio:req.body.precio,
    }
    var mongoRes = await collProduc.insertOne(productos);
    var productos = await collProduc.find().toArray();
    var json =JSON.stringify(productos);
        res.send(json);
})
*/

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

app.listen(port,()=>{
	console.log(`Todo listo y escuchando en http://localhost:${port}/`);
})
