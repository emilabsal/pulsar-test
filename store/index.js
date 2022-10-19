export const state = () => ({
  valute: "",
});

export const mutations = {
  setValute(state, valute) {
    state.valute = valute;
  },
};

export const actions = {
  async getValute({ commit }) {
    await this.$axios.get("/daily_json.js").then((res) => {
      let data = Object.values(res.data.Valute);
      commit("setValute", data);
    });
  },
};

export const getters = {
  valute(state) {
    return state.valute;
  },
};
