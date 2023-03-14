import * as adapter from '@astrojs/netlify/netlify-functions.js';
import React, { createElement } from 'react';
import ReactDOM from 'react-dom/server';
import { s as server_default, h as deserializeManifest } from './chunks/astro.ddd27d2a.mjs';
import { _ as _page0, a as _page1, b as _page2, c as _page3, d as _page4, e as _page5, f as _page6 } from './chunks/pages/all.b616ead8.mjs';
import 'mime';
import 'cookie';
import 'html-escaper';
import 'kleur/colors';
import 'slash';
import 'path-to-regexp';
import 'string-width';
/* empty css                               *//* empty css                                 *//* empty css                                       *//* empty css                                     *//* empty css                                     *//* empty css                                     */import 'react/jsx-runtime';
/* empty css                                 */
/**
 * Astro passes `children` as a string of HTML, so we need
 * a wrapper `div` to render that content as VNodes.
 *
 * As a bonus, we can signal to React that this subtree is
 * entirely static and will never change via `shouldComponentUpdate`.
 */
const StaticHtml = ({ value, name }) => {
	if (!value) return null;
	return createElement('astro-slot', {
		name,
		suppressHydrationWarning: true,
		dangerouslySetInnerHTML: { __html: value },
	});
};

/**
 * This tells React to opt-out of re-rendering this subtree,
 * In addition to being a performance optimization,
 * this also allows other frameworks to attach to `children`.
 *
 * See https://preactjs.com/guide/v8/external-dom-mutations
 */
StaticHtml.shouldComponentUpdate = () => false;

const slotName = (str) => str.trim().replace(/[-_]([a-z])/g, (_, w) => w.toUpperCase());
const reactTypeof = Symbol.for('react.element');

function errorIsComingFromPreactComponent(err) {
	return (
		err.message &&
		(err.message.startsWith("Cannot read property '__H'") ||
			err.message.includes("(reading '__H')"))
	);
}

async function check(Component, props, children) {
	// Note: there are packages that do some unholy things to create "components".
	// Checking the $$typeof property catches most of these patterns.
	if (typeof Component === 'object') {
		const $$typeof = Component['$$typeof'];
		return $$typeof && $$typeof.toString().slice('Symbol('.length).startsWith('react');
	}
	if (typeof Component !== 'function') return false;

	if (Component.prototype != null && typeof Component.prototype.render === 'function') {
		return React.Component.isPrototypeOf(Component) || React.PureComponent.isPrototypeOf(Component);
	}

	let error = null;
	let isReactComponent = false;
	function Tester(...args) {
		try {
			const vnode = Component(...args);
			if (vnode && vnode['$$typeof'] === reactTypeof) {
				isReactComponent = true;
			}
		} catch (err) {
			if (!errorIsComingFromPreactComponent(err)) {
				error = err;
			}
		}

		return React.createElement('div');
	}

	await renderToStaticMarkup(Tester, props, children, {});

	if (error) {
		throw error;
	}
	return isReactComponent;
}

async function getNodeWritable() {
	let nodeStreamBuiltinModuleName = 'stream';
	let { Writable } = await import(/* @vite-ignore */ nodeStreamBuiltinModuleName);
	return Writable;
}

async function renderToStaticMarkup(Component, props, { default: children, ...slotted }, metadata) {
	delete props['class'];
	const slots = {};
	for (const [key, value] of Object.entries(slotted)) {
		const name = slotName(key);
		slots[name] = React.createElement(StaticHtml, { value, name });
	}
	// Note: create newProps to avoid mutating `props` before they are serialized
	const newProps = {
		...props,
		...slots,
	};
	const newChildren = children ?? props.children;
	if (newChildren != null) {
		newProps.children = React.createElement(StaticHtml, { value: newChildren });
	}
	const vnode = React.createElement(Component, newProps);
	let html;
	if (metadata && metadata.hydrate) {
		if ('renderToReadableStream' in ReactDOM) {
			html = await renderToReadableStreamAsync(vnode);
		} else {
			html = await renderToPipeableStreamAsync(vnode);
		}
	} else {
		if ('renderToReadableStream' in ReactDOM) {
			html = await renderToReadableStreamAsync(vnode);
		} else {
			html = await renderToStaticNodeStreamAsync(vnode);
		}
	}
	return { html };
}

