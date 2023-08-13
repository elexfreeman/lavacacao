<template>
  <div class="why-we-item">
    <div class="why-we-item__img" :style="imgStyle"></div>
    <div class="why-we-item__title">{{ title }}</div>
    <div class="why-we-item__description" v-html="description"></div>
  </div>
</template>

<script>
import { MEDIA_URL } from "../config";

export default {
  name: "WhyWe",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    title() {
      return this.item?.title;
    },

    description() {
      return this.item?.description?.replace(/\n/g, "<br />");
    },
    imgStyle() {
      return { backgroundImage: `url(${this.imgSrc})` };
    },

    imgSrc() {
      return `${MEDIA_URL}${this.item?.image?.data?.attributes?.url}`;
    },
  },
};
</script>
<style lang="scss" scoped>
.why-we-item {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100px 80px;
  align-content: center;
  justify-content: center;

  margin-bottom: 0px;
  height: 180px;
  color: $--text-gray;

  @include display-after(sm) {
    margin-bottom: 0px;
  }

  &__title {
    color: $--text-gray;
    text-align: center;
    margin-bottom: 10px;

    @include display-after(sm) {
    }
  }

  &__img {
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
  }

  &__description {
    font-size: 13px;
  }
}
</style>
