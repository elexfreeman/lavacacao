<template>
  <div class="add-to-cart-btn">Заказать</div>
</template>

<script>
export default {
  name: "AddToCartBtn",
  data() {
    return {};
  },
  props: {
    productId: {
      type: Number,
      required: true,
    },
    skuId: {
      type: Number,
      required: true,
    },
  },
  methods: {
    onAddToCart() {},
  },
};
</script>

<style lang="scss" scoped>
.add-to-cart-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $--color-btn;
  padding: 20px;
  color: $--color-body;
  font-size: 16px;
  line-height: 20px;
  margin-top: 20px;

  @include display-after(md) {
    font-size: 24px;
    line-height: 30px;
  }
}
</style>
