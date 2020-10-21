<template>
  <div class="main-layout">
    <MainHeader class="main-layout__header" />
    <main class="main-layout__content">
      <transition name="fade">
        <router-view />
      </transition>
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
  max-height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template-rows: 40px calc(100vh - 2 * 40px) 40px;

  @include media('sm-and-up') {
    grid-template-rows: 80px calc(100vh - 2 * 80px) 80px;
  }

  &__header,
  &__footer {
    display: flex;
    align-items: center;

    text-align: center;
    color: $white;
    box-shadow: 0 0 3px $error;
  }

  &__content {
    overflow-y: auto;
    overflow-x: hidden;
  }
}
</style>
