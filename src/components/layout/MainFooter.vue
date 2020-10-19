<template>
  <footer class="main-footer">
    <BaseContainer class="main-footer__container">
      <p>&copy; {{ currentYear }} &mdash;  by SS</p>
    </BaseContainer>
  </footer>
</template>
<script>
export default {
  name: "MainFooter",

  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>
<style lang="scss">
.main-footer {
  background: linear-gradient(90deg, $secondary 0%, $primary 54%);
  &__container {
    padding: $default-block-space;

    text-align: center;
    color: $white;
  }
}
</style>
