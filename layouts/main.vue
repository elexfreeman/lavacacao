<template>
  <div>
    <MHeader />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
import "../styles/css/main.scss"
import MHeader from "../components/mary/Header.vue";

export default {
  name: "MainTemplate",
  components: {
    MHeader,
  },
};
</script>
