<template>
  <Layout>
    <router-view></router-view>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import Layout from "./layout/index.vue";

export default Vue.extend({
  name: "App",
  components: {
    Layout
  },
  watch: {
    $route() {
      const title = this.$route.meta?.title || "thinkupp.github.io";
      document.title = title;
    }
  }
});
</script>
