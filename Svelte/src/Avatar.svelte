<script>
    /*import Avatars from '@dicebear/avatars';
    import sprites from '@dicebear/avatars-initials-sprites';
    let options = {};
	let avatars = new Avatars(sprites, options);
    let svg = avatars.create('custom-seed');
    */
   /*
    import Avatars from '@dicebear/avatars';
    import sprites from '@dicebear/avatars-avataaars-sprites';
    
    var options = {};
    var avatars = new Avatars(sprites, options);
    var svg = avatars.create('custom-seed');
    */

    export var userId;

    var avatarURL;

    $: avatarURL = `https://avatars.dicebear.com/api/avataaars/${userId}.svg?options[backgroundcolor]=#0000ff)`;
                    
</script>

<main>
    <img src={avatarURL} alt= "avatar usuario">
</main>

<style>

img {
    color: #7474f0;
    width: 200px;
    height: 200px;
    }

</style>