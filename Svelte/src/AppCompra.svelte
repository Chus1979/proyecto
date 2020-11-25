<script>
	import Avatar from './Avatar.svelte';
    //import Appcarro from './Appcarro.svelte';
    
    export var userId;
    export var carrito;
    export var total;
    export var seccion;
    export var nick;

    $:total= Total(carrito);

    async function confirmar(){
        seccion = "confirmar";
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
    async function Nick(){
     seccion="nick";
 };
</script>

<main>
    <div>
        <Avatar bind:nick={nick} on:click={Nick}/>
        <p class="p">{userId.nick}</p>
    </div>
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
            <tr class="td">
                <td colspan={2}>Total Compra:</td>
                <td>{total}€</td>
            </tr>
        </tbody>
    </table>
    </div>
    <button id="confirmar"on:click={confirmar}>Siguiente</button>
    <button id="empezar" on:click={empezar}>Salir</button>
</main>

<style>

.p{
    font-size: 60px;
    color:rgb(9, 240, 9);
    text-align: center;
}
div.liscompra{
    text-align:center;
    background-color: rgba(95, 54, 191, 0.528);
    float: left;
    border-color:rgb(1, 250, 84);;
    color:rgb(1, 250, 84);
}
table{
        font-family: 'ZCOOLXiaoWei-Regular.ttf';
        color: rgb(125, 255, 125);
        font-size: 25px;
    }
p{
     font-family: 'Balsamiq-Regular.ttf';
     font-size: 35px;
     text-align: center;
     color:rgb(7, 248, 55);
     margin-bottom: 25px;
}
.td{
    font-family: 'ZCOOLXiaoWei-Regular.ttf';
    color: rgb(55, 0, 252);
    font-size: 25px;
    margin-top:25px;
}
#confirmar{
   display:inline;
}
#empezar{
    display:inline;
}
</style>
