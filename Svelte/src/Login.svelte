<script>
	//import Avatar from "./Avatar.svelte";

    export var seccion; 
    export var userId;
    var telefono;
    //var nick;
    var clave;
    var resultado;
    
    $: seccion="inicio";

    console.log(seccion);

    async function borrar(){
        clave=telefono=null; 
    }

    async function Login(){
        var url = `http://localhost:3000/login/?nick=${telefono}&clave=${clave}`;
        var data = new FormData();//los data.append deben ser= a los inputs
		data.append('telefono',telefono);
        data.append('clave',clave);
        console.log(data);
        var requestOptions = {
				method: 'POST',
				body: data,
            };
        var res = await fetch(url,requestOptions);
		resultado = await res.text();
        console.log(resultado);
        userId = resultado;
        console.log(userId);
        borrar();
    }
    async function regresar(){
        userId = null;
        seccion = "inicio";
    };
    /*async function cambiopws(){
        seccion = "cambiopws";
    }*/

</script>

<main>
    <div>
        <h2 id="arriba">Si ya te diste de alta...</h2>
            <p>Telefono.- <input id="telefono" type="text" placeholder="Completa este campo" bind:value={telefono} required></p><br>
            <p>Clave.- <input id="clave" type="password" placeholder="Escribe tu clave para poder acceder" bind:value={clave} required></p>
            <!--p>Avatar:<Avatar bind:nick={nick}/></p-->
    <button id="login" on:click={Login}>Enviar</button>
    <button id="regresar" on:click={regresar}></button>
    </div>
    
</main>

<style>

div{
    font-family: 'Marmelad-Regular.ttf';
    text-align: right;
    font-size: 40px;
    color:rgb(13, 5, 71);
    top:0;
	bottom: 0;
	left: 0;
	right: 0;
}
input{
    font-family: 'Marmelad-Regular.ttf';
    font-size: 30px;
    color:rgb(13, 5, 71);
    background-color: rgb(86, 169, 169);
    text-align: center;
    margin-right: 0px;
}
h2{
  text-align: center;
  margin-left: 200px;
}
#arriba{
    margin-bottom: 0px;
}
button#login{
   display: block;
}
#regresar{
    float: left;
}
</style>