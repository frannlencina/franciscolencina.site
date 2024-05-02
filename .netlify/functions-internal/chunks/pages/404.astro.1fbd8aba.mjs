/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent, e as renderSlot, f as renderHead } from '../astro.9cef6a9f.mjs';
/* empty css                         *//* empty css                         */
const HearthEmoji = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAYAAABiS3YzAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPeSURBVHgBpZNbaFxVFIb/vc9lLmmTdjptJ422UwuKBkFsBQ0oQlW0KgYqgg+O4JO+qVhEEFSkCEVffRBREKxaH+xDKahonCah9aEKja2iGMO0k3SaZCbJzLlflmufM2NjbxS6YOYsZq/z7X/9a43AqpgcyOyAFj2nS31I6nrd9cJP7m+5NVwS1YHsdl3GL4CoFIFq8M2PH7Dtud656CUTxcy+wVLp3eJjT2TydwwjPj+Lzvgxa+GP3/ffNj3/nqohrp/aumHfxu3ldwqje7NaaRDO6SksHDlsz9Vqb400w/cvKixkXp27706i748QTf5ENPEjP8eIjn5DXmUv/bVt/X5Vd2brwEedFyvp+ckTRKdOEv15muh4lWq7bqfJDdpTidKJItZmY3Nh+OXXzMymTUBMoDCEiELOY5YX48JXB3F2+u/PyrvuqRRHn1aK+U1uUmoQug4YBrzaDE59cKB+ounv0GNfH8lt2WiS4yDmAwQMC/wEjChKwAVlR3u50j90EyJuFwqkgJoEaZybBrRsHmsGBobuipaGdUga1MwMaHEe5HsQnpvCukD1lKy6uK0M2TjPAJOVMUhoDFZqJYTBv+X7kOtfg9xic7MeEtpxEAAry4ACqjxOgUJZwbmyQlMXaD4Q8ofVCW6fiJKnskD4LiR3GUhh664f/dxebCJYasFIWmY/2TWRLAZBJr5Suiack8+XyjBdBXU5n4FtAHfpt5pcE07pexyc+8Hwflmu1+82+/LQ1c3clhAymUX61Q0FJ2UNde1ReZwsZtBscZPBlyMraEpV60V4o3FhHm67jch1WI1qM+hOn7qTFulWE130vDdUHvISd+tE8YeKl0D3WOF3C5ZTbbSW4XQsxJ6X2JAoSRaIVv2fKFmzVGWEmO1oty00LPvQzlY4rir0XmknjN4817GPGaxHJrcJPpRphUin/J9qJVkNkYdqWQ5m2p2wZfuv91haL/k6RG1UIPCieHeue2Bwy1LtpKalUAVUYB4oOS46lo3pFRsNP3zlITv+9jKoikMhjT+p07ooontNpZQBphpaD4ou0HZhdWyc5bbrnv/2o53wwGrO/6CJvwFVWeJuSXRzAuU2UwdE4qFSaDFslqGzfnD4kXbw0qUMgSvEwbUo5sic3GJot5YyJtbzvyifNUGs2vJ8BjqsMDg+l3MfrjRgXRdUxdEC+qPA/HWzrt1S0DXk2duQlTd5jep++JvV9nY+wyt/pXevClXxxTqU+yJzrCBlOc8qO7y3rZj+WQr8B593Ubvae9eE9sCZwBgzBJUdEmeiKHj8WRczuNH4NIvy5zmtqp7XU/8vcXkcBZPOO7UAAAAASUVORK5CYII=";

const $$Astro$3 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Footer;
  const defaultStyle = "opacity-40 hover:opacity-100";
  return renderTemplate`${maybeRenderHead()}<footer class="relative pb-12 pt-32 w-full left-0 bottom-0 bg-[#181818] duration-300 font-medium">
    <section class="text-white max-w-[830px] mx-auto">
        <div class="flex justify-between">
            <div class="max-w-[70%]">
                <p class="text-xl">Contactame</p>
                <p class="opacity-50 font-light mt-2">
                    Si quieres contactarme para contratar alguno de mis
                    servicios, colaborar en algun proyecto charlar o consultar
                    alguna duda puedes hacerlo en los siguientes lugares
                </p>
                <div class="flex gap-4 font-bold mt-5">
                    <a${addAttribute(defaultStyle, "class")} href="https://github.com/frannlencina" target="_blank">twitter-x</a><span>/</span><a${addAttribute(defaultStyle, "class")} href="https://www.linkedin.com/in/francisco-lencina/" target="_blank">linkedin</a><span>/</span><a${addAttribute(defaultStyle, "class")} href="https://github.com/frannlencina" target="_blank">github</a><span>/</span><a${addAttribute(defaultStyle, "class")} href="mailto:franciscolencinap@gmail.com">@gmail.com</a>
                </div>
            </div>

            <div class="flex items-end gap-2 text-xl">
                <button class="opacity-40 hover:opacity-100"><i class="ri-moon-line"></i></button>
                <button class="opacity-40 hover:opacity-100">
                    <i class="ri-sun-line"></i></button>
                <button class="opacity-40 hover:opacity-100">
                    <i class="ri-computer-line"></i></button>
            </div>
        </div>
        <div class="text-center flex justify-center items-center gap-2 pt-32 pb-12">
            <div>
                <p class="text-stone-400">
                    made with love by <span class="text-blue-700 hover:text-blue-500 duration-300"><a href="https://www.linkedin.com/in/francisco-lencina/" target="_blank">@frannlencina</a></span>
                </p>
            </div>
            <div>
                <img${addAttribute(HearthEmoji, "src")} alt="" srcset="">
            </div>
        </div>
    </section>
</footer>`;
}, "D:/Programming/portfolio/src/components/Footer.astro", void 0);

