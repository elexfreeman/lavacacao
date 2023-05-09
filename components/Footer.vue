<template>
  <div class="footer">
    <div class="footer__title">Контакты</div>
    <div class="footer__field">{{ pageCommonData.phone }}</div>
    <div class="footer__field">{{ pageCommonData.address }}</div>
    <div class="footer__field">{{ pageCommonData.instagrammLink }}</div>
    <img class="footer__logo" :src="logoImg" />
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
  background-color: $--footer-color;
  padding: 20px 0;
  color: #ffffff;
  font-size: 13px;
  flex-direction: column;

  @include display-after(sm) {
  }

  &__title {
    font-size: 20px;
    font-weight: 100;
    margin-bottom: 20px;

    @include display-after(sm) {
      font-size: 30px;
    }
  }

  &__field {
    padding-bottom: 10px;
  }

  &__logo {
    width: 151px;
    margin: 10px 0;
  }
}
</style>
