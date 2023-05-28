import { ThemeDefinition, createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const lightTheme: ThemeDefinition = {
    dark: false,
    colors: {
        background: '#FFFFFF',
        surface: '#fbfbf2',
        primary: '#008bf8',
        secondary: '#52b788',
        error: '#df2935',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
    }
}

const darkTheme: ThemeDefinition = {
    dark: true,
    colors: {
        background: '#10002b',
        surface: '#240046',
        primary: '#7b2cbf',
        secondary: '#9d4edd',
        error: '#df2935',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
    }
}

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        ssr: true,
        components,
        directives,
        theme: {
            defaultTheme: "lightTheme",
            themes: {
                lightTheme,
                darkTheme
            }
        }
    })

    nuxtApp.vueApp.use(vuetify)
})