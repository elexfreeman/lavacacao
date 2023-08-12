<template>
  <div class="about">
    <LvContainer>
      <div class="about__title">{{ pageCommonData.aboutTitle }}</div>
      <div class="about__grid">
        <div class="about__left">
          <div class="about__wraper">
            <div class="about__description" v-html="aboutText"></div>
          </div>
        </div>
        <div class="about__right">
          <div class="about__grid-container">
            <div
              class="about__item"
              :class="getImgClass(key)"
              :style="getImgStyle(key)"
              :src="item"
              v-for="(item, key) in imageList"
              :key="key"
            ></div>
          </div>
        </div>
      </div>
      <WhyWe />
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
    aboutText() {
      return this.pageCommonData?.aboutText;
    },
    imageList() {
      return this.pageCommonData?.aboutImg?.data?.map(
        (item) => `${MEDIA_URL}${item.attributes.formats.large.url}`
      );
    },
  },
  methods: {
    getImgClass(key) {
      return `about__item-${key + 1}`;
    },
    getImgStyle(key) {
      return {
        backgroundImage: `url(${this.imageList[key]})`,
      };
    },
  },
};
</script>
<style lang="scss" scoped>
.about {
  color: $--text-gray;
  display: flex;
  background-image: url("../assets/bg-mirible.jpg");
  background-size: cover;

  &__grid {
    @include display-after(lg) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 50px;
    }
  }

  &__wraper {
  }

  &__title {
    @include title-font();
    color: $--text-gray;
  }

  &__left {
    @include display-after(lg) {
    }
  }
  &__right {
    display: none;
    @include display-after(lg) {
      display: block;
    }
  }

  &__grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 500px 500px;
    grid-gap: 20px;
  }

  &__item {
    background-position: center;
  }

  &__item-1 {
    grid-column: 1;
    grid-row: span 1;
  }

  &__item-3 {
    grid-column: 1;
    grid-row: span 1;
  }

  &__item-2 {
    grid-column: 2;
    grid-row: span 2; /* This makes the element take up two rows */
  }
}
</style>
