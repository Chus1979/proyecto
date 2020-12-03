<script>
	import Avatar from './Avatar.svelte';
    import AppProductos from "./AppProductos.svelte";
    /**
    De momento no pongo nada en el index pq estoy usando la BD de produc. y ya está creada
    Estoy usando la funcion del listado para poder ver la BD, ya q se guarda en el array 
    listado productos.
    En el html pondré aspento de tabla para q sea más sencillo de ver para el usuario*/
    export  var userId;
    export var seccion;
    export var carrito;
   // export var nick;
    var listadoProduc = [];
    
    async function getlistadoProduc(){
        var getlistadoProducURL =  'http://localhost:3000/listadoProduc/';
        var resp = await fetch(getlistadoProducURL);
        listadoProduc = await resp.json();
    }
    getlistadoProduc();
    async function regresar(){
        seccion = "entrada";
    };
</script>

<main>
    <div>
        <Avatar bind:nick={userId.nick}/>
        <p class="p">{userId.nick}</p>
    </div>
    <button id="regresar" on:click={regresar}></button>
    <p class = "te">Seleccione el producto y dele a comprar para que se lo añada al carrito</p>
    <img src="/iconos/FechaAzul3D.png" alt="flecha">
    <div class="todo">
       <AppProductos bind:carrito bind:seccion={seccion} bind:userId={userId}/>
    </div>

</main>

<style>
.p{
    font-size: 60px;
    color:rgb(9, 240, 9);
    text-align: center;
    text-shadow: -3px -3px 3px #0000DF, 3px -3px 3px #0000DF, -3px 3px 3px #0000DF, 3px 3px 3px #0000DF;
}
button#regresar{
	float:left;
}
p{
    font-family:'Ruluko-Regular.ttf';
    text-align: center;
    color:rgb(12, 11, 53);
    font-size: 40px;
    margin-bottom: 0px;
}
.te{
    margin-left: 5%;
    margin-bottom:2%;
}
img{
    width: 200px;
    height: 200px;
    margin-top:-10%;
    margin-right:-5%;
    float:right; 
}
</style>