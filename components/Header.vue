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
  computed: {
    ...mapGetters("mainData", ["pageCommonData"]),
    logoImg() {
      const url = this.pageCommonData?.logo?.data?.attributes?.url;
      return `${MEDIA_URL}${url}`;
    },
  },
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
