/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead } from '../astro.baf78597.mjs';
import 'html-escaper';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';

const $$Astro = createAstro();
const $$Proyectos = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Proyectos;
  return renderTemplate`${maybeRenderHead()}<div class="md:py-24">
  <ul role="list" class="link-card-grid flex flex-col items-center sm:max-w-xl sm:mx-auto md:max-w-3xl">
  <li class="link-card flex flex-col-reverse items-end w-full gap-y-6">
    <!-- {
      Data.map((item) => (
        <Card
          slug={item.slug}
          title={item.title}
          description={item.description}
          about={item.about}
          techSpecs={item.techSpecs}
          image={item.image}
          website={item.website}
          tech={item.tech}
          language={item.language}
          text="Detalles"
        />
      ))
    } -->
    </li>
  </ul>
</div>`;
}, "D:/Programming/portfolio/src/pages/proyectos.astro", void 0);

const $$file = "D:/Programming/portfolio/src/pages/proyectos.astro";
const $$url = "/proyectos";

export { $$Proyectos as default, $$file as file, $$url as url };
