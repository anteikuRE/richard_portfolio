import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";

const store = createStore({
  state() {
    return {
      scrollBarActive: false,
      activeOption: "op3",
      optionTheme: false,
      contactMenu: { status: false },
      active: {
        status: false,
        year: "2022",
      },
      yearMenu: { status: false },
    };
  },
});
const app = createApp(App);

app.use(store);

app.mount("#app");
