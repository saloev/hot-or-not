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
  },

  computed: {
    classes() {
      return {
        "base-container": true,
        "base-container--flex": this.isFlex,
        "base-container--justify-center": this.justifyCenter,
        "base-container--align-center": this.alignCenter,
      };
    },
  },
};
</script>
<style lang="scss">
.base-container {
  max-width: $container-max-width;
  margin: 0 auto;

  &--flex {
    display: flex;
  }

  &--justify-center {
    justify-content: center;
  }

  &--align-center {
    align-items: center;
  }
}
</style>
