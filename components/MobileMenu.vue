<template>
  <div class="mobile-menu">
    <img @click="onOpen" src="~assets/menu.svg" />
    <div v-if="isOpen" class="mobile-menu__modal">
      <LvContainer class="mobile-menu__content">
        <div class="mobile-menu__wraper">
          <NuxtLink class="header__item header__logo-link" to="/">
            <img class="mobile-menu__logo" :src="logoImg" />
          </NuxtLink>
          <NuxtLink
            :key="key"
            v-for="(item, key) in topMenu"
            class="mobile-menu__item"
            :to="item.link"
          >
            {{ item.caption }}
          </NuxtLink>
        </div>

        <img @click="onClose" src="~assets/close.svg" />
      </LvContainer>
    </div>
  </div>
</template>

<script>
import { MEDIA_URL } from "../config";
import { mapGetters } from "vuex";
export default {
  name: "MobileMenu",
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    ...mapGetters("mainData", ["pageCommonData"]),
    topMenu() {
      return this.pageCommonData.topMenu;
    },
    logoImg() {
      const url = this.pageCommonData?.logo?.data?.attributes?.url;
      return `${MEDIA_URL}${url}`;
    },
  },
  methods: {
    onOpen() {
      this.isOpen = true;
    },
    onClose() {
      this.isOpen = false;
    },
  },
};
</script>
<style lang="scss">
.mobile-menu {
  color: #ffffff;

  &__modal {
    position: fixed;
    width: 100vw;
    top: 0;
    left: 0;
    background: $--color-body;
    border-bottom: 1px solid $--text-color;
  }

  &__content {
    height: 66px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__wraper {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &__item {
    text-decoration: none;
    font-size: 18px;
  }

  &__logo {
    display: none;
    @include display-after(md) {
      display: block;
      width: 89px;
      margin-right: 20px;
    }
  }
}
</style>
