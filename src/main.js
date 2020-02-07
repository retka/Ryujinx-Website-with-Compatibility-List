import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { appOptions, head }) {
  // First inject custom CSS needed
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
  })

  head.link.push({
    rel: 'stylesheet',
    href: 'https://use.fontawesome.com/releases/v5.0.13/css/all.css'
  })

  // Remove the generator tag
  const gIndex = head.meta.findIndex(e => e.name === 'generator')
  if (gIndex !== -1) head.meta.splice(gIndex, 1)

  const opts = {
    theme: {
		  ryu_blue: '#00C4E1',
		  ryu_orange: '#FF5E5B'
    }
  } //opts includes, vuetify themes, icons, etc.

  Vue.use(Vuetify, opts)

  // Disable production tip
  Vue.config.productionTip = false;

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
