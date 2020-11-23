<script>
    /*
    import Bienvenida from './Bienvenida.svelte';
	import Appentrada from './Appentrada.svelte';
	import Appinicio from './Appinicio.svelte';
	import App from './App.svelte';
	import Login from './Login.svelte';
	import AppaltaUsuario from './AppaltaUsuario.svelte';
    /*import Avatars from '@dicebear/avatars';
    import sprites from '@dicebear/avatars-initials-sprites';
    let options = {};
	let avatars = new Avatars(sprites, options);
    let svg = avatars.create('custom-seed');
    */
   /** @type {any} */

    export var nick;

    var avatarURL;
    
    $: avatarURL = `https://avatars.dicebear.com/api/avataaars/${nick}.svg?options[backgroundcolor]=#0000ff)`;

</script>

<head>
    <img src={avatarURL} alt= "Avatares aleatorios">
</head>

<style>

img {
    width: 200px;
    height: 200px;
}
</style>