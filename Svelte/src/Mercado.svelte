<script>
    /**
    De momento no pongo nada en el index pq estoy usando la BD de produc. y ya está creada
    Estoy usando la funcion del listado para poder ver la BD, ya q se guarda en el array 
    listado productos.
    En el html pondré aspento de tabla para q sea más sencillo de ver para el usuario*/
    export  var userId;
    var listadoProduc = [];
    var cantidad = [];

    async function getlistadoProduc(){
        var getlistadoProducURL =  'http://localhost:3000/listadoProduc/';
        var resp = await fetch(getlistadoProducURL);
        listadoProduc = await resp.json();
    }
    getlistadoProduc();
    async function borrar(idx){
        listadoProduc[idx].cantidad = '';
    }
</script>
<main>
    <p>userId</p>
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
        <tbody style="background: rgba(128, 255, 0, 0.3); border: 1px solid rgba(100, 200, 0, 0.3);">
        {#each listadoProduc as producto, idx}
                <tr>
                    <td>{producto.producto}</td>
                    <td>{producto.precio}</td>
                    <td>{producto.unidades}</td>
                    <td>{producto.stock}</td>
                    <td><input id="cantidad" type="number" bind:value={listadoProduc[idx].cantidad}>
                    <button on:click={()=>{borrar(idx)}}>Borrar</button></td>
                </tr>
        {/each}
         <!--   <tr>
                <th>28/07</th>
                <td>$0,00</td>
                <td>$100,00</td>
                <td>$100,00</td>
                <td>$0,00</td>
            </tr>
            </tbody>
            <tbody style="background: rgba(255, 128, 0, 0.3); border: 1px solid rgba(200, 100, 0, 0.3);">
            <tr>
                <th>09/08</th>
                <td>$0,00</td>
                <td>$50,00</td>
                <td>$0,00</td>
                <td>$80,00</td>
            </tr>
            <tr>
                <th>22/08</th>
                <td>$40,00</td>
                <td>$0,00</td>
                <td>$0,00</td>
                <td>$110,00</td>
            </tr>
            <tr>
                <th>25/08</th>
                <td>$0,00</td>
                <td>$20,00</td>
                <td>$0,00</td>
                <td>$0,00</td>
            </tr>
            </tbody>
            <tfoot>
            <tr>
                <th>Balance</th>
                <td colspan="2">$20,00</td>
                <td colspan="2">$10,00</td>
            </tr>
            </tfoot>-->
        </tbody>
    </table>
</main>