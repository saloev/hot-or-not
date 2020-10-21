<template>
  <div class="photos-list-board">
    <transition-group :name="transitionName"
      mode="out-in"
      tag="ul"
      class="reset--list-style photos-list"
    >
      <li class="photos-list__item" v-for="image in reverseList" :key="image.id">
        <PhotoItem :image="image" />
      </li>
    </transition-group>
    <ul class="reset--list-style photos-list__btn-list">
      <li class="" v-for="(icon, index) in icons" :key="index">
        <BaseIconBtn class="photos-list__btn" @click.native="onBtnClick(icon)">
          <img
            :src="require(`@/assets/icons/${icon}.svg`)"
            alt="like icon"
            :class="`photos-list__btn-icon ${icon}`"
          />
        </BaseIconBtn>
      </li>
    </ul>
  </div>
</template>
<script>
import PhotoItem from "./PhotosListItem.vue";

export default {
  name: "PhotosList",

  components: {
    PhotoItem,
  },

  props: {
    images: {
      type: Array,
      validator(val) {
        const mustContains = ["id", "src", "alt"];
        return val.every((item) => Object.keys(item).every((key) => mustContains.includes(key)));
      },
      required: true,
    },
  },

  data: () => ({
    icons: ["like", "dislike"],
    transitionName: "rotate-right",
  }),

  computed: {
    reverseList() {
      const res = [...this.images];
      res.reverse();
      return res;
    },
  },

  methods: {
    onBtnClick(icon) {
      const dispatchTransitionName = {
        like: "rotate-left",
        dislike: "rotate-right",
      };
      this.transitionName = dispatchTransitionName[icon];
      this.$emit("remove-first");
    },
  },

  mounted() {
    console.log(this.list);
  },
};
</script>
<style lang="scss">
.photos-list {
  position: relative;

  &-board {
    height: calc(100vh - 140px);

    @include media("sm-and-up") {
      height: calc(100vh - 240px);
    }
  }

  height: calc(100% - 80px);
  display: grid;
  grid-row-gap: 40px;

  &__item {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &__btn-list {
    margin-top: $default-block-space;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(2, 40px);
    grid-gap: $default-block-space;

    @include media("sm-and-up") {
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
