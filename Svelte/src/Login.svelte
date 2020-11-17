<script>

	//import AppaltaUsuario from './AppaltaUsuario.svelte';
    //import Appentrada from "./Appentrada.svelte";
    //import Appinicio from './Appinicio.svelte';
    import Avatar from "./Avatar.svelte";

    export var seccion; 
    export var userId;
    var nick;
    var clave;
    var avatarURL;

    $: avatarURL = `https://avatars.dicebear.com/api/initials/${nick}.svg?options[backgroundcolor]=#0000ff)`;
    $: seccion="inicio";

    console.log(seccion);

    async function borrar(){
        clave=nick=null; 
    }

    async function getLogin(){
        var getLoginURL = `http://localhost:3000/login/?nick=${nick}&clave=${clave}`;
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
        <h2 id="arriba">Si ya eres usuario,</h2><h2 id="abajo">escribe el nick y la clave.-</h2>
            <p>Nick.- <input id="nick" type="text" placeholder="Completa este campos" bind:value={nick}></p><br>
            <p>Clave.- <input id="clave" type="password" placeholder="Escribe tu clave para poder acceder" bind:value={clave}></p>
            <p>Avatar:<Avatar bind:nick={nick}/></p>
    <button id="enlogin" on:click= {getLogin}>Enviar</button>
    </div>
</main>

<style>
div{
    font-family: 'Marmelad-Regular.ttf';
    text-align: right;
    font-size: 40px;
    color:rgb(13, 5, 71);
}
input{
    font-family: 'Marmelad-Regular.ttf';
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
