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

    const getSkuList = () => {
      let resp = [];
      if (product?.attributes?.sku_choco_candle?.length) {
        resp = product?.attributes?.sku_choco_candle;
      }
      return resp;
    };

    const skuList = getSkuList();

    if (skuList.length > 0) {
      const selectedSku = skuList[0];
      store.dispatch("product/setSelectedSkuId", selectedSku.id);

      for (let k = 0; k < skuList.length; k++) {
        skuList[k].description = skuList[k]?.description?.replace(
          /\n/g,
          "<br />"
        );
      }
    }

    store.dispatch("product/loadProduct", product);

    return {};
  },
};
</script>
