<script>
	//import AppaltaUsuario from './AppaltaUsuario.svelte';
    //import Appentrada from "./Appentrada.svelte";
    //import Appinicio from './Appinicio.svelte';
    //import Avatar from "./Avatar.svelte";

    export var seccion; 
    export var userId;
    var telefono;
    var clave;

    $: seccion="inicio";

    async function borrar(){
        clave=telefono=null; 
    };
    async function empezar(){
        userId = null;
        seccion = "inicio";
    };
    async function Login(){
        //var LoginURL = `http://localhost:3000/login/?telefono=${telefono}&clave=${clave}`; No hace falta pq es un POST
        var LoginURL = 'http://localhost:3000/login/';
        var data = new FormData();
        data.append('telefono', telefono);
        data.append('clave', clave);
        var requestOptions = {
            method: 'POST',
            body: data,
        }
        var resp = await fetch(LoginURL,requestOptions);
        userId = await resp.json();
            if (userId!=="false"){
                seccion = "entrada";
            }else{
                alert('Algo ha salido mal. Vuelve a intentarlo.');
                empezar();
            }
        borrar();
    };

    /*async function getlistadoUsuarios(){
        var getlistadoUsuariosURL = 'http://localhost:3000/listadoUsuarios';
        var resp = await fetch(getlistadoUsuariosURL);
        var usuario = await resp.json();
        console.log(usuario);
    }*/
</script>

<main>
    <div>
        <h2 id="arriba">Si ya eres usuario,</h2><h2 id="abajo">escribe el telefono y la clave.-</h2>
            <p>Telefono.- <input id="telefono" type="text" placeholder="Completa este campos" bind:value={telefono} required></p><br>
            <p>Clave.- <input id="clave" type="password" placeholder="Escribe tu clave para poder acceder" bind:value={clave} required></p>
        <button id="enlogin" on:click={Login}>Enviar</button>
        <button id="regresar" on:click={empezar}></button>
    </div>
</main>

<style>

div{
    font-family: 'Ruluko-Regular.ttf';
    text-align: right;
    font-size: 40px;
    color:rgb(13, 5, 71);
}
input{
    font-family: 'Ruluko-Regular.ttf';
    font-size: 30px;
    color:rgb(13, 5, 71);
    background-color: rgb(86, 169, 169);
    text-align: center;
}
h2{
  text-align: center;
}
#arriba{
    margin-bottom: 0px;
    margin-left: 200px;
}
#abajo{
    margin-left: 200px;
}
</style>
