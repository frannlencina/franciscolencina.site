import * as adapter from '@astrojs/netlify/netlify-functions.js';
import React, { createElement } from 'react';
import ReactDOM from 'react-dom/server';
import { s as server_default, g as deserializeManifest } from './chunks/astro.993b3295.mjs';
import { _ as _page0, a as _page1, b as _page2, c as _page3, d as _page4, e as _page5, f as _page6, g as _page7, h as _page8, i as _page9 } from './chunks/pages/all.1d6c4729.mjs';
import 'mime';
import 'cookie';
import 'html-escaper';
import 'kleur/colors';
import 'slash';
import 'path-to-regexp';
import 'string-width';
/* empty css                               *//* empty css                                 *//* empty css                                     *//* empty css                               *//* empty css                                 *//* empty css                                 *//* empty css                                       */import 'react/jsx-runtime';
/* empty css                                       */import 'react-tooltip';
/* empty css                                       *//* empty css                                     */import 'swiper';
import 'swiper/react';
/* empty css                                     *//* empty css                               *//* empty css                               *//* empty css                               */
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

const pageMap = new Map([["src/pages/index.astro", _page0],["src/pages/habilidades.astro", _page1],["src/pages/proyectos.astro", _page2],["src/pages/projects/[...slug].astro", _page3],["src/pages/404.astro", _page4],["src/pages/en/index.astro", _page5],["src/pages/en/habilidades.astro", _page6],["src/pages/en/proyectos.astro", _page7],["src/pages/en/projects/[...slug].astro", _page8],["src/pages/en/404.astro", _page9],]);
const renderers = [Object.assign({"name":"astro:jsx","serverEntrypoint":"astro/jsx/server.js","jsxImportSource":"astro"}, { ssr: server_default }),Object.assign({"name":"@astrojs/react","clientEntrypoint":"@astrojs/react/client.js","serverEntrypoint":"@astrojs/react/server.js","jsxImportSource":"react"}, { ssr: _renderer1 }),];

