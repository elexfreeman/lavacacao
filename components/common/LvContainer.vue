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
  padding: 0 20px;

  @include display-after(sm) {
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
