<template>
  <div class="bg-images">
    <div class="bg-images__img-1"></div>
    <div class="bg-images__img-2"></div>
  </div>
</template>

<script>
export default {
  name: "BgImages",
};
</script>
<style lang="scss" scoped>
.bg-images {
  position: absolute;
  width: 100%;
  z-index: 1;
  top: 0;

  &__img-1 {
    width: 100%;
    aspect-ratio: 1 / 1;
    background-size: cover;
    background: url("~assets/bg_mm_01.jpg");
    background-repeat: no-repeat;
    background-size: 200%;
    background-position: top;

    @include display-after(md) {
      background-size: 100% auto;
    }
  }

  &__img-2 {
    width: 100%;
    aspect-ratio: 1 / 1;
    background-size: cover;
    background: url("~assets/bg_mm_02.jpg");
    background-repeat: no-repeat;
    background-size: 200%;
    background-position: top;

    @include display-after(md) {
      background-size: 100% auto;
    }
  }
}
</style>
