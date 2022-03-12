<script lang="ts" context="module">
	export async function load({ params }) {
		let slug = params.slug;
		return {
			props: {
				slug
			}
		};
	}
</script>

<script lang="ts">
	import { toUpperFirst } from '$lib/utils';
	import type { GuineaPigNames } from '../../data/guineapig';
	import { guineapigs } from '../../data/guineapig';

	export let slug: GuineaPigNames;
	export let guineapig = guineapigs[toUpperFirst(slug)];
	let colour = `text-${guineapig.favourite.colour}-500`;
</script>

<h1 class="sm:text-4xl md:text-5xl lg:text-6xl colour text-3xl font-extrabold">
	{guineapig.fullName}
</h1>
<article>
	<div class="py-2">
		Stats:
		<div class="px-4">
			<ul>
				{#each Object.entries(guineapig.stats) as [key, value]}
					<li>
						<span class="py-1 text-sm font-light">{key}:</span>
						{#if typeof value === 'string'}
							{toUpperFirst(value)}
						{:else}
							{value}kg
						{/if}
					</li>
				{/each}
			</ul>
		</div>
	</div>
	<p class="py-4 italic">{guineapig.text.about}</p>
	<div class="py-2">
		Favourite:
		<div class="px-4">
			{#each Object.entries(guineapig.favourite) as [key, value]}
				<li><span class="py-1 text-sm font-light">{key}:</span> {toUpperFirst(value)}</li>
			{/each}
		</div>
	</div>
</article>
