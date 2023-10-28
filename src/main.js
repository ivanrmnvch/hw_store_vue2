import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';

// import './assets/sass/index.sass';


Vue.config.productionTip = false;
const initApp = async () => {
  Vue.config.productionTip = false;

  // await store.dispatch('init');

  // router.addRoutes(store.state.routes);

  new Vue({
    store,
    router,
    render: (h) => h(App),
  }).$mount('#app');
};

initApp();
