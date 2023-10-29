<template>
  <section
    v-if="viewModalLogin"
    class="container"
  >
    <div class="title">
      <input
        class="btn-return"
        value="X"
        @click="$router.push({ name: 'Store' })"
      >
      <h2>Authorization</h2>
    </div>
    <div class="form-group">
      <div class="group-item">
        <div>
          <label for="username">Login</label>
        </div>
        <div>
          <input
            type="text"
            required
            :value="modalLogin.login"
            @input="(value) => SET_MODAL({ field: 'login', value: value.target.value })"
          >
        </div>
      </div>
      <div class="group-item">
        <div>
          <label for="password">Pass</label>
        </div>
        <div>
          <input
            type="password"
            required
            :value="modalLogin.password"
            @input="(value) => SET_MODAL({ field: 'password', value: value.target.value })"
          >
        </div>
      </div>
    </div>
    <div class="auth-btn-green">
      <button
        class="btn btn-green"
        @click="auth"
      >
        {{ getLangText('loginForm.btnSing') }}
      </button>
    </div>
    <button
      class="btn btn-purple"
      @click="openRegistrationForm"
    >
      {{ getLangText('loginForm.btnReg') }}
    </button>
  </section>
</template>
<script>
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  name: 'MainLoginForm',
  computed: {
    ...mapState([
      'viewModalLogin',
      'modalLogin',
    ]),
  },
  methods: {
    ...mapActions(['authorization']),
    ...mapMutations([
      'SET_MODAL',
      'SET_DATA',
    ]),
    openRegistrationForm() {
      this.SET_DATA({ field: 'viewModalRegistration', value: true });
      this.SET_DATA({ field: 'viewModalLogin', value: false });
    },
    async auth() {
      await this.authorization();
    },
  },
};
</script>
<style lang="sass" scoped>
.title
  display: flex
  flex-direction: column

body
  font-family: Arial, sans-serif
  background-color: #f2f2f2
  margin: 0
  padding: 0
  display: flex
  justify-content: center
  align-items: center
  min-height: 100vh

.container
  background-color: #fff
  border-radius: 5px
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3)
  padding: 20px
  width: 300px
  position: absolute
  left: calc(80% / 2)
  top: calc(70% /2)

.auth-btn-green
  margin-bottom: 10px

h2
  margin-top: 0
  text-align: center

.form-group
  display: flex
  flex-direction: column

.group-item
  display: flex
  flex-direction: row
  justify-content: space-between
  align-items: center
  margin-bottom: 10px

label
  font-weight: bold
  cursor: pointer

input[type="text"]
  width: 200px
  padding: 10px
  border-radius: 3px
  border: 1px solid #ccc
input[type="password"]
  width: 200px
  padding: 10px
  border-radius: 3px
  border: 1px solid #ccc
</style>
