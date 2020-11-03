<script>
	//import ListaUsuarios from './ListaUsuarios.svelte';
	import Appentrada from "./Appentrada.svelte";
	//import Appinicio from "./Appinicio.svelte";
	import Avatar from "./Avatar.svelte";

	export var seccion;
	var usuarios = [];
	var listadoUsuarios = [];
	var nick = "";
	var nombre,dni, email, clave,nifCif,avatar;
	export var userId;
	var actualizar;

	$: actualizar;

	async function borrar(){	//para q borre todos los datos despues de darle a enviar
		avatar=nombre=dni=email=nick=clave=nifCif='';
	};

    async function enviar() {
		var url = 'http://localhost:3000/nuevoUsuario/';
		var data = new FormData();//los data.append deben ser= a los inputs
		data.append('nombre',nombre);
		data.append('dni',dni);
		data.append('nifCif', nifCif);
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
			seccion = "entrada"
		} catch (err) {
			console.log(`********`);
			window.alert(`Algo salio mal: ${err.message}`)
		}
		borrar();
	};
	
	
</script>

<main>
	<meta http-equiv="content-type" content="text/html; charset=utf-8"/>
	<div id="nuevoUsuario">
		<h2>Nuevo Usuario.-</h2>
		<p>Nombre:<input id="nombre" type="text" bind:value={nombre}></p>
		<p>D.N.I.:<input id="dni" type="text" bind:value={dni}></p>
		<p>N.I.F/C.I.F.:<input id="nifCif" type="text" bind:value={nifCif}></p>
		<p>Email:<input id="email" type="email" bind:value={email}></p>
		<p>Nick:<input id="nick" type="text" bind:value={nick}></p>
		<p>Contraseña:<input id="clave" type="password" bind:value={clave}></p>
		<p>Avatar:
			<Avatar bind:nick={nick}/> <!--lo asociamos a nick que es lo q va aparecer en el reso de ficheros-->
		</p>
	</div>
	<button on:click={enviar}>Enviar</button>	<!--con el nombre de la función es suficiente-->
	<!--	
	{#each actualizar as userId}
			{userId.nick}+{userId.clave}; 
		{/each}
		<Appentrada bind:seccion={seccion} bind:userId={userId}/>
		<!--Appinicio/-->

</main>

<style>

p{
	font-family: 'ZCOOLXiaoWei-Regular.ttf';
	color: rgb(2, 6, 65);
	font-size: 40px;
	font-style: oblique;
	text-align: center;
}
input{
    font-family: 'ZCOOLXiaoWei-Regular.ttf';
	border-radius: 50px;
	border:0;
	margin-left: 10px;
	color: rgb(2, 6, 65);
	font-size: 40px;
	background-color: rgb(10, 243, 243);
}
</style>