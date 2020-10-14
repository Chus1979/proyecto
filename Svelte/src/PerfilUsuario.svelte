<script>
    //import Login from './Login.svelte'
    var listadoUsuarios = [];
    async function getModificarDoc(){
    var getModificarDocURL = 'http://localhost:3000/modificarDoc/';
    var resp = await fetch(getModificarDocURL);
    listadoUsuarios = await resp.json();
    }
    async function eliminarTexto(id) {
        var getEliminarTextoURL = `http://localhost:3000/borrar/?id=${id}`;
        var resp = await fetch(getEliminarTextoURL);
        listadoUsuarios = await resp.json();
        getModificarDoc();
    }
    async function getListadoUsuarios(){
        console.log(listadoUsuarios)
        var getListadoUsuariosURL = 'http://localhost:3000/listadoUsuarios/';
        var resp = await fetch(getListadoUsuariosURL);
        listadoUsuarios = await resp.json();
        eliminarTexto(id);
    }
    getListadoUsuarios();
        
</script>

<main>

    
</main>