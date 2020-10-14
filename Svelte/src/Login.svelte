<script>
import PerfilUsuario from "./PerfilUsuario.svelte";


    var listadoUsuarios = [];
    var nick,  clave
    async function borrar(){
        var nick=clave='';
    }

    async function getLogin(){
        var getLoginURL = 'http://localhost:3000/Login';
        var resp = await fetch(getLoginURL);
        listadoUsuarios = await resp.json();
        if(nick===nick && clave===clave ){
            resp.send(PerfilUsuario);
            return 'bienvenido '
        }else{
            resp.send('false');
            return 'intentalo de nuevo'
            borrar();
        }
    }

</script>
<main>
    <div>
        <input id="nick" type="text" placeholder="Completa este campos" bind:value={nick}>
        <input id="clave" type="password" placeholder="Escribe tu clave para poder acceder" bind:value={clave}>
        <button on:click={getLogin}>Enviar</button>
    </div>
</main>
<style>

</style>