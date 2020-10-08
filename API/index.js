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
const mongoURL = 'mongodb://localhost:27017/cliente_proveedor/';

const multer = require('multer');
const {ClientRequest} = require('http');
const mimeParser = multer({
        dest: './altaUsuario/',
        limits: {
            fileSize: 1000,
		},
});

var collClien;
var collProv;
var collProduc;

async function conectadb () {
	var client = await MongoClient.connect(mongoURL);
	collClien = await client.db().collection('clientes');
	collProv = await client.db().collection('proveedores');
	collProduc = await client.db().collection('productos');
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
app.post('/nuevoCli/', async (req,res)=>{
	var nuevoClientes = req.body.clientes; 
	var pwd = req.body.pwd;
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
        dNI:req.body.dNI,
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
	var mongoRes = await collClien.insertOne(documento);
	var clientes = await collClien.find().toArray();
	var json = JSON.stringify(clientes);
	//console.log(file);
	//res.send(result.insertedId);
	console.log(mongoRes);
	res.send(json);
})

app.get('/listadoCli/', async (req,res)=>{
	/**
	* Endpoint: http://localhost:3000/listadoCli/
	*/
	var clientes = await collClien.find().toArray();
	var json = JSON.stringify(clientes)
		res.send(json);		
})

/*
app.get('/modificarFichaCli/', async (req,res)=>{
})
*/

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
        nifCif:req.body.nifCif,
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
