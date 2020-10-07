<script>
	import Appclientes from './Appclientes.svelte';
    import AppaltaUsuario from './AppaltaUsuario.svelte';
    var pag = 'Appclientes';
    function setPage(pageName) {
        pag = pageName;
    }
</script>

<main> 
    <!--meta http-equiv="content-type" content="text/html; charset=utf-8" /--><!--daba un fallo donde decia q lo escrito se consideraria basura-->
	<h1>Bienvenidos a:</h1>
        <h2>"De la Tierra a tu Casa"</h2>
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
            
</main>

<style>
	@font-face{
    text-decoration: rgb(62, 62, 156);
    font-size: x-large; 
    font-family: 'satisfy';
    src: url ('/home/chus/Cliente_proveedor/Satisfy');
}
h1{
    text-align: center;
    color:lightseagreen;
    font-family: 'satisfy';
    font-size: xx-large;
    text-shadow: 4px 4px 4px rgb(7, 87, 114);
    text-underline-position: auto;
}
h2{
	text-align: center;
    color:lightseagreen;
    font-family: 'satisfy';
    font-size: 60px;
    text-underline-position: auto;
}
h3{
	text-align: center;
    color:lightseagreen;
    font-family: 'satisfy';
    font-size: xx-large;
    text-underline-position: auto;
}
button {
    text-align: center;
    font-style: oblique;
    font-family:'satisfy';
    display: inline-block;
    border-radius: 70%;
    text-shadow:10px 10px 10px rgb(67, 202, 134);
    background: lightseagreen;
    text-decoration-color:darkseagreen;
    padding: 10px;
    font-size: 20px;
    color: rgb(70, 110, 90);
    margin-left: auto;
}
button:hover {
padding: 30px;
background: blue;
}
</style>