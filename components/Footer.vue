<template>
  <LvContainer>
    <div class="footer">
      <div class="footer__logo-wraper">
        <img class="footer__logo" :src="logoImg" />
      </div>
      <div class="footer__field-wraper">
        <div class="footer__menu">
          <NuxtLink
            :key="key"
            v-for="(item, key) in topMenu"
            class="footer__menu-item"
            :to="item.link"
          >
            {{ item.caption }}
          </NuxtLink>
        </div>
        <div class="footer__contacts">
          <div v-if="pageCommonData.phone" class="footer__field">
            <img class="footer__img" :src="phoneIco" />
            {{ pageCommonData.phone }}
          </div>
          <div v-if="pageCommonData.address" class="footer__field">
            <img class="footer__img" :src="locationIco" />
            {{ pageCommonData.address }}
          </div>
          <div v-if="pageCommonData.instagrammLink" class="footer__field">
            <img class="footer__img" :src="instaIco" />
            <span>{{ pageCommonData.instagrammLink }}</span>
          </div>
        </div>
      </div>
    </div>
  </LvContainer>
</template>
<script>
import { MEDIA_URL } from "../config";
import { mapGetters } from "vuex";

export default {
  name: "Footer",
  computed: {
    ...mapGetters("mainData", ["pageCommonData"]),
    logoImg() {
      return `${MEDIA_URL}${this.pageCommonData?.logo?.data?.attributes?.url}`;
    },
    topMenu() {
      return this.pageCommonData.topMenu;
    },
    phoneIco() {
      return `${MEDIA_URL}${this.pageCommonData?.phoneIco?.data?.attributes?.url}`;
    },
    locationIco() {
      return `${MEDIA_URL}${this.pageCommonData?.locationIco?.data?.attributes?.url}`;
    },
    instaIco() {
      return `${MEDIA_URL}${this.pageCommonData?.instaIco?.data?.attributes?.url}`;
    },
  },
};
</script>
<style lang="scss" scoped>
.footer {
  padding: 20px 0;

  @include display-after(sm) {
  }

  &__title {
    @include title-font();
  }

  &__logo-wraper {
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid $--title-color;
  }

  &__logo {
    width: 174px;
    margin: 40px 0;
  }

  &__menu {
    display: flex;
    flex-direction: column;
    gap: 10px;

    @include display-after(md) {
      flex-direction: row;
      gap: 50px;
    }
    @include display-after(md) {
      flex-direction: row;
      gap: 50px;
    }
  }

  &__menu-item {
    text-decoration: none;
  }

  &__field-wraper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 20px;
  }

  &__field {
    padding-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 4px;

    @include display-after(md) {
    }
  }

  &__img {
    width: 15px;

    @include display-after(md) {
      width: 20px;
    }

    @include display-after(lg) {
      width: 30px;
    }
  }

  &__contacts {
    @include display-after(md) {
      display: flex;
      justify-content: flex-end;
      gap: 20px;
    }

    @include display-after(lg) {
      gap: 50px;
    }
  }
}
</style>
