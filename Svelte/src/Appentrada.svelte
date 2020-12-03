<script>
    /*Pag intermedia para acceder al mercado o a ampliar la BD de productos*/
    import Avatar from "./Avatar.svelte";

    export var seccion;
    export var userId;
    //export var nick;

    //$:nick;

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
    /*async function avatar(){
        seccion="nick";
        //nick = userId.nick;
    };*/
</script>

<main>
        <div>
            <Avatar bind:nick={userId.nick}/>
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
    margin-left: 50%;
}
button#mercado{
    margin-left:60%;
}
button#altaproduc{
   margin-left: 65%;
}
</style>
