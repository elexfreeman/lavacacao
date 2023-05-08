<template>
  <div class="sku__top-wraper" @click="onClick">
    <div class="sku__left">
      <div id="sku-slider" class="sku__slider">
        <div
          class="sku-list-item__img"
          style="
            background-image: url(http://lavacacao.ru:1337/uploads/10_00297b25d4.jpg);
          "
        ></div>
      </div>
    </div>
    <div class="sku__right">
      <div class="sku__title">{{ sku.title }}</div>
      <div class="sku__sku-wraper">
        <div class="sku__sku-btn" :style="skuBtnImg"></div>
      </div>
      <div class="sku__description" v-html="sku.description"></div>
      <div id="sku-add-to-cart-btn"></div>
    </div>
  </div>
</template>

<script>
import { MEDIA_URL } from "../config";

export default {
  name: "Sku",
  data() {
    return {};
  },
  props: {
    sku: {
      type: Object,
      required: true,
    },
  },
  computed: {
    skuBtnImg() {
      return {
        backgroundImage: `url(${MEDIA_URL}${this.sku.sku_btn_img.data.attributes.url})`,
      };
    },
  },
  methods: {
    onClick() {
      console.log(this.sku);
    },
  },
};
</script>

<style lang="scss" scoped>
.sku {
  display: flex;
  flex-direction: column;
  @include display-after(sm) {
    flex-direction: row;
    gap: 40px;
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

  &__sku-wraper {
    display: flex;
  }

  &__sku-btn {
    width: 50px;
    height: 50px;
    background-size: contain;
    background-position: center;
  }

  &__description {
    font-size: 13px;

    @include display-after(sm) {
      font-size: 18px;
    }
  }

  &__bottom-wraper {
    margin-top: 20px;
  }

  &__bottom-title {
    margin-bottom: 4px;
    font-weight: 200;
  }

  &__bottom-text-wraper {
    font-size: 11px;

    @include display-after(sm) {
      font-size: 12px;
    }
  }
}
</style>
