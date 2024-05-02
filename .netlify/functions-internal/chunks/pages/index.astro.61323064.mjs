/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, b as addAttribute } from '../astro.9cef6a9f.mjs';
import { $ as $$Layout } from './404.astro.1fbd8aba.mjs';
import { L as Languages, F as Frameworks } from './habilidades.astro.f52a958f.mjs';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'html-escaper';
/* empty css                         *//* empty css                         *//* empty css                                 */
const Proyectos = [
	{
		slug: "SafePvP",
		id: 1,
		title: "SafePvP",
		about: "SafePvP fue la pagina oficial de un exitoso servidor de el videojuego Minecraft. Donde los usuarios podian entrar a dicha pagina, copiar la ip, ver la cantidad de jugadores online a tiempo real, ver las reglas o simplemente dirigirse a la tienda del servidor. Tambien habian secciones donde se mostraban las modalidades actuales de la temporada e informarse sobre estas.",
		techSpecs: "La pagina fue creada con React Js como Framework de JS, con Tailwind CSS como Framework de CSS,y con herramienta de compilacion ViteJS. Fue planteada, diseñada y estructurada antes de dicho desarrollo en Figma. La pagina tambien trabajaba con una API donde se extraian los datos para ver a tiempo real la cantidad de jugadores online.",
		description: "SafePvP es la pagina oficial sobre un ex servidor de un videojuego.",
		website: "https://safepvp.000webhostapp.com/",
		image: "https://res.cloudinary.com/dctldwa03/image/upload/v1684342116/safepvp_hero_yey4jm.jpg",
		screens: [
			"https://res.cloudinary.com/dctldwa03/image/upload/v1684342116/safepvp_hero_yey4jm.jpg",
			"https://res.cloudinary.com/dctldwa03/image/upload/v1684342035/safepvp_hero3_nqnudb.png",
			"https://res.cloudinary.com/dctldwa03/image/upload/v1684342035/safepvp_404_rq2czh.png",
			"https://res.cloudinary.com/dctldwa03/image/upload/v1684342035/safepvp_hero2_rut2qo.png"
		],
		tech: [
			"https://res.cloudinary.com/dctldwa03/image/upload/v1678214385/javascript-logo_drsvuc.png",
			"https://res.cloudinary.com/dctldwa03/image/upload/v1678214386/reactjs-logo_kqlp9a.png",
			"https://res.cloudinary.com/dctldwa03/image/upload/v1678214386/tailwindcss-logo_wjbz44.png",
			"https://res.cloudinary.com/dctldwa03/image/upload/v1678214386/vitejs-logo_fl5rei.png"
		],
		language: "/"
	},
	{
		slug: "Keyswh",
		id: 2,
		title: "Keyswh",
		about: "Keyswh actualmente esta en beta, fue creada con el objetivo de crear una comunidad de personas con el amor hacia el mismo hobbie. La pagina cuenta con secciones, Guias y News.Yo controlare desde una Admin Dashboard con un Login exclusivos para Administradores estas secciones. Donde se podran agregar posts, eliminar y editar.",
		techSpecs: "La aplicacion esta dividida en dos partes, el FrontEnd y el BackEnd. En el FrontEnd la pagina fue desarrollada con ReactJS como framework de JS y Tailwind CSS como framework de CSS. En el BackEnd la pagina esta Desarrollada con Node Js y Express para administrar las peticiones al servidor y Mongoose para conectar a MongoDb. Tambien utilize herramientas como JSONWebToken para la authenticacion y el Middelware en las peticiones de las rutas.",
		description: "Keyswh es una comunidad de teclados mecanicos, donde podras ver guias, noticias e informarte sobre estos.",
		image: "https://res.cloudinary.com/dctldwa03/image/upload/v1684339873/keyswh_hero_jsiwtm.png",
		screens: [
			"https://res.cloudinary.com/dctldwa03/image/upload/v1684339873/keyswh_hero_jsiwtm.png",
			"https://res.cloudinary.com/dctldwa03/image/upload/v1684339873/keyswh_adminlogin_dy3nih.png",
			"https://res.cloudinary.com/dctldwa03/image/upload/v1684339872/keyswh_adminposts_qepoec.png",
			"https://res.cloudinary.com/dctldwa03/image/upload/v1684339873/keyswh_hero2_csh58v.png"
		],
		website: "https://keyswh.com/",
		tech: [
			"https://res.cloudinary.com/dctldwa03/image/upload/v1678214385/javascript-logo_drsvuc.png",
			"https://res.cloudinary.com/dctldwa03/image/upload/v1678214386/reactjs-logo_kqlp9a.png",
			"https://res.cloudinary.com/dctldwa03/image/upload/v1678214386/nodejs-logo_m4lwq7.png",
			"https://res.cloudinary.com/dctldwa03/image/upload/v1678214385/mongodb-logo_qowzyr.png"
		],
		language: "/"
	},
	{
		slug: "LetrasSinFiltro",
		id: 3,
		title: "LetrasSinFiltro",
		about: "LetrasSinFiltro es una plataforma que te ayuda a decir lo que sientes de forma original y creativa. Elige entre miles de frases e indirectas para cada situación: amor, desamor, amistad, trabajo.",
		techSpecs: "La pagina esta creada con NextJS como framework FrontEnd utilizando TailwindCSS para los estilos. Tambien usa Mongoose y MongoDb para la conexion y manejo de la base de datos.",
		description: "LetrasSinFiltro es un generador de frases con IA y futura Red Social enfocada en el desahogo en frases e indirectas.",
		website: "https://www.letrassinfiltro.site/",
		image: "https://res.cloudinary.com/dctldwa03/image/upload/v1708982042/lssfo-hero_jpqcrv.png",
		screens: [
			"https://res.cloudinary.com/dctldwa03/image/upload/v1708982042/lssfo-hero_jpqcrv.png",
			"https://res.cloudinary.com/dctldwa03/image/upload/v1708982042/lssfo-not-found_ou9lfl.png",
			"https://res.cloudinary.com/dctldwa03/image/upload/v1708982042/lssfo-login_ols9ya.png",
			"https://res.cloudinary.com/dctldwa03/image/upload/v1708982042/lssfo-aboutus_x6grgb.png"
		],
		tech: [
			"https://res.cloudinary.com/dctldwa03/image/upload/v1708982259/png-transparent-next-js-hd-logo_qgsmxy.png",
			"https://res.cloudinary.com/dctldwa03/image/upload/v1697775481/tslogo_akmllv.png",
			"https://res.cloudinary.com/dctldwa03/image/upload/v1678214386/tailwindcss-logo_wjbz44.png",
			"https://res.cloudinary.com/dctldwa03/image/upload/v1678214385/mongodb-logo_qowzyr.png"
		],
		language: "/"
	}
];

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
						<a href="/francisco-lencina-curriculum.pdf" class="px-4 py-2 text-white text-opacity-90 font-semibold border border-[#737373] rounded-lg bg-gradient-to-t from-[#0B0B0B] to-[#212121]" download>Descargar CV</a>
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
					${Proyectos.map((item) => renderTemplate`<article class="group flex text-white border border-[#3A3A3A] hover:border-[#585858] hover:scale-[1.01] bg-[#242424] px-6 py-4 rounded-xl cursor-pointer transition-all duration-200">
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
