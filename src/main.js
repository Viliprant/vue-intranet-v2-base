import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import router from './router';
import Vuelidate from 'vuelidate';
import Toasted from 'vue-toasted';

Vue.use(VueRouter);
Vue.use(Vuelidate);
Vue.use(Toasted,{
  duration: 5000
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
