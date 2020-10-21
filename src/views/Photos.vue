<template>
  <BasePageWrapper
    title-align="center" content-space="" display="block">
    <PhotoList :images="normalizeList" @remove-first="removeFirstPhoto"/>
  </BasePageWrapper>
</template>
<script>
import { mapGetters } from "vuex";

import PhotoList from "@/components/pages/PhotosList.vue";

/**
 * Not using in data because we don't need reactivity
 */
let currentPage = 1;

export default {
  name: "Photos",

  components: {
    PhotoList,
  },

  computed: {
    ...mapGetters(["photoList"]),

    /* disable camelcase cause alt description is API property and we can't change it   */
    /* eslint camelcase: "off" */
    normalizeList() {
      return this.photoList.map(
        ({ id, urls: { raw }, alt_description }) => ({
          id, src: raw, alt: alt_description,
        }),
      );
    },
  },

  methods: {
    loadMore() {
      if (this.photoList.length > 2) return new Promise((resolve) => resolve("not need to load new data"));

      currentPage += 1;
      return this.$store.dispatch("fetchPhotoList", { gender: this.$route.params.gender, page: currentPage });
    },
    removeFirstPhoto() {
      this.loadMore().then(() => {
        this.$store.commit("setState", { key: "photoList", value: this.photoList.slice(1) });
      }).catch((e) => {
        console.error(e);
      });
    },

  },

  mounted() {
  },
};
</script>
