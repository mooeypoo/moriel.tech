import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import '~/assets/css/general.scss'
import '~/assets/css/era1989.scss'
import '~/assets/css/era1992.scss'
import '~/assets/css/era1997.scss'
import '~/assets/css/era2000.scss'
import '~/assets/css/era2012.scss'
import '~/assets/css/era2021.scss'
import '~/assets/css/era2100.scss'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Vuetify 3 theme colors (matching original V2 palette)
const darkTheme = {
  dark: true,
  colors: {
    primary: '#1565C0',
    accent: '#424242',
    secondary: '#FF8F00',
    info: '#4DB6AC',
    warning: '#FFC107',
    error: '#FF5722',
    success: '#69F0AE',
  },
}

const lightTheme = {
  dark: false,
  colors: {
    primary: '#1565C0',
    accent: '#424242',
    secondary: '#FF8F00',
    info: '#4DB6AC',
    warning: '#FFC107',
    error: '#FF5722',
    success: '#69F0AE',
  },
}

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'dark',
      themes: {
        dark: darkTheme,
        light: lightTheme,
      },
    },
  })
  nuxtApp.vueApp.use(vuetify)
})
