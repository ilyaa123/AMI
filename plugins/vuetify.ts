import { ThemeDefinition, createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { mdi, aliases } from 'vuetify/iconsets/mdi';

const lightTheme: ThemeDefinition = {
    dark: false,
    colors: {
        background: '#FFFFFF',
        surface: '#F7F7F7',
        primary: '#0052CC',
        secondary: '#00B894',
        error: '#E71D36',
        info: '#3498DB',
        success: '#27AE60',
        warning: '#F39C12',
    }
}

const darkTheme: ThemeDefinition = {
    dark: true,
    colors: {
        background: '#1C1C1C',
        surface: '#272727',
        primary: '#4D78FF',
        secondary: '#9F7DFF',
        error: '#FF5252',
        info: '#32B8FF',
        success: '#4CD964',
        warning: '#FFA809',
    }
}

export default defineNuxtPlugin((nuxtApp) => {
	const vuetify = createVuetify({
		ssr: true,
		components,
		directives,
		theme: {
			defaultTheme: 'darkTheme',
			themes: {
				lightTheme,
				darkTheme
			}
		},
		icons: {
			defaultSet: 'mdi',
			aliases,
			sets: {
				mdi
			}
		}
	});

	nuxtApp.vueApp.use(vuetify);
});
