<script>
    /*Pag intermedia para acceder al mercado o a ampliar la BD de productos*/
	import Mercado from './Mercado.svelte';
    import Altaproductos from './Altaproductos.svelte';
    
    export var seccion;
    export var userId;


    async function mercado () {
        seccion = "mercado";       
    };
    async function productos () {
        seccion = "productos";       
    };
</script>

<main>

        <button id="mercado" on:click={mercado}>Mercado</button>
        <button id="productos" on:click={productos}>Alta Productos</button>

</main>

<style>
button#mercado{
    margin-left: 40%;
}
button#productos{
    margin-left: 60%;
}
button#regresarM{
    background-image:url(./iconos/arrow-go-back-fill.svg);
    padding: 20px;
    border-radius: 80%;
    background-repeat:no-repeat;
    height:70px;
    width:70px;
    background-position:center;
    margin-left: 40%;
}
button#regresarP{
    background-image:url(./iconos/arrow-go-back-fill.svg);
    padding: 20px;
    border-radius: 80%;
    background-repeat:no-repeat;
    height:70px;
    width:70px;
    background-position:center;
    margin-left: 60%;
}
</style>
