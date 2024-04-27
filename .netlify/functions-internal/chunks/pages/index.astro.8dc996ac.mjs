/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../astro.83711a80.mjs';
import 'html-escaper';
import { a as $$Layout } from './404.astro.548df610.mjs';
import { F as Frameworks } from './habilidades.astro.4445e09b.mjs';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';
/* empty css                         *//* empty css                         *//* empty css                                 */
const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Francisco Lencina : Portfolio" }, { "default": ($$result2) => renderTemplate`
	${maybeRenderHead()}<main class="w-full m-0">
		<!-- PROFILE SECTION -->
		<section class="flex justify-between w-full" id="Profile">
			<div class="flex items-center justify-between gap-8 max-w-[830px] mx-auto mt-48">
			${Frameworks}
				<div class="max-w-md">
					<div class="flex flex-col">
						<h4 class="font-regular text-white text-xl">
							hey there 👋
						</h4>
						<h1 class="ml-4 font-bold text-4xl text-white">
							Im Francisco
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
						<button class="px-4 py-2 text-white text-opacity-90 font-semibold border border-[#737373] rounded-lg bg-gradient-to-t from-[#0B0B0B] to-[#212121]">Descargar CV</button>
						<div class="flex text-white opacity-50 justify-center items-center gap-2 text-2xl">
							<a class="opacity-50 hover:opacity-100" href=""><i class="ri-github-line"></i></a>
							<a class="opacity-50 hover:opacity-100" href=""><i class="ri-twitter-line"></i></a>
							<a class="opacity-50 hover:opacity-100" href=""><i class="ri-mail-star-line"></i></a>
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
					<div class="group flex text-white border border-[#3A3A3A] hover:border-[#585858] hover:scale-[1.01] bg-[#242424] px-6 py-4 rounded-xl cursor-pointer transition-all duration-200">
						<div class="flex flex-col gap-2">
							<h5 class="text-lg font-bold opacity-70 group-hover:opacity-100 transition-all duration-200">
								LetrasSinFiltro
							</h5>
							<p class="opacity-50 group-hover:opacity-100 transition-all duration-200">
								LetrasSinFiltro es un generador de frases con IA
								y futura Red Social enfocada en el desahogo en
								frases e indirectas.
							</p>
						</div>
						<div class="w-fit text-2xl relative -top-2 left-4 text-[#B9B9B9]">
							<i class="ri-arrow-right-up-line"></i>
						</div>
					</div>
					<div class="group flex text-white border border-[#3A3A3A] hover:border-[#585858] hover:scale-[1.01] bg-[#242424] px-6 py-4 rounded-xl cursor-pointer transition-all duration-200">
						<div class="flex flex-col gap-2">
							<h5 class="text-lg font-bold opacity-70 group-hover:opacity-100 transition-all duration-200">
								LetrasSinFiltro
							</h5>
							<p class="opacity-50 group-hover:opacity-100 transition-all duration-200">
								LetrasSinFiltro es un generador de frases con IA
								y futura Red Social enfocada en el desahogo en
								frases e indirectas.
							</p>
						</div>
						<div class="w-fit text-2xl relative -top-2 left-4 text-[#B9B9B9]">
							<i class="ri-arrow-right-up-line"></i>
						</div>
					</div>
					<div class="group flex text-white border border-[#3A3A3A] hover:border-[#585858] hover:scale-[1.01] bg-[#242424] px-6 py-4 rounded-xl cursor-pointer transition-all duration-200">
						<div class="flex flex-col gap-2">
							<h5 class="text-lg font-bold opacity-70 group-hover:opacity-100 transition-all duration-200">
								LetrasSinFiltro
							</h5>
							<p class="opacity-50 group-hover:opacity-100 transition-all duration-200">
								LetrasSinFiltro es un generador de frases con IA
								y futura Red Social enfocada en el desahogo en
								frases e indirectas.
							</p>
						</div>
						<div class="w-fit text-2xl relative -top-2 left-4 text-[#B9B9B9]">
							<i class="ri-arrow-right-up-line"></i>
						</div>
					</div>
					<div class="group flex text-white border border-[#3A3A3A] hover:border-[#585858] hover:scale-[1.01] bg-[#242424] px-6 py-4 rounded-xl cursor-pointer transition-all duration-200">
						<div class="flex flex-col gap-2">
							<h5 class="text-lg font-bold opacity-70 group-hover:opacity-100 transition-all duration-200">
								LetrasSinFiltro
							</h5>
							<p class="opacity-50 group-hover:opacity-100 transition-all duration-200">
								LetrasSinFiltro es un generador de frases con IA
								y futura Red Social enfocada en el desahogo en
								frases e indirectas.
							</p>
						</div>
						<div class="w-fit text-2xl relative -top-2 left-4 text-[#B9B9B9]">
							<i class="ri-arrow-right-up-line"></i>
						</div>
					</div>
					<div class="group flex text-white border border-[#3A3A3A] hover:border-[#585858] hover:scale-[1.01] bg-[#242424] px-6 py-4 rounded-xl cursor-pointer transition-all duration-200">
						<div class="flex flex-col gap-2">
							<h5 class="text-lg font-bold opacity-70 group-hover:opacity-100 transition-all duration-200">
								LetrasSinFiltro
							</h5>
							<p class="opacity-50 group-hover:opacity-100 transition-all duration-200">
								LetrasSinFiltro es un generador de frases con IA
								y futura Red Social enfocada en el desahogo en
								frases e indirectas.
							</p>
						</div>
						<div class="w-fit text-2xl relative -top-2 left-4 text-[#B9B9B9]">
							<i class="ri-arrow-right-up-line"></i>
						</div>
					</div>
				</div>
			</section>

			<section class="max-w-[830px] mx-auto" id="Skills">
				<div>
					<h5 class="text-white font-medium text-xl">Stack</h5>
					<div>
						${void 0}
						<!-- Lista de logos de las tecnologias que utilizo. -->
					</div>
				</div>
				<div>
					<h5 class="text-white font-medium text-xl">Herramientas</h5>
					<div>
						<!-- Lista de logos de herramientas adicionales que utilizo. -->
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
