<template>
  <header
    class="app-center header-wrapper"
  >
    <div class="content">
      <form
        class="content-item"
        method="GET"
        action="products"
      >
        <button
          class="content-item__title"
        >
          {{ getLangText('header.title') }}
        </button>
      </form>
      <div
        class="content-item"
        style="justify-content: end;"
      >
        <h4
          v-if="user"
          class="header__user-name"
        >
          {{ `Hello ${user}!` }}
        </h4>
        <div
          v-if="user"
          class="row"
          style="position: relative;"
        >
          <button
            class="header-btn-wrapper ml-4"
            @click="$router.push({ name: 'Basket' })"
          >
            <div class="img-box">
              <img
                class="image-btn image-wrapper img-box"
                src="../../../public/icons/cart-shopping-svgrepo-com.svg"
              >
            </div>
            <div class="counter">
              {{ '1' }}
            </div>
          </button>
          <button
            class="header-btn-wrapper ml-5"
            @click="$router.push({ name: 'Profile' })"
          >
            <div class="img-box">
              <img
                class="image-btn image-wrapper img-box"
                src="../../../public/icons/profile-round-1342-svgrepo-com.svg"
              >
            </div>
          </button>
        </div>
        <button
          class="ml-4"
          :class="getLoginBtnClass"
          @click="loginActions"
        >
          {{ getBtnText }}
        </button>
      </div>
    </div>
  </header>
</template>
<script>
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  name: 'MainHeader',
  computed: {
    ...mapState('auth', [
      'user',
    ]),
    getLoginBtnClass() {
      return this.user
        ? 'logout-btn'
        : 'login-btn';
    },
    getBtnText() {
      return this.user
        ? this.getLangText('header.btnLogout')
        : this.getLangText('header.btnLogin');
    },
  },
  methods: {
    ...mapActions(['logout']),
    ...mapMutations(['SET_DATA']),
    loginActions() {
      if (this.user) {
        this.logout();
      } else {
        this.SET_DATA({ field: 'viewModalLogin', value: true });
      }
    },
  },
};
</script>
<style scoped lang="sass">
.header-btn-wrapper
  border: none
  background-color: #e5e5e5
.img-box
  height: 25px
  width: 25px
.content
  display: flex
  flex-direction: row
  justify-content: space-between
  width: 800px

.content-item
  display: flex
  align-items: center

.content-item__title
  color: gray
  cursor: pointer
  border: none
  background-color: #e5e5e5
  font-size: 20px
  font-weight: bold

.header-wrapper
  height: 40px
  background-color: #e5e5e5
  color: #fff
  position: fixed
  top: 0
  left: 0
  width: 100%
  z-index: 1

.header__user-name
  color: black

.counter
  color: black
  background-color: white
  height: 16px
  width: 16px
  border-radius: 8px
  text-align: center
  position: absolute
  top: 13px
  left: 38px
  border: 1px solid black

.login-btn
  border: none
  border-radius: 3px
  cursor: pointer
  color: white
  font-size: 16px
  background-color: #4c9a50
  padding: 5px 20px

.login-btn:hover
  background-color: #45a049

.login-btn:active
  background-color: #51be56

.logout-btn
  border: none
  border-radius: 3px
  cursor: pointer
  color: white
  font-size: 16px
  background-color: #ce35c8
  padding: 5px 20px

.logout-btn:hover
  background-color: #bf44ba

.logout-btn:active
  background-color: #a643a1

</style>
