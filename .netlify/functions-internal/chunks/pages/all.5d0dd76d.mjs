/* empty css                         */import { _ as __astro_tag_component__, c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent, e as renderSlot, f as renderHead } from '../astro.993b3295.mjs';
import 'html-escaper';
/* empty css                           *//* empty css                               *//* empty css                         *//* empty css                           *//* empty css                           */import { useState, useEffect } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';
/* empty css                                 *//* empty css                                 */import { Tooltip } from 'react-tooltip';
/* empty css                                 *//* empty css                               */import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
/* empty css                               *//* empty css                         *//* empty css                         *//* empty css                         */
function ToggleDarkBtn() {
  const [darkValue, setDarkValue] = useState(false);
  const toggleDarkMode = () => {
    const newValue = !darkValue;
    setDarkValue(newValue);
    localStorage.setItem("isDarkMode", newValue);
  };
  useEffect(() => {
    const savedValue = localStorage.getItem("isDarkMode");
    if (savedValue !== null) {
      setDarkValue(JSON.parse(savedValue));
    }
  }, []);
  useEffect(() => {
    if (darkValue) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkValue]);
  return /* @__PURE__ */ jsx("div", {
    children: /* @__PURE__ */ jsx("button", {
      className: "text-2xl hover:text-[var(--blue)] duration-200",
      "aria-label": "Dark Mode Button",
      onClick: toggleDarkMode,
      children: darkValue ? /* @__PURE__ */ jsx("i", {
        className: "ri-moon-line hover:text-[var(--blue)]"
      }) : /* @__PURE__ */ jsx("i", {
        className: "ri-sun-line"
      })
    })
  });
}
__astro_tag_component__(ToggleDarkBtn, "@astrojs/react");

const $$Astro$i = createAstro();
const $$LanguageButton = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$LanguageButton;
  const currentPath = Astro2.url.pathname;
  return renderTemplate`${maybeRenderHead($$result)}<div>
    <a class="bg-[#3450A2] dark:bg-[#3450A2] text-white dark:text-white px-4 py-2 cursor-pointer hover:ring-2 hover:ring-stone-300 dark:hover:ring-2 dark:hover:ring-white outline-none font-medium transition-all rounded-md"${addAttribute(currentPath === "/" ? "/en/" : "/", "href")}>${currentPath === "/" ? "English" : "Espa\xF1ol"}</a>
</div>`;
}, "D:/Programming/portfolio/src/components/LanguageButton.astro");

const emojiMio = "data:image/png;base64,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";

const $$Astro$h = createAstro();
const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Navbar;
  const { href, DvButtonText } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<header class="Navbar bg-white flex items-center flex-col gap-2 m-auto sm:flex-row sm:place-content-between max-w-6xl px-7 py-3 rounded-xl dark:text-white dark:bg-[#272D40] duration-300 astro-5BLMO7YK">
    <div class=" astro-5BLMO7YK">
        <a class="flex items-center font-bold text-2xl text-[var(--blue)] dark:text-white hover:skew-y-2 duration-300 astro-5BLMO7YK"${addAttribute(href, "href")}><img${addAttribute(emojiMio, "src")} alt="emoji face" class="astro-5BLMO7YK">Fran</a>
    </div>
    <div class="flex items-center gap-4 astro-5BLMO7YK">
        ${renderComponent($$result, "LanguageButton", $$LanguageButton, { "class": "astro-5BLMO7YK" })}
        ${renderComponent($$result, "ToggleDarkBtn", ToggleDarkBtn, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Programming/portfolio/src/components/ToggleDarkBtn", "client:component-export": "default", "class": "astro-5BLMO7YK" })}
    </div>

</header>`;
}, "D:/Programming/portfolio/src/components/Navbar.astro");

const HearthEmoji = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAYAAABiS3YzAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPeSURBVHgBpZNbaFxVFIb/vc9lLmmTdjptJ422UwuKBkFsBQ0oQlW0KgYqgg+O4JO+qVhEEFSkCEVffRBREKxaH+xDKahonCah9aEKja2iGMO0k3SaZCbJzLlflmufM2NjbxS6YOYsZq/z7X/9a43AqpgcyOyAFj2nS31I6nrd9cJP7m+5NVwS1YHsdl3GL4CoFIFq8M2PH7Dtud656CUTxcy+wVLp3eJjT2TydwwjPj+Lzvgxa+GP3/ffNj3/nqohrp/aumHfxu3ldwqje7NaaRDO6SksHDlsz9Vqb400w/cvKixkXp27706i748QTf5ENPEjP8eIjn5DXmUv/bVt/X5Vd2brwEedFyvp+ckTRKdOEv15muh4lWq7bqfJDdpTidKJItZmY3Nh+OXXzMymTUBMoDCEiELOY5YX48JXB3F2+u/PyrvuqRRHn1aK+U1uUmoQug4YBrzaDE59cKB+ounv0GNfH8lt2WiS4yDmAwQMC/wEjChKwAVlR3u50j90EyJuFwqkgJoEaZybBrRsHmsGBobuipaGdUga1MwMaHEe5HsQnpvCukD1lKy6uK0M2TjPAJOVMUhoDFZqJYTBv+X7kOtfg9xic7MeEtpxEAAry4ACqjxOgUJZwbmyQlMXaD4Q8ofVCW6fiJKnskD4LiR3GUhh664f/dxebCJYasFIWmY/2TWRLAZBJr5Suiack8+XyjBdBXU5n4FtAHfpt5pcE07pexyc+8Hwflmu1+82+/LQ1c3clhAymUX61Q0FJ2UNde1ReZwsZtBscZPBlyMraEpV60V4o3FhHm67jch1WI1qM+hOn7qTFulWE130vDdUHvISd+tE8YeKl0D3WOF3C5ZTbbSW4XQsxJ6X2JAoSRaIVv2fKFmzVGWEmO1oty00LPvQzlY4rir0XmknjN4817GPGaxHJrcJPpRphUin/J9qJVkNkYdqWQ5m2p2wZfuv91haL/k6RG1UIPCieHeue2Bwy1LtpKalUAVUYB4oOS46lo3pFRsNP3zlITv+9jKoikMhjT+p07ooontNpZQBphpaD4ou0HZhdWyc5bbrnv/2o53wwGrO/6CJvwFVWeJuSXRzAuU2UwdE4qFSaDFslqGzfnD4kXbw0qUMgSvEwbUo5sic3GJot5YyJtbzvyifNUGs2vJ8BjqsMDg+l3MfrjRgXRdUxdEC+qPA/HWzrt1S0DXk2duQlTd5jep++JvV9nY+wyt/pXevClXxxTqU+yJzrCBlOc8qO7y3rZj+WQr8B593Ubvae9eE9sCZwBgzBJUdEmeiKHj8WRczuNH4NIvy5zmtqp7XU/8vcXkcBZPOO7UAAAAASUVORK5CYII=";

const $$Astro$g = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead($$result)}<footer class="relative flex flex-col gap-4 p-16 justify-center items-center text-center h-82 w-full left-0 bottom-0 bg-[#F6F6F6] dark:text-white dark:bg-[var(--blue-deep)] duration-300 font-medium font-mono">
    <div>
        <p>
            made with love by <span class="text-blue-700 hover:text-blue-500 duration-300"><a href="https://www.linkedin.com/in/francisco-lencina/" target="_blank">@frannlencina</a></span>
        </p>
    </div>
    <div>
        <img${addAttribute(HearthEmoji, "src")} alt="" srcset="">
    </div>
</footer>`;
}, "D:/Programming/portfolio/src/components/Footer.astro");

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$f = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<html lang="es">\n	<head>\n		<meta charset="UTF-8">\n		<meta name="viewport" content="width=device-width, initial-scale=1.0">\n		<meta name="description" content="Author:Francisco Lencina, Category: Portfolio, Blog. Resume: Este es mi portafolio, donde te voy a mostrar mis habilidades y conocimientos.">\n		<meta name="theme-color" content="#317EFB">\n		<meta property="og:title" content="Francisco Lencina : Portfolio">\n		<meta property="og:type" content="website">\n		<meta property="og:url" content="https://franciscolencina.site">\n		<meta property="og:image" content="https://res.cloudinary.com/dctldwa03/image/upload/v1678214386/yo_dcvotu.png">\n		<meta property="og:image:secure_url" content="https://res.cloudinary.com/dctldwa03/image/upload/v1678214386/yo_dcvotu.png">\n		<meta property="og:image:type" content="image/png">\n		<meta property="og:image:width" content="400">\n		<meta property="og:image:height" content="300">\n		<link rel="icon" type="image/svg+xml" href="/favicon.png">\n		<link href="https://cdn.jsdelivr.net/npm/remixicon@2.2.0/fonts/remixicon.css" rel="stylesheet">\n\n		<link rel="manifest" href="../../manifest.json">\n		<!-- Google Analytics -->\n		<script async src="https://www.googletagmanager.com/gtag/js?id=G-VMWZH9EN3H"><\/script>\n		\n		<meta name="generator"', ">\n		<title>", "</title>\n	", '</head>\n	<body class="duration-300">\n		', "\n		", "\n		", "\n	\n</body></html>"])), addAttribute(Astro2.generator, "content"), title, renderHead($$result), renderComponent($$result, "Navbar", $$Navbar, { "DvButtonText": "Descargar CV", "href": "/" }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "D:/Programming/portfolio/src/layouts/Layout.astro");

