<script>
    export var seccion;
    function handleClick () {
        seccion = "inicio";
    };
</script>

<main >
    <body>
    <h3>Bienvenidos:</h3>
        <div class='introduccion'>
            <p>Promovemos el contacto directo entre clientes y proveedores. Con los tiempos que corren hoy en día...¿que mejor manera de comer comida sana directamente del huerto? Entren y disfruten de una buena selección de productos frescos, recien cosechados de las huertas</p>
        </div>  
        <button on:click={handleClick}>Adelante</button>
    </body>
</main>

<style>

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
button {
	float: left;
    margin-left: 40%;
    margin-top: 5%;
}
.introduccion{
    font-family:'Ruluko-Regular.ttf';
    text-align: center;
    color:rgb(12, 11, 53);
    font-size: 40px;
    margin-bottom: 0px;
}
</style>