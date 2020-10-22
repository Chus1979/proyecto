<script>
    import AppProductos from "./AppProductos.svelte";
    /**
    De momento no pongo nada en el index pq estoy usando la BD de produc. y ya está creada
    Estoy usando la funcion del listado para poder ver la BD, ya q se guarda en el array 
    listado productos.
    En el html pondré aspento de tabla para q sea más sencillo de ver para el usuario*/
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
    <p>{userId}</p>
    <table class="tablaMercado">
        <thead>
            <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th>Unidades</th>
                <th>Stock</th>
                <th>Cantidad</th>
            </tr>
        </thead>
        <tbody >
             <AppProductos/>
        </tbody>
    </table>
</main>

<style>
    table.tablaMercado {
        background: rgba(128, 255, 0, 0.3);
        border: 1px solid rgba(100, 200, 0, 0.3);
    }
</style>