import Vue from 'vue'
import App from './App.vue'
import store from './store'

import VModal from 'vue-js-modal'
import VueMq from 'vue-mq'

Vue.config.productionTip = false

Vue.use(VModal, { dynamic: true, injectModalsContainer: true })
Vue.use(VueMq, {
  breakpoints: { // default breakpoints - customize this
    sm: 576,
    md: 768,
    lg: 992,
    xl: 100
  },
  defaultBreakpoint: 'sm' // customize this for SSR
})

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
