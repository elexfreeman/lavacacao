<template>
  <div class="sku-slider">
    <div class="sku-slider__preview-wraper">
      <div
        v-for="(slide, key) in imgList"
        :key="key"
        class="sku-slider__preview-img"
        :class="getPreviewImgClass(key)"
        :style="getPreviewImgStyle(key)"
        @click="onSelectSlide(key)"
      ></div>
    </div>
    <div class="sku-slider__img" :style="getImg()"></div>
  </div>
</template>

<script>
export default {
  props: {
    imgList: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentSlide: 0,
    };
  },
  methods: {
    getImg() {
      return {
        backgroundImage: `url(${this.imgList[this.currentSlide]})`,
      };
    },
    getPreviewImgStyle(key) {
      return {
        backgroundImage: `url(${this.imgList[key]})`,
      };
    },
    getPreviewImgClass(key) {
      if (key === this.currentSlide) {
        return "sku-slider__preview-img-selected";
      }
    },
    onSelectSlide(key) {
      this.currentSlide = key;
    },
  },
};
</script>

<style lang="scss" scoped>
.sku-slider {
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 5px;

  &__preview-wraper {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 5px;
  }

  &__preview-img {
    width: 74px;
    height: 74px;
    background-size: cover;
    background-position: center;
    border: 2px solid $--color-body;
  }

  &__preview-img-selected {
    border: 2px solid $--color-border;
  }

  &__img {
    background-size: cover;
    width: 100%;
    background-position: center;

    @include display-after(sm) {
    }

    @include display-after(md) {
    }

    @include display-after(lg) {
    }
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
