<template>
  <div v-if="canShow" class="product-add-data">
    <ProductSubTitle>
      {{ pageCommonData.productAddDataTitle }}
    </ProductSubTitle>
    <div class="product-add-data__wraper">
      <ProductAddDataItem
        v-for="(item, key) in dataFields"
        :key="key"
        :title="item.name"
        :dataValue="item.dataValue"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ProductAddDataItem from "./ProductAddDataItem.vue";
import ProductSubTitle from "./ProductSubTitle.vue";

export default {
  name: "ProductAddData",
  components: {
    ProductAddDataItem,
    ProductSubTitle,
  },
  props: {
    sku: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapGetters("product", ["product", "selectedSkuId"]),
    ...mapGetters("mainData", ["pageCommonData"]),
    dataFields() {
      const productAddFields = this.product?.attributes?.dataFields
        ? this.product?.attributes?.dataFields
        : [];

      const skuAddFields = this.sku?.addFields?.length
        ? this.sku.addFields
        : [];

      return [...productAddFields, ...skuAddFields];
    },
    canShow() {
      return this.dataFields.length > 0;
    },
  },
};
</script>

<style lang="scss" scoped>
.product-add-data {
  font-size: 13px;
  margin-top: 20px;

  &__title {
    font-size: 20px;
    margin-bottom: 4px;
    font-weight: 200;
    color: $--title-color;

    @include display-after(sm) {
    }
  }
}
</style>
