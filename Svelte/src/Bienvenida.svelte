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
@font-face{
    font-family: 'Ruluko-Regular.ttf';
    src:url('../Ruluko-Regular.ttf')
}

.introduccion{
    font-family:'Ruluko-Regular.ttf';
    text-align: center;
    color:rgb(31, 84, 57);
    font-size: 40px;
    font-weight: bold;
    background:rgba(165, 42, 42, 0.426);
}

</style>