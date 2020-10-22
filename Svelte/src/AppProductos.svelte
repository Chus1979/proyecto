<script>
    import Appcarro from './Appcarro.svelte';
    export  var userId;
    var listadoProduc = [];
    var cantidad = [];

    async function getlistadoProduc(){
        var getlistadoProducURL =  'http://localhost:3000/listadoProduc/';
        var resp = await fetch(getlistadoProducURL);
        listadoProduc = await resp.json();
    }
    getlistadoProduc();
    async function borrar(idx){
        listadoProduc[idx].cantidad = '';
    }
    async function carro(){
        listadoProduc[idx].cantidad = input.value;
        borrar(idx);
    }
</script>
<!--preparar tabla para que se vea en mercado-->

{#each listadoProduc as producto, idx}
        <tr>
            <td>{producto.producto}</td>
            <td>{producto.precio}</td>
            <td>{producto.unidades}</td>
            <td>{producto.stock}</td>
            <td><input id="cantidad" type="number" bind:value={listadoProduc[idx].cantidad}>
            <button on:click={()=>{borrar(idx)}}>Borrar</button>
            <button on:click={carro}>Carro</button>
                <Appcarro/>
            </td>
        </tr>
{/each}