<script>
   //import eliminarUsuario from `./borrar/?id=${id}`;
   var listadoClientes = [];
   var nick,  clave
   
    /*
    async function entrarSocio(){
        for(listadoClientes as cliente)
            if [(nick===nick)&&(clave===clave)]{
              //debería llevar a la pag de socios donde elegir la compra
              (else)
                <p>Comprueba si el nick y la contraseña son correctas<p>}
    };
    */

</script>
<main>
    <h2>Cliente:</h2>
				<input id="nick" type="text" placeholder="Completa este campos" bind:value={nick}>
				<input id="clave" type="password" placeholder="Escribe tu clave para poder acceder" bind:value={clave}>
                <!--button on:click={entrarSocio()}>Enviar</button-->
			
    <div id="listadoClientes">
        <ul>
        {#each listadoClientes as cliente}<!--para borrarse del listado-->
        <li>
            {cliente.txt}
            <button on:click={eliminarUsuario(cliente._id)}>X</button>
        </li>
        {/each}
        </ul>
    </div>
</main>