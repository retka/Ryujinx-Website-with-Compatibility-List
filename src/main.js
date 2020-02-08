import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import DefaultLayout from '~/layouts/Default.vue'
import SEO from '~/components/SEO.vue'


export default function (Vue, { appOptions, router, head }) {
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

  // Remove the description tag as we generate a custom one in SEO
  const dIndex = head.meta.findIndex(e => e.name === 'description')
  if (dIndex !== -1) head.meta.splice(dIndex, 1)

  // For Google Search Console
  head.meta.push({
    name: "google-site-verification",
    content: "6-jOQTZMaaKrCTbkRoghe5Pd1kbYhyGpOTAgUhoT9HA"
  })

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

  // Set the SEO component
  Vue.component('SEO', SEO)
}
