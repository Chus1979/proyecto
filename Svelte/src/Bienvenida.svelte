<script>
    export var seccion;
   function handleClick () {
        seccion = "inicio";
    };
</script>
<main >
    <body>
    <h3>Bienvenidos:</h3>
        <p>Promovemos el contacto directo entre clientes y proveedores</p>
        <p>Con los tiempos que corren hoy en día...¿que mejor manera de comer comida sana directamente del huerto?</p>
        <p>Entren y disfruten de una buena selección de productos frescos, recien cosechados de las huertas</p>
        <button on:click={handleClick}>Adelante</button>
    </body>
</main>
<style>
@font-face{
    font-family: 'black_chancery';
    src: url('../black_chancery/BLKCHCRY.TTF');
}
p{
    text-align: center;
    color:rgb(44, 1, 44);
    font-family: 'black_chancery';
    font-size: 40px;
}
</style>