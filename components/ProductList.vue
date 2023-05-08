<template>
  <div class="container product-list">
    <div class="product-list__title">
      Наша основная концепция — совмещение уюта и тепла натурального дерева с
      функцией светильника.
    </div>
    <div class="results-listing-content">
      <ProductListItem v-for="(item, key) in productList" :key="key" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductList",
  data() {
    return {
      productList: [],
    };
  },

  mounted() {
    for (let k = 0; k < 10; k++) {
      this.productList.push(1);
    }
  },
};
</script>
<style lang="scss" scoped>
.results-listing-content {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(0, 160px));
  justify-content: space-around;
  grid-row-gap: 24px;

  @include display-after(sm) {
    grid-template-columns: repeat(3, minmax(0, 324px));
    grid-row-gap: 40px;
  }

  @include display-after(md) {
    grid-template-columns: repeat(4, minmax(0, 240px));
    grid-row-gap: 0;
  }

  @include display-after(lg) {
    grid-template-columns: repeat(4, minmax(0, 340px));
  }
}

.product-list {
  margin-bottom: 20px;

  @include display-after(sm) {
    margin-bottom: 40px;
  }

  &__title {
    font-size: 20px;
    color: $--title-color;
    padding: 22px 0;
    text-align: center;
    line-height: 26px;
    font-weight: 100;

    @include display-after(sm) {
      font-size: 30px;
      padding: 27px 0;
      line-height: 37px;
    }
  }
}
</style>
