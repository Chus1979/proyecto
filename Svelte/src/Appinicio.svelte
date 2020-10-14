<script>
	//import AppUsuarios from './AppUsuarios.svelte';
	//import AppUsuarios from './Appclientes.svelte';
    import AppaltaUsuario from './AppaltaUsuario.svelte';
    import Login from './Login.svelte';
    /*
    var pag = 'Appclientes';
    function setPage(pageName) {
        pag = pageName;
    }
    */
</script>

<main> 
        <AppaltaUsuario/>
        <Login/>
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