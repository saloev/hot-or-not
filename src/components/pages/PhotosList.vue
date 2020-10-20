<template>
  <ul class="reset--list-style photos-list">
    <li class="photos-list__item" v-for="image in list" :key="image.id">
      <PhotoItem :image="image" />
    </li>
  </ul>
</template>
<script>
import PhotoItem from "./PhotosListItem.vue";

export default {
  name: "PhotosList",

  components: {
    PhotoItem,
  },

  props: {
    list: {
      type: Array,
      validator(val) {
        const mustContains = ["id", "src", "alt"];
        return val.every((item) => Object.keys(item).every((key) => mustContains.includes(key)));
      },
      required: true,
    },
  },

  mounted() {
    console.log(this.list);
  },
};
</script>
<style lang="scss">
.photos-list {
  display: grid;
  grid-row-gap: 40px
}
</style>
