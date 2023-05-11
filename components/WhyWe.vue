<template>
  <Containter>
    <div class="why-we">
      <div class="why-we__title">{{ title }}</div>
      <div class="why-we__wraper">
        <WhyWeItem :item="item" v-for="(item, key) in itemList" :key="key" />
      </div>
    </div>
  </Containter>
</template>

<script>
import { MEDIA_URL } from "../config";
import { mapGetters } from "vuex";

import Containter from "./Containter.vue";
import WhyWeItem from "./WhyWeItem.vue";

export default {
  name: "WhyWe",
  components: {
    Containter,
    WhyWeItem,
  },
  computed: {
    ...mapGetters("mainData", ["pageCommonData"]),
    title() {
      return this.pageCommonData?.whyWeTitle;
    },
    itemList() {
      return this.pageCommonData?.whyWe ? this.pageCommonData.whyWe : [];
    },
    imgStyle() {
      const url =
        this.pageCommonData?.aboutImg?.data?.attributes?.formats?.large?.url;
      return {
        backgroundImage: `url(${MEDIA_URL}${url})`,
      };
    },
    logoImg() {
      return `${MEDIA_URL}${this.pageCommonData?.logo?.data?.attributes?.url}`;
    },
  },
};
</script>
<style lang="scss" scoped>
.why-we {
  width: 100%;
  margin-bottom: 20px;

  @include display-after(sm) {
    margin-bottom: 20px;
  }

  &__wraper {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(0, 160px));
    gap: 20px 20px;
    justify-content: space-around;

    @include display-after(sm) {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
    }
  }

  &__title {
    @include title-font();
    margin-top: 20px;
    text-align: center;
  }
}
</style>
