<template>
  <div class="product-list-item">
    <div
      class="product-list-item__img"
      style="
        background-image: url(http://lavacacao.ru:1337/uploads/10_00297b25d4.jpg);
      "
    ></div>
    <div class="product-list-item__title">
      Коробка конфет 25 шт. конфета пралине арахисовая
    </div>
    <div class="product-list-item__price">3 000 руб.</div>
  </div>
</template>

<script>
export default {
  name: "ProductListItem",
};
</script>
<style scoped lang="scss">
.product-list-item {
  margin-top: 20px;

  @include display-after(sm) {
    margin-top: 40px;
  }

  &__img {
    width: 100%;
    aspect-ratio: 1 / 1;
    background-size: cover;
  }

  &__title {
    font-size: 13px;
    text-align: center;
    display: flex;
    justify-content: center;
    color: #8b8b8b;
    padding-top: 20px;

    @include display-after(sm) {
      font-size: 18px;
    }
  }

  &__price {
    font-size: 18px;
    display: flex;
    justify-content: center;
    color: #000000;
    padding-top: 9px;

    @include display-after(sm) {
      font-size: 28px;
    }
  }
}
</style>
