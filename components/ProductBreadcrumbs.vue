<template>
  <div class="product-breadcrumbs">
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
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters("product", ["product", "selectedSkuId"]),
    skuTitle() {
      return this.product?.attributes?.title;
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.product-breadcrumbs {
  display: flex;
  gap: 5px;
  font-size: 10px;
  margin: 10px 0;
}
</style>
