<template>
  <div class="sku-btn" :style="skuBtnStyle"></div>
</template>

<script>
import { MEDIA_URL } from "../config";
import { mapGetters } from "vuex";

export default {
  name: "SkuBtn",
  props: {
    sku: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapGetters("product", ["product", "selectedSkuId"]),
    skuBtnStyle() {
      const url = this.sku?.sku_btn_img?.data?.attributes?.url;
      return {
        backgroundImage: `url(${MEDIA_URL}${url})`,
        borderColor: this.isSelected ? `rgb(255 185 148)` : `#FFFFFF`,
      };
    },
    isSelected() {
      return this.sku.id === this.selectedSkuId;
    },
  },
};
</script>

<style lang="scss" scoped>
.sku-btn {
  width: 30px;
  height: 30px;
  background-size: cover;
  background-position: center;
  cursor: pointer;
  border: 2px solid #ffffff;

  @include display-after(md) {
    width: 50px;
    height: 50px;
  }
}
</style>
