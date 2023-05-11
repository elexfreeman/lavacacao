<template>
  <div class="header-contacts">
    <div class="header-contacts__field">
      <img class="header-contacts__img" :src="phoneIco" />
      <span>{{ pageCommonData.phone }}</span>
    </div>
    <div class="header-contacts__field">
      <img class="header-contacts__img" :src="locationIco" />
      <span>{{ pageCommonData.address }}</span>
    </div>
    <div class="header-contacts__field">
      <img class="header-contacts__img" :src="instaIco" />
      <span>{{ pageCommonData.instagrammLink }}</span>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { MEDIA_URL } from "../config";

export default {
  name: "HeaderContacts",
  components: {},
  computed: {
    ...mapGetters("mainData", ["pageCommonData"]),
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
.header-contacts {
  display: none;
  align-items: flex-end;
  justify-content: right;
  flex-direction: column;

  @include display-after(sm) {
    display: flex;
  }

  &__field {
    font-size: 13px;
    text-align: right;
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    @include display-after(sm) {
      font-size: 18px;
    }
  }

  &__img {
    width: 25px;
  }
}
</style>
