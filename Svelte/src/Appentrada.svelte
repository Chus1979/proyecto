<script>
    /*Pag intermedia para acceder al mercado o a ampliar la BD de productos*/
	import Mercado from './Mercado.svelte';
    import Altaproductos from './Altaproductos.svelte';
    //export var userId;
    var entrada = null;
    async function regresar () {
        entrada = null;
    }
    async function mercado () {
        entrada = "mercado";       
    };
    async function productos () {
        entrada = "productos";       
    };
</script>

<main>

    {#if entrada === null}
        <button on:click={mercado}>Mercado</button>
    {:else if entrada === 'mercado'}
        <button id="regresar" on:click={regresar}></button>
        <Mercado/>
    {/if}
    {#if entrada === null}    
        <button on:click={productos}>Alta Productos</button>
    {:else if entrada === 'productos'}
        <button id="regresar" on:click={regresar}></button>
        <Altaproductos/>
    {/if}

</main>
<style>
regresar{


}
</style>
