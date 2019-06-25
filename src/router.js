import VueRouter from 'vue-router';
import Home from './components/Home';
import List from './components/List';

const routes = [
    { path: '/', component: Home },
    { path: '/users', component: List }
    //{ path: '/user/:id', component: User }
 ];
 
 const router = new VueRouter({
    routes
 });
 
 export default router