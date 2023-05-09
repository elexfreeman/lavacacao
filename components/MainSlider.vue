<template>
  <div class="carousel-wrapper">
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
import { API_URL, MEDIA_URL } from "../config";

import { mapGetters } from "vuex";

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
    ...mapGetters("mainData", ["mainSliderItems"]),
  },
  mounted: async function () {
  },

  methods: {
    async onResize() {
      console.log("Resized");
      this.isShow = false;
      this.$nextTick(function () {
        this.isShow = true;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.carousel-wrapper {
  height: 300px;
  width: 100%;

  &__img {
    background-size: cover;
    width: 100%;
    height: 300px;
    background-position: center;
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
    height: 300px;
    background-image: linear-gradient(gray 100%, transparent 0);
  }

  ::v-deep.swiper-pagination-bullet-active {
    background-color: black;
  }
}
.swiper-pagination {
  width: 100vw;
  margin-top: -23px;
  display: flex;
  justify-content: center;
  gap: 5px;

  .swiper-pagination-bullet-active {
    background: #966851;
  }
}
</style>
