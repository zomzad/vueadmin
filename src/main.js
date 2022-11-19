import { createApp } from "vue";
import App from "./layout/index.vue";
import router from "./router";
import store from "./store";
import installElementPlus from "./plugins/element";

const app = createApp(App);
installElementPlus(app);
app.use(store).use(router).mount("#app");
