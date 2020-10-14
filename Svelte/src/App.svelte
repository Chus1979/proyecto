<script>
    import Appinicio from './Appinicio.svelte';
    
    function handleClick () {
    };
</script>

<main >
    <!-- svelte-ignore a11y-missing-attribute -->
    <img src="./img/Fondo_pantalla.jpg"/>
    <h1>Food on wheels</h1>
        <h2>"De la huerta a tu Casa"</h2>
            <h3>Bienvenidos:</h3>
            <p>Promovemos el contacto directo entre clientes y proveedores</p>
            <p>Con los tiempos que corren hoy en día...¿que mejor manera de comer comida sana directamente del huerto?</p>
            <p>Entren y disfruten de una buena selección de productos frescos, recien cosechados de las huertas</p>
            <button on:click={handleClick}>Adelante</button>
            <Appinicio/>

</main>

<style>
	@font-face{
    font-family: 'satisfy';
    src: url('../Satisfy/Satisfy-Regular.ttf');
}

h1{
    text-align: center;
    color:lightseagreen;
    font-family: 'satisfy';
    text-decoration: rgb(62, 62, 156);
    font-size: 80px;
    text-shadow: 6px 6px 6px rgb(7, 87, 114);
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
    text-decoration: 10px;
    text-decoration-color: aqua;
    text-decoration-style: solid;
    text-decoration-line:underline;
    
}
p{
    text-align: center;
    color:rgb(2, 82, 78);
    font-family: 'satisfy';
    font-size: large;
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
    margin-left: 600px;
}
button:hover {
    padding: 10px;
    background: rgb(96, 96, 167);
}
</style>