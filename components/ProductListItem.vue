<template>
  <div class="product-list-item">
    <div class="product-list-item__img" :style="productMainImg"></div>
    <div class="product-list-item__title">
      {{ productName }}
    </div>
  </div>
</template>

<script>
import { MEDIA_URL } from "../config";
export default {
  name: "ProductListItem",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  computed: {
    productName() {
      return this.product?.attributes?.title;
    },
    productMainImg() {
      const url =
        this.product?.attributes?.common?.main_img?.data?.attributes?.formats
          ?.medium?.url;
      return {
        backgroundImage: `url(${MEDIA_URL}${url})`,
      };
    },
  },
};
</script>
<style scoped lang="scss">
.product-list-item {
  margin-top: 20px;

  @include display-after(sm) {
    margin-top: 40px;
  }

  &__img {
    width: 100%;
    aspect-ratio: 1 / 1;
    background-size: cover;
  }

  &__title {
    font-size: 13px;
    text-align: center;
    display: flex;
    justify-content: center;
    color: #8b8b8b;
    padding-top: 20px;

    @include display-after(sm) {
      font-size: 18px;
    }
  }

  &__price {
    font-size: 18px;
    display: flex;
    justify-content: center;
    color: #000000;
    padding-top: 9px;

    @include display-after(sm) {
      font-size: 28px;
    }
  }
}
</style>
