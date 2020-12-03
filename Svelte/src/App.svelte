<script>

	import Terminar from './Terminar.svelte'
	import Bienvenida from './Bienvenida.svelte';
    import Appinicio from './Appinicio.svelte';
    import Appentrada from './Appentrada.svelte';
    import Mercado from './Mercado.svelte';
    import Altaproductos from './Altaproductos.svelte';
    import Avatar from './Avatar.svelte';
    import Confirmar from './Confirmar.svelte';

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
                    <Confirmar bind:carrito bind:seccion={seccion} bind:userId={userId}/>
                    {/if}
                    {#if seccion === "terminar"}
                    <Terminar bind:seccion={seccion} bind:userId={userId}/>
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

h1{
    margin-top:0px;
	font-family: 'Artifika-Regular.ttf';
    text-align: center;
    color: greenyellow;
	font-size: 150px;
    text-decoration: rgb(62, 107, 156);
	position: static;
	text-shadow: -3px -3px 3px #0000DF, 3px -3px 3px #0000DF, -3px 3px 3px #0000DF, 3px 3px 3px #0000DF;
}
h2{
	text-align: center;
    color:rgb(12, 236, 243);
    font-family: 'Gabriela-Regular.ttf';
	font-size: 60px;
	text-decoration-color: rgb(2, 29, 80);
	margin-bottom: 150px;
	letter-spacing: 0;
	text-shadow: -3px -3px 3px #0000DF, 3px -3px 3px #0000DF, -3px 3px 3px #0000DF, 3px 3px 3px #0000DF;
}
</style>