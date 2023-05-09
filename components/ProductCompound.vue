<template>
  <div class="product-compound">
    <ProductSubTitle> Состав: </ProductSubTitle>
    {{ compoundText }}
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ProductSubTitle from "./ProductSubTitle.vue";

export default {
  name: "ProductAddData",
  components: {
    ProductSubTitle,
  },
  data() {
    return {};
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
    compoundText() {
      let resp = [];

      const getNameFromCompoundItem = (item) => {
        return item?.attributes?.name ? item.attributes.name : "";
      };

      const chocoTypeList = this.product?.attributes.vidy_shokoladas?.data
        ?.length
        ? this.product.attributes.vidy_shokoladas.data
        : [];

      for (let k = 0; k < chocoTypeList.length; k++) {
        const chocoName = chocoTypeList[k]?.attributes?.title
          ? chocoTypeList[k].attributes.title
          : "";

        const compoundListText = (
          chocoTypeList[k]?.attributes.composition?.data?.length
            ? chocoTypeList[k].attributes.composition.data
            : []
        )
          .map(getNameFromCompoundItem)
          .join(", ");

        const chocoCompoundText = `${chocoName} (${compoundListText})`;
        resp = [...resp, chocoCompoundText];
      }

      ///////////
      const nacinkaList = this.product?.attributes?.nachinka_konfetnayas?.data
        ?.length
        ? this.product.attributes.nachinka_konfetnayas.data
        : [];

      for (let k = 0; k < nacinkaList.length; k++) {
        const compoundList = (
          nacinkaList[k]?.attributes.composition?.data?.length
            ? nacinkaList[k].attributes.composition.data
            : []
        ).map(getNameFromCompoundItem);
        resp = [...resp, ...compoundList];
      }

      return resp.join(", ");
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.product-compound {
  font-size: 11px;
  margin-top: 20px;
}
</style>
