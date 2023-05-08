<template>
  <div>
    <Header />
    <MainSlider />
    <ProductList />
    <About />
  </div>
</template>

<script>
import { API_URL, MEDIA_URL } from "../config";

export default {
  name: "IndexPage",
  async asyncData({ params, $axios, store }) {
    const data = await $axios.$get(`${API_URL}/main-slider?populate=deep`);
    const slideList = data.data?.attributes?.item?.map((item) => {
      return `${MEDIA_URL}${item.image.data.attributes.url}`;
    });
    store.dispatch("mainData/loadMainSlider", slideList);
    return { slideList };
  },
};
</script>
