import Vue from 'vue'
import App from './App.vue'
import xcxerxesVueSlider from 'xcxerxes-vue-slider'

Vue.component(xcxerxesVueSlider.name, xcxerxesVueSlider)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
