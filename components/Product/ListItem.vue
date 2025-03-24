<template>
  <div class="product-list-item">
    <div class="product-list-item__border">
      <div class="product-list-item__img" :style="productMainImg"></div>
      <div class="product-list-item__text">
        <div class="product-list-item__name">
          {{ productName }}
        </div>
        <div class="product-list-item__title">
          {{ productTitle }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { MEDIA_URL } from "../../config";
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
      return this.product?.attributes?.simple_name;
    },
    productTitle() {
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
  box-shadow: -5px 3px 17.64px 0.36px rgba(116, 107, 82, 0.3);
  padding: 5px;
  background-color: #ffffff;

  @include display-after(md) {
    min-height: 300px;
  }

  &__border {
    border: 1px solid #bf9950;
  }

  &__img {
    aspect-ratio: 1 / 1;
    background-size: cover;
  }

  &__text {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
  }

  &__name {
    font-size: 18px;
    font-weight: 600;
    line-height: 16px;
    justify-content: center;
    align-items: center;
    color: #000000;
    min-height: 30px;

    @include display-after(md) {
    }
    @include display-after(lg) {
    }
  }

  &__title {
    font-size: 12px;
    line-height: 16px;
    color: $--text-color;
    background: #ffffff;

    min-height: 30px;

    @include display-after(md) {
      min-height: 50px;
    }
    @include display-after(lg) {
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
