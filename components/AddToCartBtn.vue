<template>
  <button type="button" layout="default" class="btn-add-to-card" js-buy-button="">
    В корзину
    <span class="border border-one">
      <span class="line line-horizontal line-top"></span>
      <span class="line line-horizontal line-bottom"></span>
      <span class="line line-vertical line-left"></span>
      <span class="line line-vertical line-right"></span>
    </span>

    <span class="border border-two">
      <span class="line line-horizontal line-top"></span>
      <span class="line line-horizontal line-bottom"></span>
      <span class="line line-vertical line-left"></span>
      <span class="line line-vertical line-right"></span>
    </span>
  </button>
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
  padding: 15px;
  color: $--color-body;
  font-size: 16px;
  line-height: 20px;
  margin-top: 20px;

  @include display-after(md) {
    font-size: 20px;
    line-height: 26px;
  }

  @include display-after(lg) {
    font-size: 24px;
    line-height: 30px;
  }
}
</style>
