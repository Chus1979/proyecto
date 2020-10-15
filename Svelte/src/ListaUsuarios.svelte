<script>
    var usuarios = [];
    
    async function getListadoUsuarios(){
        var getListadoUsuariosURL = `http://localhost:3000/listadoUsuarios/`;
        var resp = await fetch(getListadoUsuariosURL);
        usuarios = await resp.json();
    }
    getListadoUsuarios()
</script>

<div class = "Usuarios">
    {#each usuarios as usuario}
    <p>{usuario.nick}</p>
    {/each}
</div>