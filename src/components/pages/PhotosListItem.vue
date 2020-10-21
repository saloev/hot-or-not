<template>
  <div class="photo-list__item photo-item">
    <img :src="image.src" :alt="image.alt" :data-id="image.id" class="photo-item__img" />
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: Object,
      validator(val) {
        const mustContains = ["id", "src", "alt"];
        return Object.keys(val).every((key) => mustContains.includes(key));
      },
      required: true,
    },
  },
};
</script>
<style lang="scss">
.photo-item {
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  box-shadow: 0 0 4px $primary;
  border-radius: 5px;

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
}
</style>
