<script>
	import Avatar from './Avatar.svelte';
	
	export var userId;
	export var seccion;
	export var nick;

	var resultado;
	var producto, precio, unidades, stock;
	
	$: resultado;

	async function borrar(){	//para q borre todos los datos despues de darle a enviar
		producto=precio=unidades=stock='';
	};

    async function enviar() {
		try {
			if (!userId) {
				alert("Es necesario iniciar sesión para dar de alta productos.");
				throw "Es necesario iniciar sesión para dar de alta productos.";
			}
			var url = 'http://localhost:3000/nuevoProduc/';
			var data = new FormData();//los data.append deben ser= a los inputs
			data.append('producto',producto);
			data.append('precio',precio);
			data.append('unidades',unidades);
			data.append('stock',stock);
			data.append('proveedor',userId);
			var requestOptions = {
				method: 'POST',
				body: data,
			};
			var res = await fetch(url,requestOptions);
			resultado = await res.text();
			console.log(resultado);
		} catch (err) {
			console.log(`********`);
			window.alert(`Algo salio mal: ${err.message}`)
		};
		borrar();
	};
	async function regresar(){
		seccion = "entrada";
	};
</script>

<main>
	<meta http-equiv="content-type" content="text/html; charset=utf-8"/>
<head>
	<Avatar bind:nick/>
</head>
	<div id="nuevoProducto">
		<h2>Añadir Productos.-</h2>
		<p>Productos:<input id="producto" type="text" bind:value={producto}></p>
		<p>Precio:<input id="precio" type="text" bind:value={precio}></p>
		<p>Unidades:<input id="unidades" type="text" bind:value={unidades}></p>
		<p>Stock:<input id="stock" type="text" bind:value={stock}></p>
		<p>{userId}</p>
    </div>
	<button on:click={enviar}>Enviar</button>
	<p>Producto agregado: {resultado}</p>
	<button id="regresar" on:click={regresar}></button>
</main>

<style>
#nuevoProducto{
	font-family: 'ZCOOLXiaoWei-Regular.ttf';
	color: rgb(57, 5, 82);
	font-size: 35px;
	text-align: center;
	float: right;
}
input{
	font-size: 25px;
	border-radius: 50px;
	border-color: rgb(48, 2, 48);
	color:rgb(193, 72, 233);
	background-color: rgba(44, 2, 43, 0.693);
	font-family: 'ZCOOLXiaoWei-Regular.ttf';
}
</style>