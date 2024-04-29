/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, b as addAttribute } from '../astro.baf78597.mjs';
import 'html-escaper';
import { a as $$Layout } from './404.astro.156ce50f.mjs';
import { L as Languages, F as Frameworks } from './habilidades.astro.79efea3b.mjs';
import { j as jsonData } from './_...slug_.astro.32d0d722.mjs';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';
/* empty css                         *//* empty css                         *//* empty css                                 *//* empty css                               *//* empty css                               */
const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Francisco Lencina : Portfolio" }, { "default": ($$result2) => renderTemplate`
	${maybeRenderHead()}<main class="w-full m-0">
		<!-- PROFILE SECTION -->
		<section class="flex justify-between w-full" id="Profile">
			<div class="flex items-center justify-between gap-8 max-w-[830px] mx-auto mt-48">
				<div class="max-w-md">
					<div class="flex flex-col">
						<h4 class="font-regular text-white text-xl">
							hola amigo 👋
						</h4>
						<h1 class="ml-4 font-bold text-4xl text-white">
							Soy Francisco
						</h1>
						<p class="text-white text-lg font-regular opacity-60 mt-4">
							Tengo 19 años, vivo en Uruguay y soy Front End
							Developer. Autodidacta, apasionado por la tecnologia
							y el como esta desarrollada. Actualmente estudiando
							Tecnologo en Informatica.
						</p>
						<button class="border-b outline-b-indigo-50 mt-2 mb-6 text-white font-['Fira_Code'] w-fit">Leer mas</button>
					</div>
					<div class="flex gap-4 ml-4 my-5">
						<a href="/francisco-lencina-curriculum.pdf" class="px-4 py-2 text-white text-opacity-90 font-semibold border border-[#737373] rounded-lg bg-gradient-to-t from-[#0B0B0B] to-[#212121]" attributes-list download>Descargar CV</a>
						<div class="flex text-white opacity-50 justify-center items-center gap-2 text-2xl">
							<a class="opacity-50 hover:opacity-100" href="https://github.com/frannlencina" target="_blank"><i class="ri-github-line"></i></a>
							<a class="opacity-50 hover:opacity-100" href="https://twitter.com/franlencinaa" target="_blank"><i class="ri-twitter-line"></i></a>
							<a class="opacity-50 hover:opacity-100" href="mailto:franciscolencinap@gmail.com"><i class="ri-mail-star-line"></i></a>
						</div>
					</div>
				</div>
				<div>
					<div class="flex flex-col relative left-28 top-6">
						<span class="font-bold text-[#A9B5C1]">ahora</span>
						<span class="flex items-center w-fit cursor-pointer select-none hover:scale-[1.01] transition-all duration-200 hover:skew-y-2 hover:ring-4 hover:ring-[#A9B5C1] px-4 py-2 rounded-2xl text-[#414141] bg-[#CBCCD0]">Escuchando Spotify <i class="ri-arrow-right-s-line"></i></span>
					</div>
					<img src="/yo-imagen.png" alt="Imagen  de Francisco">
				</div>
			</div>
		</section>

		<section class="bg-[#181818] w-full">
			<section class="max-w-[830px] mt-56 mx-auto relative -top-28" id="Proyectos">
				<h4 class="text-white font-medium text-xl">Proyectos</h4>

				<div class="grid grid-cols-2 gap-4 mt-8">
					${jsonData.map((item) => renderTemplate`<article class="group flex text-white border border-[#3A3A3A] hover:border-[#585858] hover:scale-[1.01] bg-[#242424] px-6 py-4 rounded-xl cursor-pointer transition-all duration-200">
								<a${addAttribute(`/projects/${item.slug}`, "href")}>
									<div class="flex flex-col gap-2">
										<h5 class="text-lg font-bold opacity-70 group-hover:opacity-100 transition-all duration-200">
											${item.title}
										</h5>
										<div class="flex justify-between items-end text-white">
											<p class="opacity-50 group-hover:opacity-100 transition-all duration-200">
												${item.description}
											</p>

											<i class="ri-arrow-right-line opacity-70"></i>
										</div>
									</div>
								</a>
							</article>`)}
				</div>
			</section>

			<section class="max-w-[830px] mx-auto" id="Skills">
				<div>
					<h5 class="text-white font-medium text-xl">Stack</h5>
					<div class="flex gap-4 mt-8 pb-32">
						${Languages.map((item) => renderTemplate`<div>
									<img class="h-14 w-full rounded-xl"${addAttribute(item.image, "src")} alt="" srcset="">
								</div>`)}
					</div>
				</div>
				<div>
					<h5 class="text-white font-medium text-xl">Herramientas</h5>
					<div class="flex gap-4 mt-8 pb-32">
						${Frameworks.map((item) => renderTemplate`<div>
									<img class="h-14 w-full rounded-xl"${addAttribute(item.image, "src")} alt="" srcset="">
								</div>`)}
					</div>
				</div>
			</section>
		</section>
	</main>
` })}`;
}, "D:/Programming/portfolio/src/pages/index.astro", void 0);

const $$file = "D:/Programming/portfolio/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