async function renderToPipeableStreamAsync(vnode) {
	const Writable = await getNodeWritable();
	let html = '';
	return new Promise((resolve, reject) => {
		let error = undefined;
		let stream = ReactDOM.renderToPipeableStream(vnode, {
			onError(err) {
				error = err;
				reject(error);
			},
			onAllReady() {
				stream.pipe(
					new Writable({
						write(chunk, _encoding, callback) {
							html += chunk.toString('utf-8');
							callback();
						},
						destroy() {
							resolve(html);
						},
					})
				);
			},
		});
	});
}

async function renderToStaticNodeStreamAsync(vnode) {
	const Writable = await getNodeWritable();
	let html = '';
	return new Promise((resolve, reject) => {
		let stream = ReactDOM.renderToStaticNodeStream(vnode);
		stream.on('error', (err) => {
			reject(err);
		});
		stream.pipe(
			new Writable({
				write(chunk, _encoding, callback) {
					html += chunk.toString('utf-8');
					callback();
				},
				destroy() {
					resolve(html);
				},
			})
		);
	});
}

/**
 * Use a while loop instead of "for await" due to cloudflare and Vercel Edge issues
 * See https://github.com/facebook/react/issues/24169
 */
async function readResult(stream) {
	const reader = stream.getReader();
	let result = '';
	const decoder = new TextDecoder('utf-8');
	while (true) {
		const { done, value } = await reader.read();
		if (done) {
			if (value) {
				result += decoder.decode(value);
			} else {
				// This closes the decoder
				decoder.decode(new Uint8Array());
			}

			return result;
		}
		result += decoder.decode(value, { stream: true });
	}
}

async function renderToReadableStreamAsync(vnode) {
	return await readResult(await ReactDOM.renderToReadableStream(vnode));
}

const _renderer1 = {
	check,
	renderToStaticMarkup,
};

const pageMap = new Map([["src/pages/index.astro", _page0],["src/pages/habilidades.astro", _page1],["src/pages/proyectos.astro", _page2],["src/pages/projects/posts/safepvp.md", _page3],["src/pages/projects/posts/keyswh.md", _page4],["src/pages/projects/[...slug].astro", _page5],["src/pages/404.astro", _page6],]);
const renderers = [Object.assign({"name":"astro:jsx","serverEntrypoint":"astro/jsx/server.js","jsxImportSource":"astro"}, { ssr: server_default }),Object.assign({"name":"@astrojs/react","clientEntrypoint":"@astrojs/react/client.js","serverEntrypoint":"@astrojs/react/server.js","jsxImportSource":"react"}, { ssr: _renderer1 }),];

