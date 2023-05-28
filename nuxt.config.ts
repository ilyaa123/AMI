// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            link: [
                {href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap', rel: 'stylesheet'}
            ]
        }
    },
    css: ['vuetify/lib/styles/main.sass'],
    modules: [
        '@pinia/nuxt',
        'nuxt-vitest'
    ],
    build: {
        transpile: ['vuetify'],
    },
    vite: {
        define: {
            'process.env.DEBUG': false,
        },
    },
})
