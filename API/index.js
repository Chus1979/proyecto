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
const collName = 'clientes';

const multer = require('multer');
const {ClientRequest} = require('http');
const mimeParser = multer({
        dest: './altaUsuario/',
        limits: {
            fileSize: 1000,
		},
});

var collection;

async function conectadb () {
	var client = await MongoClient.connect(mongoURL);
	collection = await client.db().collection(collName);
}

conectadb();
port = 3000;

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
		file:req.body.file,
	};
	//var result = await collFiles.insertOne(file);
	var mongoRes = await collection.insertOne(documento);
	var clientes = await collection.find().toArray();
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
	var clientes = await collection.find().toArray();
	var json = JSON.stringify(clientes)
		res.send(json);		
})

app.get('/modificarDoc/', async (req,res)=>{
	/**
	* Endpoint: http://localhost:3000/borrar/?id=AAAAAAA
	*/
	/*var id = req.query.id; 
	var filtro = {
		_id: ObjectId(id)
	}
    await collection.deleteOne(filtro);*/
    //quiero q se pueda modificar los atributos del objeto, documento.

	var clientes = await collection.find().toArray();
	var json = JSON.stringify(clientes)
	res.send(json);
})
app.get('/eliminarUsuario/', async(req, res)=>{
	var clientes = await collection.find().toArray();
	var id = req.query.id;
	var filtro = {
		_id:ObjectId(id),
	}
	var bajaUsuario = await collection.deleteOne(filtro);
	var json = JSON.stringify(clientes);
	res.send(json);
	res.send(bajaUsuario);
})

app.listen(port,()=>{
	console.log(`Todo listo y escuchando en http://localhost:${port}/`);
})
