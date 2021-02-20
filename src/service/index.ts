import Vue from "vue";
import * as router from "./router";

Vue.prototype.$service = {
  ...router
};

declare module "vue/types/vue" {
  interface Vue {
    $service: {
      toIndex: () => void;
    };
  }
}
