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
    function Total(x){ 
        var total = 0;
        carrito.forEach(producto => {       //Creamos var total para q el svelte se actualice
            total += producto.subTotal;
        });
       return total;
    };
    async function regresar(){
		seccion = "entrada";
    }
    async function comprar(){
        if (carrito.length) {
            seccion = "comprar";
        } else  {
            alert('No tienes productos seleccionados')
        }
    }
    
</script>

<main>
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
                        <button class = "borrar" on:click={()=>{borrar(idx)}}>Borrar</button>
                    </td>
                    <td>
                        {carro.subTotal}€
                    </td>
                </tr>
            {/each}
                <tr>
                    <td class="total" colspan={2}>Total Compra:</td>
                    <td>{total}€</td>   <!--ponemos la var q es lo q cambia-->
                </tr>
        </tbody>
    </table>
    <div class="botones">
        <button id="comprar" on:click={comprar}>Comprar</button>
        <button id="regresar" on:click={regresar}></button>
    </div>

</main>

<style>

#regresar{
    float: left;
    font-size: 20px;
}
#comprar{
    margin-left: 300px;
    font-size: 40px;
}
.borrar{
    font-size: 20px;
}

input#cantidad{
	font-family: 'ZCOOLXiaoWei-Regular.ttf';
	font-size: 30px;
	border-radius: 50px;
	border-color: rgb(29, 4, 138);
	color:rgb(22, 5, 82);
    background-color: rgba(52, 158, 112, 0.693);
    width: 100px;
}
</style>