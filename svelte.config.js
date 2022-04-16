import adapter from '@sveltejs/adapter-auto'
import path from 'path'
import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		vite: {
			// ssr: {
			// 	noExternal: Object.keys(pkg.dependencies || {}),
			// },
			server: {
				fs: {
					// Allow serving files from one level up to the project root
					allow: ['..']
				}
			},
			resolve: {
				alias: {
					// these are the aliases and paths to them
					'$components/': path.resolve('./src/components/'),
					'$components/*': path.resolve('./src/components/*'),
					'$lib/': path.resolve('./src/lib/'),
					'$lib/*': path.resolve('./src/lib/*'),
					'$data/': path.resolve('./src/data/'),
					'$data/*': path.resolve('./src/data/*')
				}
			}
		}
	}
}

export default config
