<template>
  <section>
    <div :style="`height: ${iconHeight}px; width: ${iconWidth}px;`">
      <img
        :class="getImageClass"
        :style="`height: ${iconHeight}px; width: ${iconWidth}px;`"
        :src="imagePath"
      >
    </div>
  </section>
</template>
<script>
export default {
  name: 'ImageWrapper',
  props: {
    iconHeight: {
      type: String,
      default: '25',
    },
    iconWidth: {
      type: String,
      default: '25',
    },
    imageIsBtn: {
      type: Boolean,
      default: false,
    },
    imagePath: {
      type: String,
      default: '',
    },
  },
  computed: {
    getImageClass() {
      return this.imageIsBtn
        ? 'image-wrapper image-btn'
        : 'image-wrapper';
    },
  },
};
</script>
