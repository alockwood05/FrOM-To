import adapter from '@sveltejs/adapter-auto';
import { join } from 'path';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { skeleton } from '@skeletonlabs/tw-plugin';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	preprocess: vitePreprocess(),
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	},

	// Skeleton configuration
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {}
	},

	// Plugins
	plugins: [
		// Skeleton plugin (after other plugins)
		skeleton
	]
};

export default config;
