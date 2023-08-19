<template>
  <div class="header">
    <NuxtLink class="header__item header__logo-link" to="/">
      <img class="header__logo" :src="logoImg" />
    </NuxtLink>

    <div class="header__item header__menu">
      <Menu />
    </div>

    <div class="header__item header__contacts">
      <HeaderContacts />
    </div>

    <div class="header__item header__mobile-menu">
      <MobileMenu />
    </div>
  </div>
</template>
<script>
import { MEDIA_URL } from "../config";
import { mapGetters } from "vuex";

import Container from "./Containter.vue";
import HeaderContacts from "./HeaderContacts.vue";
import HeaderText from "./HeaderText.vue";
import MobileMenu from "./MobileMenu.vue";

export default {
  name: "About",
  components: {
    Container,
    HeaderContacts,
    HeaderText,
    MobileMenu,
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
  justify-content: space-between;
  align-items: center;
  padding-top: 5px;

  @include display-after(md) {
  }

  @include display-after(sm) {
  }

  &__menu {
    display: none;
    @include display-after(lg) {
      display: flex;
      justify-content: center;
    }
  }

  &__item {
    width: auto;

    @include display-after(md) {
      width: 200px;
    }

    @include display-after(lg) {
      width: 600px;
    }
  }

  &__mobile-menu {
    display: flex;
    justify-content: flex-end;

    @include display-after(lg) {
      display: none;
    }
  }

  &__contacts {
    display: none;

    @include display-after(md) {
      display: flex;
      justify-content: center;
      width: 400px;
    }

    @include display-after(md) {
      display: flex;
      justify-content: flex-end;
    }
  }

  &__logo-link {
  }

  &__logo {
    width: 89px;

    @include display-after(sm) {
      width: 89px;
    }
  }
}
</style>
