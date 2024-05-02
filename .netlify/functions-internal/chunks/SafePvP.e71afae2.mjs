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

				const html = updateImageReferences("<h1 id=\"safepvp\">SafePvP</h1>\n<p><img src=\"https://res.cloudinary.com/dctldwa03/image/upload/v1684342116/safepvp_hero_yey4jm.jpg\" alt=\"SafePvP\"></p>\n<p>SafePvP es la pagina oficial sobre un ex servidor de un videojuego.</p>\n<p>SafePvP fue la pagina oficial de un exitoso servidor de el videojuego Minecraft.\r\nDonde los usuarios podian entrar a dicha pagina, copiar la ip, ver la cantidad\r\nde jugadores online a tiempo real, ver las reglas o simplemente dirigirse a la\r\ntienda del servidor. Tambien habian secciones donde se mostraban las modalidades\r\nactuales de la temporada e informarse sobre estas.</p>\n<ul>\n<li>La pagina fue creada con React Js como Framework de JS, con Tailwind CSS como\r\nFramework de CSS,y con herramienta de compilacion ViteJS. Fue planteada,\r\ndiseñada y estructurada antes de dicho desarrollo en Figma. La pagina tambien\r\ntrabajaba con una API donde se extraian los datos para ver a tiempo real la\r\ncantidad de jugadores online.</li>\n</ul>\n<h3 id=\"tecnologias-usadas\">Tecnologias usadas</h3>\n<ul>\n<li><a href=\"https://res.cloudinary.com/dctldwa03/image/upload/v1678214385/javascript-logo_drsvuc.png\">JavaScript</a></li>\n<li><a href=\"https://res.cloudinary.com/dctldwa03/image/upload/v1678214386/reactjs-logo_kqlp9a.png\">ReactJS</a></li>\n<li><a href=\"https://res.cloudinary.com/dctldwa03/image/upload/v1678214386/tailwindcss-logo_wjbz44.png\">Tailwind CSS</a></li>\n<li><a href=\"https://res.cloudinary.com/dctldwa03/image/upload/v1678214386/vitejs-logo_fl5rei.png\">ViteJS</a></li>\n</ul>\n<h3 id=\"website\">Website</h3>\n<p><a href=\"https://safepvp.000webhostapp.com/\">Visitar SafePvP</a></p>");

				const frontmatter = {"layout":"../../layouts/Post.astro","title":"LetrasSinFiltro","description":"SafePvP es la pagina oficial sobre un ex servidor de un videojuego.","website":"https://letrassinfiltro.vercel.app/","date":"Apr 26,  2024","read":"2 min read","author":"Francisco Lencina","authorImage":"https://res.cloudinary.com/dctldwa03/image/upload/v1714420331/t3aw607pugwj6ynp5lzd.png"};
				const file = "D:/Programming/portfolio/src/content/projects/SafePvP.md";
				const url = undefined;
				function rawContent() {
					return "# SafePvP\r\n\r\n![SafePvP](https://res.cloudinary.com/dctldwa03/image/upload/v1684342116/safepvp_hero_yey4jm.jpg)\r\n\r\nSafePvP es la pagina oficial sobre un ex servidor de un videojuego.\r\n\r\nSafePvP fue la pagina oficial de un exitoso servidor de el videojuego Minecraft.\r\nDonde los usuarios podian entrar a dicha pagina, copiar la ip, ver la cantidad\r\nde jugadores online a tiempo real, ver las reglas o simplemente dirigirse a la\r\ntienda del servidor. Tambien habian secciones donde se mostraban las modalidades\r\nactuales de la temporada e informarse sobre estas.\r\n\r\n- La pagina fue creada con React Js como Framework de JS, con Tailwind CSS como\r\n  Framework de CSS,y con herramienta de compilacion ViteJS. Fue planteada,\r\n  diseñada y estructurada antes de dicho desarrollo en Figma. La pagina tambien\r\n  trabajaba con una API donde se extraian los datos para ver a tiempo real la\r\n  cantidad de jugadores online.\r\n\r\n### Tecnologias usadas\r\n\r\n- [JavaScript](https://res.cloudinary.com/dctldwa03/image/upload/v1678214385/javascript-logo_drsvuc.png)\r\n- [ReactJS](https://res.cloudinary.com/dctldwa03/image/upload/v1678214386/reactjs-logo_kqlp9a.png)\r\n- [Tailwind CSS](https://res.cloudinary.com/dctldwa03/image/upload/v1678214386/tailwindcss-logo_wjbz44.png)\r\n- [ViteJS](https://res.cloudinary.com/dctldwa03/image/upload/v1678214386/vitejs-logo_fl5rei.png)\r\n\r\n### Website\r\n\r\n[Visitar SafePvP](https://safepvp.000webhostapp.com/)\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"safepvp","text":"SafePvP"},{"depth":3,"slug":"tecnologias-usadas","text":"Tecnologias usadas"},{"depth":3,"slug":"website","text":"Website"}];
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
