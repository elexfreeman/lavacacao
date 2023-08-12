<template>
  <div class="galery">
    <LvContainer>
      <div class="galery__title">{{ pageCommonData.galeryTitle }}</div>
      <div class="galery__grid">
        <div
          class="galery__item"
          :class="getImgClass(key)"
          :style="getImgStyle(key)"
          :src="item"
          v-for="(item, key) in imageList"
          :key="key"
        ></div>
      </div>
    </LvContainer>
  </div>
</template>

<script>
import { MEDIA_URL } from "../config";
import { mapGetters } from "vuex";

export default {
  name: "Galery",
  mounted() {
    console.log(this.pageCommonData);
  },
  computed: {
    ...mapGetters("mainData", ["pageCommonData"]),
    aboutText() {
      return this.pageCommonData?.aboutText;
    },
    imageList() {
      return this.pageCommonData?.galeryImage?.data?.map(
        (item) => `${MEDIA_URL}${item.attributes.formats.large.url}`
      );
    },
  },
  methods: {
    getImgClass(key) {
      return `galery__item-${key + 1}`;
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
.galery {
  &__title {
    @include title-font();
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 80px 80px 80px 80px;
    grid-gap: 10px;

    @include display-after(md) {
      grid-template-rows: 150px 150px 150px 150px;
    grid-gap: 15px;
    }

    @include display-after(lg) {
      grid-template-rows: 200px 200px 200px 200px;
    grid-gap: 20px;
    }
  }

  &__item {
    background-position: center;
  }

  &__item-1 {
    grid-column: 1;
    grid-row: span 4; /* This makes the element take up two rows */
  }

  &__item-2 {
    grid-row: span 2; /* This makes the element take up two rows */
  }

  &__item-3 {
    grid-row: span 3; /* This makes the element take up two rows */
  }

  &__item-4 {
    grid-row: span 2; /* This makes the element take up two rows */
  }
  &__item-5 {
    grid-row: span 1; /* This makes the element take up two rows */
  }
}
</style>
