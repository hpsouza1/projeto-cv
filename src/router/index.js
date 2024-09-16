import Vue from 'vue';
import Router from 'vue-router';
import FormView from '../views/FormView.vue';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'Form',
    component: FormView
  }
];

const router = new Router({
  mode: 'history',
  routes
});

export default router;
