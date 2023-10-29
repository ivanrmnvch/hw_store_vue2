<template>
  <section
    v-if="viewModalRegistration"
  />
</template>
<script>
import { mapState } from 'vuex';

export default {
  name: 'MainRegistrationForm',
  computed: {
    ...mapState(['viewModalRegistration']),
  },
};
</script>
