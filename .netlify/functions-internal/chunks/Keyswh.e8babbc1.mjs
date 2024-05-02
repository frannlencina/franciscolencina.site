import { j as createVNode, F as Fragment, k as spreadAttributes } from './astro.9cef6a9f.mjs';
import { $ as $$Post } from './Post.de320997.mjs';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'html-escaper';
import './pages/404.astro.1fbd8aba.mjs';
/* empty css                        *//* empty css                        *//* empty css                        *//* empty css                                                             */
const images = {
					
				};

				function updateImageReferences(html) {
					return html.replaceAll(
						/__ASTRO_IMAGE_="([^"]+)"/gm,
						(full, imagePath) => spreadAttributes({src: images[imagePath].src, ...images[imagePath].attributes})
					);
				}

				const html = updateImageReferences("<p><img src=\"https://res.cloudinary.com/dctldwa03/image/upload/v1684339873/keyswh_hero_jsiwtm.png\" alt=\"Keyswh\"></p>\n<h1 id=\"keyswh\">Keyswh</h1>\n<p>Keyswh es una comunidad de teclados mecanicos, donde podras ver guias, noticias e informarte sobre estos.</p>\n<p>Keyswh actualmente esta en beta, fue creada con el objetivo de crear una comunidad de personas con el amor hacia el mismo hobbie. La pagina cuenta con secciones, Guias y News.Yo controlare desde una Admin Dashboard con un Login exclusivos para Administradores estas secciones. Donde se podran agregar posts, eliminar y editar.</p>\n<ul>\n<li>La aplicacion esta dividida en dos partes, el FrontEnd y el BackEnd. En el FrontEnd la pagina fue desarrollada con ReactJS como framework de JS y Tailwind CSS como framework de CSS. En el BackEnd la pagina esta Desarrollada con Node Js y Express para administrar las peticiones al servidor y Mongoose para conectar a MongoDb. Tambien utilize herramientas como JSONWebToken para la authenticacion y el Middelware en las peticiones de las rutas.</li>\n</ul>\n<h4 id=\"tecnologias-usadas\">Tecnologias usadas</h4>\n<ol>\n<li>Javascript &#x26; TypeScript</li>\n<li>ReactJs</li>\n<li>TailwindCSS</li>\n<li>MongoDB</li>\n</ol>\n<h4 id=\"website\">Website</h4>\n<p><a href=\"https://google.com/\">Visitar Keyswh</a></p>");

				const frontmatter = {"layout":"../../layouts/Post.astro","title":"Keyswh","description":"Keyswh es una comunidad de teclados mecanicos, donde podras ver guias, noticias e informarte sobre estos.","website":"","date":"Apr 26,  2024","read":"2 min lectura","author":"Francisco Lencina","authorImage":"https://res.cloudinary.com/dctldwa03/image/upload/v1714420331/t3aw607pugwj6ynp5lzd.png"};
				const file = "D:/Programming/portfolio/src/content/projects/Keyswh.md";
				const url = undefined;
				function rawContent() {
					return "\r\n![Keyswh](https://res.cloudinary.com/dctldwa03/image/upload/v1684339873/keyswh_hero_jsiwtm.png)\r\n\r\n# Keyswh\r\n\r\nKeyswh es una comunidad de teclados mecanicos, donde podras ver guias, noticias e informarte sobre estos.\r\n\r\nKeyswh actualmente esta en beta, fue creada con el objetivo de crear una comunidad de personas con el amor hacia el mismo hobbie. La pagina cuenta con secciones, Guias y News.Yo controlare desde una Admin Dashboard con un Login exclusivos para Administradores estas secciones. Donde se podran agregar posts, eliminar y editar.\r\n\r\n- La aplicacion esta dividida en dos partes, el FrontEnd y el BackEnd. En el FrontEnd la pagina fue desarrollada con ReactJS como framework de JS y Tailwind CSS como framework de CSS. En el BackEnd la pagina esta Desarrollada con Node Js y Express para administrar las peticiones al servidor y Mongoose para conectar a MongoDb. Tambien utilize herramientas como JSONWebToken para la authenticacion y el Middelware en las peticiones de las rutas.\r\n\r\n#### Tecnologias usadas\r\n1. Javascript & TypeScript\r\n2. ReactJs\r\n3. TailwindCSS\r\n4. MongoDB\r\n\r\n#### Website\r\n[Visitar Keyswh](https://google.com/)";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"keyswh","text":"Keyswh"},{"depth":4,"slug":"tecnologias-usadas","text":"Tecnologias usadas"},{"depth":4,"slug":"website","text":"Website"}];
				}
				async function Content() {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;
					const contentFragment = createVNode(Fragment, { 'set:html': html });
					return createVNode($$Post, {
									file,
									url,
									content,
									frontmatter: content,
									headings: getHeadings(),
									rawContent,
									compiledContent,
									'server:root': true,
									children: contentFragment
								});
				}
				Content[Symbol.for('astro.needsHeadRendering')] = false;

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, images, rawContent, url };
