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
  data() {
    return {};
  },
  components: {},
  computed: {
    ...mapGetters("product", ["product", "selectedSkuId"]),
    skuBtnImg() {
      return {
        backgroundImage: `url(${MEDIA_URL}${this.sku.sku_btn_img.data.attributes.url})`,
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
}
</style>
