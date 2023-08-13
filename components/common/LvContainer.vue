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
    margin: 0 auto;
  }

  @include display-after(md) {
    width: $--screen-md;
  }

  @include display-after(lg) {
    width: $--screen-lg;
  }
}
</style>
