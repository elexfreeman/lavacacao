<template>
  <div class="product-sub-title">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.product-sub-title {
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 10px;
  color: $--title-color;

  @include display-after(lg) {
    font-size: 24px;
    line-height: 30px;
  }
}
</style>
