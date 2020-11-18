<script>

	//import AppaltaUsuario from './AppaltaUsuario.svelte';
    //import Appentrada from "./Appentrada.svelte";
    //import Appinicio from './Appinicio.svelte';
    //import Avatar from "./Avatar.svelte";

    export var seccion; 
    export var userId;
    var telefono;
    var clave;
    //var avatarURL;

    //$: avatarURL = `https://avatars.dicebear.com/api/avataaars/${userId}.svg?options[backgroundcolor]=#0000ff)`;
    $: seccion="inicio";

    console.log(seccion);

    async function borrar(){
        clave=telefono=null; 
    }

    async function getLogin(){
        var getLoginURL = `http://localhost:3000/login/?telefono=${telefono}&clave=${clave}`;
        var resp = await fetch(getLoginURL);
        userId = await resp.json();
        //getlistadoUsuarios();
            if (userId!=="false"){
                seccion = "entrada";
            }else{
                alert('Algo ha salido mal. Vuelve a intentarlo.');
                empezar();
            }
        
        console.log(userId);
        borrar();
    }
    /*async function getlistadoUsuarios(){
        var getlistadoUsuariosURL = 'http://localhost:3000/listadoUsuarios';
        var resp = await fetch(getlistadoUsuariosURL);
        var usuario = await resp.json();
        console.log(usuario);
    }*/
    async function empezar(){
        userId = null;
        seccion = "inicio";
    };

</script>

<main>
    <div>
        <h2 id="arriba">Si ya eres usuario,</h2><h2 id="abajo">escribe el telefono y la clave.-</h2>
            <p>Telefono.- <input id="telefono" type="text" placeholder="Completa este campos" bind:value={telefono} required></p><br>
            <p>Clave.- <input id="clave" type="password" placeholder="Escribe tu clave para poder acceder" bind:value={clave} required></p>
            <!--p>Avatar:<Avatar bind:nick={telefono}/></p-->
    <button id="enlogin" on:click= {getLogin}>Enviar</button>
    <button id = "regresar" on:click={empezar}></button>
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
