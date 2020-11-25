<script>

    /*Pag intermedia para acceder al mercado o a ampliar la BD de productos*/
   // import AppaltaUsuario from './Mercado.svelte';
   // import Login from './Login.svelte'
    import Avatar from "./Avatar.svelte";

    export var seccion;
    export var userId;
    export var nick;

    async function mercado () {
        seccion = "mercado";       
    };
    async function altaproduc () {
        seccion = "altaproduc";       
    };
    async function inicio(){
        seccion = "inicio";
        userId = null;
    }
    async function Nick(){
     seccion="nick";
     userId.nick;
    };
</script>

<main>
        <div class="avatar">
            <Avatar bind:nick={nick} on:click={Nick}/>
            <p class="p">{userId.nick}</p>
        </div>
        <div class="botonentrada">
        <button id = "inicio" on:click={inicio}>Inicio</button>
        <button id="mercado" on:click={mercado}>Mercado</button>
        <button id="altaproduc" on:click={altaproduc}>Alta Productos</button>
        </div>
</main>

<style>
.p{
    font-size: 80px;
    color:rgb(94, 255, 94);
    text-align: center;
    text-shadow: -3px -3px 3px #0000DF, 3px -3px 3px #0000DF, -3px 3px 3px #0000DF, 3px 3px 3px #0000DF;
}
div.botonentrada{
    display: inline-flex;
    margin-left: -400px;
}
#inicio{
    float: left;
}
button#mercado{
    margin-left:200px;
}
button#altaproduc{
   margin-left: 300px;
}
</style>
