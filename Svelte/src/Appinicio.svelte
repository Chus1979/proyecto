<script>
    import AppaltaUsuario from './AppaltaUsuario.svelte';
    import Login from './Login.svelte';
    //import ListaUsuarios from './ListaUsuarios.svelte';
   // import Appentrada from './Appentrada.svelte';
	//import Mercado from './Mercado.svelte';
    //import Altaproductos from './Altaproductos.svelte';
    //import ApplistadoProduc from './ApplistadoProduc.svelte';
    
    export var seccion; //exportamos seccion para poder ir de un fichero a otro y el bind, lo pusimos en el anterior

    export var userId; 
    /** es la 1º vez q se nombra y nos va a hacer falta para el resto del programa
     * Se le hace un bind para copmpartir con el resto de ficheros 
     * hay q acordarse de hacer export var userId cuando lo queramos usar =
     * q el resto de var q necesitemos compartir entre ficheros
     * */
   
</script>

<main> 
        <AppaltaUsuario  bind:userId={userId} bind:seccion={seccion}/>
        <Login bind:userId={userId} bind:seccion={seccion}/>











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