import Vue from 'vue'
import App from './App.vue'
import {StoreEntry} from './store/entry'

Vue.config.productionTip = false

new Vue({
  StoreEntry,
  render: h => h(App),
}).$mount('#app')
