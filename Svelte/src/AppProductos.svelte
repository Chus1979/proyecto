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
table.tablaMercado {
    font-family: "ZCOOLXiaoWei-Regular.ttf";
    background: rgba(11, 105, 118, 0.357);
    width: 100%;
    height: 100%;
    text-align: center;
    float:left;
    position: relative;
} 
thead{
	font-family:'Gabriela-Regular.ttf';
	font-size: 60px;
	color:rgb(14, 14, 84);
}
td{
    font-size: 35px;
}
input{
	font-family: 'Quicksand-Medium.ttf';
	font-size: 15px;
	padding: 10px;
	margin: 0 0 0.5em 0;
	border-radius: 50px;
	color:rgb(48, 2, 2);
}
input:disabled {
	color:darkolivegreen;
}
button:focus {
	border-color: greenyellow;
}
button {
	float: left;
}
button#borrar{
    font-size: 40%;
}
button#carro{
    font-size: 40%; 
}
input#cantidad{
	font-family: 'ZCOOLXiaoWei-Regular.ttf';
	font-size: 30px;
	border-radius: 50px;
	border-color: rgb(1, 250, 84);
	color:rgb(2, 36, 5);
    background-color: rgb(1, 250, 84);
    width: 100px;
    margin-left: initial;
}
.carro{
    display: flex;
}
</style>