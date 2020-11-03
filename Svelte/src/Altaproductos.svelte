<script>
	import Avatar from './Avatar.svelte';
	export var userId;
	export var nick;
	export var seccion;

	var resultado;
	var producto, precio, unidades, stock,avatar;
	
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
			data.append('avatar',avatar)
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
		}
		seccion = "producto";
		borrar();
	}
	async function entrada(){
		seccion = "entrada";
	}
</script>

<main>
	<meta http-equiv="content-type" content="text/html; charset=utf-8"/>
	<div>
		<Avatar bind:nick={nick}/>
	</div>	
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
	<button on:click={entrada}>Entrada</button>
</main>

<style>
@font-face{
	font-family: 'black_chancery';
	src: url('../blac_chancery/BLKCHCRY.TTF')
	}
p{
	font-family: 'black_chancery';
	color: rgb(48, 2, 2);
	font-size: large;
	font-style: oblique;
	text-align: center;
}
input{
    font-family: 'black_chancery';
	border-radius: 50px;
	border-color: rgb(48, 2, 2);
	margin-left: 10px;
}
</style>