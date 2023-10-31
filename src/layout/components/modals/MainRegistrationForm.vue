<template>
  <section
    v-if="viewModalRegistration"
    class="class-main-registration-for"
  >
    <div class="container">
      <div class="form-group">
        <div class="form-group__row">
          <input
            class="btn-back"
            value="<"
            @click="returnLoginForm"
          >
          <input
            class="btn-return"
            value="X"
            @click="closeModal"
          >
        </div>
        <h2>Registration</h2>
      </div>
      <form
        action="registration"
        method="post"
      >
        <div class="form-group">
          <div class="group-item">
            <div>
              <label for="email">Email</label>
            </div>
            <div>
              <input
                :value="modalRegistration.email"
                type="email"
                required
              >
            </div>
          </div>
          <div class="group-item">
            <div>
              <label for="username">Login</label>
            </div>
            <div>
              <input
                :value="modalRegistration.login"
                type="text"
                required
              >
            </div>
          </div>
          <div class="group-item">
            <div>
              <label for="password">Pass</label>
            </div>
            <div>
              <input
                :value="modalRegistration.password"
                type="password"
                required
              >
            </div>
          </div>
        </div>
        <button
          class="btn btn-green"
          @click="{}"
        >
          Create an account
        </button>
        <!--        <jsp:include page="../ui/buttons/btn.html.jsp">-->
        <!--          <jsp:param-->
        <!--            name="btnText"-->
        <!--            value="Create an account"-->
        <!--          />-->
        <!--          <jsp:param-->
        <!--            name="btnStyle"-->
        <!--            value="green"-->
        <!--          />-->
        <!--        </jsp:include>-->
      </form>
    </div>
  </section>
</template>
<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'MainRegistrationForm',
  computed: {
    ...mapState([
      'viewModalRegistration',
      'modalRegistration',
    ]),
  },
  methods: {
    ...mapMutations(['SET_DATA']),
    returnLoginForm() {
      this.SET_DATA({ field: 'viewModalRegistration', value: false });
      this.SET_DATA({ field: 'viewModalLogin', value: true });
    },
    closeModal() {
      this.SET_DATA({ field: 'viewModalRegistration', value: false });
      const { name } = this.$route;
      if (name !== 'Store') {
        this.$router.push({ name: 'Store' });
      }
    },
  },
};
</script>
<style scoped lang="sass">
.main-registration-form
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

h2
  margin: 0 0 20px 0
  text-align: center

.form-group
  display: flex
  flex-direction: column

.form-group__row
  display: flex
  justify-content: space-between
  align-items: center

.group-item
  display: flex
  flex-direction: row
  justify-content: space-between
  align-items: center
  margin-bottom: 10px

label
  font-weight: bold
  cursor: pointer

input[type="email"],
input[type="text"],
input[type="password"]
  width: 200px
  padding: 10px
  border-radius: 3px
  border: 1px solid #ccc

</style>
