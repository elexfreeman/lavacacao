<template>
  <div class="sku">
    <div class="sku__left">
      <div class="sku__slider">
        <SkuSlider :imgList="sliderImgList" />
      </div>
    </div>
    <div class="sku__right">
      <div class="sku__title">{{ sku.title }}</div>
      <SkuBtnList />
      <div class="sku__description" v-html="sku.description"></div>
      <div id="sku-add-to-cart-btn"></div>
    </div>
  </div>
</template>

<script>
import { MEDIA_URL } from "../config";

import SkuSlider from "./SkuSlider.vue";
import SkuBtnList from "./SkuBtnList.vue";

export default {
  name: "Sku",
  data() {
    return {};
  },
  components: {
    SkuSlider,
    SkuBtnList,
  },
  props: {
    sku: {
      type: Object,
      required: true,
    },
  },
  computed: {
    skuBtnImg() {
      return {
        backgroundImage: `url(${MEDIA_URL}${this.sku.sku_btn_img.data.attributes.url})`,
      };
    },
    sliderImgList() {
      let resp = [];

      return resp;
    },
  },
  methods: {
    onClick() {
      console.log(this.sku);
    },
  },
};
</script>

<style lang="scss" scoped>
.sku {
  display: flex;
  flex-direction: column;

  @include display-after(sm) {
    flex-direction: row;
    gap: 40px;
  }

  &__left,
  &__right {
    width: 50vw;
    min-height: 50px;
  }

  &__title {
    font-size: 20px;
    font-weight: 100;
    margin-bottom: 20px;
    color: $--title-color;

    @include display-after(sm) {
      font-size: 30px;
    }
  }

  &__description {
    font-size: 13px;

    @include display-after(sm) {
      font-size: 18px;
    }
  }

  &__bottom-wraper {
    margin-top: 20px;
  }

  &__bottom-title {
    margin-bottom: 4px;
    font-weight: 200;
  }

  &__bottom-text-wraper {
    font-size: 11px;

    @include display-after(sm) {
      font-size: 12px;
    }
  }
}
</style>
