<template>
  <router-link to="link">
    
  </router-link>
</template>
<script>
export default {
  name: "ChoosePreferredPhotoitem",

  props: {
    gender: {
      type: String,
      default: 'male',
      validator(value) {
        return value === 'male' || value === 'female';
      },
    },
  },

  computed: {
    link() {
      return `/photos/${this.gender}`;
    }
  }
};
</script>
