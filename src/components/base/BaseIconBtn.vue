<template>
  <button class="base-icon-btn">
    <span class="base-icon-btn__icon-wrap"><slot /></span>
    <span class="visually-hidden">{{ a11y }}</span>
  </button>
</template>
<script>
export default {
  name: "BaseIconBtn",

  props: {
    a11y: {
      type: String,
      default: "Button with icon",
    },
  },
};
</script>
<style lang="scss">
.base-icon-btn {
  padding: 0;
  outline: none;
  border: none;
  background: transparent;

  &__icon-wrap {
    width: 100%;
  }

  @include transition();

  &:hover {
    opacity: 0.7;
  }
}
</style>
