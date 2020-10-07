<script>
    
    var txt = '';
	var listadoProveedor = [];
	var altaProv = [];
    //var files;
		
	var proveedor,nifCif, email, clave, producto, precio
	
    async function borrar(){txt=''};
	async function getNuevoProv(txt){
		var getNuevoProvURL = `http://localhost:3000/nuevoProv/?texto=${txt}`;
		var resp = await fetch(getNuevoProvURL);
		listadoProveedor = await resp.json();
		enviar();
		borrar();
    }
    async function enviar() {
		var url = 'http://localhost:3000/api/altaprov/'
		var data = new FormData();
		data.append('proveedor', proveedor);
		data.append('producto', producto);
		data.append('nifCif',nifCif);
		data.append('email',email);
		data.append('precio', precio);
		data.append('clave',clave);
		var requestOptions = {
			method: 'POST',
			body: data,
		};
		try {
			var res = await fetch(url,requestOptions);
			console.log(res);
			/*updateSignups();*/
		} catch (err) {
			console.log(`********`);
			window.alert(`Algo salio mal: ${err.message}`)
        }
    }
	export async function eliminarUsuario(id) {
		var getEliminarURL = `http://localhost:3000/borrar/?id=${id}`;
		var resp = await fetch(getEliminarURL);
		listadoProveedor = await resp.json();
   	}
	async function getListadoProv(){
		console.log(listadoProveedor)
		var getListadoProvURL = 'http://localhost:3000/listadoProv/';
		var resp = await fetch(getListadoProvURL);
		listadoProveedor = await resp.json();
		getModificarProv();
	}
	async function getModificarProv(){
		var getModificarProvURL = 'http://localhost:3000/modificarProv/';
		var resp = await fetch(getModificarProvURL);
		listadoProveedor = await resp.json();
		borrar();
	}
	/*async function updateSignups () {
        var url = 'http://localhost:3000/api/listFiles/';
        var resp = await fetch(url);
		altaProv = await resp.json();
		eliminarUsuario(id)
	};*/
    getListadoProv();
	//updateSignups();
</script>

<main>
	<div id="nuevoProveedor">
		<h2>Nuevo Proveedor.-</h2>
		<p>Proveedor:<input id="proveedor" type="text" bind:value={proveedor}></p>
		<p>N.I.F./C.I.F.:<input id="nifCif" type="text" bind:value={nifCif}></p>
		<p>Email:<input id="email" type="email" bind:value={email}></p>
		<p>Contraseña:<input id="clave" type="password" bind:value={clave}></p>        
    </div>

    <button on:click={()=>{enviar()}}>Enviar</button>
	<!--button on:click={borrar}>Borrar</button-->
	<!--
	<div>
		<h2>Ficheros subidos:</h2>
		<div>
			{#each altaProv as file}
			<a href="http://localhost:3000/api/ficheros/?file={file.name}"><p><strong>{file.oldName}</strong> {file.mime}</p></a>
			{/each}
		</div>
	</div-->
</main>

<style>
</style>