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
            if (userId===null){
                alert('Algo ha salido mal. Vuelve a intentarlo.');
                await borrar();
            }else{
                seccion = "entrada";
            }
        //borrar();
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
        <h2 id="arriba">Si ya eres usuario,</h2><h3 id="abajo">escribe el telefono y la clave.-</h3>
            <p>Telefono.- <input id="telefono" type="text" placeholder="Completa este campos" bind:value={telefono} required></p>
            <p>Clave.- <input id="clave" type="password" placeholder="Escribe tu clave para poder acceder" bind:value={clave} required></p>
        <button id="enlogin" on:click={Login}>Enviar</button>
        <button id="regresar" on:click={empezar}></button>
    </div>
</main>

<style>
h2{
	text-align: center;
    color:rgb(12, 236, 243);
    font-family: 'Gabriela-Regular.ttf';
	font-size: 60px;
	text-decoration-color: rgb(2, 29, 80);
	margin-bottom: 10%;
	letter-spacing: 0;
	text-shadow: -3px -3px 3px #0000DF, 3px -3px 3px #0000DF, -3px 3px 3px #0000DF, 3px 3px 3px #0000DF;
}
h3{
	text-align: center;
	color:rgb(5, 250, 164);
	text-shadow: 6px 6px 6px rgb(3, 250, 155);
    font-family: 'Gabriela-Regular.ttf';
    font-size: 50px;
	text-underline-position: auto;
	text-decoration-line: underline;
  	text-decoration-style: solid;
	text-decoration-color: rgb(3, 131, 250);
	letter-spacing: 0;
	text-shadow: -3px -3px 3px #0000DF, 3px -3px 3px #0000DF, -3px 3px 3px #0000DF, 3px 3px 3px #0000DF;
}
button {
	float: left;
    margin-left: 40%;
    display:block;
    margin-top: 10%;
}
button#regresar{
    margin-bottom: 10%;
    float:right;
    margin-left: 10%;
    margin-right: 10%;
}
div{
    font-family: 'Ruluko-Regular.ttf';
    text-align: right;
    font-size: 40px;
    color:rgb(13, 5, 71);
    font-weight: 900;
}
input{
    font-family: 'Ruluko-Regular.ttf';
    font-size: 30px;
    color:rgb(13, 5, 71);
    background-color: rgb(5, 250, 164);
    text-align: center;
    border-radius: 50px;
}
#arriba{
    margin-bottom: 0px;
    margin-left: 200px;
}
#abajo{
    margin-left: 200px;
}

</style>
