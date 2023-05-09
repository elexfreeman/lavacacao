<template>
  <div class="header">
    <NuxtLink to="/">
      <img class="header__logo" :src="logoImg" />
    </NuxtLink>
  </div>
</template>
<script>
import { MEDIA_URL } from "../config";
import { mapGetters } from "vuex";
export default {
  name: "About",
  data() {
    return {};
  },
  computed: {
    ...mapGetters("mainData", ["pageCommonData"]),
    imgStyle() {
      return {
        backgroundImage: `url(${MEDIA_URL}${this.pageCommonData.aboutImg.data.attributes.formats.large.url})`,
      };
    },
    logoImg() {
      return `${MEDIA_URL}${this.pageCommonData?.logo?.data?.attributes?.url}`;
    },
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0px;

  @include display-after(sm) {
    margin-bottom: 0px;
  }

  &__logo {
    width: 151px;
    margin: 10px 0;

    @include display-after(sm) {
      width: 200px;
    }
  }
}
</style>
