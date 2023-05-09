<template>
  <div class="product-add-data-item">
    <div class="product-add-data-item__title">{{ title }}</div>
    <div class="product-add-data-item__data-value">{{ dataValue }}</div>
  </div>
</template>

<script>
export default {
  name: "ProductAddDataItem",
  components: {},
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
  computed: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.product-add-data-item {
  display: grid;
  gap: 20px 20px;
  font-size: 13px;
  grid-template-columns: 1fr 1fr;

  @include display-after(sm) {
    grid-template-columns: repeat(auto-fill, minmax(0, 260px));
  }
}
</style>
