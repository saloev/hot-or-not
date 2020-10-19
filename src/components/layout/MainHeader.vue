<template>
  <header class="main-header">
    <BaseContainer class="main-header__container">
      <BaseLogo />
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
}
</style>
