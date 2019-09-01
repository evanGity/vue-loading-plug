import Vue from 'vue'
import App from './App.vue'

import vueLoading from './lib/index.js'
Vue.use(vueLoading)

new Vue({
  el: '#app',
  render: h => h(App)
})
