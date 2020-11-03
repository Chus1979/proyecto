<script>
    //import Appcarro from './Appcarro.svelte';
    export var userId;
    export var carrito;
    export var total;
    export var seccion;
    
    /*async function gastosProduc(idx){
       var precio = carrito[idx].precio;
       var cant = parseFloat(carrito[idx].cantidad); 
       carrito[idx].subTotal = precio*cant;  //carrito es donde guardamos todos los datos que nos hace falta
    };
    
    function Total(){ 
        var total = 0;
        carrito.forEach(producto => {       //Creamos var total para q el svelte se actualice
            total += producto.subTotal;
        });
       return total;
    };*/
    async function terminar(){
        seccion = "terminar";
    }
</script>
<main>
    <table>
        <thead>
            <tr>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Total Producto(€)</th>
            </tr>
        </thead>
        <tbody>
            {#each carrito as carro}
                
            <tr>
                <td>{carro.producto}</td>
                <td>{carro.cantidad}</td>
                <td>{carro.subTotal}€</td>
            </tr>
            {/each}
            <tr>
                <td>Total Compra:</td>
                <td>{total}€</td>
            </tr>
        </tbody>
    </table>
    <p>{userId}</p>
    <button on:click={terminar}>Terminar</button>
</main>
<style>
    table{
        font-family: 'ZCOOLXiaoWei-Regular.ttf';
        color: rgb(0, 139, 23);
        background-color: darkblue;
        font-size: 25px;
    }
</style>
