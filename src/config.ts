import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://astro-paper.pages.dev/", // replace this with your deployed domain
  author: "Developer Marcell",
  desc: "nerd navegante, um blog minimalista sobre programação.",
  title: "Nerd Navegante",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOCALE = {
  lang: "pt", // html lang code. Set this empty and default will be "en"
  langTag: ["pt-br"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/marcelldac",
    linkTitle: ` Marcell no Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/marcell-dactes/",
    linkTitle: `Marcell no LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:devmarcell@gmail.com",
    linkTitle: `Envie uma mensagem.`,
    active: false,
  },
];