const _manifest = Object.assign(deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":["_astro/index.03e10f98.css","_astro/404.7e300174.css","_astro/404.dc1fca02.css","_astro/404.b9e8efd4.css","_astro/index.522c060e.css","_astro/habilidades.9ae7632d.css","_astro/habilidades.a54eb042.css"],"scripts":[{"type":"external","value":"_astro/hoisted.e036b16d.js"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/404.dc1fca02.css","_astro/habilidades.9ae7632d.css","_astro/habilidades.a54eb042.css"],"scripts":[],"routeData":{"route":"/habilidades","type":"page","pattern":"^\\/habilidades\\/?$","segments":[[{"content":"habilidades","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/habilidades.astro","pathname":"/habilidades","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/404.dc1fca02.css"],"scripts":[],"routeData":{"route":"/proyectos","type":"page","pattern":"^\\/proyectos\\/?$","segments":[[{"content":"proyectos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/proyectos.astro","pathname":"/proyectos","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/404.dc1fca02.css","_astro/_...slug_.4fd2f111.css","_astro/404.b9e8efd4.css","_astro/_...slug_.959d6bd1.css"],"scripts":[{"type":"inline","value":"window.addEventListener(\"beforeunload\",e=>{console.log(\"Transicion...\")});\n"}],"routeData":{"route":"/projects/[...slug]","type":"page","pattern":"^\\/projects(?:\\/(.*?))?\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}],[{"content":"...slug","dynamic":true,"spread":true}]],"params":["...slug"],"component":"src/pages/projects/[...slug].astro","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/404.dc1fca02.css","_astro/404.ece6a0fd.css","_astro/404.7e300174.css","_astro/404.b9e8efd4.css"],"scripts":[{"type":"inline","value":"window.addEventListener(\"beforeunload\",n=>{console.log(\"Transicion...\")});window.dataLayer=window.dataLayer||[];function a(){dataLayer.push(arguments)}a(\"js\",new Date);a(\"config\",\"G-VMWZH9EN3H\");\n"}],"routeData":{"route":"/404","type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/404.dc1fca02.css","_astro/index.03e10f98.css","_astro/index.be400de0.css","_astro/404.b9e8efd4.css","_astro/habilidades.9ae7632d.css","_astro/habilidades.a54eb042.css"],"scripts":[{"type":"inline","value":"let n=document.getElementById(\"scrollBtn\");window.onscroll=function(){e()};n.addEventListener(\"click\",()=>{t()});function e(){document.body.scrollTop>20||document.documentElement.scrollTop>20?n.style.display=\"block\":n.style.display=\"none\"}function t(){document.body.scrollTop=0,document.documentElement.scrollTop=0}window.addEventListener(\"beforeunload\",l=>{console.log(\"Transicion...\")});window.dataLayer=window.dataLayer||[];function o(){dataLayer.push(arguments)}o(\"js\",new Date);o(\"config\",\"G-VMWZH9EN3H\");\n"}],"routeData":{"route":"/en","type":"page","pattern":"^\\/en\\/?$","segments":[[{"content":"en","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/en/index.astro","pathname":"/en","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/404.dc1fca02.css","_astro/habilidades.36010042.css","_astro/habilidades.a54eb042.css"],"scripts":[],"routeData":{"route":"/en/habilidades","type":"page","pattern":"^\\/en\\/habilidades\\/?$","segments":[[{"content":"en","dynamic":false,"spread":false}],[{"content":"habilidades","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/en/habilidades.astro","pathname":"/en/habilidades","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/404.dc1fca02.css"],"scripts":[],"routeData":{"route":"/en/proyectos","type":"page","pattern":"^\\/en\\/proyectos\\/?$","segments":[[{"content":"en","dynamic":false,"spread":false}],[{"content":"proyectos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/en/proyectos.astro","pathname":"/en/proyectos","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/404.dc1fca02.css","_astro/_...slug_.7c447463.css","_astro/404.b9e8efd4.css","_astro/_...slug_.959d6bd1.css"],"scripts":[{"type":"inline","value":"window.addEventListener(\"beforeunload\",e=>{console.log(\"Transicion...\")});\n"}],"routeData":{"route":"/en/projects/[...slug]","type":"page","pattern":"^\\/en\\/projects(?:\\/(.*?))?\\/?$","segments":[[{"content":"en","dynamic":false,"spread":false}],[{"content":"projects","dynamic":false,"spread":false}],[{"content":"...slug","dynamic":true,"spread":true}]],"params":["...slug"],"component":"src/pages/en/projects/[...slug].astro","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["_astro/404.dc1fca02.css","_astro/404.4ab0a35d.css","_astro/404.7e300174.css","_astro/404.b9e8efd4.css"],"scripts":[{"type":"inline","value":"window.addEventListener(\"beforeunload\",n=>{console.log(\"Transicion...\")});window.dataLayer=window.dataLayer||[];function a(){dataLayer.push(arguments)}a(\"js\",new Date);a(\"config\",\"G-VMWZH9EN3H\");\n"}],"routeData":{"route":"/en/404","type":"page","pattern":"^\\/en\\/404\\/?$","segments":[[{"content":"en","dynamic":false,"spread":false}],[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/en/404.astro","pathname":"/en/404","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","markdown":{"drafts":false,"syntaxHighlight":"shiki","shikiConfig":{"langs":[],"theme":"github-dark","wrap":false},"remarkPlugins":[],"rehypePlugins":[],"remarkRehype":{},"gfm":true,"smartypants":true},"pageMap":null,"propagation":[],"renderers":[],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"_@astrojs-ssr-virtual-entry.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.e036b16d.js","/astro/hoisted.js?q=3":"_astro/hoisted.5e7e4023.js","/astro/hoisted.js?q=1":"_astro/hoisted.f31e2e74.js","D:/Programming/portfolio/src/components/YoImg":"_astro/YoImg.3dba6f78.js","/astro/hoisted.js?q=4":"_astro/hoisted.2282fb7b.js","D:/Programming/portfolio/src/components/ToggleDarkBtn":"_astro/ToggleDarkBtn.e4ae3ced.js","/astro/hoisted.js?q=2":"_astro/hoisted.2d406297.js","D:/Programming/portfolio/src/components/SkillsImgs":"_astro/SkillsImgs.a773e717.js","D:/Programming/portfolio/src/components/Slider":"_astro/Slider.2e77aecb.js","@astrojs/react/client.js":"_astro/client.c17b9277.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/404error.f19b1d24.png","/_astro/404.ece6a0fd.css","/_astro/404.7e300174.css","/_astro/404.b9e8efd4.css","/_astro/404.4ab0a35d.css","/_astro/404.dc1fca02.css","/_astro/_...slug_.7c447463.css","/_astro/_...slug_.4fd2f111.css","/_astro/_...slug_.959d6bd1.css","/_astro/habilidades.9ae7632d.css","/_astro/habilidades.36010042.css","/_astro/habilidades.a54eb042.css","/_astro/index.be400de0.css","/_astro/index.522c060e.css","/_astro/index.03e10f98.css","/favicon.png","/favicon512.png","/francisco-lencina-curriculum.pdf","/manifest.json","/_astro/client.c17b9277.js","/_astro/hoisted.e036b16d.js","/_astro/index.6460afdd.js","/_astro/jsx-runtime.51014c9d.js","/_astro/SkillsImgs.a773e717.js","/_astro/Slider.2e77aecb.js","/_astro/ToggleDarkBtn.e4ae3ced.js","/_astro/YoImg.3dba6f78.js"]}), {
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
