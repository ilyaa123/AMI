// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            link: [
                {href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap', rel: 'stylesheet'}
            ],
            title: 'AMI - Anonymus Messanger Incognito'
        },
        pageTransition: {
            name: 'page',
            mode: 'out-in'
        },
        layoutTransition: {
            name: 'layout',
            mode: 'out-in'
        }
    },
    runtimeConfig: {
        public: {
            baseUrlApi: ''
        }
    },
    css: ['vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.min.css'],
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
