let configureWebpack;

if (process.env.NODE_ENV === "production") {
  configureWebpack = {
    externals: {
      vue: "Vue",
      "vue-router": "VueRouter",
      vuex: "Vuex",
      vuetify: "Vuetify",
      "vuetify-message-snackbar": "VuetifyMessageSnackbar"
    }
  };
}

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/demo/" : "/",
  outputDir: "demo",
  configureWebpack
};
