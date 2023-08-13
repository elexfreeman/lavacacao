<template>
  <LvContainer>
    <div class="product-list">
      <h2 class="product-list__title">
        {{ pageCommonData.productListTitle }}
      </h2>
      <div class="product-list__content">
        <NuxtLink
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
    margin-top: 40px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: space-around;
    grid-row-gap: 15px;
    grid-column-gap: 15px;

    @include display-after(sm) {
    }

    @include display-after(md) {
      grid-template-columns: repeat(4, 1fr);
    }

    @include display-after(lg) {
    }
  }

  &__title {
    @include title-font();
  }
}
</style>
