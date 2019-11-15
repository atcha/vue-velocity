import Vue from 'vue'
import App from './App.vue';
import { Icon } from 'leaflet';
import '@/assets/css/tailwind.css';
import 'leaflet/dist/leaflet.css';

import router from './router'

Vue.config.productionTip = false


// this part resolve an issue where the markers would not appear
delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')



