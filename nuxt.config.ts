// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        '@nuxtjs/i18n',
        '@nuxtjs/google-fonts',
    ],
    i18n:{
        locales: [
            {
                code: 'en-US',
                iso: 'en-US',
                file: 'en-US.json',
                name: 'English',
            },
            {
                code: 'pt-BR',
                iso: 'pt-BR',
                file: 'pt-BR.json',
                name: 'Português',
            },
        ],
        defaultLocale: 'en-US',
        langDir: 'lang',
        lazy: true,
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_language',
        }
    },
    googleFonts: {
        families: {
            Poppins: true,
            Lato: true,
        },
        display: 'swap',
        download: true,
        stylePath: 'assets/css/google-fonts.css',
        fontsDir: 'assets/fonts',
    }
})