const $$Astro$e = createAstro();
const $$Titles = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Titles;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div class="pt-24 text-center astro-YABRUMAR">
    <h2 class="title-gradient py-4 mb-8 dark:bg-gradient-to-r from-[var(--blue)] to-white astro-YABRUMAR">${title}</h2>
</div>`;
}, "D:/Programming/portfolio/src/components/Titles.astro");

const Curriculum = "/francisco-lencina-curriculum.pdf";

function DvButton(props) {
  return /* @__PURE__ */ jsx("div", {
    className: "hover:scale-105 transition duration-400",
    children: /* @__PURE__ */ jsxs("a", {
      className: "cvButton flex items-center gap-2 px-5 py-4 rounded-xl bg-[#344FA0] font-medium text-white sm:px-6 sm:py-3 sm:rounded-lg ",
      href: Curriculum,
      download: true,
      children: [props.text, /* @__PURE__ */ jsx("i", {
        className: "ri-file-download-line"
      })]
    })
  });
}
__astro_tag_component__(DvButton, "@astrojs/react");

const $$Astro$d = createAstro();
const $$SocialLine = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$SocialLine;
  return renderTemplate`${maybeRenderHead($$result)}<div class="hidden bottom-80 z-10 sm:flex flex-col justify-center items-center fixed right-6 lg:right-26 dark:text-white duration-300">
    <div class="text-3xl">
        <div>
            <a class="hover:text-[var(--blue)] duration-300 " href="mailto:franciscolencinap@gmai.com" aria-label="Gmail Button" target="_blank"><i class="ri-mail-line"></i></a>
        </div>
        <div class="hover:text-[var(--blue)] duration-300 ">
            <a class="hover:text-[var(--blue)] duration-300 " href="https://www.linkedin.com/in/francisco-lencina/" aria-label="Linkedin Button" target="_blank"><i class="ri-linkedin-fill"></i></a>
        </div>
        <div class="hover:text-[var(--blue)] duration-300 ">
            <a class="hover:text-[var(--blue)] duration-300 " href="https://github.com/frannlencina" aria-label="Github Button" target="_blank"><i class="ri-github-fill"></i></a>
        </div>
    </div>
</div>`;
}, "D:/Programming/portfolio/src/components/SocialLine.astro");

const EmojiMano = "data:image/png;base64,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";

const Frameworks = [
	{
		id: 1,
		name: "ViteJs",
		image: "https://res.cloudinary.com/dctldwa03/image/upload/v1678214386/vitejs-logo_fl5rei.png"
	},
	{
		id: 2,
		name: "TailwindCSS",
		image: "https://res.cloudinary.com/dctldwa03/image/upload/v1678214386/tailwindcss-logo_wjbz44.png"
	},
	{
		id: 3,
		name: "Bootstrap",
		image: "https://res.cloudinary.com/dctldwa03/image/upload/v1678214384/bootstrap-logo_l3jem4.png"
	},
	{
		id: 4,
		name: "Express",
		image: "https://res.cloudinary.com/dctldwa03/image/upload/v1686072541/expressjs_logo_icon_169185_ubeqry.png"
	},
	{
		id: 5,
		name: "Astro",
		image: "https://res.cloudinary.com/dctldwa03/image/upload/v1678214384/astrojs_xqbyuy.svg"
	},
	{
		id: 6,
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
		name: "ReactJs",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
	},
	{
		id: 5,
		name: "NodeJs",
		image: "https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"
	},
	{
		id: 6,
		name: "MongoDb",
		image: "https://infinapps.com/wp-content/uploads/2018/10/mongodb-logo.png"
	}
];

function SkillsImgs(props) {
  return /* @__PURE__ */ jsxs("div", {
    children: [/* @__PURE__ */ jsx("img", {
      className: "hover:scale-110 w-24 md:w-48",
      id: `not-clickable-${props.name}`,
      src: props.image,
      alt: props.name
    }), /* @__PURE__ */ jsx(Tooltip, {
      anchorSelect: `#not-clickable-${props.name}`,
      children: props.name
    })]
  });
}
__astro_tag_component__(SkillsImgs, "@astrojs/react");

