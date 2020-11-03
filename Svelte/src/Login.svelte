<script>
	import AppaltaUsuario from './AppaltaUsuario.svelte';
    import Appentrada from "./Appentrada.svelte";
    import Appinicio from './Appinicio.svelte';

    export var seccion;
    export var userId;
    var nick, clave;

    /*async function inicio(){
        seccion = "inicio";
    }*/
    async function borrar(){
        clave=nick=null; 
    }

    async function getLogin(){
        var getLoginURL = `http://localhost:3000/login/?nick=${nick}&clave=${clave}`;
        var resp = await fetch(getLoginURL);
        userId = await resp.json();
        seccion = "entrada";
        console.log(userId);
        borrar();
        seccion = "entrada";
    }
   //getLogin();
    

</script>

<main>
    <div>
        <h2>Si ya eres usuario, escribe el nick y la clave.-</h2>
        <p>Nick.- <input id="nick" type="text" placeholder="Completa este campos" bind:value={nick}></p><br>
        <p>Clave.- <input id="clave" type="password" placeholder="Escribe tu clave para poder acceder" bind:value={clave}></p>
        <button on:click={getLogin}>Enviar</button>
        
        <p>Usuario que inició sesion: {userId}</p>

        <!--button on:click={inicio}>Inicio</button-->


    </div>
</main>

<style>
p{
    font-family: 'ZCOOLXiaoWei-Regular.ttf';
    text-align: center;
    font-size: 40px;
    color:darkslateblue;
}
input{
    font-family: 'ZCOOLXiaoWei-Regular.ttf';
    font-size: 30px;
    color:darkslateblue;
}
</style>