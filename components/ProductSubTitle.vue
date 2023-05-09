<template>
  <div class="product-sub-title">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.product-sub-title {
  font-size: 18px;
  margin-bottom: 4px;
  font-weight: 200;
  color: $--title-color;

  @include display-after(sm) {
  }
}
</style>
