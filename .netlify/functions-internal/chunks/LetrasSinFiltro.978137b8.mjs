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

				const html = updateImageReferences("<p><img src=\"https://res.cloudinary.com/dctldwa03/image/upload/v1708982042/lssfo-hero_jpqcrv.png\" alt=\"LetrasSinFiltro\"></p>\n<h1 id=\"letrassinfiltro\">LetrasSinFiltro</h1>\n<p>LetrasSinFiltro es un generador de frases con IA y futura Red Social enfocada en el desahogo en frases e indirectas.</p>\n<p>LetrasSinFiltro es una plataforma que te ayuda a decir lo que sientes de forma original y creativa. Elige entre miles de frases e indirectas para cada situación: amor, desamor, amistad, trabajo.</p>\n<ul>\n<li>La pagina esta creada con NextJS como framework FrontEnd utilizando TailwindCSS para los estilos. Tambien usa Mongoose y MongoDb para la conexion y manejo de la base de datos.</li>\n</ul>\n<h4 id=\"tecnologias-usadas\">Tecnologias usadas</h4>\n<ol>\n<li>Javascript &#x26; TypeScript</li>\n<li>NextJs</li>\n<li>TailwindCSS, Radix UI</li>\n<li>MongoDB</li>\n</ol>\n<h4 id=\"website\">Website</h4>\n<p><a href=\"https://letrassinfiltro.vercel.app/\">Visitar LetrasSinFiltro</a></p>");

				const frontmatter = {"layout":"../../layouts/Post.astro","title":"LetrasSinFiltro","description":"LetrasSinFiltro es un generador de frases con IA y futura Red Social enfocada en el desahogo en frases e indirectas.","website":"https://letrassinfiltro.vercel.app/","date":"Apr 26,  2024","read":"2 min lectura","author":"Francisco Lencina","authorImage":"https://res.cloudinary.com/dctldwa03/image/upload/v1714420331/t3aw607pugwj6ynp5lzd.png"};
				const file = "D:/Programming/portfolio/src/content/projects/LetrasSinFiltro.md";
				const url = undefined;
				function rawContent() {
					return "\r\n![LetrasSinFiltro](https://res.cloudinary.com/dctldwa03/image/upload/v1708982042/lssfo-hero_jpqcrv.png)\r\n\r\n# LetrasSinFiltro\r\n\r\nLetrasSinFiltro es un generador de frases con IA y futura Red Social enfocada en el desahogo en frases e indirectas.\r\n\r\nLetrasSinFiltro es una plataforma que te ayuda a decir lo que sientes de forma original y creativa. Elige entre miles de frases e indirectas para cada situación: amor, desamor, amistad, trabajo.\r\n\r\n- La pagina esta creada con NextJS como framework FrontEnd utilizando TailwindCSS para los estilos. Tambien usa Mongoose y MongoDb para la conexion y manejo de la base de datos.\r\n\r\n#### Tecnologias usadas\r\n1. Javascript & TypeScript\r\n2. NextJs\r\n3. TailwindCSS, Radix UI\r\n4. MongoDB\r\n\r\n#### Website\r\n[Visitar LetrasSinFiltro](https://letrassinfiltro.vercel.app/)";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"letrassinfiltro","text":"LetrasSinFiltro"},{"depth":4,"slug":"tecnologias-usadas","text":"Tecnologias usadas"},{"depth":4,"slug":"website","text":"Website"}];
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
