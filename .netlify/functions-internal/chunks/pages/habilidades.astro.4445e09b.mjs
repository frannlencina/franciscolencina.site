/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead } from '../astro.83711a80.mjs';
import 'html-escaper';
/* empty css                                 */
const Frameworks = [
	{
		id: 1,
		name: "ReactJs",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
	},
	{
		id: 2,
		name: "NextJS",
		image: "https://res.cloudinary.com/dctldwa03/image/upload/v1697772557/next-js_op6isv.svg"
	},
	{
		id: 3,
		name: "TailwindCSS",
		image: "https://res.cloudinary.com/dctldwa03/image/upload/v1678214386/tailwindcss-logo_wjbz44.png"
	},
	{
		id: 4,
		name: "Bootstrap",
		image: "https://res.cloudinary.com/dctldwa03/image/upload/v1678214384/bootstrap-logo_l3jem4.png"
	},
	{
		id: 5,
		name: "ViteJs",
		image: "https://res.cloudinary.com/dctldwa03/image/upload/v1678214386/vitejs-logo_fl5rei.png"
	},
	{
		id: 6,
		name: "Express",
		image: "https://res.cloudinary.com/dctldwa03/image/upload/v1686072541/expressjs_logo_icon_169185_ubeqry.png"
	},
	{
		id: 7,
		name: "Astro",
		image: "https://res.cloudinary.com/dctldwa03/image/upload/v1678214384/astrojs_xqbyuy.svg"
	},
	{
		id: 8,
		name: "Figma",
		image: "https://res.cloudinary.com/dctldwa03/image/upload/v1686072620/figma-logo-0_ky2bsu.png"
	}
];

const Languages = [
	{
		id: 1,
		name: "HTML",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png"
	},
	{
		id: 2,
		name: "CSS",
		image: "https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-css-logo-png-transparent-svg-vector-bie-supply-9.png"
	},
	{
		id: 3,
		name: "JavaScript",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png"
	},
	{
		id: 4,
		name: "TypeScript",
		image: "https://res.cloudinary.com/dctldwa03/image/upload/v1697775481/tslogo_akmllv.png"
	},
	{
		id: 5,
		name: "MongoDb",
		image: "https://infinapps.com/wp-content/uploads/2018/10/mongodb-logo.png"
	},
	{
		id: 6,
		name: "NodeJs",
		image: "https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"
	}
];

const $$Astro = createAstro();
const $$Habilidades = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Habilidades;
  const { texts } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-12 astro-UJBAYLEJ">
  <article class="flex flex-col items-center gap-12 my-24 astro-UJBAYLEJ">
    <header class="text-center dark:text-white astro-UJBAYLEJ">
      <h3 class="font-extrabold opacity-70 text-2xl sm:text-4xl astro-UJBAYLEJ">${texts.languages}</h3>
      <p class="text-lg sm:text-xl max-w-md mt-4 opacity-70 astro-UJBAYLEJ">
        ${texts.about_languages}
      </p>
    </header>
    <main class="m-5 astro-UJBAYLEJ">
      <ul class="max-w-2xl grid gap-12 grid-cols-2 justify-items-center items-center md:gap-6 md:grid-cols-6 astro-UJBAYLEJ">
        ${Languages.map((item) => renderTemplate`<li class="inline-block astro-UJBAYLEJ">
              <div class="astro-UJBAYLEJ">
                
              </div>
            </li>`)}
      </ul>
    </main>
  </article>
  <article class="flex flex-col items-center gap-12 mb-24 astro-UJBAYLEJ">
    <header class="text-center dark:text-white astro-UJBAYLEJ">
      <h3 class="font-extrabold opacity-70 text-2xl sm:text-4xl astro-UJBAYLEJ">${texts.frameworks}</h3>
      <p class="text-lg sm:text-xl max-w-md mt-4 opacity-70 astro-UJBAYLEJ">
       ${texts.about_frameworks}
      </p>
    </header>

    <main class="m-5 h-auto astro-UJBAYLEJ">
      <ul class="max-w-2xl grid grid-flow-dense  justify-items-center items-center gap-12 md:gap-6 grid-cols-2 md:grid-cols-6 astro-UJBAYLEJ">
        ${Frameworks.map((item) => renderTemplate`<li class="inline-block astro-UJBAYLEJ">
             
            </li>`)}
      </ul>
    </main>
  </article>
</div>`;
}, "D:/Programming/portfolio/src/pages/habilidades.astro", void 0);

const $$file = "D:/Programming/portfolio/src/pages/habilidades.astro";
const $$url = "/habilidades";

const habilidades = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Habilidades,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { Frameworks as F, habilidades as h };
