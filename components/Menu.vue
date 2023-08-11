<template>
  <div class="menu">
    <NuxtLink
      :key="key"
      v-for="(item, key) in topMenu"
      class="menu__item"
      :to="item.link"
    >
      {{ item.caption }}
    </NuxtLink>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Menu",
  computed: {
    ...mapGetters("mainData", ["pageCommonData"]),
    topMenu() {
      return this.pageCommonData.topMenu;
    },
  },
  mounted() {},
};
</script>
<style lang="scss">
.menu {
  display: flex;
  gap: 36px;
  &__item {
    font-size: 24px;
    text-decoration: none;

  }
}
</style>
