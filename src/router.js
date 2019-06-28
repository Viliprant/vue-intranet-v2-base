import VueRouter from 'vue-router';
import Home from './components/Home';
import List from './components/List';
import Add from './components/Add';
import Edit from './components/Edit';

const routes = [
    { path: '/', component: Home },
    { path: '/users', component: List },
   { path: '/add', component: Add },
   { path: '/edit/:id', component: Edit }
    //{ path: '/user/:id', component: User }
 ];
 
 const router = new VueRouter({
    routes
 });
 
 export default router