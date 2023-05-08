<template>
  <div>
    <Header />
    <Containter>
      <Product />
    </Containter>
    <About />
  </div>
</template>

<script>
import { API_URL } from "../../config";

export default {
  name: "ProductPage",
  async asyncData({ params, $axios, store }) {
    const pageCommonData = (
      await $axios.$get(`${API_URL}/page-data-common?populate=deep`)
    ).data.attributes;
    pageCommonData.aboutText = pageCommonData?.aboutText.replace(
      /\n/g,
      "<br />"
    );
    store.dispatch("mainData/loadPageCommonData", pageCommonData);

    const product = (
      await $axios.$get(`${API_URL}/choco-candles/${params.id}?populate=deep`)
    ).data;
    store.dispatch("product/loadProduct", product);

    return {};
  },
};
</script>
