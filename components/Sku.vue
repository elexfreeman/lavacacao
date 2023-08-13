<template>
  <div class="sku">
    <div class="sku__title">{{ sku.title }}</div>
    <div class="sku__wraper">
      <div class="sku__left">
        <div class="sku__slider">
          <SkuSlider :imgList="sliderImgList" />
        </div>
      </div>
      <div class="sku__right">
        <div class="sku__title sku__title-desctop">{{ sku.title }}</div>
        <SkuBtnList />
        <ProductCompound :sku="sku" />
        <ProductAddData :sku="sku" />
        <ProductDescription :text="description" title="Описание" />
        <div class="sku__add-to-cart-desctop">
          <AddToCartBtn :productId="product.id" :skuId="sku.id" />
        </div>
      </div>
    </div>
    <div class="sku__add-to-cart">
      <AddToCartBtn :productId="product.id" :skuId="sku.id" />
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
        : this.product.attributes.common.description.replaceAll("\n", "<br/>");
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
  &__wraper {
    grid-template-columns: 1fr 1fr;
    @include display-after(md) {
      display: grid;
      gap: 10px;
    }
    @include display-after(md) {
      display: grid;
      gap: 20px;
    }
  }

  &__title {
    font-size: 20px;
    line-height: 26px;
    text-align: center;
    margin: 22px 0;

    @include display-after(lg) {
      font-size: 32px;
      line-height: 36px;
      display: none;
    }
  }

  &__title-desctop {
    display: none;
    @include display-after(lg) {
      display: block;
      text-align: left;
      margin-top: 0;
    }
  }

  &__description {
    margin-top: 20px;

    @include display-after(sm) {
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

  &__add-to-cart {
    widows: 100%;
    @include display-after(lg) {
      display: none;
    }
  }

  &__add-to-cart-desctop {
    display: none;
    @include display-after(lg) {
      display: block;
    }
  }
}
</style>
