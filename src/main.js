import Vue from 'vue';
import vuetify from './plugins/vuetify';
import App from './App.vue';
import store from './store';
import router from './router';

import mixins from './utils/globalContext/mixins';
import './assets/sass/index.sass';

Vue.config.productionTip = false;
const initApp = async () => {
  Vue.config.productionTip = false;

  Vue.mixin({
    methods: {
      ...mixins,
    },
  });

  // await store.dispatch('init');

  // router.addRoutes(store.state.routes);

  await store.dispatch('auth/checkToken', { router });

  new Vue({
    store,
    router,
    vuetify,
    render: (h) => h(App),
  }).$mount('#app');
};

initApp();
