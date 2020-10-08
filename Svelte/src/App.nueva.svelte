<script>
    import Pag_principal from './Pag_principal.svelte/';
    function handleClick () {
        var pag = Pag_principal;
    };
</script>
<main>
    <!-- svelte-ignore a11y-missing-attribute -->
    <img src = '/home/chus/Cliente_proveedor/API/img/Fondo_pantalla.jpg'>
    <h1>Food on wheels</h1>
        <h2>"De la huerta a tu Casa"</h2>
            <h3>Bienvenidos</h3>
            <p>Promovemos el contacto directo entre clientes y proveedores</p>
            <p>Con los tiempos que corren hoy en día...¿que mejor manera de comer comida sana directamente del huerto?</p>
            <p>Entren y disfruten de una buena selección de productos frescos, recien cosechados de las huertas</p>
            <button on:click={handleClick(pag)}>Adelante</button>
</main>
<style>
	@font-face{
    text-decoration: rgb(62, 62, 156);
    font-size: x-large; 
    font-family: 'satisfy';
    src: url ('/home/chus/Cliente_proveedor/Satisfy');
}
h1{
    text-align: center;
    color:lightseagreen;
    font-family: 'satisfy';
    font-size: xx-large;
    text-shadow: 4px 4px 4px rgb(7, 87, 114);
    text-underline-position: auto;
}
h2{
	text-align: center;
    color:lightseagreen;
    font-family: 'satisfy';
    font-size: 60px;
    text-underline-position: auto;
}
h3{
	text-align: center;
    color:lightseagreen;
    font-family: 'satisfy';
    font-size: xx-large;
    text-underline-position: auto;
}
button {
    text-align: center;
    font-style: oblique;
    font-family:'satisfy';
    display: inline-block;
    border-radius: 70%;
    text-shadow:10px 10px 10px rgb(67, 202, 134);
    background: lightseagreen;
    text-decoration-color:darkseagreen;
    padding: 10px;
    font-size: 20px;
    color: rgb(70, 110, 90);
    margin-left: auto;
}
button:hover {
padding: 10px;
background: blue;
}
</style>