<template>
  <div>
    <MainSlider />
    <ProductList />
    <About />
    <Galery />
  </div>
</template>

<script>
import { API_URL, MEDIA_URL } from "../config";

export default {
  name: "IndexPage",
  layout: "main",
  async asyncData({ params, $axios, store }) {
    console.log(`${API_URL}/page-data-common?populate=deep`)
    const pageCommonData = (
      await $axios.$get(`${API_URL}/page-data-common?populate=deep`)
    ).data.attributes;
    store.dispatch("mainData/loadPageCommonData", pageCommonData);

    const sliderData = await $axios.$get(`${API_URL}/main-slider?populate=deep`);
    store.dispatch("mainData/loadMainSlider", sliderData);

    const productList = (
      await $axios.$get(`${API_URL}/choco-candles?populate=deep`)
    ).data;
    store.dispatch("product/loadProductList", productList);

    return {};
  },
};
</script>
