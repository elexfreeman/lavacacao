<template>
  <div class="about">
    <div class="about__left">
      <div class="about__wraper">
        <div class="about__title">{{ pageCommonData.aboutTitle }}</div>
        <div class="about__description" v-html="aboutText"></div>
      </div>
    </div>
    <div class="about__right" :style="imgStyle"></div>
  </div>
</template>

<script>
import { MEDIA_URL } from "../config";
import { mapGetters } from "vuex";

export default {
  name: "About",
  computed: {
    ...mapGetters("mainData", ["pageCommonData"]),
    imgStyle() {
      const url =
        this.pageCommonData?.aboutImg?.data?.attributes?.formats?.large?.url;
      return {
        backgroundImage: `url(${MEDIA_URL}${url})`,
      };
    },
    aboutText() {
      return this.pageCommonData?.aboutText;
    },
  },
};
</script>
<style lang="scss" scoped>
.about {
  display: flex;
  font-size: 13px;

  &__wraper {
    margin: 20px;

    @include display-after(sm) {
      margin: 140px;
    }

    @include display-after(md) {
      margin: 40px;
    }
  }

  &__title {
    @include title-font();
  }

  &__left,
  &__right {
    width: 50vw;
  }

  &__left {
    width: 100%;
    background-color: $--footer-color;
    display: flex;
    align-items: center;

    @include display-after(md) {
      width: 50vw;
    }
  }
  &__right {
    background-size: cover;
    background-position: center;
    display: none;
    @include display-after(md) {
      display: block;
    }
  }
}
</style>
