<template>
  <div class="sku-btn" :style="skuBtnStyle"></div>
</template>

<script>
import { MEDIA_URL } from "../config";
import { mapGetters } from "vuex";

export default {
  name: "SkuBtn",
  data() {
    return {};
  },
  components: {},
  props: {
    sku: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapGetters("product", ["product", "selectedSkuId"]),
    skuBtnStyle() {
      return {
        backgroundImage: `url(${MEDIA_URL}${this.sku.sku_btn_img.data.attributes.url})`,
        borderColor: this.isSelected ? `rgb(255 185 148)` : `#FFFFFF`,
      };
    },
    isSelected() {
      return this.sku.id === this.selectedSkuId;
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.sku-btn {
  width: 50px;
  height: 50px;
  background-size: cover;
  background-position: center;
  cursor: pointer;
  border: 2px solid #ffffff;
}
</style>
