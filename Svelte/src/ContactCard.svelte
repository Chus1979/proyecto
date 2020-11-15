<script>
export var userId;

</script>
<main>
<article class="contact-card">
	<h2>
		<slot name="name">
			<span class="missing">{userId.nombre}</span>
		</slot>
    </h2>
   
	<div class="address">
		<slot name="address">
			<span class="missing">Escriba su dirección</span>
		</slot>
	</div>

	<div class="email">
		<slot name="email">
			<span class="missing">{userId.email}</span>
		</slot>
	</div>
</article>
</main>