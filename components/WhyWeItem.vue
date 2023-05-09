<template>
  <div class="why-we-item">
    <img class="why-we-item__img" :src="imgSrc" />
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

    imgSrc() {
      return `${MEDIA_URL}${this.item?.image?.data?.attributes?.url}`;
    },
  },
};
</script>
<style lang="scss" scoped>
.why-we-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 0px;

  @include display-after(sm) {
    margin-bottom: 0px;
  }

  &__title {
    font-size: 15px;
    font-weight: 100;
    color: $--title-color;
    text-align: center;
    margin-bottom: 10px;

    @include display-after(sm) {
    }
  }

  &__img {
    width: 80px;
  }

  &__description {
    font-size: 13px;
  }
}
</style>
