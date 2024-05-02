import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderComponent, f as renderHead, e as renderSlot } from './astro.9cef6a9f.mjs';
import { a as $$ViewTransitions, b as $$Footer } from './pages/404.astro.1fbd8aba.mjs';
/* empty css                                                             */
const $$Astro = createAstro();
const $$Post = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Post;
  const { frontmatter } = Astro2.props;
  const { author, authorImage, title, description, date, read, image, website } = frontmatter;
  return renderTemplate`<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width">
		<meta name="Portfolio" content="Author:Francisco Lencina, Category: Portfolio, Blog. Resume: Esta es la pagina de mis proyectos donde muestro con que estan echos a detalle.">
		<meta name="theme-color" content="#317EFB">
		<link rel="icon" type="image/svg+xml" href="/favicon.png">
		<link href="https://cdn.jsdelivr.net/npm/remixicon@2.2.0/fonts/remixicon.css" rel="stylesheet">
		<meta property="og:title"${addAttribute(title, "content")}>
		<meta property="og:description"${addAttribute(description, "content")}>
		<meta property="og:image"${addAttribute(image, "content")}>
		<meta property="og:image:secure_url"${addAttribute(image, "content")}>
		<meta property="og:image:type" content="image/png">
		<meta property="og:image:width" content="400">
		<meta property="og:image:height" content="300">
		<meta name="generator"${addAttribute(Astro2.generator, "content")}>

		<link rel="manifest" href="../../manifest.json">

		<title>Proyecto ${title}</title>

		${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}
	${renderHead()}</head>
	<body class="duration-300">
		<main class="container max-w-3xl mx-auto h-fit p-6">
			<section class="mt-24 mb-12">
				<div class="flex flex-col sm:flex-row mx-auto max-w-2xl justify-between items-center px-5 pb-24">
					<a class="flex gap-2 mt-4 px-3 py-1 rounded-xl font-regular border border-stone-200 text-lg bg-transparent opacity-50 hover:opacity-100 trainsition-all duration-200" href="/">
						<i class="ri-arrow-left-s-line"></i> Volver</a>

					<a class="flex gap-2 mt-4 px-5 py-2 font-medium text-white text-[var(--blue-dark)] rounded-md transition-all duration-200 opacity-50 hover:opacity-100 dark:text-white"${addAttribute(website, "href")} target="__blank">
						<i class="ri-movie-line dark:text-white"></i>
						<span class="inline-block h-[2] min-h-[1em] w-0.5 self-stretch bg-[var(--blue-dark)]">
						</span> Ver pagina
					</a>
				</div>
				<div class="flex items-center gap-2">
					<div>
						<img class="w-10 rounded-full"${addAttribute(authorImage, "src")} alt="">
					</div>
					<div class="flex flex-col">
						<span class="font-regular opacity-50 relative top-1">20y</span>
						<span class="font-bold opacity-85">${author}</span>
					</div>
				</div>
				<span class="font-light opacity-30">${date} • ${read}</span>
			</section>
			<!-- Slug page render -->
			${renderSlot($$result, $$slots["default"])}
		</main>
		${renderComponent($$result, "Footer", $$Footer, {})}
	</body></html>`;
}, "D:/Programming/portfolio/src/layouts/Post.astro", void 0);

export { $$Post as $ };
