import App from './App.vue'
import store from './store/index'
import router from './router'
import Vue from 'vue'
import vuetify from './plugins/vuetify'


Vue.config.productionTip = false

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
