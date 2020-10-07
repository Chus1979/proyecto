<script>
    
    import eliminarTexto from `./borrar/?id=${id}`;
    var listadoProveedores = [];
    var proveedor, clave, 

</script>
<main>
    <h2>Proveedor:</h2>
        <input id="proveedor" type="text" placeholder="Escriba aquí su nombre" bind:value={proveedor}>
        <input id="clave" type="password" placeholder="Escriba aquí su contraseña" bind:value={clave}>
        <button on:click={entraProveedor()}>Entrar en zona privada</button>
    <div id="listadoProveedores">
        <ul>
        {#each listadoProveedores as proveedor}<!--para borrarse del listado-->
        <li>
            {proveedor.txt}
            <button on:click={eliminarTexto(proveedor._id)}>X</button>
        </li>
        {/each}
        </ul>
    </div>
    
</main>