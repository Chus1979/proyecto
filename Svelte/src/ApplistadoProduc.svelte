<script>
    export  var userId;
    var listadoProduc = [];

    async function getlistadoProduc(){
        var getlistadoProducURL =  'http://localhost:3000/listadoProduc/';
        var resp = await fetch(getlistadoProducURL);
        listadoProduc = await resp.json();
    }
    getlistadoProduc();
</script>
<main>
    <div class = "productos">
        {#each listadoProduc as producto}
        <p>{producto.producto} {producto.precio}{producto.unidades}{producto.stock}{userId}</p>    
        {/each}
    </div>
</main>