<script>
    /*Pag intermedia para acceder al mercado o a ampliar la BD de productos*/
	//import Mercado from './Mercado.svelte';
    //import Altaproductos from './Altaproductos.svelte';
    import Avatar from './Avatar.svelte';
    
    export var seccion;
    export var userId;
    export var nick;
    var avatarURL;

    $: avatarURL = `https://avatars.dicebear.com/api/initials/${nick}.svg?options[backgroundcolor]=#0000ff)`;

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
</script>

<main>
    <head>
        <Avatar bind:nick = {nick}/>
        {userId}
    </head>

        <div class="botonentrada">
        <button id = "inicio" on:click={inicio}>Inicio</button>
        <button id="mercado" on:click={mercado}>Mercado</button>
        <button id="altaproduc" on:click={altaproduc}>Alta Productos</button>
        </div>
</main>

<style>
    
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
