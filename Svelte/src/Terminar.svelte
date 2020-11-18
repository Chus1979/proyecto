<script>
    import ContactCard from './ContactCard.svelte';

export var seccion;
export var userId;

$:seccion = "terminar";

async function empezar(){
        userId = null;
        seccion = "inicio";
 };
async function mandarAviso(){
        seccion = "mandarAviso";
}
   
</script>

<main>
    <h2>Termina de rellenar este formulario.-</h2>
        <ContactCard>
            <span slot="nombre">
                {userId.nombre}
            </span>
            <span slot ="direccion">
                <input class="dirección" placeholder="Direccion de envio">
            </span>
            <span slot="telefono">
                {userId.telefono}
            </span>
            <span slot="email">
                {userId.email}
            </span>
        </ContactCard>
    <button id="mandarAviso" on:click={mandarAviso}>Listo su compra ha sido realizada</button>
    <button id="empezar" on:click={empezar}>Inicio</button>
</main>
<style>

</style>