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
var collProduc;

async function conectadb () {
	var conexionMongo = await MongoClient.connect(mongoURL);
	collection = await conexionMongo.db().collection('usuario');
	//collProv = await client.db().collection('proveedores');
	collProduc = await conexionMongo.db().collection('productos');
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