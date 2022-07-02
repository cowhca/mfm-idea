import adapter from '@sveltejs/adapter-auto';
import preprocess from "svelte-preprocess";


/** @type {import('@sveltejs/kit').Config} */
const config = {
	serverhost: true,
	kit: {
		adapter: adapter({out: 'build'})
	},
	preprocess: [
		preprocess({
		  postcss: true,
		}),
	]
};


export default config;
