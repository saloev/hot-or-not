<template>
  <article class="base-page-wrapper" :style="setCSSVars">
    <BaseContainer no-space>
      <h1 :class="titleClasses" v-if="String"> {{ title }}</h1>
      <section class="base-page-wrapper__section">
        <slot />
      </section>
    </BaseContainer>
  </article>
</template>
<script>
export default {
  name: "BasePageWrapper",

  props: {
    // for article
    // padding
    "wrapper-space": {
      type: String,
    },
    background: {
      type: String,
    },

    // for title
    title: {
      type: String,
      default: "",
    },
    // text-aling
    "title-align": {
      type: String,
    },
    "title-mb": {
      type: String,
    },
    "title-color": {
      type: String,
    },

    // for section
    // padding
    "content-space": {
      type: String,
    },
  },

  computed: {
    titleClasses() {
      return {
        "base-page-wrapper__title": true,
      };
    },
    /**
     * Set scoped CSS variables
     */
    setCSSVars() {
      return {
        "--title-mb": this.titleMb,
        "--title-color": this.titleColor,
        "--title-align": this.titleAlign,
        "--content-space": this.contentSpace,
        "--wrapper-space": this.wrapperSpace,
        "--background": this.background,
      };
    },
  },
};
</script>
<style lang="scss">
.base-page-wrapper {
  height: 100%;
  padding: var(--wraper-space, $default-block-space);

  background: val(--background, $accent);

  &__title {
    margin: 0;
    margin-bottom: var(--title-mb, $default-block-space);

    font-size: 25px;
    line-height: 1.5;
    text-align: var(--title-align, 'left');
    color: var(--title-color, $black);
  }

  &__section {
    margin: 0;
    padding: var(--content-space, 0);
  }
}
</style>
