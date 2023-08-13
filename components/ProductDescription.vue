<template>
  <div class="product-description">
    <div class="product-description__title-wraper" @click="onToggle">
      <div class="product-description__title">{{ title }}</div>
      <div class="product-description__arrow" :class="arrowClass"></div>
    </div>
    <div class="product-description__line"></div>
    <div v-show="isOpen" class="product-description__description" v-html="text"></div>
  </div>
</template>

<script>
import ProductSubTitle from "./ProductSubTitle.vue";

export default {
  name: "ProductAddData",
  data() {
    return {
      isOpen: false,
    };
  },
  components: {
    ProductSubTitle,
  },
  props: {
    text: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  computed: {
    arrowClass() {
      return {
        "product-description__arrow-open": this.isOpen,
      };
    },
  },
  methods: {
    onToggle() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
.product-description {
  font-size: 11px;
  margin-top: 20px;

  &__description {
    padding-top: 20px;
    transition: all 0.5s ease-in;
  }

  &__line {
    margin-top: 10px;
    border-top: 1px solid $--line-color;
  }

  &__title-wraper {
    display: flex;
    justify-content: space-between;
    cursor: pointer;
  }

  &__arrow {
    background-image: url(~assets/arrow.svg);
    width: 16px;
    height: 16px;
    transition: all 0.5s;
  }

  &__arrow-open {
    transform: rotate(180deg);
  }
}
</style>