const $$Astro$c = createAstro();
const $$Habilidades$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Habilidades$1;
  const { texts } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div class="flex flex-col gap-12 astro-UJBAYLEJ">
  <article class="flex flex-col items-center gap-12 my-24 astro-UJBAYLEJ">
    <header class="text-center dark:text-white astro-UJBAYLEJ">
      <h3 class="font-extrabold opacity-70 text-2xl sm:text-4xl astro-UJBAYLEJ">${texts.languages}</h3>
      <p class="text-lg max-w-md mt-4 opacity-70 astro-UJBAYLEJ">
        ${texts.about_languages}
      </p>
    </header>
    <main class="m-5 astro-UJBAYLEJ">
      <ul class="max-w-2xl justify-items-center items-center grid gap-12 grid-cols-2 md:gap-6 md:grid-cols-6 astro-UJBAYLEJ">
        ${Languages.map((item) => renderTemplate`<li class="inline-block astro-UJBAYLEJ">
              <div class="astro-UJBAYLEJ">
                ${renderComponent($$result, "SkillsImgs", SkillsImgs, { "name": item.name, "image": item.image, "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Programming/portfolio/src/components/SkillsImgs", "client:component-export": "default", "class": "astro-UJBAYLEJ" })}
              </div>
            </li>`)}
      </ul>
    </main>
  </article>
  <article class="flex flex-col items-center gap-12 mb-24 astro-UJBAYLEJ">
    <header class="text-center dark:text-white astro-UJBAYLEJ">
      <h3 class="font-extrabold opacity-70 text-2xl sm:text-4xl astro-UJBAYLEJ">${texts.frameworks}</h3>
      <p class="text-lg max-w-md mt-4 opacity-70 astro-UJBAYLEJ">
       ${texts.about_frameworks}
      </p>
    </header>

    <main class="m-5 h-auto astro-UJBAYLEJ">
      <ul class="max-w-2xl grid grid-flow-dense justify-items-center items-center gap-12 md:gap-6 grid-cols-2 md:grid-cols-6 astro-UJBAYLEJ">
        ${Frameworks.map((item) => renderTemplate`<li class="inline-block astro-UJBAYLEJ">
              ${renderComponent($$result, "SkillsImgs", SkillsImgs, { "name": item.name, "image": item.image, "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Programming/portfolio/src/components/SkillsImgs", "client:component-export": "default", "class": "astro-UJBAYLEJ" })}
            </li>`)}
      </ul>
    </main>
  </article>
</div>`;
}, "D:/Programming/portfolio/src/pages/habilidades.astro");

const $$file$9 = "D:/Programming/portfolio/src/pages/habilidades.astro";
const $$url$9 = "/habilidades";

const _page1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Habilidades$1,
  file: $$file$9,
  url: $$url$9
}, Symbol.toStringTag, { value: 'Module' }));

function Card(props) {
  return /* @__PURE__ */ jsxs("article", {
    className: "flex flex-col sm:flex-row bg-white dark:text-white dark:bg-[var(--blue-dark)] rounded-lg",
    children: [/* @__PURE__ */ jsx("aside", {
      className: "Image flex justify-center items-center w-1/2 m-4",
      children: /* @__PURE__ */ jsx("a", {
        href: props.website,
        target: "__blank",
        children: /* @__PURE__ */ jsx("img", {
          className: "rounded-md hover:opacity-60",
          src: props.image,
          alt: "Projects Preview Image"
        })
      })
    }), /* @__PURE__ */ jsxs("main", {
      id: "Body",
      className: "m-4 flex flex-col gap-y-4 sm:gap-y-0 justify-around",
      children: [/* @__PURE__ */ jsx("div", {
        className: "flex items-center",
        children: /* @__PURE__ */ jsxs("a", {
          href: props.website,
          className: "flex gap-1 text-start md:text-2xl font-black opacity-80 hover:border-b-4 border-gray-400 dark:text-white dark:opacity-100",
          target: "__blank",
          children: [props.title, /* @__PURE__ */ jsx("i", {
            className: "ri-external-link-line"
          })]
        })
      }), /* @__PURE__ */ jsx("div", {
        children: /* @__PURE__ */ jsx("p", {
          className: "text-start max-w-md break-normal md:text-lg font-mono dark:text-white dark:opacity-80",
          children: props.description
        })
      }), /* @__PURE__ */ jsxs("footer", {
        className: "footer w-full flex flex-col sm:flex-row sm:gap-0 gap-4",
        children: [/* @__PURE__ */ jsx("div", {
          id: "imagenes",
          className: "flex gap-3 w-full items-center",
          children: props.tech.map((url, id) => /* @__PURE__ */ jsx("img", {
            className: "tech hover:scale-105 duration-300 h-8",
            src: url,
            alt: "Tecnologia utilizada."
          }, id))
        }), /* @__PURE__ */ jsx("div", {
          className: "flex text-center justify-center font-medium bg-[var(--blue)] text-white dark:bg-[var(--blue-deep)] dark:hover:bg-[var(--blue)] rounded-md hover:bg-gray-800 cursor-pointer",
          children: /* @__PURE__ */ jsxs("a", {
            className: "flex py-2 px-6",
            href: props.language + `projects/` + props.slug,
            children: [props.text, /* @__PURE__ */ jsx("i", {
              className: "ri-arrow-right-line ml-1"
            })]
          })
        })]
      })]
    })]
  });
}
__astro_tag_component__(Card, "@astrojs/react");

const jsonData$1 = [
	{
		slug: "Keyswh",
		id: 1,
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
		slug: "SafePvP",
		id: 2,
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
	}
];

const $$Astro$b = createAstro();
const $$Proyectos$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Proyectos$1;
  return renderTemplate`${maybeRenderHead($$result)}<div class="md:py-24">
  <ul role="list" class="link-card-grid flex flex-col items-center sm:max-w-xl sm:mx-auto md:max-w-3xl">
  <li class="link-card flex flex-col items-end w-full gap-y-6">
    ${jsonData$1.map((item) => renderTemplate`${renderComponent($$result, "Card", Card, { "slug": item.slug, "title": item.title, "description": item.description, "about": item.about, "techSpecs": item.techSpecs, "image": item.image, "website": item.website, "tech": item.tech, "language": item.language, "text": "Detalles" })}`)}
    </li>
  </ul>
