import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		prerender : { default: true},
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null
		})
	},
	paths: {
		base: '/runningforjarj',
		assets: '/runningforjarj'
	}
};

export default config;
