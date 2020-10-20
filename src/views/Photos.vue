<template>
  <BasePageWrapper title="Like Or Dislike photos"
    title-align="center" content-space="30px 0 0 0" display="block">
    <PhotoList :list="photoList" />
  </BasePageWrapper>
</template>
<script>
import { mapGetters } from "vuex";

import PhotoList from "@/components/pages/PhotosList.vue";

/**
 * Not using in data because we don't need reactivity
 */
const SCROLL_DELAY = 100;

let settimeouteId = null;
let locked = false;
let mainWrapper = null;
let currentPage = 1;

export default {
  name: "Photos",

  components: {
    PhotoList,
  },

  computed: {
    ...mapGetters(["photoList"]),
  },

  methods: {
    loadMore() {
      currentPage += 1;
      this.$store.dispatch("fetchPhotoList", { gender: this.$route.params.gender, page: currentPage });
    },
    onScroll() {
      if (locked) return;

      if (settimeouteId) clearTimeout(settimeouteId);
      settimeouteId = setTimeout(() => {
        const isEndOfScroll = (
          mainWrapper.offsetHeight + mainWrapper.scrollTop >= mainWrapper.scrollHeight
        );
        if (isEndOfScroll) this.loadMore();
        locked = false;
      }, SCROLL_DELAY);

      locked = true;
    },
  },

  mounted() {
    mainWrapper = document.querySelector(".main-layout__content");
    this.onScroll();
    mainWrapper.addEventListener("scroll", this.onScroll);
  },

  destroyed() {
    mainWrapper.removeEventListener("scroll", this.onScroll);
  },
};
</script>
