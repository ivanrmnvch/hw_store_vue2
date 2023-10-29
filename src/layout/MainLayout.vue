<template>
  <section>
    <MainHeader />
    <div>
      MainLayout
    </div>
    <router-view />
    <MainLoginForm />
    <MainRegistrationForm />
  </section>
</template>
<script>
import MainRegistrationForm from './components/modals/MainRegistrationForm.vue';
import MainLoginForm from './components/modals/MainLoginForm.vue';
import MainHeader from './components/MainHeader.vue';

export default {
  name: 'MainLayout',
  components: {
    MainRegistrationForm,
    MainLoginForm,
    MainHeader,
  },
};
</script>
