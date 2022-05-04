
import root from '__GENERATED__/root.svelte';
import { respond } from '/Users/alecbuchanan/Code/runningforjarj/.svelte-kit/runtime/server/index.js';
import { set_paths, assets, base } from '/Users/alecbuchanan/Code/runningforjarj/.svelte-kit/runtime/paths.js';
import { set_prerendering } from '/Users/alecbuchanan/Code/runningforjarj/.svelte-kit/runtime/env.js';
import * as user_hooks from "./hooks.js";

const template = ({ head, body, assets, nonce }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<meta name=\"description\" content=\"\" />\n\t\t<link rel=\"icon\" href=\"" + assets + "/favicon.png\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\n\t\t<!-- SMUI default theme -->\n\t\t<link rel=\"stylesheet\" href=\"node_modules/svelte-material-ui/bare.css\" />\n\n\t\t<!-- Material Icons -->\n\t\t<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" />\n\t\t<!-- Roboto -->\n\t\t<link\n\t\t\trel=\"stylesheet\"\n\t\t\thref=\"https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700\"\n\t\t/>\n\t\t<!-- Roboto Mono -->\n\t\t<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Roboto+Mono\" />\n\n\t\t<style type=\"text/css\">\n\t\t\thtml,\n\t\t\tbody {\n\t\t\t\tpadding: 0;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\t\t</style>\n\n\t\t" + head + "\n\t</head>\n\t<body>\n\t\t<div class=\"page-wrapper\">" + body + "</div>\n\t</body>\n</html>\n";

let read = null;

set_paths({"base":"","assets":""});

let default_protocol = 'https';

// allow paths to be globally overridden
// in svelte-kit preview and in prerendering
export function override(settings) {
	default_protocol = settings.protocol || default_protocol;
	set_paths(settings.paths);
	set_prerendering(settings.prerendering);
	read = settings.read;
}

export class Server {
	constructor(manifest) {
		this.options = {
			amp: false,
			csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
			dev: false,
			floc: false,
			get_stack: error => String(error), // for security
			handle_error: (error, event) => {
				this.options.hooks.handleError({
					error,
					event,

					// TODO remove for 1.0
					// @ts-expect-error
					get request() {
						throw new Error('request in handleError has been replaced with event. See https://github.com/sveltejs/kit/pull/3384 for details');
					}
				});
				error.stack = this.options.get_stack(error);
			},
			hooks: null,
			hydrate: true,
			manifest,
			method_override: {"parameter":"_method","allowed":[]},
			paths: { base, assets },
			prefix: assets + '/_app/',
			prerender: true,
			read,
			root,
			service_worker: null,
			router: true,
			template,
			template_contains_nonce: false,
			trailing_slash: "never"
		};
	}

	async respond(request, options = {}) {
		if (!(request instanceof Request)) {
			throw new Error('The first argument to server.respond must be a Request object. See https://github.com/sveltejs/kit/pull/3384 for details');
		}

		if (!this.options.hooks) {
			const module = await import("./hooks.js");
			this.options.hooks = {
				getSession: module.getSession || (() => ({})),
				handle: module.handle || (({ event, resolve }) => resolve(event)),
				handleError: module.handleError || (({ error }) => console.error(error.stack)),
				externalFetch: module.externalFetch || fetch
			};
		}

		return respond(request, this.options, options);
	}
}
