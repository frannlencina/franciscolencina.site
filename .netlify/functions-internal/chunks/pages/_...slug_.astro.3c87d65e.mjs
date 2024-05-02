/* empty css                         */import { g as createCollectionToGlobResultMap, h as createGetCollection, c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent } from '../astro.9cef6a9f.mjs';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'html-escaper';

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/projects/Keyswh.md": () => import('../Keyswh.eb196bea.mjs'),"/src/content/projects/LetrasSinFiltro.md": () => import('../LetrasSinFiltro.dbba8961.mjs'),"/src/content/projects/SafePvP.md": () => import('../SafePvP.50ab180d.mjs')

});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({

});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"projects":{"type":"content","entries":{"letrassinfiltro":"/src/content/projects/LetrasSinFiltro.md","keyswh":"/src/content/projects/Keyswh.md","safepvp":"/src/content/projects/SafePvP.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/projects/Keyswh.md": () => import('../Keyswh.4d23788a.mjs'),"/src/content/projects/LetrasSinFiltro.md": () => import('../LetrasSinFiltro.842b0219.mjs'),"/src/content/projects/SafePvP.md": () => import('../SafePvP.ad0fd339.mjs')

});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const $$Astro = createAstro();
async function getStaticPaths() {
  const blogEntries = await getCollection("blog");
  return blogEntries.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { entry } = Astro2.props;
  const { Content } = await entry.render();
  return renderTemplate`${maybeRenderHead()}<h1>${entry.data.title}</h1>
${renderComponent($$result, "Content", Content, {})}`;
}, "D:/Programming/portfolio/src/pages/projects/[...slug].astro", void 0);

const $$file = "D:/Programming/portfolio/src/pages/projects/[...slug].astro";
const $$url = "/projects/[...slug]";

export { $$ as default, $$file as file, getStaticPaths, $$url as url };
