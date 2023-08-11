<template>
  <div class="lv-grif">
    <slot />
  </div>
</template>

<script>
export default {
  name: "LvContainer",
};
</script>

<style lang="scss">
.lv-grid {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 16px;
  grid-row-gap: 16px;

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
