// change to typescript module
export default [
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
       directives: {
              'connect-src': ["'self'", 'https:'],
              'img-src': ["*"],
              'media-src': ["*"],
              upgradeInsecureRequests: null,
            },
    },
  },
  {
    name: "strapi::compression",
    config: {
      br: true,
      gzip: true,
    },
  },
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
