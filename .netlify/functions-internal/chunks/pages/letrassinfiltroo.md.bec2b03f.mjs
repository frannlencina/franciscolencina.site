/* empty css                         */import { g as createVNode, s as spreadAttributes, F as Fragment } from '../astro.baf78597.mjs';
import { $ as $$Post } from './_...slug_.astro.32d0d722.mjs';
import 'html-escaper';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import './404.astro.156ce50f.mjs';
/* empty css                         *//* empty css                         *//* empty css                               *//* empty css                               */
const images = {
					
				};

				function updateImageReferences(html) {
					return html.replaceAll(
						/__ASTRO_IMAGE_="([^"]+)"/gm,
						(full, imagePath) => spreadAttributes({src: images[imagePath].src, ...images[imagePath].attributes})
					);
				}

				const html = updateImageReferences("<h1 id=\"letrassinfiltro\">LetrasSinFiltro</h1>\n<p>The first 60 odd videos on my YouTube channel had the following process:</p>\n<ol>\n<li>Code up a project (3 - 4 hours)</li>\n<li>Switch on screen record + microphone (2 - 5 hours)</li>\n<li>Edit (0.5 - 1 hour)</li>\n<li>Create a thumbnail (1 hour)</li>\n<li>Upload (0.5 hours)</li>\n</ol>\n<p>Which worked, in that it allowed me to find a style to relay educational material via videos, gain a few thousand subscribers and hundreds of thousands of views within 2+ years. The problem was that the quality of production had quickly plateaued. There was nothing that allowed my videos to stand out against the thousands of other coding tutorials that were on YouTube.</p>\n<p>On the other end of the spectrum you have channels such as Fireship and Hyperplexed. I’m willing to bet that they spend more time on script writing and post-production, than recording footage and audio. Which you can tell by the sheer quality of their work.</p>");

				const frontmatter = {"layout":"../../layouts/Post.astro","title":"","date":"","author":""};
				const file = "D:/Programming/portfolio/src/pages/projects/letrassinfiltroo.md";
				const url = "/projects/letrassinfiltroo";
				function rawContent() {
					return "\r\n# LetrasSinFiltro\r\n\r\nThe first 60 odd videos on my YouTube channel had the following process:\r\n\r\n1. Code up a project (3 - 4 hours)\r\n2. Switch on screen record + microphone (2 - 5 hours)\r\n3. Edit (0.5 - 1 hour)\r\n4. Create a thumbnail (1 hour)\r\n5. Upload (0.5 hours)\r\n\r\nWhich worked, in that it allowed me to find a style to relay educational material via videos, gain a few thousand subscribers and hundreds of thousands of views within 2+ years. The problem was that the quality of production had quickly plateaued. There was nothing that allowed my videos to stand out against the thousands of other coding tutorials that were on YouTube.\r\n\r\nOn the other end of the spectrum you have channels such as Fireship and Hyperplexed. I’m willing to bet that they spend more time on script writing and post-production, than recording footage and audio. Which you can tell by the sheer quality of their work.\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"letrassinfiltro","text":"LetrasSinFiltro"}];
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
