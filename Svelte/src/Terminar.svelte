<script>
	import Avatar from './Avatar.svelte';
    import ContactCard from './ContactCard.svelte';

    export var seccion;
    export var userId;
    export var nick;

$:seccion = "confirmar";

async function empezar(){
        userId = null;
        seccion = "inicio";
 };
async function mandarAviso(){
        seccion = "mandarAviso";
};

</script>

<main>
    <head>
        <Avatar bind:nick={nick}/>
    </head>
    <h2>Termina de rellenar este formulario.-</h2>
        <ContactCard>
            <span slot="nombre">
                {userId.nombre}
            </span>
            <span slot="telefono">
                {userId.telefono}
            </span>
            <span slot ="direccion">
                <input class="dirección" placeholder="Direccion de envio">
            </span>
            <span slot="email">
                {userId.email}
            </span>
        </ContactCard>
    <button id="mandarAviso" on:click={mandarAviso}>Terminar</button>
    <button id="empezar" on:click={empezar}>Inicio</button>
</main>
<style>

</style>