<template>
  <footer class="main-footer">
    <BaseContainer class="main-footer__container">
      <p class="main-footer__info">&copy; {{ currentYear }} &mdash; by SS</p>
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
}
</style>
