<template>
  <router-link to="/" class="base-logo">Hot Or Not</router-link>
</template>
<script>
export default {
  name: "BaseLogo",
};
</script>
<style lang="scss">
.base-logo {
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
</style>
