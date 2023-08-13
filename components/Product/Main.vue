<template>
  <div class="product">
    <SkuMain :sku="sku" :product="product" />
  </div>
</template>

<script>
import { MEDIA_URL } from "../../config";
import { mapGetters } from "vuex";

export default {
  name: "Product",
  computed: {
    ...mapGetters("product", ["product", "selectedSkuId"]),
    sku() {
      const sku = this.skuList.find((item) => {
        return item.id === this.selectedSkuId;
      });
      return sku ? { ...sku } : {};
    },
    img() {
      const url =
        this.pageCommonData?.aboutImg?.data?.attributes?.formats?.large?.url;
      return {
        backgroundImage: `url(${MEDIA_URL}${url})`,
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
    @include title-font();
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
