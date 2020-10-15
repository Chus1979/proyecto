<script>
    var userId;
    var nick,  clave
    async function borrar(){
        clave = '';
        nick = '';
    }

    async function getLogin(){
        var getLoginURL = `http://localhost:3000/login/?nick=${nick}&clave=${clave}`;
        var resp = await fetch(getLoginURL);
        userId = await resp.json();
        borrar();
    }

</script>
<main>
    <div>
       <p>Nick.- <input id="nick" type="text" placeholder="Completa este campos" bind:value={nick}></p><br>
       <p>Clave.- <input id="clave" type="password" placeholder="Escribe tu clave para poder acceder" bind:value={clave}></p>
        <button on:click={getLogin}>Enviar</button>
        <p>Usuario que inició sesion: {userId}</p>
    </div>
</main>
<style>
p{
    font-family: 'Milestone';
}
</style>