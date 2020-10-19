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
  grid-template-columns: 1fr;
  grid-template-rows: 80px auto 80px;
  // grid-template-areas:
  //   "header"
  //   "main"
  //   "main"
  //   "main"
  //   "footer";

  // &__header {
  //   grid-area: header;
  // }

  // &__content {
  //   grid-area: main;
  // }

  // &__footer {
  //   grid-area: footer;
  // }
}
</style>
