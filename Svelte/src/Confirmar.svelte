<script>
	//import Confirmar from './Confirmar.svelte';
    //import Appcarro from './Appcarro.svelte';
    import Avatar from './Avatar.svelte';
    
    export var userId;
    export var carrito;
    export var total;
    export var seccion;
    //export var nick;

    $:seccion = "comprar";
    $:total= Total(carrito);
    //$:prov= Prov(carrito);
    
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
   /* function Prov(x){
        var prov = "";
        carrito.forEach(producto=>{
          prov = producto.proveedor;
        });
        return prov;
    };*/
    async function empezar(){
        userId = null;
        seccion = "inicio";
    };
  /* async function avatar(){
       seccion = "nick";
   };*/
  
</script>

<main>
    <div>
        <Avatar bind:nick={userId.nick}/>
        <p class="p">{userId.nick}</p>
    </div>
    <div class="confirmarcomp">
        <h3>Lista de la compra</h3>
        <table>
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Total Producto(€)</th>
                    <th>Proveedor</th> <!--modificamos para saber los proveedores-->
                </tr>
            </thead>
            <tbody>
                {#each carrito as carro}                
                <tr>
                    <td>{carro.producto}</td>
                    <td>{carro.cantidad}</td>
                    <td>{carro.subTotal}€</td>
                    <td>{carro.proveedor}</td> <!--la otra zona q cambiamos-->
                </tr>
                {/each}
                <tr>
                    <td class= "total" colspan={2}>Total Compra:</td>
                    <td class="total" >{total}€</td>
                </tr>
            </tbody>
        </table>
        <button id="siguiente"on:click={siguiente}>Terminar</button>
        <button id="regresar" on:click={empezar}></button>
    </div>    
</main>
<style>
.p{
    font-size: 60px;
    color:rgb(9, 240, 9);
    text-align: center;
    text-shadow: -3px -3px 3px #0000DF, 3px -3px 3px #0000DF, -3px 3px 3px #0000DF, 3px 3px 3px #0000DF;
}
h3{
	text-align: center;
	color:rgb(5, 250, 164);
	text-shadow: 6px 6px 6px rgb(3, 250, 155);
    font-family: 'Gabriela-Regular.ttf';
    font-size: 50px;
	text-underline-position: auto;
	text-decoration-line: underline;
  	text-decoration-style: solid;
	text-decoration-color: rgb(3, 131, 250);
	letter-spacing: 0;
	text-shadow: -3px -3px 3px #0000DF, 3px -3px 3px #0000DF, -3px 3px 3px #0000DF, 3px 3px 3px #0000DF;
}
table{
    font-family:'Ruluko-Regular.ttf';
    background-color:rgba(149, 0, 255, 0.364);
    position: relative;
    width: 100%;
    height: 100%;
    padding-top: 1%;
    text-align: center;
    line-height: inherit;
}
thead{
    font-size: 40px;
    color:rgb(32, 32, 111);
}
tbody{
    font-size: 35px;
    color:rgb(8, 8, 151); 
}
.total{
    color:rgb(238, 7, 38);
    text-decoration: solid;
    text-decoration: overline;
}
button#siguiente {
    float: left;
    margin-top: 10%;
    margin-right: 10%;
    margin-left: 30%;
}
button#regresar{
    margin-top:10%;
}
</style>
