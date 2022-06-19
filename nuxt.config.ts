import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
  meta: {
    htmlAttrs: {
      lang: 'pt-BR',
    },
    charset: 'utf-8',
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Boilerplate Nuxt3',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700&display=swap',
      },
    ],
  },

  css: ['@/assets/css/main.css'],

  components: {
    dirs: ['~/components/Atoms'],
  },

  modules: ['@vueuse/nuxt'],

  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
});
