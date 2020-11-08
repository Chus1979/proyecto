<script>
    /*import Avatars from '@dicebear/avatars';
    import sprites from '@dicebear/avatars-initials-sprites';
    let options = {};
	let avatars = new Avatars(sprites, options);
    let svg = avatars.create('custom-seed');
    */
    
    export var nick;

    var avatarURL;
    $: avatarURL = `https://avatars.dicebear.com/api/initials/${nick}.svg?options[backgroundcolor]=#0000ff)`;

</script>

<main>
    <img src={avatarURL} alt= "iniciales del usuario">
</main>

<style>

img {
    color: #7474f0;
    width: 200px;
    height: 200px;
    }

</style>