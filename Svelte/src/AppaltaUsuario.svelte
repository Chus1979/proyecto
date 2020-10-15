<script>
//import { text } from "svelte/internal";

    //var txt = '';
	var listadoUsuarios = [];
	//var files;	
	var nombre,dni, email, nick, clave,nifCif

	async function borrar(){	//para q borre todos los datos despues de darle a enviar
		nombre=dni=email=nick=clave=nifCif='';
	};
	
    async function enviar() {
		var url = 'http://localhost:3000/nuevoUsuario/'
		var data = new FormData();//los data.append deben ser= a los inputs
		//data.append('files',files[0]);
		data.append('nombre',nombre);
		data.append('dni',dni);
		data.append('nifCif', nifCif);
		data.append('email',email);
		data.append('nick',nick);
		data.append('clave',clave);
		//data.append('avatar',avatar)
		var requestOptions = {
			method: 'POST',
			body: data,
		};
		try {
			var res = await fetch(url,requestOptions);
			console.log(res);
			/*
			updateSignups();
			*/
		} catch (err) {
			console.log(`********`);
			window.alert(`Algo salio mal: ${err.message}`)
		}
		borrar();
    }
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
		<!--
		<p>Documento:<input id="files" type="file" bind:files={files}></p>
		<select name="avatar" bind:value={avatar}>
			<option value="1">Guindilla
				<img src="/home/chus/Cliente_proveedor/API/img/appetite-1238240_1920.jpg">
			</option>
			<option value="2">Manzana
				<img src="/home/chus/Cliente_proveedor/API/img/apple-1506119_1920.jpg">
			</option>
			<option value="3">Moras
				<img src="/home/chus/Cliente_proveedor/API/img/blackberries-1539540_1920.jpg">
			</option>
			<option value="4">Cerezas
				<img src="/home/chus/Cliente_proveedor/API/img/cherries-158241_1280.png">
			</option>
			<option value="5">Zanahorias
				<img src="/home/chus/Cliente_proveedor/API/img/isolated-1083235_1920.png">
			</option>
			<option value="6">Setas
				<img src="/home/chus/Cliente_proveedor/API/img/mushroom-389421_1920.jpg">
			</option>
			<option value="7">Cebollas
				<img src="/home/chus/Cliente_proveedor/API/img/onion-3089199_1920.jpg">
			</option>
			<option value="8">Lechuga
				<img src="/home/chus/Cliente_proveedor/API/img/salad-2114149_1920.jpg">
			</option>
			<option value="9">Fresa
				<img src="/home/chus/Cliente_proveedor/API/img/strawberry-2293337_1920.jpg">
			</option>
		</select>
		-->
    </div>
    <button on:click={enviar}>Enviar</button>	<!--con el nombre de la función es suficiente-->
	<!--button on:click={borrar}>Borrar</button-->
	<!--
	<div>
		<h2>Ficheros subidos:</h2>
		<div>
			{#each uploads as file}
			<a href="http://localhost:3000/api/ficheros/?file={file.name}"><p><strong>{file.oldName}</strong> {file.mime}</p></a>
			{/each}
		</div>
	</div>
	-->
</main>

<style>
@font-face{
	font-family: 'Milestone';
	src: url('../Milestone/MilestoneFreeVersion-Script.otf')
	}
p{
	font-family: 'Milestone';
	color: rgb(48, 2, 2);
	font-size: large;
	font-style: oblique;
	text-align: center;
}
input{
    font-family: 'Milestone';
	border-radius: 50px;
	border-color: rgb(48, 2, 2);
	margin-left: 10px;
}
</style>