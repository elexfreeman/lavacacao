<template>
  <div class="product">
    <Sku :sku="sku" />
    <ProductCompound :sku="sku" />
    <ProductAddData :sku="sku" />
  </div>
</template>

<script>
import { MEDIA_URL } from "../config";
import { mapGetters } from "vuex";

import Sku from "./Sku.vue";
import ProductAddData from "./ProductAddData.vue";
import ProductSubTitle from "./ProductSubTitle.vue";
import ProductCompound from "./ProductCompound.vue";

export default {
  name: "Product",
  components: {
    Sku,
    ProductAddData,
    ProductSubTitle,
    ProductCompound,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters("product", ["product", "selectedSkuId"]),
    sku() {
      const sku = this.skuList.find((item) => {
        return item.id === this.selectedSkuId;
      });
      return sku ? sku : {};
    },
    img() {
      return {
        backgroundImage: `url(${MEDIA_URL}${this.pageCommonData.aboutImg.data.attributes.formats.large.url})`,
      };
    },
    skuList() {
      let resp = [];
      if (this.product?.attributes?.sku_choco_candle?.length) {
        resp = this.product?.attributes?.sku_choco_candle;
      }
      return resp;
    },
  },
  methods: {
    onClick() {
      console.log(this.pageCommonData);
    },
  },
};
</script>

<style lang="scss" scoped>
.product {
  margin-bottom: 20px;

  &__top-wraper {
    display: flex;
    flex-direction: column;
    @include display-after(sm) {
      flex-direction: row;
      gap: 40px;
    }
  }

  &__left,
  &__right {
    width: 100%;
    @include display-after(sm) {
      width: 50vw;
    }
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

  &__sku-wraper {
    display: flex;
  }

  &__sku-btn {
    width: 50px;
    height: 50px;
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
    color: $--title-color;
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
