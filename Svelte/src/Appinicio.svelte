<script>
    import AppaltaUsuario from './AppaltaUsuario.svelte';
    import Login from './Login.svelte';
    import ListaUsuarios from './ListaUsuarios.svelte';
    import Appentrada from './Appentrada.svelte';
	//import Mercado from './Mercado.svelte';
	
    //import Altaproductos from './Altaproductos.svelte';
    
    //import ApplistadoProduc from './ApplistadoProduc.svelte';
    
    
    var userId;
    /*
    var pag = 'Appclientes';
    function setPage(pageName) {
        pag = pageName;
    }
    */
    /*Todo está puesto en esta pag para ver si funciona 
    luego hare los arreglos pertinentes*/
</script>

<main> 
        <AppaltaUsuario/>
        <Login bind:userId = {userId}/>
        <ListaUsuarios/>
        <Appentrada bind:userId = {userId}/>
       <!-- <Mercado bind:userId = {userId}/>
        <Altaproductos userId = {userId}/>
        <ApplistadoProduc userId = {userId}/>-->
    <!--
        <nav>
			<h3>Si eres nuevo recuerda inscribirte</h3>
				<button on:click={()=>{setPage('AppaltaUsuario')}}>
					Alta Usuario
				</button>
			<h3>Si ya nos conoces, pasa es tu casa</h3>
				<button on:click={()=>{setPage('Appclientes')}}>
					Clientes
				</button>
        </nav>
        <div>
        {#if pag === 'Appclientes'}
            <Appclientes/>
        {:else if pag === 'AppaltaUsuario'}

        <AppaltaUsuario/>
        {/if}				
        </div>
    -->
            
</main>

<style>
	
</style>