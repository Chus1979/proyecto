<script>
    /*Pag intermedia para acceder al mercado o a ampliar la BD de productos*/
	import Mercado from './Mercado.svelte';
    import Altaproductos from './Altaproductos.svelte';
    
    export var seccion;
    export var userId;


    async function mercado () {
        seccion = "mercado";       
    };
    async function altaproduc () {
        seccion = "altaproduc";       
    };
</script>

<main>
{userId}
        <button id="mercado" on:click={mercado}>Mercado</button>
        <button id="altaproduc" on:click={altaproduc}>Alta Productos</button>

</main>

<style>
button#mercado{
    margin-left: 40%;
}
button#altaproduc{
    margin-left: 60%;
}

</style>
