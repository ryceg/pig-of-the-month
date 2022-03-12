<script>
</script>

<body>
	<div class="blue-thing bg-gradient-to-r from-blue-900 to-blue-600" />
	<div class="md:w-7/12 lg:6/12 relative z-10 w-10/12 py-20 mx-auto">
		<h1 class="lg:text-5xl md:text-4xl text-3xl font-extrabold text-center text-blue-500">
			Little_Peegz
		</h1>
		<p class="text-slate-300 py-12 font-semibold">
			Documenting the wholesome activities of three guinea pigs
		</p>

		<img
			class="w-100 inset-y-2 sm:inset-y-28 md:inset-y-18 lg:inset-y-20 absolute"
			src="static/img/family-photo.jpg"
			alt="A family portrait of the three guinea pigs"
		/>
		<a href="./pigs" class="py-18 block text-2xl font-extrabold">Meet the peegz</a>

		<a href="/.potm" class="py-18 block text-2xl font-extrabold"
			>View previous Pig of the Month winners</a
		>

		<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam eos alias delectus,</p>
	</div>
</body>

<style>
	body {
		background-color: #f1b804;
	}
	.blue-thing {
		background-color: #003797;
		position: absolute;
		z-index: 0;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		clip-path: polygon(
			100% 0,
			100% 51%,
			88% 52%,
			73% 46%,
			55% 43%,
			38% 42%,
			23% 38%,
			10% 36%,
			0 35%,
			0 0
		);
	}
</style>
