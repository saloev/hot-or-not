<template>
  <div class="photo-list__item photo-item">
    <img :src="image.src" :alt="image.alt" :data-id="image.id" class="photo-item__img" />
    <ul class="reset--list-style photo-item__btn-list">
      <li class="photo-item__item" v-for="(icon, index) in icons" :key="index">
        <BaseIconBtn class="photo-item__btn" @click.native="onBtnClick(icon)" >
          <img
            :src="require(`@/assets/icons/${icon}.svg`)"
            alt="like icon"
            :class="`photo-item__btn-icon ${icon}`" />
        </BaseIconBtn>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: Object,
      validator(val) {
        const mustContains = ["id", "src", "alt"];
        return Object.keys(val).every((key) => mustContains.includes(key));
      },
      required: true,
    },
  },

  data: () => ({
    icons: ["like", "dislike"],
  }),

  methods: {
    onBtnClick(icon) {
      console.log(icon);
    },
  },
};
</script>
<style lang="scss">
.photo-item {
  width: 100%;
  height: calc(100vh - 200px);
  display: grid;
  grid-template-rows: 1fr max-content;

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__btn-list {
    margin-top: $default-block-space;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(2, 40px);
    grid-gap: $default-block-space;

    @include media('sm-and-up') {
      grid-template-columns: repeat(2, 80px);
    }
  }

  &__btn {
    width: 100%;

    &-icon {
      transition: 0.2s linear transform;
    }

    &:hover,
    &:focus {
      .like {
        transform: rotate(-10deg) scale(1.2);
      }
    }

    &:hover,
    &:focus {
      .dislike {
        transform: rotate(10deg) scale(1.2);
      }
    }

  }
}
</style>
