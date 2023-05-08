<template>
  <div class="product">
    <Sku :sku="sku" v-for="(sku, key) in skuList" :key="key" />
    <div class="product__bottom-wraper">
      <div class="product__bottom-title">Состав:</div>
      <div class="product__bottom-text-wraper">
        молочный шоколад 30%(сахар, сухое цельное молоко, масло какао, какао
        тертое, сухое обезжиренное молоко, эмульгатор: соевый лецитин,
        натуральный экстракт ванили), горький шоколад 72% (какао тертое, сахар,
        масло какао, эмульгатор: соевый лецитин, натуральный экстракт ванили),
        сахар, вафельная крошка (мука пшеничная, сахар; молочный жир; лактоза
        (молоко); молочный белок; cоль; экстракт солода (ячмень); разрыхлитель:
        сода пищевая), арахис, фундук, масло какао, кешью, грецкий орех,
        кокосовая стружка, фисташки, цукаты имбирные (имбирь, сахар), кунжут,
        семена чиа, ягоды годжи (ягоды годжи, сахар), сироп глюкозы, яйцо,
        миндаль, чернослив, базилик, масло виноградное, масло сливочное, ром
        Бакарди тёмный (вода питьевая исправленная, ромовый выдержанный
        дистиллят, краситель: сахарный колер), какао-порошок, молоко, соль
        морская, имбирь молотый, куркума молотая, чай зелёный матча, кофе, сок
        свеклы красной (порошок), паприка красная молотая, красители
        натуральные: бета-каротин, экстракт чёрной моркови, медный комплекс
        хлорофиллинов
      </div>
    </div>
  </div>
</template>

<script>
import { MEDIA_URL } from "../config";
import { mapGetters } from "vuex";

import Sku from "./Sku.vue";

export default {
  name: "Product",
  components: {
    Sku,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters("product", ["product"]),
    img() {
      return {
        backgroundImage: `url(${MEDIA_URL}${this.pageCommonData.aboutImg.data.attributes.formats.large.url})`,
      };
    },
    skuList() {
      let resp = [];
      console.log(this.product);
      if (this.product?.attributes?.sku_choco_candle?.length) {
        resp = this.product?.attributes?.sku_choco_candle;
      }
      return resp;
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
.product {
  &__top-wraper {
    display: flex;
    flex-direction: column;
    @include display-after(sm) {
      flex-direction: row;
      gap: 40px;
    }
  }

  &__left,
  &__right {
    width: 100%;
    @include display-after(sm) {
      width: 50vw;
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

  &__sku-wraper {
    display: flex;
  }

  &__sku-btn {
    width: 50px;
    height: 50px;
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
