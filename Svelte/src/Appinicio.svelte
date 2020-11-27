<script>
    import AppaltaUsuario from './AppaltaUsuario.svelte';
    import Login from './Login.svelte';
    //import ListaUsuarios from './ListaUsuarios.svelte';
   // import Appentrada from './Appentrada.svelte';
	//import Mercado from './Mercado.svelte';
    //import Altaproductos from './Altaproductos.svelte';
    //import ApplistadoProduc from './ApplistadoProduc.svelte';
    
    export var seccion; //exportamos seccion para poder ir de un fichero a otro y el bind, lo pusimos en el anterior
    export var userId; 
    /** es la 1º vez q se nombra y nos va a hacer falta para el resto del programa
     * Se le hace un bind para copmpartir con el resto de ficheros 
     * hay q acordarse de hacer export var userId cuando lo queramos usar =
     * q el resto de var q necesitemos compartir entre ficheros
     * */
   
</script>

<main> 
    <body class = "inicio">
        <div class = "altus">
            <AppaltaUsuario  bind:userId={userId} bind:seccion={seccion}/>
        </div>
        <div class = "login">
            <Login bind:userId={userId} bind:seccion={seccion}/>
        </div>
    </body>  
            
</main>

<style>
body{
    display: inline-block;
}
.inicio::after{
    content: '';
    display:block;
    clear:both;
}
.altus{
    float:left;
}
.login{
    float:right;
   
}
</style>