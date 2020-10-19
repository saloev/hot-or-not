<template>
  <router-link :to="link" class="gender-card" :title="gender">
    <img :src="require(`@/assets/icons/${gender}.svg`)"
      :alt="`${gender} icon`"
      class="gender-card__image" />
      <span class="visually-hidden">{{ gender }}</span>
  </router-link>
</template>
<script>
export default {
  name: "ChoosePreferredPhotoitem",

  props: {
    gender: {
      type: String,
      default: "male",
      validator(value) {
        return value === "male" || value === "female";
      },
    },
  },

  computed: {
    link() {
      return `/photos/${this.gender}`;
    },
  },
};
</script>
<style lang="scss">
  .gender-card {
    display: block;
    min-width: 100px;
    min-height: 100px;
    border: 2px dashed $primary;

    transition: 0.2s linear background-color, 0.2s linear border-color;
    &__image {
      display: block;
    }

    &:hover,
    &:focus {
      background: $primary;
      border-color: $secondary;
    }
  }
</style>
