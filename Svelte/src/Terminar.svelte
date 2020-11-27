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
async function avatar(){
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
   
        <p class="nomb">Nombre:{userId.nombre}</p>
        <p class="telefono">Teléfono:{userId.telefono}</p>
        <p class="email">Email:{userId.email}</p>
        <textarea class="direccion" placeholder="Escribe aquí tu dirección de envio" required>Dirección:</textarea>
 
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

p{
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
</style>