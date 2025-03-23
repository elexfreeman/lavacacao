<template>
  <div class="product-breadcrumbs" v-if="skuTitle">
    <NuxtLink to="/">
      <div class="product-breadcrumbs__item">Главная</div>
    </NuxtLink>
    <div class="product-breadcrumbs__item">-</div>
    <div class="product-breadcrumbs__item">{{ skuTitle }}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ProductBreadcrumbs",
  computed: {
    ...mapGetters("product", ["product", "selectedSkuId"]),
    skuTitle() {
      return this.product?.attributes?.title;
    },
  },
};
</script>

<style lang="scss" scoped>
.product-breadcrumbs {
  display: none;
  gap: 5px;
  font-size: 10px;
  margin: 10px 0;

  @include display-after(md) {
    display: flex;
  }

}
</style>
