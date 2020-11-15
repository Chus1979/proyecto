<script>
	//import ListaUsuarios from './ListaUsuarios.svelte';
	//import Appentrada from "./Appentrada.svelte";
	//import Appinicio from "./Appinicio.svelte";
	import Avatar from "./Avatar.svelte";
	
	export var userId;
	export var seccion;
	var usuarios = [];
	var listadoUsuarios = [];
	var nick = "";
	var nombre,dni, email, clave,telefono,avatar;
	
	var actualizar;

	$: actualizar;

	async function borrar(){	//para q borre todos los datos despues de darle a enviar
		avatar=nombre=dni=email=nick=clave=telefono='';
	};

    async function enviar() {
		var url = 'http://localhost:3000/nuevoUsuario/';
		var data = new FormData();//los data.append deben ser= a los inputs
		data.append('nombre',nombre);
		data.append('dni',dni);
		data.append('nifCif', telefono);
		data.append('email',email);
		data.append('nick',nick);
		data.append('clave',clave);
		data.append('avatar',avatar)
		var requestOptions = {
			method: 'POST',
			body: data,
		};
		try {
			var res = await fetch(url,requestOptions);
			actualizar = await res.text();
			console.log(actualizar);
			userId = actualizar;
			seccion = "entrada";
		} catch (err) {
			console.log(`********`);
			window.alert(`Algo salio mal: ${err.message}`)
		}
		borrar();
	};
	async function regresar(){
		seccion = "inicio";
	}
	
	
</script>

<main>
	<meta http-equiv="content-type" content="text/html; charset=utf-8"/>
	<div id="nuevoUsuario">
		<h2>Nuevo Usuario.-</h2>
		<p>Nombre/Empresa:<input id="nombre" type="text" bind:value={nombre} required></p>
		<p>D.N.I./N.I.F/C.I.F.:<input id="dni" type="text" bind:value={dni} required></p>
		<p>Telefono:<input id="nifCif" type="text" bind:value={telefono} required></p>
		<p>Email:<input id="email" type="email" bind:value={email} required></p>
		<p>Nick:<input id="nick" type="text" bind:value={nick}></p>
		<p>Contraseña:<input id="clave" type="password" bind:value={clave} required></p>
		<!--p>Avatar:<Avatar bind:nick={nick}/></p><!--lo asociamos a nick que es lo q va aparecer en el reso de ficheros-->	
	<button on:click={enviar}>Enviar</button><!--con el nombre de la función es suficiente-->
	<button id="regresar" on:click={regresar}></button>
	</div>
</main>

<style>

div{
	font-family: 'Marmeland-Regular.ttf';
	color: rgb(6, 12, 106);
	font-size: 40px;
	font-style: oblique;
	text-align: right;
	float: left;
	top:0;
	bottom: 0;
	left: 0;
	right: 0;
}
input{
    font-family: 'Marmeland-Regular.ttf';
	margin-left: 10px;
	color: rgb(2, 6, 65);
	font-size: 30px;
	background-color: rgb(10, 243, 243);
}
button{
	display: inline-flex;
}
</style>