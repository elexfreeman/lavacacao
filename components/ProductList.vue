<template>
  <div class="container product-list">
    <div class="product-list__title">
      {{ pageCommonData.productListTitle }}
    </div>
    <div class="results-listing-content">
      <NuxtLink
        v-for="(product, key) in productList"
        :key="key"
        :to="`/product/${product.id}`"
      >
        <ProductListItem :product="product" />
      </NuxtLink>
    </div>
  </div>
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
.results-listing-content {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(0, 160px));
  justify-content: space-around;
  grid-row-gap: 24px;

  @include display-after(sm) {
    grid-template-columns: repeat(3, minmax(0, 324px));
    grid-row-gap: 40px;
  }

  @include display-after(md) {
    grid-template-columns: repeat(4, minmax(0, 240px));
    grid-row-gap: 0;
  }

  @include display-after(lg) {
    grid-template-columns: repeat(4, minmax(0, 340px));
  }
}

.product-list {
  margin-bottom: 20px;

  a {
    text-decoration: none;
  }

  @include display-after(sm) {
    margin-bottom: 40px;
  }

  &__title {
    @include title-font();
    margin-top: 20px;
    text-align: center;
  }
}
</style>
