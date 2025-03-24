<template>
  <LvContainer>
    <div class="product-list">
      <div class="product-list__title-wrapper">
        <div class="product-list__title">
          {{ pageCommonData.productListTitle }}
        </div>
        <div class="product-list__title-2">сейчас</div>
      </div>
      <div class="product-list__content">
        <NuxtLink
          class="product-list__item"
          v-for="(product, key) in productList"
          :key="key"
          :to="`/product/${product.id}`"
        >
          <ProductListItem :product="product" />
        </NuxtLink>
      </div>
    </div>
  </LvContainer>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ProductList",
  computed: {
    ...mapGetters("product", ["productList"]),
    ...mapGetters("mainData", ["pageCommonData"]),
  },
};
</script>
<style lang="scss" scoped>
.product-list {
  margin-bottom: 20px;

  a {
    text-decoration: none;
  }

  @include display-after(sm) {
    margin-bottom: 40px;
  }

  &__content {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;

    @include display-after(sm) {
    }

    @include display-after(md) {
    }

    @include display-after(lg) {
    }
  }

  &__item {
      flex: 0 0 calc(50% - 20px);
    @include display-after(md) {
      flex: 0 0 calc(33.33% - 20px);
    }

  }

  &__title-wrapper {
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin: 40px 0;
  }

  &__title {
    display: block;
    font-family: $--font-family-title;
    font-weight: 800;
    text-align: center;
    font-size: 42px;
    line-height: 50px;
    color: #000000;
    // -webkit-text-stroke: 1px #00000070;
    // text-stroke: 1px #00000070;
    //text-shadow: 2px 2px 2px rgba(116, 107, 82, 1);
  }

  &__title-2 {
    display: block;
    font-family: $--font-family-title;
    font-weight: 800;
    text-align: center;
    font-size: 42px;
    line-height: 50px;
    color: #c3a467;
    // -webkit-text-stroke: 1px #00000070;
    // text-stroke: 1px #00000070;
    //text-shadow: 2px 2px 2px rgba(116, 107, 82, 1);
  }
}
</style>
