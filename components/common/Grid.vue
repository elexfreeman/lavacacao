<template>
  <div class="lv-container">
    <slot />
  </div>
</template>

<script>
export default {
  name: "LvContainer",
};
</script>
<style lang="scss">
.lv-container {
  width: 100%;

  @include display-after(sm) {
    width: $--screen-sm;
    font-size: 18px;
    margin: 0 auto;
  }

  @include display-after(md) {
    width: $--screen-md;
    font-size: 16px;
    line-height: 24px;
  }

  @include display-after(lg) {
    width: $--screen-lg;
    font-size: 12px;
    line-height: 16px;
  }
}
</style>