</div>`;
}, "D:/Programming/portfolio/src/pages/proyectos.astro");

const $$file$8 = "D:/Programming/portfolio/src/pages/proyectos.astro";
const $$url$8 = "/proyectos";

const _page2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Proyectos$1,
  file: $$file$8,
  url: $$url$8
}, Symbol.toStringTag, { value: 'Module' }));

const YoNoFondo = "https://res.cloudinary.com/dctldwa03/image/upload/v1686253685/yo-nofondo_erppxx.png";
function YoImg() {
  return /* @__PURE__ */ jsx("div", {
    children: /* @__PURE__ */ jsxs("div", {
      children: [/* @__PURE__ */ jsx("div", {
        className: "relative w-96 h-96 bg-[#ffff] dark:bg-[#1F293E] z-0 rounded-[50%]  duration-200"
      }), /* @__PURE__ */ jsx("img", {
        className: "relative w-96 h-full z-10 bottom-96",
        src: YoNoFondo,
        alt: ""
      })]
    })
  });
}
__astro_tag_component__(YoImg, "@astrojs/react");

const $$Astro$a = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Index$1;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Francisco Lencina : Portfolio", "class": "astro-J7PV25F6" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<main class="container max-w-5xl m-0 mx-auto p-6 astro-J7PV25F6">
		<div class="astro-J7PV25F6">
			<button class="fixed text-white bg-black hover:bg-[var(--blue)] p-3 text-lg right-4 sm:right-20 lg:right-82 bottom-16 z-20 border-none hover:duration-300 cursor-pointer outline-none border rounded-md dark:text-black dark:bg-white dark:hover:bg-[var(--blue)] astro-J7PV25F6" id="scrollBtn" title="Scroll to top"><i class="ri-arrow-up-line astro-J7PV25F6"></i></button>
		</div>
		<!-- PROFILE BACKGROUND TEXT -->

		<div class="PROFILE hidden 2xl:block absolute opacity-10 rotate-90 dark:text-blue-300 dark:opacity-10 overscroll-x-none astro-J7PV25F6">
			<h4 class="astro-J7PV25F6">PROFILE</h4>
		</div>

		<!-- PROFILE SECTION -->
		<section class="justify-center sm:flex sm:justify-between astro-J7PV25F6">
			<div class="astro-J7PV25F6">
				<div class="main-text dark:text-white duration-300 astro-J7PV25F6">
					<p class="hi-text text-xl mb-4 mt-10 astro-J7PV25F6">
						Hola! <img class="emojiImage hover:scale-110 cursor-pointer duration-300 astro-J7PV25F6"${addAttribute(EmojiMano, "src")} alt="emoji mano">, Soy
					</p>
					<div class="flex flex-col gap-2 sm:relative sm:-top-5 astro-J7PV25F6">
						<h2 class="Francisco text-4xl relative top-0 sm:text-6xl sm:top-5 md:text-7xl dark:bg-gradient-to-r from-[var(--blue)] to-white astro-J7PV25F6">
							Francisco
						</h2>
						<h2 class="Lencina inline-flex w-fit text-4xl relative -top-3 sm:text-6xl sm:top-0 md:text-7xl dark:bg-gradient-to-r from-[var(--blue-pastel)] to-[var(--blue)] astro-J7PV25F6">
							Lencina
						</h2>
					</div>
				</div>
				<div class="main-info max-w-sm mt-6 astro-J7PV25F6">
					<div class="astro-J7PV25F6">
						<p class="text-info mb-5 dark:text-white duration-300 astro-J7PV25F6">
							Tengo 19 años, vivo en Uruguay y soy Front End Developer. Autodidacta, apasionado por la tecnologia y el como esta desarrollada. Actualmente estudiando Tecnologo en Informatica.
						</p>
					</div>
					<div class="flex justify-start astro-J7PV25F6">
						${renderComponent($$result2, "DvButton", DvButton, { "text": "Descargar CV", "class": "astro-J7PV25F6" })}
					</div>
				</div>
			</div>
			<div class="flex justify-center mt-12 mb-24 p-6 astro-J7PV25F6">
				${renderComponent($$result2, "YoImg", YoImg, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Programming/portfolio/src/components/YoImg", "client:component-export": "default", "class": "astro-J7PV25F6" })}
			</div>
		</section>

		<!-- SCROLL DOWN BTN -->

		<div class="scrollDownBtn w-full flex justify-center scroll-mx-0 astro-J7PV25F6">
			<a class="text-6xl text-[var(--blue)] hover:text-black hover:scale-110 dark:hover:text-white duration-300 astro-J7PV25F6" aria-label="Scroll Down Button" href="#Habilidades"><i class="ri-arrow-down-s-line astro-J7PV25F6"></i></a>
		</div>

		<!-- SKILLS BACKGROUND TEXT -->

		<div class="SKILLS hidden 2xl:block absolute opacity-10 rotate-90 dark:text-blue-300 dark:opacity-10 scroll-mx-0 overscroll-x-none astro-J7PV25F6">
			<h4 class="astro-J7PV25F6">SKILLS</h4>
		</div>
		<!-- SKILLS SECTION TEXT -->

		<section id="Habilidades" class="mt-36 astro-J7PV25F6">
			${renderComponent($$result2, "Titles", $$Titles, { "title": "Habilidades", "class": "astro-J7PV25F6" })}
			${renderComponent($$result2, "Habilidades", $$Habilidades$1, { "texts": { about_frameworks: "Frameworks y herramientas de las cuales tengo conocimiento y utilizo.", about_languages: "Lenguajes y tecnologias de las cuales tengo conocimiento." }, "class": "astro-J7PV25F6" })}
		</section>

		<!-- PROJECTS BACKGROUND TEXT -->

		<div class="PROJECTS hidden 2xl:block absolute opacity-10 rotate-90 dark:text-blue-300 dark:opacity-10 scroll-mx-0 overscroll-x-none astro-J7PV25F6">
			<h4 class="astro-J7PV25F6">PROJECTS</h4>
		</div>

		<!-- PROJECTS SECTION TEXT -->

		<section id="Proyectos" class="astro-J7PV25F6">
			${renderComponent($$result2, "Titles", $$Titles, { "title": "Proyectos", "class": "astro-J7PV25F6" })}
			${renderComponent($$result2, "Proyectos", $$Proyectos$1, { "class": "astro-J7PV25F6" })}
		</section>

		<!-- ASIDE SOCIAL -->

		<aside class="astro-J7PV25F6">
			${renderComponent($$result2, "SocialLine", $$SocialLine, { "class": "astro-J7PV25F6" })}
		</aside>
	</main>` })}`;
}, "D:/Programming/portfolio/src/pages/index.astro");

const $$file$7 = "D:/Programming/portfolio/src/pages/index.astro";
const $$url$7 = "";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$7,
  url: $$url$7
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$9 = createAstro();
const $$Post = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Post;
  const { title, description, image } = Astro2.props;
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
		
		<title>${title}</title>
	${renderHead($$result)}</head>
	<body class="duration-300">
		${renderComponent($$result, "Navbar", $$Navbar, { "href": "/" })}
		<main class="container max-w-3xl mx-auto h-fit dark:text-white">
			${renderSlot($$result, $$slots["default"])}
		</main>
		${renderComponent($$result, "Footer", $$Footer, {})}
	
</body></html>`;
}, "D:/Programming/portfolio/src/layouts/Post.astro");

