import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '~/external/fontawesome/css/fontawesome-all.css'
import DefaultLayout from '~/layouts/Default.vue'
import SEO from '~/components/SEO.vue'

export default function (Vue, { appOptions, head }) {
  // First inject custom CSS needed
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap'
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
      themes: {
        light: {
          ryu_blue: '#00C4E1',
          ryu_orange: '#FF5E5B',
        },
        dark: {
          ryu_blue: '#00C4E1',
          ryu_orange: '#FF5E5B',
        }
      }
    },
    icons: {
      iconfont: 'fa',
    },
  } //opts includes, vuetify themes, icons, etc.

  Vue.use(Vuetify)

  appOptions.vuetify = new Vuetify(opts);

  // Disable production tip
  //Vue.config.productionTip = false;

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  // Set the SEO component
  Vue.component('SEO', SEO)
}
