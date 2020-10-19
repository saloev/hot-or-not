<template>
  <div class="main-layout">
    <MainHeader class="main-layout__header" />
    <main class="main-layout__content">
      <router-view />
    </main>
    <MainFooter class="main-layout__footer" />
  </div>
</template>
<script>
import MainFooter from "@/components/layout/MainFooter.vue";
import MainHeader from "@/components/layout/MainHeader.vue";

export default {
  components: {
    MainFooter,
    MainHeader,
  },
};
</script>
<style lang="scss">
.main-layout {
  min-height: 100vh;
  display: grid;
  grid-template-rows: 80px auto 80px;

  &__header,
  &__footer {
    display: flex;
    align-items: center;

    text-align: center;
    color: $white;
    box-shadow: 0 0 3px $error;
  }
}
</style>