function Slider(props) {
  return /* @__PURE__ */ jsx("div", {
    className: "container mt-8 w-5/6 mx-auto",
    children: /* @__PURE__ */ jsx(Swiper, {
      modules: [Navigation, Pagination, A11y],
      spaceBetween: 50,
      slidesPerView: 1,
      navigation: true,
      pagination: {
        clickable: true
      },
      children: props.screens.map((url) => /* @__PURE__ */ jsxs(SwiperSlide, {
        children: [" ", /* @__PURE__ */ jsx("img", {
          className: "object-cover",
          src: url,
          alt: "Tecnologia utilizada."
        }), " "]
      }))
    })
  });
}
__astro_tag_component__(Slider, "@astrojs/react");

const $$Astro$8 = createAstro();
const $$$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$$1;
  const pages = jsonData$1;
  const { slug } = Astro2.params;
  const page = pages.find((page2) => page2.slug === slug);
  if (!page)
    return Astro2.redirect("/404");
  const { title, description, image, about, techSpecs, website, screens, tech } = page;
  return renderTemplate`${renderComponent($$result, "Post", $$Post, { "title": "Francisco Lencina : Project", "description": description, "image": image, "class": "astro-5UQ7EVLV" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<h1 class="text-center font-bold text-6xl pt-12 text-[#3450A2] dark:text-[#3450A2] astro-5UQ7EVLV">
        ${title}
    </h1>${renderComponent($$result2, "Slider", Slider, { "screens": screens, "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Programming/portfolio/src/components/Slider", "client:component-export": "default", "class": "astro-5UQ7EVLV" })}<div class="flex mx-auto max-w-2xl justify-between items-center px-5 astro-5UQ7EVLV">
        <a class="flex gap-4 mt-4 py-2 rounded font-medium text-lg text-black dark:text-white hover:translate-x-[-8px] transition-all duration-200 dark:hover:translate-x-[-8px] opacity-80 hover:opacity-100 astro-5UQ7EVLV" href="/">
            <i class="ri-arrow-left-line astro-5UQ7EVLV"></i> Volver al inicio</a>

        <a class="flex gap-2 mt-4 px-5 py-2 font-medium text-black text-[var(--blue-dark)] rounded-md transition-all duration-200 opacity-70 hover:translate-x-[8px] hover:opacity-100 dark:text-white astro-5UQ7EVLV"${addAttribute(website, "href")} target="__blank">
            <i class="ri-movie-line dark:text-white astro-5UQ7EVLV"></i>
            <span class="inline-block h-[2] min-h-[1em] w-0.5 self-stretch bg-[var(--blue-dark)] astro-5UQ7EVLV">
            </span> Ver Demo
        </a>
    </div><section class="p-10 mx-auto max-w-3xl astro-5UQ7EVLV">
        <h2 class="text-start font-bold text-4xl text-[#3450A2] dark:text-[#3450A2] astro-5UQ7EVLV">
            Sobre el Proyecto
        </h2>
        <p class="text-start p-6 text-xl sm:text-2xl dark:text-white opacity-80 astro-5UQ7EVLV">
            ${about}
        </p>
    </section><section class="p-10 mx-auto max-w-3xl text-start astro-5UQ7EVLV">
        <!--  <Titles title="Tecnologias"/> -->
        <h2 class="text-start font-bold text-4xl text-[#3450A2] dark:text-[#3450A2] astro-5UQ7EVLV">
            Tecnologias
        </h2>
        <p class="text-start text-xl sm:text-2xl dark:text-white p-6 opacity-80 astro-5UQ7EVLV">
            ${techSpecs}
        </p>
    </section><section class="flex justify-center items-center gap-6 pt-8 pb-12 astro-5UQ7EVLV">
        ${tech.map((url) => renderTemplate`<img class="mt-8 mx-2 h-12 astro-5UQ7EVLV"${addAttribute(url, "src")} alt="Tecnologia utilizada.">`)}
    </section>` })}`;
}, "D:/Programming/portfolio/src/pages/projects/[...slug].astro");

const $$file$6 = "D:/Programming/portfolio/src/pages/projects/[...slug].astro";
const $$url$6 = "/projects/[...slug]";

const _page3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$$1,
  file: $$file$6,
  url: $$url$6
}, Symbol.toStringTag, { value: 'Module' }));

const ErrorImg = "/_astro/404error.f19b1d24.png";

const $$Astro$7 = createAstro();
const $$404$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$404$1;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Portfolio - 404 Error", "class": "astro-ZETDM5MD" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<main class="container h-screen mx-auto astro-ZETDM5MD">
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
		</main>` })}
	`;
}, "D:/Programming/portfolio/src/pages/404.astro");

const $$file$5 = "D:/Programming/portfolio/src/pages/404.astro";
const $$url$5 = "/404";

const _page4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404$1,
  file: $$file$5,
  url: $$url$5
}, Symbol.toStringTag, { value: 'Module' }));

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$6 = createAstro();
const $$LayoutEn = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$LayoutEn;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="es">\n	<head>\n		<meta charset="UTF-8">\n		<meta name="viewport" content="width=device-width, initial-scale=1.0">\n		<meta name="description" content="Author:Francisco Lencina, Category: Portfolio, Blog. Resume: Este es mi portafolio, donde te voy a mostrar mis habilidades y conocimientos.">\n		<meta name="theme-color" content="#317EFB">\n		<meta property="og:title" content="Francisco Lencina : Portfolio">\n		<meta property="og:type" content="website">\n		<meta property="og:url" content="https://franciscolencina.site">\n		<meta property="og:image" content="https://res.cloudinary.com/dctldwa03/image/upload/v1678214386/yo_dcvotu.png">\n		<meta property="og:image:secure_url" content="https://res.cloudinary.com/dctldwa03/image/upload/v1678214386/yo_dcvotu.png">\n		<meta property="og:image:type" content="image/png">\n		<meta property="og:image:width" content="400">\n		<meta property="og:image:height" content="300">\n		<link rel="icon" type="image/svg+xml" href="/favicon.png">\n		<link href="https://cdn.jsdelivr.net/npm/remixicon@2.2.0/fonts/remixicon.css" rel="stylesheet">\n\n		<link rel="manifest" href="../../manifest.json">\n		<!-- Google Analytics -->\n		<script async src="https://www.googletagmanager.com/gtag/js?id=G-VMWZH9EN3H"><\/script>\n		\n		<meta name="generator"', ">\n		<title>", "</title>\n	", '</head>\n	<body class="duration-300">\n		', "\n		", "\n		", "\n	\n</body></html>"])), addAttribute(Astro2.generator, "content"), title, renderHead($$result), renderComponent($$result, "Navbar", $$Navbar, { "href": "/en/" }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "D:/Programming/portfolio/src/layouts/LayoutEn.astro");

const jsonData = [
	{
		slug: "Keyswh",
		id: 1,
		title: "Keyswh",
		about: "Keyswh is currently in beta, it was created with the aim of creating a community of people with a love for the same hobby. The page has sections, Guides and News. I will control these sections from an Admin Dashboard with an exclusive Login for Administrators. Where you can add, delete and edit posts.",
		techSpecs: "The application is divided into two parts, the FrontEnd and the BackEnd. In the FrontEnd the page was developed with ReactJS as the JS framework and Tailwind CSS as the CSS framework. In the BackEnd the page is Developed with Node Js and Express to manage requests to the server and Mongoose to connect to MongoDb. Also use tools like JSONWebToken for authentication and Middelware in route requests.",
		description: "Keyswh is a mechanical keyboard community, where you can see guides, news and learn about them.",
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
		language: "/en/"
	},
	{
		slug: "SafePvP",
		id: 2,
		title: "SafePvP",
		about: "SafePvP was the official page of a successful Minecraft video game server. Where users could enter said page, copy the IP, see the number of players online in real time, see the rules or simply go to the server store. There were also sections where the current modalities of the season were shown and information about them.",
		techSpecs: "The page was created with React Js as the JS Framework, with Tailwind CSS as the CSS Framework, and with the ViteJS build tool. It was planned, designed and structured before said development in Figma. The page also worked with an API where data was extracted to see the number of online players in real time.",
		description: "SafePvP is the official page about a former video game server.",
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
		language: "/en/"
	}
];

const $$Astro$5 = createAstro();
const $$Proyectos = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Proyectos;
  return renderTemplate`${maybeRenderHead($$result)}<div class="md:py-24">
  <ul role="list" class="link-card-grid flex flex-col items-center sm:max-w-xl sm:mx-auto md:max-w-3xl">
  <li class="link-card flex flex-col items-end w-full gap-y-6">
    ${jsonData.map((item) => renderTemplate`${renderComponent($$result, "Card", Card, { "slug": item.slug, "title": item.title, "description": item.description, "about": item.about, "techSpecs": item.techSpecs, "image": item.image, "website": item.website, "tech": item.tech, "language": item.language, "text": "Details" })}`)}
    </li>
  </ul>
