import Vue from "vue";
import Vuex from "vuex";
import position from "./modules/position";
import user from "./modules/user";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    position,
    user,
  },
});
export default store;
