<template>
  <div class="carousel-wrapper">
    <div class="header-float">
      <LvContainer>
        <Header />
      </LvContainer>
      <h1 class="header-float__title">
        {{ pageCommonData.title }}
      </h1>
      <h2 class="header-float__description">
        {{ pageCommonData.description }}
      </h2>
    </div>
    <div v-swiper:mySwiper="options">
      <div class="swiper-wrapper">
        <div
          v-for="(slide, key) in mainSliderItems"
          :key="key"
          class="img-warpper swiper-slide"
        >
          <div
            class="carousel-wrapper__img"
            :style="{ backgroundImage: `url(${slide})` }"
          ></div>
        </div>
      </div>

      <div class="swiper-pagination swiper-pagination-bullets"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { MEDIA_URL } from "../config";

export default {
  data() {
    return {
      isShow: false,
      options: {
        slidesPerView: 1,
        loop: true,
        autoplay: true,
        pagination: {
          el: ".swiper-pagination",
        },
      },
    };
  },
  computed: {
    ...mapGetters("mainData", ["mainSliderItems", "pageCommonData"]),
    locationIco() {
      return `${MEDIA_URL}${this.pageCommonData?.locationIco?.data?.attributes?.url}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.header-float {
  position: absolute;
  width: 100vw;
  top: 0;
  left: 0;
  height: 100px;
  z-index: 20;
  height: 300px;
  background-color: #0000005e;

  @include display-after(sm) {
    height: 600px;
  }
  @include display-after(md) {
    height: 800px;
  }

  &__title {
    width: 100%;
    font-size: 56px;
    line-height: auto;
    text-align: center;
    margin-top: 247px;

    @include display-after(sm) {
    }
    @include display-after(md) {
    }
  }

  &__description {
    width: 100%;
    font-size: 36px;
    line-height: auto;
    text-align: center;
    font-weight: 200;

    @include display-after(sm) {
    }
    @include display-after(md) {
    }
  }
}
.carousel-wrapper {
  height: 300px;
  width: 100%;

  @include display-after(sm) {
    height: 600px;
  }
  @include display-after(md) {
    height: 800px;
  }

  &__img {
    background-size: cover;
    width: 100%;
    height: 300px;
    background-position: center;

    @include display-after(sm) {
      height: 600px;
    }
    @include display-after(md) {
      height: 800px;
    }
  }

  .swiper-wraper {
//    position: absolute;
  }

  .swiper-slide {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .img-warpper img {
    margin: auto;
    width: 100%;
    background-image: linear-gradient(gray 100%, transparent 0);
  }

  ::v-deep.swiper-pagination-bullet-active {
    background-color: $--color-black;
  }
}
.swiper-pagination {
  width: 100vw;
  margin-top: -23px;
  display: flex;
  justify-content: center;
  gap: 5px;

  .swiper-pagination-bullet-active {
    background: $--link-color;
  }
}
</style>
