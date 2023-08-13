<template>
  <div class="product-add-data-item">
    <div class="product-add-data-item__title">{{ title }}</div>
    <div class="product-add-data-item__data-value">{{ dataValue }}</div>
  </div>
</template>

<script>
export default {
  name: "ProductAddDataItem",
  props: {
    title: {
      type: String,
      required: true,
    },
    dataValue: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.product-add-data-item {
  @include description-font();
  display: grid;
  gap: 20px 20px;
  grid-template-columns: 1fr 1fr;
  margin-top: 5px;

  @include display-after(md) {
  }

  &__data-value {
    text-align: right;
  }
}
</style>
