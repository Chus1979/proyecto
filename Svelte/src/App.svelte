<script>
	import AppCompra from './AppCompra.svelte';
	import Appcarro from './Appcarro.svelte';
	import AppProductos from './AppProductos.svelte';
	import Bienvenida from './Bienvenida.svelte';
    import Appinicio from './Appinicio.svelte';
    import Appentrada from './Appentrada.svelte';
    import Mercado from './Mercado.svelte';
    import Altaproductos from './Altaproductos.svelte';

    var seccion = "bienvenida";
    var userId = null;
        
</script>

<main>

    <div class="app" >
        <head>
            <meta name="viewport" content="width=device-width">
        </head>
        <body>
        <h1>"Food on wheels"</h1>
            <h2>De la huerta a tu Casa</h2>  
            {#if userId}    
                {#if seccion === "entrada"}
                <Appentrada bind:seccion={seccion} bind:userId={userId}/>
                {/if}
                {#if seccion === "altaproduc"}
                <Altaproductos bind:seccion={seccion} bind:userId={userId}/>
                {/if}
                {#if seccion === "producto"}
                <AppProductos bind:seccion={seccion} bind:userId={userId}/>
                {/if}
                {#if seccion === "mercado"}
                <Mercado bind:seccion={seccion} bind:userId={userId}/>
                {/if}
                {#if seccion === "carro"}
                <Appcarro bind:seccion={seccion} bind:userId={userId}/>
                {/if}
                {#if seccion === "comprar"}
                <AppCompra bind:seccion={seccion} bind:userId={userId}/>
                {/if}
            {:else}
                {#if seccion === "bienvenida"}
                <Bienvenida bind:seccion={seccion}/>
                {/if}
                {#if seccion === "inicio"}
                <Appinicio bind:userId={userId} bind:seccion={seccion}/>
                {/if}
            {/if}
        </body>
    </div>
</main>

<style>
@font-face{
    font-family: 'black_chancery';
    src: url('../black_chancery/BLKCHCRY.TTF');
}
div.app{
    font-family:'black_chancery' ;
    background: transparent;
}
</style>