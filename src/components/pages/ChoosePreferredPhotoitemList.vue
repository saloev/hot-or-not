<template>
  <ul class="reset--list-style card-list">
    <li v-for="{ id, gender } in list" :key="id" class="card-list__item">
      <CardItem :gender="gender" class="card-list__link" />
    </li>
  </ul>
</template>
<script>
import CardItem from "./ChoosePreferredPhotoitem.vue";

export default {
  name: "ChoosePreferredPhotoitemList",

  components: {
    CardItem,
  },

  props: {
    list: {
      type: Array,
      default() {
        return [
          {
            id: 1,
            gender: "man",
          },
          {
            id: 2,
            gender: "woman",
          },
        ];
      },
    },
  },
};
</script>
<style lang="scss">
.card-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: $default-block-space;

}
</style>
