<script>
	//import Mercado from './Mercado.svelte';
    import Appcarro from './Appcarro.svelte';
  
    export var userId;
    //export var seccion;
    var listadoProduc = [];
    var carrito = [];

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
       listadoProduc[idx].subTotal = precio*cant;                 //tengo dudas p lo de carrito que ahora es una var
    }

    async function carro(idx){
        gastosProcuc(idx);
        carrito = [...carrito, listadoProduc[idx]];//es para que active el array cada vez q se le añade algo nuevo
    }
    
</script>
<p>{userId}</p>

{#each listadoProduc as producto, idx}
        <tr>
            <td>{producto.producto}</td>
            <td>{producto.precio}</td>
            <td>{producto.unidades}</td>
            <td>{producto.stock}</td>
            <td><input id="cantidad" type="number" bind:value={listadoProduc[idx].cantidad}>
            <button on:click={()=>{borrar(idx)}}>Borrar</button>
            <button on:click={()=>{carro(idx)}}>Carro</button>
            </td>
        </tr>
{/each}
<Appcarro bind:carrito = {carrito}/>

<style>
@font-face{
    font-family: "ZCOOLXiaoWei-Regular.ttf";
    src: url("../ZCOOL_XiaoWei/ZCOOLXiaoWei-Regular.ttf");
}
td{
    font-size: 30px;
    text-align: center;
    font-family: "ZCOOLXiaoWei-Regular.ttf";
}
</style>