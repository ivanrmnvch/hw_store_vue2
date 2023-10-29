<template>
  <MainLayout />
</template>
<script>
import { mapActions } from 'vuex';
import MainLayout from './layout/MainLayout.vue';

export default {
  name: 'App',
  components: {
    MainLayout,
  },
  mounted() {
    this.getAuthToken();
  },
  methods: {
    ...mapActions('auth', [
      'getAuthToken',
    ]),
  },
};
</script>
