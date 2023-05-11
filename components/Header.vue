<template>
  <Containter>
    <div class="header">
      <NuxtLink to="/">
        <img class="header__logo" :src="logoImg" />
      </NuxtLink>
      <div class="header__text-wraper">
        <HeaderText />
      </div>
      <HeaderContacts />
    </div>
    <div class="header__text-wraper-mobile">
      <HeaderText />
    </div>
  </Containter>
</template>
<script>
import { MEDIA_URL } from "../config";
import { mapGetters } from "vuex";

import Container from "./Containter.vue";
import HeaderContacts from "./HeaderContacts.vue";
import HeaderText from "./HeaderText.vue";

export default {
  name: "About",
  components: {
    Container,
    HeaderContacts,
    HeaderText,
  },
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

  @include display-after(md) {
    justify-content: space-around;
  }

  @include display-after(sm) {
    justify-content: space-between;
  }

  &__text-wraper-mobile {
    display: block;
    text-align: center;
    width: auto;
    display: flex;
    justify-content: center;

    .header-text {
      padding: 10px 20px;
      background: #ffffffb0;
      color: #000;
      border-radius: 5px;;
    }

    @include display-after(md) {
      display: none;
    }
  }

  &__text-wraper {
    display: none;
    @include display-after(md) {
      display: block;
    }
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
