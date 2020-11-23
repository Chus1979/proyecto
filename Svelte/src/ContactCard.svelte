<script>

</script>

<article class="contact-card">
	<div class="nombre">
		<slot name="nombre">
			<span class="missing">nombre</span>
		</slot>
    </div>
    <div class="telefono">
		<slot name="telefono">
			<span class="missing">telefono</span>
		</slot>
	</div>
	<div class="direccion">
		<slot name="direccion">
			<span class="missing">direccion</span>
		</slot>
	</div>
	<div class="email">
		<slot name="email">
			<span class="missing">Unknown email</span>
		</slot>
	</div>
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
    .telefono { background-image: url('./img/vintage telephone icon Wall Mural • Pixers® • We live to change.jpeg')}
	.direccion { background-image: url('./img/Mail kostenlose Vektor-Icons entworfen von Prosymbols.pnp') }
	.email   { background-image: url('./img/Correo electrónico png imágenes.pnp') }
	.missing { color: rgba(181, 31, 31, 0.419) }
</style>