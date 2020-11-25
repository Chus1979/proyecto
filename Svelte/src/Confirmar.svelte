<script>
    //import Appcarro from './Appcarro.svelte';
    import Avatar from './Avatar.svelte';
    
    export var userId;
    export var carrito;
    export var total;
    export var seccion;
    export var nick;

    $:seccion = "confirmar";

    $:total= Total(carrito);

    async function siguiente(){
        seccion = "terminar";
    };
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
       seccion = "nick";
   }
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
            <tr>
                <td colspan={2}>Total Compra:</td>
                <td>{total}€</td>
            </tr>
        </tbody>
    </table>
    </div>
    <p>{userId}</p>
    <button id="siguiente"on:click={siguiente}>Terminar</button>
    <button id="regresar" on:click={empezar}>Inicio</button>
</main>
<style>
    .p{
    font-size: 60px;
    color:rgb(9, 240, 9);
    text-align: center;
}
</style>
