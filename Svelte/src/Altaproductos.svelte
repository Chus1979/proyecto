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
			data.append('proveedor',userId.nick);
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
	async function Nick(){
     seccion="nick";
 };
</script>

<main>
	<meta http-equiv="content-type" content="text/html; charset=utf-8"/>
	<div>
		<Avatar bind:nick on:click={Nick}/>
		<p class="p">{userId.nick}</p>
	</div>
	<div id="nuevoProducto">
		<h2>Añadir Productos.-</h2>
		<p>Productos:<input id="producto" type="text" bind:value={producto}></p>
		<p>Precio:<input id="precio" type="text" bind:value={precio}></p>
		<p>Unidades:<input id="unidades" type="text" bind:value={unidades}></p>
		<p>Stock:<input id="stock" type="text" bind:value={stock}></p>
		<p>Producto agregado: {resultado}</p>
	</div>
	<button on:click={enviar}>Enviar</button>
	<button id="regresar" on:click={regresar}></button>
	
</main>

<style>
#nuevoProducto{
	font-family: 'ZCOOLXiaoWei-Regular.ttf';
	color: rgb(5, 82, 53);
	font-size: 45px;
	text-align: center;
	display:block;
}
input{
	font-size: 35px;
	border-radius: 50px;
	color: rgb(69, 186, 141);
	background-color: rgba(2, 44, 42, 0.693);
	font-family: 'ZCOOLXiaoWei-Regular.ttf';
	text-align: center;
}
.p{
    font-size: 60px;
    color:rgb(9, 240, 9);
    text-align: center;
}
</style>