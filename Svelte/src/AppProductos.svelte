<script>
	//import Mercado from './Mercado.svelte';
    import Appcarro from './Appcarro.svelte';

    export var userId;
    export var seccion;
    var listadoProduc = [];
    export var carrito = [];

    async function getlistadoProduc(){
        var getlistadoProducURL =  'http://localhost:3000/listadoProduc/';
        var resp = await fetch(getlistadoProducURL);
        listadoProduc = await resp.json();
    }
    getlistadoProduc();
    async function borrar(idx){
        listadoProduc[idx].cantidad = '';
    }

    async function gastosProcuc(idx){
       var precio = listadoProduc[idx].precio;
       var cant = parseFloat(listadoProduc[idx].cantidad); 
       listadoProduc[idx].subTotal = precio*cant; 
    }

    async function carro(idx){
        gastosProcuc(idx);
        carrito = [...carrito, listadoProduc[idx]];//es para que active el array cada vez q se le añade algo nuevo
    }
    
</script> 
   <table class="tablaMercado">
    <thead>
        <tr>
            <th>Producto</th>
            <th>Precio(€)</th>
            <th>Unidades</th>
            <th>Stock</th>
            <th>Cantidad</th>
        </tr>
    </thead>
    <tbody >
    {#each listadoProduc as producto, idx}
        <tr>
            <td>{producto.producto}</td>
            <td>{producto.precio}</td>
            <td>{producto.unidades}</td>
            <td>{producto.stock}</td>
            <td><input id="cantidad" type="number" bind:value={listadoProduc[idx].cantidad}>
                <button id="borrar" on:click={()=>{borrar(idx)}}>Borrar</button>
                <button id="carro" on:click={()=>{carro(idx)}}>Carro</button>
            </td>
        </tr>
    {/each}
    </tbody>
    </table>
    <div class="carro">
        <Appcarro bind:seccion={seccion} bind:userId={userId} bind:carrito={carrito}/>
    </div>

<style>

button#borrar{
    display: inline-flex;
    font-size: 20px;
}
button#carro{
    margin-left: 30px;
    font-size: 20px;
   
}

input#cantidad{
	font-family: 'ZCOOLXiaoWei-Regular.ttf';
	font-size: 30px;
	border-radius: 50px;
	border-color: rgb(1, 250, 84);
	color:rgb(9, 53, 13);
    background-color: rgba(73, 158, 52, 0.693);
    width: 150px;
    margin-left: initial;
}
</style>