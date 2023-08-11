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
  background-color: #0000005e;
  height: 844px;

  @include display-after(md) {
    height: 1194px;
  }

  @include display-after(lg) {
    height: 1024px;
  }

  &__title {
    width: 100%;
    font-size: 56px;
    text-align: center;
    margin-top: 247px;
    margin-bottom: 0;
    font-family: AgeoExtraBold;
    font-weight: 800;
    text-transform: lowercase;

    @include display-after(sm) {
    }
    @include display-after(md) {
      font-size: 124px;
    }

    @include display-after(lg) {
      font-size: 148px;
    }
  }

  &__description {
    width: 100%;
    font-size: 36px;
    text-align: center;
    font-weight: 200;
    font-family: Hamiltone;
    margin-top: 50px;

    @include display-after(md) {
      font-size: 52px;
      margin-top: 90px;
    }
    @include display-after(lg) {
      font-size: 80px;
      margin-top: 120px;
    }
  }
}
.carousel-wrapper {
  width: 100%;
  height: 844px;

  @include display-after(md) {
    height: 1194px;
  }

  @include display-after(lg) {
    height: 1024px;
  }

  &__img {
    background-size: cover;
    width: 100%;
    background-position: center;

    height: 844px;

    @include display-after(md) {
      height: 1194px;
    }

    @include display-after(lg) {
      height: 1024px;
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
    //  background-image: linear-gradient(gray 100%, transparent 0);
    background-color: #0000005e;
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
