<template>
  <div class="footer">
    <div class="footer__title">Контакты</div>
    <div class="footer__field">{{ pageCommonData.phone }}</div>
    <div class="footer__field">{{ pageCommonData.address }}</div>
    <div class="footer__field">
      <i class="fa-brands fa-instagram"></i>
      <span>{{ pageCommonData.instagrammLink }}</span>
    </div>
    <img class="footer__logo" :src="logoImg">
  </div>
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
  },
};
</script>
<style lang="scss" scoped>
.footer {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  font-size: 13px;
  flex-direction: column;
  background-color: $--footer-color;

  @include display-after(sm) {
  }

  &__title {
    @include title-font();
  }

  &__field {
    padding-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
  }

  &__logo {
    width: 151px;
    margin: 10px 0;
  }
}
</style>
