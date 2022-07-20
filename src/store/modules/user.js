export default {
  state: {
    userName: "",
  },
  mutations: {
    setUserName(state, userName) {
      state.userName = userName;
    },
  },
  actions: {
    setUserName({ commit }, userName) {
      commit("setUser", userName);
    },
  },
};
