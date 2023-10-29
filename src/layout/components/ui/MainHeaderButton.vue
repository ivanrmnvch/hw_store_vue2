<template>
  <section>
    <form
      th:fragment="headerBtn(action, imagePath)"
      th:action="${action}"
      method="GET"
    >
      <button class="header-btn-wrapper ml-4">
        <!--        todo путь к картинке с бека-->
        <ImageWrapper
          image-path=""
          image-is-btn
        />
      </button>
    </form>
  </section>
</template>
<script>
import ImageWrapper from '../../../components/common/ImageWrapper.vue';

export default {
  name: 'MainHeaderButton',
  components: {
    ImageWrapper,
  },

};
</script>