const _manifest = Object.assign(deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":["_astro/index.82bbcaf0.css","_astro/index.b9e8efd4.css","_astro/404.e393451e.css","_astro/proyectos.733cd62c.css","_astro/_...slug_.542af99e.css","_astro/habilidades.46e70d47.css"],"scripts":[{"type":"inline","value":"let o=document.getElementById(\"scrollBtn\");window.onscroll=function(){n()};o.addEventListener(\"click\",()=>{l()});function n(){document.body.scrollTop>20||document.documentElement.scrollTop>20?o.style.display=\"block\":o.style.display=\"none\"}function l(){document.body.scrollTop=0,document.documentElement.scrollTop=0}\n"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/404.e393451e.css","_astro/habilidades.46e70d47.css"],"scripts":[],"routeData":{"route":"/habilidades","type":"page","pattern":"^\\/habilidades\\/?$","segments":[[{"content":"habilidades","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/habilidades.astro","pathname":"/habilidades","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/proyectos.733cd62c.css","_astro/404.e393451e.css","_astro/_...slug_.542af99e.css","_astro/index.b9e8efd4.css"],"scripts":[{"type":"inline","value":"\n"}],"routeData":{"route":"/proyectos","type":"page","pattern":"^\\/proyectos\\/?$","segments":[[{"content":"proyectos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/proyectos.astro","pathname":"/proyectos","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/404.e393451e.css","_astro/_...slug_.542af99e.css","_astro/index.b9e8efd4.css"],"scripts":[{"type":"inline","value":"\n"}],"routeData":{"route":"/projects/posts/safepvp","type":"page","pattern":"^\\/projects\\/posts\\/safepvp\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}],[{"content":"posts","dynamic":false,"spread":false}],[{"content":"safepvp","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/posts/safepvp.md","pathname":"/projects/posts/safepvp","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/404.e393451e.css","_astro/_...slug_.542af99e.css","_astro/index.b9e8efd4.css"],"scripts":[{"type":"inline","value":"\n"}],"routeData":{"route":"/projects/posts/keyswh","type":"page","pattern":"^\\/projects\\/posts\\/keyswh\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}],[{"content":"posts","dynamic":false,"spread":false}],[{"content":"keyswh","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/posts/keyswh.md","pathname":"/projects/posts/keyswh","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/404.e393451e.css","_astro/_...slug_.542af99e.css","_astro/_...slug_.77755aba.css","_astro/index.b9e8efd4.css"],"scripts":[{"type":"inline","value":"\n"}],"routeData":{"route":"/projects/[...slug]","type":"page","pattern":"^\\/projects(?:\\/(.*?))?\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}],[{"content":"...slug","dynamic":true,"spread":true}]],"params":["...slug"],"component":"src/pages/projects/[...slug].astro","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/404.e393451e.css","_astro/index.b9e8efd4.css"],"scripts":[{"type":"inline","value":"\n"}],"routeData":{"route":"/404","type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","markdown":{"drafts":false,"syntaxHighlight":"shiki","shikiConfig":{"langs":[],"theme":"github-dark","wrap":false},"remarkPlugins":[],"rehypePlugins":[],"remarkRehype":{},"gfm":true,"smartypants":true},"pageMap":null,"propagation":[],"renderers":[],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"_@astrojs-ssr-virtual-entry.mjs","D:/Programming/portfolio/src/components/ToggleDarkBtn":"_astro/ToggleDarkBtn.2b001571.js","/astro/hoisted.js?q=1":"_astro/hoisted.4ed993c7.js","/astro/hoisted.js?q=3":"_astro/hoisted.c42ce534.js","/astro/hoisted.js?q=0":"_astro/hoisted.0b0364a2.js","/astro/hoisted.js?q=2":"_astro/hoisted.3f7a7dc7.js","@astrojs/react/client.js":"_astro/client.38423ee9.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/mongodb-logo.9cd69ddf.png","/_astro/reactjs-logo.6914d6f7.png","/_astro/express-logo.00b91551.png","/_astro/astrojs.aa0b8521.svg","/_astro/docusaurus-logo.fa1e6984.png","/_astro/404.e393451e.css","/_astro/_...slug_.542af99e.css","/_astro/_...slug_.77755aba.css","/_astro/habilidades.46e70d47.css","/_astro/index.b9e8efd4.css","/_astro/proyectos.733cd62c.css","/_astro/index.82bbcaf0.css","/curriculum.pdf","/favicon.svg","/_astro/client.38423ee9.js","/_astro/index.45a47ed6.js","/_astro/ToggleDarkBtn.2b001571.js"]}), {
	pageMap: pageMap,
	renderers: renderers
});
const _args = {};
const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap, renderers };
