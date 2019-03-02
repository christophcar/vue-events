// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BaseImage from '@/components/BaseImage/BaseImage.vue'
import Navigation from '@/components/Navigation/Navigation.vue'

// globally registered component
Vue.component('BaseImage', BaseImage)
Vue.component('Navigation', Navigation)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
