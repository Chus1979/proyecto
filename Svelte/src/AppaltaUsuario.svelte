<script>
	//import ListaUsuarios from './ListaUsuarios.svelte';
	//import Appentrada from "./Appentrada.svelte";
	//import Appinicio from "./Appinicio.svelte";
	//import Avatar from "./Avatar.svelte";
	
	export var userId;
	export var seccion;
	var usuarios = [];
	var listadoUsuarios = [];
	export var nick = "";
	var nombre,dni, telefono, email, clave;

	
	var actualizar;

	$: actualizar;


	async function borrar(){	//para q borre todos los datos despues de darle a enviar
		nombre=dni=telefono=email=nick=clave='';
	};
	async function regresar(){
		seccion = "inicio";
	};
	async function Login(){
        var LoginURL = 'http://localhost:3000/login/';
        var data = new FormData();
        data.append('telefono', telefono);
		data.append('clave', clave);
        var requestOptions = {
            method: 'POST',
            body: data,
        }
        var resp = await fetch(LoginURL,requestOptions);
        userId = await resp.json();
            if (userId!=="false"){
				seccion = "entrada";
				nick = userId.nick;
            }else{
				alert('Algo ha salido mal. Vuelve a intentarlo.');
				regresar();
            }
    };
    async function enviar() {
		var url = 'http://localhost:3000/nuevoUsuario/';
		var data = new FormData();//los data.append deben ser= a los inputs
		data.append('nombre', nombre);
		data.append('dni', dni);
		data.append('telefono', telefono);
		data.append('email', email);
		data.append('nick', nick);
		data.append('clave', clave);
		var requestOptions = {
			method: 'POST',
			body: data,
		};
		try {
			var res = await fetch(url,requestOptions);
			actualizar = await res.text();
				if(res.ok){
					userId = actualizar;
					seccion = "entrada";
					console.log(userId);
					Login();
					borrar();
					window.alert('Se ha registrado correctamente');
				}else{
					window.alert('El usuario ya existe');
					regresar();
				};
		} catch (err) {
			console.log(`********`);
			window.alert(`Algo salio mal: ${err.message}`);
			regresar();
		};
		borrar();
	};
		
</script>

<main>
	<meta http-equiv="content-type" content="text/html; charset=utf-8"/>
	<div id="nuevoUsuario">
		<h2>Nuevo Usuario.-</h2>
		<p>Nombre:<input id="nombre" type="text" bind:value={nombre} required></p>
		<p>D.N.I./C.I.F.:<input id="dni" type="text" bind:value={dni} required></p>
		<p>Telefono:<input id="telefono" type="text" bind:value={telefono} required></p>
		<p>Email:<input id="email" type="email" bind:value={email} required></p>
		<p>Nick:<input id="nick" type="text" bind:value={nick} required></p>
		<p>Contraseña:<input id="clave" type="password" bind:value={clave} required></p>
	
	<button on:click={enviar}>Enviar</button>	<!--con el nombre de la función es suficiente-->
	<button id="regresar" on:click={regresar}></button>
	</div>
</main>

<style>
h2{
	text-align: center;
    color:rgb(12, 236, 243);
    font-family: 'Gabriela-Regular.ttf';
	font-size: 60px;
	text-decoration-color: rgb(2, 29, 80);
	margin-bottom: 10%;
	letter-spacing: 0;
	text-shadow: -3px -3px 3px #0000DF, 3px -3px 3px #0000DF, -3px 3px 3px #0000DF, 3px 3px 3px #0000DF;
}
button {
	float: left;
	margin-top: 10%;
	margin-left: 5%;
}
div{
	font-family: 'Ruluko-Regular.ttf';
	color: rgb(6, 12, 106);
	font-size: 40px;
	font-style: oblique;
	text-align: right;
	float: left;
	font-weight: 900;
}
input{
    font-family: 'Ruluko-Regular.ttf';
	margin-left: 10px;
	color: rgb(2, 6, 65);
	font-size: 30px;
	background-color: rgb(5, 250, 164);
	border-radius: 50px;
	text-align: center;
}
button#regresar{
	margin-bottom: 10%;
    float:right;
    margin-left: 10%;
    margin-right: 10%;
}
</style>