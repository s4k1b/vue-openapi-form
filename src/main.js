import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import { initVeeValidate } from "@/plugins/vee-validate";

// global components
import VueOpenapiForm from "@/components/VueOpenapiForm";
import ObjectForm from "@/components/ObjectForm";
import ArrayInput from "@/components/ArrayInput";
import KeyValuePairs from "@/components/KeyValuePairs";
import SimpleInput from "@/components/SimpleInput";

Vue.component("vue-openapi-form", VueOpenapiForm);
Vue.component("object-form", ObjectForm);
Vue.component("array-input", ArrayInput);
Vue.component("key-value-pairs", KeyValuePairs);
Vue.component("simple-input", SimpleInput);

Vue.config.productionTip = false;

initVeeValidate();

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
