export default {
  state: {
    position: {},
  },
  mutations: {
    setPosition(state, position) {
      state.position = position;
    },
  },
  actions: {
    setPosition({ commit }, position) {
      commit("setPosition", position);
    },
  },
};