</div>`;
}, "D:/Programming/portfolio/src/pages/en/proyectos.astro");

const $$file$4 = "D:/Programming/portfolio/src/pages/en/proyectos.astro";
const $$url$4 = "/en/proyectos";

const _page7 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Proyectos,
  file: $$file$4,
  url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$4 = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$LayoutEn, { "title": "Francisco Lencina : Portfolio", "class": "astro-DHFOTATX" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<main class="container max-w-5xl m-0 mx-auto p-6 astro-DHFOTATX">
		<div class="astro-DHFOTATX">
			<button class="fixed text-white bg-black hover:bg-[var(--blue)] p-3 text-lg right-4 sm:right-20 lg:right-82 bottom-16 z-20 border-none hover:duration-300 cursor-pointer outline-none border rounded-md dark:text-black dark:bg-white dark:hover:bg-[var(--blue)] astro-DHFOTATX" id="scrollBtn" title="Scroll to top"><i class="ri-arrow-up-line astro-DHFOTATX"></i></button>
		</div>
		<!-- PROFILE BACKGROUND TEXT -->

		<div class="PROFILE hidden 2xl:block absolute opacity-10 rotate-90 dark:text-blue-300 dark:opacity-10 overscroll-x-none astro-DHFOTATX">
			<h4 class="astro-DHFOTATX">PROFILE</h4>
		</div>

		<!-- PROFILE SECTION -->

		<section class="justify-center sm:flex sm:justify-between astro-DHFOTATX">
			<div class="astro-DHFOTATX">
				<div class="main-text dark:text-white duration-300 astro-DHFOTATX">
					<p class="hi-text text-xl mb-4 mt-10 astro-DHFOTATX">
						Hi! <img class="emojiImage hover:scale-110 cursor-pointer duration-300 astro-DHFOTATX"${addAttribute(EmojiMano, "src")} alt="emoji mano">, Im
					</p>
					<div class="flex flex-col gap-2 sm:relative sm:-top-5 astro-DHFOTATX">
						<h2 class="Francisco text-4xl relative top-0 sm:text-6xl sm:top-5 md:text-7xl dark:bg-gradient-to-r from-[var(--blue)] to-white astro-DHFOTATX">
							Francisco
						</h2>
						<h2 class="Lencina inline-flex w-fit text-4xl relative -top-3 sm:text-6xl sm:top-0 md:text-7xl dark:bg-gradient-to-r from-[var(--blue-pastel)] to-[var(--blue)] astro-DHFOTATX">
							Lencina
						</h2>
					</div>
				</div>
				<div class="main-info max-w-sm mt-6 astro-DHFOTATX">
					<div class="astro-DHFOTATX">
						<p class="text-info mb-5 dark:text-white duration-300 astro-DHFOTATX">
							I am 19 years old, I live in Uruguay and I am a Front End Developer. Self-taught, passionate about technology and how it is developed. Currently studying Computer Technology.
						</p>
					</div>
					<div class="flex justify-start astro-DHFOTATX">
						${renderComponent($$result2, "DvButton", DvButton, { "text": "Download CV", "class": "astro-DHFOTATX" })}
					</div>
				</div>
			</div>
			<div class="flex justify-center mt-12 mb-24 p-6 astro-DHFOTATX">
				${renderComponent($$result2, "YoImg", YoImg, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Programming/portfolio/src/components/YoImg", "client:component-export": "default", "class": "astro-DHFOTATX" })}
			</div>
		</section>

		<!-- SCROLL DOWN BTN -->

		<div class="scrollDownBtn w-full flex justify-center scroll-mx-0 astro-DHFOTATX">
			<a class="text-6xl text-[var(--blue)] hover:text-black hover:scale-110 dark:hover:text-white duration-300 astro-DHFOTATX" aria-label="Scroll Down Button" href="#Habilidades"><i class="ri-arrow-down-s-line astro-DHFOTATX"></i></a>
		</div>

		<!-- SKILLS BACKGROUND TEXT -->

		<div class="SKILLS hidden 2xl:block absolute opacity-10 rotate-90 dark:text-blue-300 dark:opacity-10 scroll-mx-0 overscroll-x-none astro-DHFOTATX">
			<h4 class="astro-DHFOTATX">SKILLS</h4>
		</div>

		<!-- SKILLS SECTION TEXT -->

		<section id="Habilidades" class="mt-36 astro-DHFOTATX">
			${renderComponent($$result2, "Titles", $$Titles, { "title": "Skills", "class": "astro-DHFOTATX" })}
			${renderComponent($$result2, "Habilidades", $$Habilidades$1, { "texts": { languages: "Languages", frameworks: "Frameworks", about_frameworks: "Frameworks and tools that I am aware of and use.", about_languages: "Languages \u200B\u200Band technologies of which I have knowledge." }, "class": "astro-DHFOTATX" })}
		</section>

		<!-- PROJECTS BACKGROUND TEXT -->

		<div class="PROJECTS hidden 2xl:block absolute opacity-10 rotate-90 dark:text-blue-300 dark:opacity-10 scroll-mx-0 overscroll-x-none astro-DHFOTATX">
			<h4 class="astro-DHFOTATX">PROJECTS</h4>
		</div>

		<!-- PROJECTS SECTION TEXT -->

		<section id="Proyectos" class="astro-DHFOTATX">
			${renderComponent($$result2, "Titles", $$Titles, { "title": "Projects", "class": "astro-DHFOTATX" })}
			${renderComponent($$result2, "Proyectos", $$Proyectos, { "class": "astro-DHFOTATX" })}
		</section>

		<!-- ASIDE SOCIAL -->

		<aside class="astro-DHFOTATX">
			${renderComponent($$result2, "SocialLine", $$SocialLine, { "class": "astro-DHFOTATX" })}
		</aside>
	</main>` })}`;
}, "D:/Programming/portfolio/src/pages/en/index.astro");

const $$file$3 = "D:/Programming/portfolio/src/pages/en/index.astro";
const $$url$3 = "/en";

const _page5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file$3,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$3 = createAstro();
const $$Habilidades = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Habilidades;
  const { texts } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div class="flex flex-col gap-12 astro-4V67VQFQ">
  <article class="flex flex-col items-center gap-12 my-24 astro-4V67VQFQ">
    <header class="text-center dark:text-white astro-4V67VQFQ">
      <h3 class="font-extrabold opacity-70 text-2xl sm:text-4xl astro-4V67VQFQ">${texts.languages}</h3>
      <p class="text-lg max-w-md mt-4 opacity-70 astro-4V67VQFQ">
        ${texts.about_languages}
      </p>
    </header>
    <main class="m-5 astro-4V67VQFQ">
      <ul class="max-w-2xl justify-items-center items-center grid gap-12 grid-cols-2 md:gap-6 md:grid-cols-6 astro-4V67VQFQ">
        ${Languages.map((item) => renderTemplate`<li class="inline-block astro-4V67VQFQ">
              <div class="astro-4V67VQFQ">
                ${renderComponent($$result, "SkillsImgs", SkillsImgs, { "name": item.name, "image": item.image, "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Programming/portfolio/src/components/SkillsImgs", "client:component-export": "default", "class": "astro-4V67VQFQ" })}
              </div>
            </li>`)}
      </ul>
    </main>
  </article>
  <article class="flex flex-col items-center gap-12 mb-24 astro-4V67VQFQ">
    <header class="text-center dark:text-white astro-4V67VQFQ">
      <h3 class="font-extrabold opacity-70 text-2xl sm:text-4xl astro-4V67VQFQ">${texts.frameworks}</h3>
      <p class="text-lg max-w-md mt-4 opacity-70 astro-4V67VQFQ">
        ${texts.about_frameworks}
      </p>
    </header>
    <main class="m-5 h-auto astro-4V67VQFQ">
      <ul class="max-w-2xl grid grid-flow-dense justify-items-center items-center gap-12 md:gap-6 grid-cols-2 md:grid-cols-6 astro-4V67VQFQ">
        ${Frameworks.map((item) => renderTemplate`<li class="inline-block astro-4V67VQFQ">
              ${renderComponent($$result, "SkillsImgs", SkillsImgs, { "name": item.name, "image": item.image, "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Programming/portfolio/src/components/SkillsImgs", "client:component-export": "default", "class": "astro-4V67VQFQ" })}
            </li>`)}
      </ul>
    </main>
  </article>
</div>`;
}, "D:/Programming/portfolio/src/pages/en/habilidades.astro");

