import Vue from 'vue'
import App from './App.vue'

import MiniLyUI from '../../minily-ui'
import "./minily-ui/lib/main.css";
Vue.use(MiniLyUI);

new Vue({
  el: '#app',
  render: h => h(App)
})
