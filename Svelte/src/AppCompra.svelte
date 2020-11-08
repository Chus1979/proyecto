<script>
    //import Appcarro from './Appcarro.svelte';
    
    export var userId;
    export var carrito;
    export var total;
    export var seccion;

    $:total= Total(carrito);

    async function terminar(){
        seccion = "terminar";
    }
    function Total(x){ 
        var total = 0;
        carrito.forEach(producto => {       //Creamos var total para q el svelte se actualice
            total += producto.subTotal;
        });
       return total;
    };
    async function empezar(){
        userId = null;
        seccion = "inicio";
    };
   
</script>

<main>
    <div class="liscompra">
    <p>Lista de la compra</p>
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
                <td colspan={2}>Total Compra:</td>
                <td>{total}€</td>
            </tr>
        </tbody>
    </table>
    </div>
    <p>{userId}</p>
    <button id="terminar"on:click={terminar}>Terminar</button>
    <button id="empezar" on:click={empezar}>Salir</button>
</main>

<style>
div{
    text-align:center;
    background-color: rgba(109, 109, 172, 0.638);
    float:inline-end;
}
table{
        font-family: 'ZCOOLXiaoWei-Regular.ttf';
        color: rgb(97, 29, 119);
        font-size: 25px;
    }
p{
     font-family: 'Balsamiq-Regular.ttf';
     font-size: 35px;
     text-align: center;
     color:rgb(93, 9, 135);
}
#terminar{
    float:left;
}
#empezar{
    margin-left: 200px;
}
</style>
