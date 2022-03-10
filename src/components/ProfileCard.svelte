<script lang="ts">
	import { guineapigs, type GuineaPigNames } from '../data/guineapig';

	export let guineaPigName: GuineaPigNames;
	let guineapig = guineapigs[guineaPigName];
</script>

<div
	class="hover:scale-110 motion-reduce:transition-none motion-reduce:hover:transform-none block max-w-md p-24 px-8 py-4 my-20 transition duration-300 ease-in-out delay-150 bg-white rounded-lg shadow-lg"
>
	<div class="md:justify-end flex justify-center -mt-16">
		<img
			class="w-20 h-20 object-cover hover:rotate-3 rounded-full border-2 border-{guineapig.favourite
				.colour}-500 hover:scale-[2.5] motion-reduce:transition-none motion-reduce:hover:transform-none  transition duration-300 ease-in-out delay-150"
			src={guineapig.photos.thumbnail.url}
			alt={guineapig.photos.thumbnail.caption}
		/>
	</div>
	<div>
		<h2 class="text-3xl font-semibold text-gray-800">{guineaPigName}</h2>
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
