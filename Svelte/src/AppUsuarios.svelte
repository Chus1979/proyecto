<script>
	import Appentrada from './Appentrada.svelte';
    var listadoUsuarios = [];
    //import eliminarUsuario from `./borrar/?id=${id}`;

    /*
    async function eliminarUsuario(id) {
		var getEliminarUsuarioURL = `http://localhost:3000/eliminarUsuario/?id=${id}`;
		var resp = await fetch(getEliminarUsuarioURL);
		listadoClientes = await resp.json();
		getModificarDoc();
       }
    */

    async function getListadoUsuarios(){
        var getListadoUsuariosURL = 'http://localhost:3000/listadoUsuarios/';
        var resp = await fetch(getListadoUsuariosURL);
        listadoUsuarios = await resp.json();
        console.log(listadoUsuarios)
        //eliminarUsuario(id);
    }
     getListadoUsuarios();
</script>

<main>
    <!--de momento queda vacio-->
    <Appentrada/>
</main>