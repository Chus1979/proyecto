<script>

</script>

<article class="contact-card">
	<h2>
		<slot nombre="nombre">
			<span class="missing">nombre</span>
		</slot>
    </h2>

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
		box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
		padding: 1em;
	}

	h2 {
		padding: 0 0 0.2em 0;
		margin: 0 0 1em 0;
		border-bottom: 1px solid #ff3e00
	}

	.direccion, .email {
		padding: 0 0 0 1.5em;
		background:  0 0 no-repeat;
		background-size: 20px 20px;
		margin: 0 0 0.5em 0;
		line-height: 1.2;
	}
    .telefono{background-image: url('./img/vintage telephone icon Wall Mural • Pixers® • We live to change.jpeg')}
	.direccion { background-image: url('./img/Mail kostenlose Vektor-Icons entworfen von Prosymbols.pnp') }
	.email   { background-image: url('./img/Correo electrónico png imágenes.pnp') }
	.missing { color: #999 }
</style>