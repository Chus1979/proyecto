<script>
   
export var nick;
export var seccion;
export var userId;
//Avatar:<Avatar bind:nick={nick}/lo asociamos a nick que es lo q va aparecer en el reso de ficheros	
//var avatarURL;
    
$: nick;


 async function avatar(){
     seccion="nick";
     nick = userId.nick;
 }
</script>

<main>
    <img src="https://robohash.org/${nick}.png?set=set4" alt= "Gatitos aleatorios" on:click={avatar}>
</main>

<style>

main{
    display: flex; 
    justify-content: center;
    margin-bottom: 100px;
}

img {
    width: 300px;
    height: 300px;
}  
</style>