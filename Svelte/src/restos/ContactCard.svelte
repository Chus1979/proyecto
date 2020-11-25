<script>
	export var userId;
</script>

<article class="contact-card">
	<slot name="nombre">
		<span class="missing">Nombre</span>
	</slot>
	<slot name="telefono">
		<span class="missing">Telefono</span>
	</slot>
	<slot name="direccion">
		<span class="missing">Dirección</span>
	</slot>
	<slot name="email">
		<span class ="missing">email</span>
	</slot>
</article>

<style>
	
	.contact-card {
		width: 300px;
		border: 1px solid #aaa;
		border-radius: 2px;
		box-shadow: 2px 2px 8px rgba(72, 29, 29, 0.083);
		padding: 1em;
	}

	.nombre {
		padding: 0 0 5em 0;
		margin: 0 0 1em 0;
		border-bottom: 5px solid #740303
	}

	.direccion, .email {
		padding: 0 0 0 5em;
		background:  0 0 no-repeat;
		background-size: 300px 300px;
		margin: 0 0 5em 0;
		line-height: 2;
	}
    
</style>