const $$file$2 = "D:/Programming/portfolio/src/pages/en/habilidades.astro";
const $$url$2 = "/en/habilidades";

const _page6 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Habilidades,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro();
const $$PostEn = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PostEn;
  const { title, description, image } = Astro2.props;
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
		
		<title>${title}</title>
	${renderHead($$result)}</head>
	<body class="duration-300">
		${renderComponent($$result, "Navbar", $$Navbar, { "href": "/en/" })}
		<main class="container max-w-3xl mx-auto h-fit dark:text-white">
			${renderSlot($$result, $$slots["default"])}
		</main>
		${renderComponent($$result, "Footer", $$Footer, {})}
	
</body></html>`;
}, "D:/Programming/portfolio/src/layouts/PostEn.astro");

const $$Astro$1 = createAstro();
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$;
  const pages = jsonData;
  const { slug } = Astro2.params;
  const page = pages.find((page2) => page2.slug === slug);
  if (!page)
    return Astro2.redirect("/404");
  const { title, description, image, about, techSpecs, website, screens, tech } = page;
  return renderTemplate`${renderComponent($$result, "Post", $$PostEn, { "title": "Francisco Lencina : Project", "description": description, "image": image, "class": "astro-TQKDYVAB" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<h1 class="text-center font-bold text-6xl pt-12 text-[#3450A2] dark:text-[#3450A2] astro-TQKDYVAB">
        ${title}
    </h1>${renderComponent($$result2, "Slider", Slider, { "screens": screens, "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/Programming/portfolio/src/components/Slider", "client:component-export": "default", "class": "astro-TQKDYVAB" })}<div class="flex mx-auto max-w-2xl justify-between items-center px-5 astro-TQKDYVAB">
        <a class="flex gap-4 mt-4 py-2 rounded font-medium text-lg text-black dark:text-white hover:translate-x-[-8px] transition-all duration-200 dark:hover:translate-x-[-8px] opacity-80 hover:opacity-100 astro-TQKDYVAB" href="/">
            <i class="ri-arrow-left-line astro-TQKDYVAB"></i> Home</a>

        <a class="flex gap-2 mt-4 px-5 py-2 font-medium text-black text-[var(--blue-dark)] rounded-md transition-all duration-200 opacity-70 hover:translate-x-[8px] hover:opacity-100 dark:text-white astro-TQKDYVAB"${addAttribute(website, "href")} target="__blank">
            <i class="ri-movie-line dark:text-white astro-TQKDYVAB"></i>
            <span class="inline-block h-[2] min-h-[1em] w-0.5 self-stretch bg-[var(--blue-dark)] astro-TQKDYVAB">
            </span> Demo
        </a>
    </div><section class="p-10 mx-auto max-w-3xl astro-TQKDYVAB">
        <h2 class="text-start font-bold text-4xl text-[#3450A2] dark:text-[#3450A2] astro-TQKDYVAB">
            About the project
        </h2>
        <p class="text-start p-6 text-xl sm:text-2xl dark:text-white opacity-80 astro-TQKDYVAB">
            ${about}
        </p>
    </section><section class="p-10 mx-auto max-w-3xl text-start astro-TQKDYVAB">
        <!--  <Titles title="Tecnologias"/> -->
        <h2 class="text-start font-bold text-4xl text-[#3450A2] dark:text-[#3450A2] astro-TQKDYVAB">
        Technologies
        </h2>
        <p class="text-start text-xl sm:text-2xl dark:text-white p-6 opacity-80 astro-TQKDYVAB">
            ${techSpecs}
        </p>
    </section><section class="flex justify-center items-center gap-6 pt-8 pb-12 astro-TQKDYVAB">
        ${tech.map((url) => renderTemplate`<img class="mt-8 mx-2 h-12 astro-TQKDYVAB"${addAttribute(url, "src")} alt="Technology used">`)}
    </section>` })}`;
}, "D:/Programming/portfolio/src/pages/en/projects/[...slug].astro");

const $$file$1 = "D:/Programming/portfolio/src/pages/en/projects/[...slug].astro";
const $$url$1 = "/en/projects/[...slug]";

const _page8 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Portfolio - 404 Error", "class": "astro-OGE2CCOV" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<main class="container h-screen mx-auto astro-OGE2CCOV">
			<div class="Error  astro-OGE2CCOV">
				<img class="mx-auto astro-OGE2CCOV"${addAttribute(ErrorImg, "src")} alt="Error 404 Image">
			</div>
			<div class="errorText p-4 relative top-[-90px] sm:top-[-120px]  flex-col text-center items-center justify-center astro-OGE2CCOV">
				<div class="block text-center mt-4 astro-OGE2CCOV">
					<h2 class="title-gradient dark:bg-gradient-to-r from-[var(--blue)] to-white astro-OGE2CCOV">
						ERROR
					</h2>
				</div>
				<p class="text-2xl mx-auto max-w-xl opacity-80 dark:text-white astro-OGE2CCOV">
					Oops!, La pagina que estas buscando no se pudo encontrar.
				</p>
				<div class="my-6 astro-OGE2CCOV">
					<a class="max-w-fit gap-2 px-5 py-4 rounded-xl bg-[#344FA0] font-medium text-white sm:px-6 sm:py-3 sm:rounded-lg hover:text-black duration-200 hover:scale-105 astro-OGE2CCOV" href="/">
						<i class="ri-arrow-left-line relative top-0.5 astro-OGE2CCOV"></i> Back to home
					</a>
				</div>
			</div>
		</main>` })}
	`;
}, "D:/Programming/portfolio/src/pages/en/404.astro");

const $$file = "D:/Programming/portfolio/src/pages/en/404.astro";
const $$url = "/en/404";

const _page9 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page0 as _, _page1 as a, _page2 as b, _page3 as c, _page4 as d, _page5 as e, _page6 as f, _page7 as g, _page8 as h, _page9 as i };
