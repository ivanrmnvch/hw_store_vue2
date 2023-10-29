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
        <!--      <h4-->
        <!--        class="header__user-name"-->
        <!--        th:text="${user.getText()}"-->
        <!--      >-->
        <!-- </h4>     ${user.getText()}-->

        <!--      th:if="${user.getUserIsAuthorized()}"-->
        <div
          th:if="${true}"
        >
          <div
            class="row"
            style="position: relative;"
          >
            <div
              th:replace="~{fragments/common/header/components/header_btn :: headerBtn(
            ${'basket'},
            ${'/icons/cart-shopping-svgrepo-com.svg'}
          )}"
            />
            <!--          <div class="counter">${cart.getCount()}</div>-->
            <div
              th:text="${4}"
              class="counter"
            />
            <div
              th:replace="~{fragments/common/header/components/header_btn :: headerBtn(
            ${'profile'},
            ${'/icons/profile-round-1342-svgrepo-com.svg'}
          )}"
            />
          </div>
        </div>
        <form
          class="ml-4 reset"
          method="GET"
          th:action="'test'"
        >
          <button
            class="${className}"
            type="submit"
            th:text="${'btnName'}"
          />
        </form>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: 'MainHeader',

};
</script>
<style scoped lang="sass">
.header-btn-wrapper
  border: none
  background-color: #e5e5e5
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