const $$Astro$2 = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true">
<meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>
`;
}, "D:/Programming/portfolio/node_modules/astro/components/ViewTransitions.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="es">\n	<head>\n		<meta charset="UTF-8">\n		<meta name="viewport" content="width=device-width, initial-scale=1.0">\n		<meta name="description" content="Author:Francisco Lencina, Category: Portfolio, Blog. Resume: Este es mi portafolio, donde te voy a mostrar mis habilidades y conocimientos.">\n		<meta name="theme-color" content="#317EFB">\n		<meta property="og:title" content="Francisco Lencina : Portfolio">\n		<meta property="og:type" content="website">\n		<meta property="og:url" content="https://franciscolencina.site">\n		<meta property="og:image" content="https://res.cloudinary.com/dctldwa03/image/upload/v1678214386/yo_dcvotu.png">\n		<meta property="og:image:secure_url" content="https://res.cloudinary.com/dctldwa03/image/upload/v1678214386/yo_dcvotu.png">\n		<meta property="og:image:type" content="image/png">\n		<meta property="og:image:width" content="400">\n		<meta property="og:image:height" content="300">\n		<link rel="icon" type="image/svg+xml" href="/favicon.png">\n		<link href="https://cdn.jsdelivr.net/npm/remixicon@2.2.0/fonts/remixicon.css" rel="stylesheet">\n\n		<link rel="manifest" href="../../manifest.json">\n		<!-- Google Analytics -->\n		<script async src="https://www.googletagmanager.com/gtag/js?id=G-VMWZH9EN3H"><\/script>\n		<meta name="generator"', ">\n		<title>", "</title>\n\n		", "\n	", '</head>\n	<body class="duration-300">\n		', "\n		", "\n	\n</body></html>"])), addAttribute(Astro2.generator, "content"), title, renderComponent($$result, "ViewTransitions", $$ViewTransitions, {}), renderHead(), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "D:/Programming/portfolio/src/layouts/Layout.astro", void 0);

const ErrorImg = "/_astro/404error.f19b1d24.png";

const $$Astro = createAstro();
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Portfolio - 404 Error", "class": "astro-ZETDM5MD" }, { "default": ($$result2) => renderTemplate`
		${maybeRenderHead()}<main class="container h-screen mx-auto astro-ZETDM5MD">
			<div class="Error  astro-ZETDM5MD">
				<img class="mx-auto astro-ZETDM5MD"${addAttribute(ErrorImg, "src")} alt="Error 404 Image">
			</div>
			<div class="errorText p-4 relative top-[-90px] sm:top-[-120px]  flex-col text-center items-center justify-center astro-ZETDM5MD">
				<div class="block text-center mt-4 astro-ZETDM5MD">
					<h2 class="title-gradient dark:bg-gradient-to-r from-[var(--blue)] to-white astro-ZETDM5MD">
						ERROR
					</h2>
				</div>
				<p class="text-2xl mx-auto max-w-xl opacity-80 dark:text-white astro-ZETDM5MD">
					Oops!, La pagina que estas buscando no se pudo encontrar.
				</p>
				<div class="my-6 astro-ZETDM5MD">
					<a class="max-w-fit gap-2 px-5 py-4 rounded-xl bg-[#344FA0] font-medium text-white sm:px-6 sm:py-3 sm:rounded-lg hover:text-black duration-200 hover:scale-105 astro-ZETDM5MD" href="/">
						<i class="ri-arrow-left-line relative top-0.5 astro-ZETDM5MD"></i> Back to home
					</a>
				</div>
			</div>
		</main>
	` })}
	`;
}, "D:/Programming/portfolio/src/pages/404.astro", void 0);

const $$file = "D:/Programming/portfolio/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$404,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _404 as _, $$ViewTransitions as a, $$Footer as b };
