<template>
  <div class="sku-btn-list">
    <div :key="key" v-for="(sku, key) in skuList" @click="onSelectSku(sku)">
      <SkuBtn :sku="sku" />
    </div>
  </div>
</template>

<script>
import { MEDIA_URL } from "../config";
import { mapGetters, mapActions } from "vuex";
import SkuBtn from "./SkuBtn.vue";

export default {
  name: "SkuBtnList",
  components: {
    SkuBtn,
  },
  computed: {
    ...mapGetters("product", ["product", "selectedSkuId"]),
    skuBtnImg() {
      const url = this.sku?.sku_btn_img?.data?.attributes?.url;
      return {
        backgroundImage: `url(${MEDIA_URL}${url})`,
      };
    },
    skuList() {
      let resp = [];
      if (this.product?.attributes?.sku_choco_candle?.length) {
        resp = this.product.attributes.sku_choco_candle;
      }
      return resp;
    },
  },
  methods: {
    ...mapActions("product", ["setSelectedSkuId"]),
    onSelectSku(sku) {
      this.setSelectedSkuId(sku.id);
    },
  },
};
</script>

<style lang="scss" scoped>
.sku-btn-list {
  display: flex;
  gap: 5px;
  margin-top: 20px;
  @include display-after(md) {
    margin-top: 0px;
  }
}
</style>
