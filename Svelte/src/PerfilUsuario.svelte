<script>
    async function getModificarDoc(){
        var getModificarDocURL = 'http://localhost:3000/modificarDoc/';
        var resp = await fetch(getModificarDocURL);
        listadoClientes = await resp.json();
        borrar();
    }
</script>

<div>
    
</div>