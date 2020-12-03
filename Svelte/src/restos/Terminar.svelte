<script>
	import Avatar from './Avatar.svelte';

    export var seccion;
    export var userId;
    export var nick;

$:seccion = "confirmar";
$:nick = userId.nick;

async function empezar(){
        userId = null;
        seccion = "inicio";
 };
async function mandarAviso(){
        seccion = "mandarAviso";
};
async function avatar(){
    nick = userId.nick;
    seccion = "nick";
};
/*
if(userId=true){
   usuario =JSON.stringify(userId);
    console.log(usuario)
}else{
    userId.forEach(usuario=>{
        usuario = usuario.nombre;
    });
   
};*/
</script>

<main>
    <div>
        <Avatar bind:nick={nick} on:click={avatar}/>
        <p class="p">{userId.nick}</p>
    </div>
    <h2>Termina de rellenar este formulario.-</h2>
    <div class="datos">
        <p class="nomb">Nombre:{userId.nombre}</p>
        <p class="telefono">Teléfono:{userId.telefono}</p>
        <p class="email">Email:{userId.email}</p>
        <textarea class="direccion" placeholder="Escribe aquí tu dirección de envio" required>Dirección:</textarea>
    </div>
    <button id="mandarAviso" on:click={mandarAviso}>Terminar</button>
    <button id="empezar" on:click={empezar}>Inicio</button>
</main>

<style>
.p{
    font-size: 60px;
    color:rgb(9, 240, 9);
    text-align: center;
    text-shadow: -3px -3px 3px #0000DF, 3px -3px 3px #0000DF, -3px 3px 3px #0000DF, 3px 3px 3px #0000DF;
}
div{
    text-align: center;
    font-size: 50px;
    color:rgb(3, 95, 26);
    float: right;
 }
textarea { 
    width: 100%;
    height: 200px;
    border-radius:0%;
    text-align: center;
    font-size: 50px;
    color:rgb(4, 60, 1);
    background-color: rgba(36, 150, 59, 0.474);
    font-family: 'Ruluko-Regular.ttf';
}
button#mandarAviso {
	float: right;
	margin-left: 60%;
}
h2{
	text-align: center;
    color:rgb(12, 236, 243);
    font-family: 'Gabriela-Regular.ttf';
	font-size: 60px;
	text-decoration-color: rgb(2, 29, 80);
	margin-bottom: 150px;
	letter-spacing: 0;
	text-shadow: -3px -3px 3px #0000DF, 3px -3px 3px #0000DF, -3px 3px 3px #0000DF, 3px 3px 3px #0000DF;
}
.datos{
    float: left;
    font-family: 'Ruluko-Regular.ttf';
}
p{
    text-align: left;
    font-family: 'Ruluko-Regular.ttf';
}
.telefono{background-image: url'(../img/telefono_antiguo.jpeg)'; widows: 30%; height: 30%;}
.email{background-image: url'(../img/Correo_electrónico.png)';widows: 30%; height: 30%;}
.direccion{background-image: url'(../img/sobre_carta.png)';widows: 30%; height: 30%;}

</style>