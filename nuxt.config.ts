// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	ssr: true,
	srcDir: 'src',
	app: {
		head: {
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1',
			title: 'AMI - Anonymus Messanger Incognito',
			link: [
				{
					href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap',
					rel: 'stylesheet'
				}
			]
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
			baseSocketApi: ''
		}
	},
	css: [
		'vuetify/lib/styles/main.sass',
		'@mdi/font/css/materialdesignicons.min.css'
	],
	modules: ['@pinia/nuxt', 'nuxt-vitest', '@nuxtjs/eslint-module'],
	build: {
		transpile: ['vuetify']
	},
	vite: {
		define: {
			'process.env.DEBUG': false
		}
	}
});
