<script>
    /*import Avatars from '@dicebear/avatars';
    import sprites from '@dicebear/avatars-initials-sprites';
    let options = {};
	let avatars = new Avatars(sprites, options);
    let svg = avatars.create('custom-seed');
    */
    
    export var nick;

    var avatarURL;
    
    $: avatarURL = `https://avatars.dicebear.com/api/avataaars/${nick}.svg?options[backgroundcolor]=#0000ff)`;

</script>

<head>
    <img src={avatarURL} alt= "Avatares aleatorios">
</head>

<style>

img {
    color: #7474f0;
    width: 200px;
    height: 200px;
    }

</style>