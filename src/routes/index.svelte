<script>
	import Card from '../components/Card.svelte';
	import { guineapigs } from '../data/guineapig';
</script>

<h1 class="text-3xl font-extrabold text-center text-blue-500">Little_Peegz</h1>
<p class="text-slate-300 font-semibold">
	Documenting the wholesome activities of three guinea pigs
</p>

<a href="./pigs">Meet the peegz</a>
<a href="/.potm">View previous Pig of the Month winners</a>
{#each Object.keys(guineapigs) as piggy}
	<Card guineaPigName={piggy} />
{/each}
