<template>
  <header class="main-header">
    <BaseContainer class="main-header__container">
      <router-link to="/" class="main-header__logo-text">Hot Or Not</router-link>
    </BaseContainer>
  </header>
</template>
<script>
export default {
  name: "MainHeader",
};
</script>
<style lang="scss">
.main-header {
  background: linear-gradient(90deg, $primary 0%, $secondary 54%);
  &__container {
    padding: $default-block-space;

    text-align: center;
  }

  &__logo-text {
    font-size: 30px;
    line-height: 1.2;
    font-weight: bold;
    text-decoration: none;
    text-transform: capitalize;
    color: $white;

    @include transition();

    &:hover,
    &:focus {
      opacity: 0.8;
    }
  }
}
</style>
