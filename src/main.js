import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import router from './router';
import Vuelidate from 'vuelidate';
import Toasted from 'vue-toasted';
import Material from 'material-icons';

Vue.use(VueRouter);
Vue.use(Vuelidate);
Vue.use(Toasted,{
  iconPack : Material,
  duration: 5000,
  closeButton : true
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
