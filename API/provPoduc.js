const express =  require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const MongoProv = require('mongodb').MongoClient;
/** Para usar _id de MongoDB */
const ObjectId = require('mongodb').ObjectId;
const crypto = require ('crypto');
//
const mongoURL = 'mongodb://localhost:27017/cliente_proveedor';
const collName = 'proveedor';
const collProduc = 'productos'

const multer = require('multer');
const {ClientRequest} = require('http');
const mimeParser = multer({
        dest: './altaprov/',
        limits: {
            fileSize: 1000,
		},
});

var collection;
var collProvProduc;

async function conectadb () {
	var prov = await MongoProv.connect(mongoURL);
    collection = await prov.db().collection(collName);
    collProvProduc = await collProvProduc.db().collProvProduc(collProduc);
}

conectadb();
port = 3001;

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

app.get('/listadoProv/', async (req, res)=>{
    var proveedor = await collection.find().toArray();
    var json = JSON.stringify(proveedor);
        res.send(json);
})

app.post('/listadoProduc/', async (req,res)=>{
    var productos = {
        producto:req.body.productos,
        precio:req.body.precio,
    }
    var mongoRes = await collProvProduc.insertOne(productos);
    var productos = await collProvProduc.find().toArray();
    var json =JSON.stringify(productos);
        res.send(json);
})

app.get('/modificarProv/', async (req, res)=>{
    var proveedor = await collection.find().toArray();
    var json = JSON.stringify(proveedor);
        res.send(json);
})

app.get('/modificarProduc/',async (req, res)=>{
    var productos = await collProvProduc.find().toArray();
    var json = JSON.stringify(productos);
        res.send(json);
})

app.listen(port,()=>{
    console.log(`Mercado listo en http://localhost:${port}/`);
})