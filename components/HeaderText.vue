<template>
  <div class="header-text">
    {{ headerText }}
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "HeaderText",
  components: {},
  computed: {
    ...mapGetters("mainData", ["pageCommonData"]),
    headerText() {
      return this.pageCommonData?.HeaderText;
    },
  },
};
</script>
<style lang="scss" scoped>
.header-text {
  @include title-font();
  margin-bottom: 0;
}
</style>
