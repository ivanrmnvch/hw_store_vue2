import Vue from 'vue';
import VueRouter from 'vue-router';

import StorePage from '../modules/store/pages/StorePage.vue';
import ProfilePage from '../modules/profile/pages/ProfilePage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/profile',
    name: 'Profile',
    component: ProfilePage,
  },
  {
    path: '/',
    name: 'Store',
    component: StorePage,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
