<template>
  <div class="base-container">
    <slot />
  </div>
</template>
<script>
export default {
  name: "BaseContainer",
};
</script>
<style lang="scss">
.base-container {
  max-width: $container-max-width;
  margin: 0 auto;
}
</style>
