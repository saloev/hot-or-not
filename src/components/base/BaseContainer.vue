<template>
  <div :class="classes">
    <slot />
  </div>
</template>
<script>
export default {
  name: "BaseContainer",
  props: {
    flex: {
      type: Boolean,
      default: false,
    },
    "justify-center": {
      type: Boolean,
      default: false,
    },
    "align-center": {
      type: Boolean,
      default: false,
    },
    "no-space": {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    classes() {
      return {
        "base-container": true,
        "base-container--flex": this.isFlex,
        "base-container--justify-center": this.justifyCenter,
        "base-container--align-center": this.alignCenter,
        "base-container--no-space": this.noSpace,
      };
    },
  },
};
</script>
<style lang="scss">
.base-container {
  max-width: $container-max-width;
  margin: 0 auto;
  padding: 0 $default-block-space;

  &--flex {
    display: flex;
  }

  &--justify-center {
    justify-content: center;
  }

  &--align-center {
    align-items: center;
  }

  &--no-space {
    padding: 0;
  }
}
</style>
