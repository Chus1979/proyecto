<script>
    //import AppCompra from './AppCompra.svelte';
    //import Appentrada from './Appentrada.svelte';

    export var carrito;
    export var userId;
    export var seccion;
    var total = 0       
    $: total = Total(carrito);  //ponemos esto de svelte para que cada vez q cambie el lado dcho. modifique el total
    
   
    async function gastosProduc(idx){
       var precio = carrito[idx].precio;
       var cant = parseFloat(carrito[idx].cantidad); 
       carrito[idx].subTotal = precio*cant;  //carrito es donde guardamos todos los datos que nos hace falta
    };
    async function borrar(idx){
        carrito.splice(idx,1);          //para borrar un elemento  del carrito concreto en JS
        carrito = [...carrito];         //q recorra el array carrito para actualizarlo
    };
    function Total(){ 
        var total = 0;
        carrito.forEach(producto => {       //Creamos var total para q el svelte se actualice
            total += producto.subTotal;
        });
       return total;
    };
    async function comprar(){
        seccion = "comprar";
    }

</script>

<main>
    {userId}
    <table class="carro"> 
        <thead>
            <tr>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Total Producto(€)</th>
            </tr>
        </thead>
        <tbody>
            {#each carrito as carro, idx}
            <tr>
                <td>{carro.producto}</td>
                <td><input id="cantidad" type="number" bind:value={carro.cantidad} on:click={()=>{gastosProduc(idx)}}>
                    <button on:click={()=>{borrar(idx)}}>Borrar</button>
                <td>
                    {carro.subTotal}€
                </td>
            </tr>
            {/each}
            <tr>
                <td class="total">Total Compra:</td>
                <td>{total}€</td>   <!--ponemos la var q es lo q cambia-->
            </tr>
        </tbody>
    </table>
    <button id="comprar" on:click={comprar}>Comprar</button>
    
</main>

<style>
table.carro{
    font-family: "ZCOOLXiaoWei-Regular.ttf";
    background: rgb(248, 102, 102);
    border: 1px solid rgba(100, 200, 0, 0.3);
    width: 100%;
    height: 100%;
    text-align: center;
}
thead{
    font-family: "ZCOOLXiaoWei-Regular.ttf";
    font-size: 25px;
    text-align: center;
}
tbody{
    font-family: "ZCOOLXiaoWei-Regular.ttf";
    font-size: 25px;
    text-align: center;
}
td.total{
    font-family: "ZCOOLXiaoWei-Regular.ttf";
    font-size: 25px;
    color:darkblue;
    border-top: 3px solid darkorchid;
}
input{
    color:chocolate;
    font-family: "ZCOOLXiaoWei-Regular.ttf";
    text-align: center;
}
</style>