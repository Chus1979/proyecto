<script>
	//import Confirmar from './Confirmar.svelte';
	import Terminar from './Terminar.svelte';
	import AppCompra from './AppCompra.svelte';
	//import Appcarro from './Appcarro.svelte';
	//import AppProductos from './AppProductos.svelte';
	import Bienvenida from './Bienvenida.svelte';
    import Appinicio from './Appinicio.svelte';
    import Appentrada from './Appentrada.svelte';
    import Mercado from './Mercado.svelte';
    import Altaproductos from './Altaproductos.svelte';
    import Avatar from './Avatar.svelte';
    import { bind } from 'svelte/internal';

    var seccion = "bienvenida";
    var userId = null;
    var carrito = []
    var nick;
       
</script>

<main>
    <div class="app" >
        <head>
            <meta name="viewport" content="width=device-width">
        </head>
        <body>
            <h1>MiMercado.es</h1>
                <h2>Del productor a tu Casa</h2>  
                
                {#if userId} 
                    {#if seccion === "nick"}
                    <Avatar bind:seccion={seccion} bind:nick={nick}/>
                    {/if} 
                    {#if seccion === "entrada"}
                    <Appentrada bind:seccion={seccion} bind:userId={userId}/>
                    {/if}
                    {#if seccion === "altaproduc"}
                    <Altaproductos bind:seccion={seccion} bind:userId={userId}/>
                    {/if}
                    {#if seccion === "mercado"}
                    <Mercado bind:carrito bind:seccion={seccion} bind:userId={userId}/>
                    {/if}
                    {#if seccion === "comprar"}
                    <AppCompra bind:carrito bind:seccion={seccion} bind:userId={userId}/>
                    {/if}
                    {#if seccion === "confirmar"}
                    <Terminar bind:carrito bind:seccion={seccion} bind:userId={userId}/>
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

</style>