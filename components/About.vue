<template>
  <div class="about" @click="onClick">
    <div class="about__left">
      <div class="about__wraper">
        <div class="about__title">{{pageCommonData.aboutTitle}}</div>
        <div class="about__description" v-html="aboutText"></div>
      </div>
    </div>
    <div class="about__right" :style="imgStyle"></div>
  </div>
</template>

<script>
import { API_URL, MEDIA_URL } from "../config";
import { mapGetters } from "vuex";
export default {
  name: "About",
  data() {
    return {
      imgUrl: "http://lavacacao.ru:1337/uploads/10_00297b25d4.jpg",
    };
  },
  computed: {
    ...mapGetters("mainData", ["pageCommonData"]),
    imgStyle() {
      return {
        backgroundImage: `url(${MEDIA_URL}${this.pageCommonData.aboutImg.data.attributes.formats.large.url})`,
      };
    },
    aboutText() {
      return this.pageCommonData?.aboutText;
    },
  },
  methods: {
    onClick() {
      console.log(this.pageCommonData);
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
    font-size: 20px;
    font-weight: 100;
    margin-bottom: 20px;
    color: $--title-color;

    @include display-after(sm) {
      font-size: 30px;
    }
  }

  &__left,
  &__right {
    width: 50vw;
  }

  &__left {
    width: 100%;
    background-color: #faf9f5;
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
