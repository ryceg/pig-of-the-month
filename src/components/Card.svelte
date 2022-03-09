<script lang="ts">
	import { guineapigs, type GuineaPigNames } from '../data/guineapig';

	export let guineaPigName: GuineaPigNames;
	let guineapig = guineapigs[guineaPigName];
</script>

<div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
	<div class="flex justify-center md:justify-end -mt-16">
		<img
			class="w-20 h-20 object-cover rounded-full border-2 border-{guineapig.favourite.colour}-500"
			src={guineapig.photos.thumbnail.url}
			alt={guineapig.photos.thumbnail.caption}
		/>
	</div>
	<div>
		<h2 class="text-gray-800 text-3xl font-semibold">{guineaPigName}</h2>
		<p class="mt-2 text-gray-600">
			{guineaPigName}, AKA {guineapig.fullName}, is named after {guineapig.namesake.name}.
		</p>
	</div>
	<div class="flex justify-end mt-4">
		<a
			href="./pigs/{guineaPigName.toLowerCase()}"
			class="text-xl font-medium text-{guineapig.favourite.colour}-500"
			>Learn more about {guineaPigName}</a
		>
	</div>
</div>
