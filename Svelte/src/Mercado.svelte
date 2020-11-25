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
    export var nick;
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
    async function Nick(){
     seccion="nick";
 };
</script>

<main>
    <div>
        <Avatar bind:nick={nick} on:click={Nick}/>
        <p class="p">{userId.nick}</p>
    </div>
    <button id="regresar" on:click={regresar}></button>
    <div class="todo">
       <AppProductos bind:carrito bind:seccion={seccion} bind:userId={userId}/>
    </div>

</main>

<style>
.p{
    font-size: 60px;
    color:rgb(9, 240, 9);
    text-align: center;
}
</style>