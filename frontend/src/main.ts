import { createApp } from "vue";
import "./style.scss";
import App from "./App.vue";
import * as Icons from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import router from "./router";
import {createPinia } from "pinia";
library.add(Icons.faArrowLeft, Icons.faClose);
const pinia = createPinia()
createApp(App)
.component("Icon", FontAwesomeIcon)
.use(pinia)
.use(router)
.mount("#app");
