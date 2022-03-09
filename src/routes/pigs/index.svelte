<script>
	import { keys } from '$lib/utils';
	import Card from '../../components/Card.svelte';
	import { guineapigs } from '../../data/guineapig';
</script>

<p class="text-lg italic font-light">
	Our herd of guinea pigs currently includes three blessed little beans. Their names are:
</p>
{#each keys(guineapigs) as piggy}
	<Card guineaPigName={piggy} />
{/each}
