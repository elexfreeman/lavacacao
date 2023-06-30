<template>
  <div class="sku">
    <div class="sku__title-mobile">{{ sku.title }}</div>
    <div class="sku__wraper">
      <div class="sku__left">
        <div class="sku__slider">
          <client-only placeholder="Loading...">
            <SkuSlider :imgList="sliderImgList" />
            <!-- this component will only be rendered on client-side -->
          </client-only>
        </div>
      </div>
      <div class="sku__right">
        <div class="sku__title">{{ sku.title }}</div>
        <SkuBtnList />
        <div class="sku__description" v-html="description"></div>
        <ProductCompound :sku="sku" />
        <ProductAddData :sku="sku" />
        <div id="sku-add-to-cart-btn"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { MEDIA_URL } from "../config";

import SkuSlider from "./SkuSlider.vue";
import SkuBtnList from "./SkuBtnList.vue";

export default {
  name: "Sku",
  components: {
    SkuSlider,
    SkuBtnList,
  },
  props: {
    sku: {
      type: Object,
      required: true,
    },
    product: {
      type: Object,
      required: true,
    },
  },
  computed: {
    skuBtnImg() {
      return {
        backgroundImage: `url(${MEDIA_URL}${this.sku?.sku_btn_img?.data?.attributes?.url})`,
      };
    },
    description() {
      return this.sku.description
        ? this.sku.description
        : this.product.attributes.common.description.replaceAll('\n','<br/>');
    },
    sliderImgList() {
      let resp = [];
      const compareFn = (a, b) => {
        if (a < b) {
          return -1;
        }

        if (a > b) {
          return 1;
        }
        return 0;
      };
      if (this.sku?.image_list?.data?.length) {
        resp = [...this.sku.image_list.data]
          .map((item) => {
            return `${MEDIA_URL}${item?.attributes?.formats?.large?.url}`;
          })
          .sort(compareFn);
      }
      return resp;
    },
  },
};
</script>

<style lang="scss" scoped>
.sku {
  &__title-mobile {
    width: 100%;
    font-size: 20px;
    font-weight: 100;
    margin-bottom: 20px;
    color: $--title-color;
    text-align: center;

    @include display-after(sm) {
      display: none;
    }
  }

  &__wraper {
    display: flex;
    flex-direction: column;
    @include display-after(sm) {
      flex-direction: row;
      gap: 40px;
    }
  }

  &__left {
    width: 100%;

    @include display-after(sm) {
      width: 30vw;
    }
  }

  &__right {
    width: 100%;

    @include display-after(sm) {
      width: 70vw;
    }
  }

  &__title {
    font-size: 20px;
    font-weight: 100;
    margin-bottom: 20px;
    color: $--title-color;
    display: none;

    @include display-after(sm) {
      font-size: 30px;
      display: block;
    }
  }

  &__description {
    font-size: 13px;
    margin-top: 20px;

    @include display-after(sm) {
      font-size: 14px;
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
