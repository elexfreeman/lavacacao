export const state = () => ({
  mainSliderItems: [],
});

export const mutations = {
  setMainSliderItems(state, data) {
    state.mainSliderItems = data;
  },
};

export const getters = {
  mainSliderItems: (state) => state.mainSliderItems,
};

export const actions = {
  async loadMainSlider({ state, commit, dispatch, rootGetters }, slideList) {
    commit("setMainSliderItems", slideList);
    console.log(">>>>>", slideList);
  },
};
