<script>
	import Avatar from './Avatar.svelte';


    export var seccion;
    export var userId;
    export var nick;
//var usuario;
$:seccion = "confirmar";

async function empezar(){
        userId = null;
        seccion = "inicio";
 };
async function mandarAviso(){
        seccion = "mandarAviso";
};
async function Nick(){
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
        <Avatar bind:nick={nick} on:click={Nick}/>
        <p class="p">{userId.nick}</p>
    </div>
    <h2>Termina de rellenar este formulario.-</h2>
   
        <p class="nomb">Nombre: {userId.nombre}</p><br>
        <p class="telefono">{userId.telefono}</p><br>
        <p class="email">{userId.email}</p><br>
        <textarea class="direccion" placeholder="Escribe aquí tu dirección de envio" required></textarea>
 
    <button id="mandarAviso" on:click={mandarAviso}>Terminar</button>
    <button id="empezar" on:click={empezar}>Inicio</button>
</main>
<style>
.p{
    font-size: 60px;
    color:rgb(9, 240, 9);
    text-align: center;
}
p.nomb{
    text-align: center;
    font-size: 50px;
    color:rgb(3, 95, 26);
    float:left;
 }
 textarea { 
    width: 100%;
    height: 200px;
    border-radius:0%;
    text-align: center;
    font-size: 50px;
    color:rgb(4, 60, 1);
    background-color: rgba(36, 150, 59, 0.474);

}
p.telefono{background-image:url('../img/telefono_antiguo.jpeg'); height:70px; width:70px;}
p.email{background-image:url('../img/Correo_electrónico.pnp'); height:70px; width:70px;}
textarea.direccion{background-image:url('../img/sobre_carta.pnp')}
</style>