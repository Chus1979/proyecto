<script>
    var listadoClientes = [];
    //import eliminarUsuario from `./borrar/?id=${id}`;

    /*
    async function eliminarUsuario(id) {
		var getEliminarUsuarioURL = `http://localhost:3000/eliminarUsuario/?id=${id}`;
		var resp = await fetch(getEliminarUsuarioURL);
		listadoClientes = await resp.json();
		getModificarDoc();
       }
    */

    async function getListadoCli(){
        console.log(listadoClientes)
        var getListadoCliURL = 'http://localhost:3000/listadoCli/';
        var resp = await fetch(getListadoCliURL);
        listadoClientes = await resp.json();
        //eliminarUsuario(id);
    }

    getListadoCli();
</script>

<main>
    <h2>Cliente:</h2>
    <div id="listadoClientes">
        <ul>
        {#each listadoClientes as cliente}<!--para borrarse del listado-->
        <li>
            {cliente.txt}
            <!--
            <button on:click={eliminarUsuario(cliente._id)}>X</button>
            -->
        </li>
        {/each}
        </ul>
    </div>
</main>