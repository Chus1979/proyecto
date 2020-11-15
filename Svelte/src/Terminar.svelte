<script>
	import ContactCard from './ContactCard.svelte';
	
    
    export var userId;
    export var seccion;

    var direccion;

    async function borrar(){
        direccion = '';
    };

    async function empezar(){
        userId = null;
        seccion = "inicio";
    };
    
    /*async function getlistadoUsuarios(){
        var getlistadoUsuariosURL = `http://localhost:3000/listadoUsuarios/?direccion=${direccion}`;
        var resp = await fetch(getlistadoUsuariosURL);
        userId = await resp.json();
        console.log(userId);
    };
    */
   // async function  terminar(){
//Queria que confirmaran q los datos correctos y que se autentificaran. 
//antes de enviar los correos.

    
</script>

<main>
    <div>
        <ContactCard>
            <span slot = "name">{userId.nombre}</span>
            <span slot = "direccion">Dirección.-<input type="textarea"placeholder="Escribe tu dirección"></span>
            <span slot = "email">{userId.email}</span>
        </ContactCard>
        <button on:click={borrar}>Borrar</button>
        <!--button on:click={terminar}>Terminar</button-->
        <button on:click={empezar}>Salir</button>
    </div>
</main>