<template>
  <div class="about">
    <LvContainer>
      <div class="about__left">
        <div class="about__wraper">
          <div class="about__title">{{ pageCommonData.aboutTitle }}</div>
          <div class="about__description" v-html="aboutText"></div>
        </div>
      </div>
      <div class="about__right" :style="imgStyle"></div>
    </LvContainer>
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
  color: $--text-gray;
  display: flex;
  background-image: url("../assets/bg-mirible.jpg");

  &__wraper {
    @include display-after(sm) {
    }

    @include display-after(md) {
    }
  }

  &__title {
    @include title-font();
    color: $--text-gray;
  }

  &__left,
  &__right {
    width: 50vw;
  }

  &__left {
    width: 100%;
    display: flex;
    align-items: center;

    @include display-after(lg) {
      width: 50vw;
    }
  }
  &__right {
    background-size: cover;
    background-position: center;
    display: none;
    @include display-after(lg) {
      display: block;
    }
  }
}
</style>
