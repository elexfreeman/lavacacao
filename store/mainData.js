export const state = () => ({
  mainSliderItems: [],
  pageCommonData: {},
});

export const mutations = {
  setMainSliderItems(state, data) {
    state.mainSliderItems = data;
  },
  setPageCommonData(state, data) {
    state.pageCommonData = data;
  },
};

export const getters = {
  mainSliderItems: (state) => state.mainSliderItems,
  pageCommonData: (state) => state.pageCommonData,
};

export const actions = {
  async loadMainSlider({ state, commit, dispatch, rootGetters }, slideList) {
    commit("setMainSliderItems", slideList);
  },
  async loadPageCommonData({ state, commit, dispatch, rootGetters }, data) {
    data.aboutText = data?.aboutText.replace(/\n/g, "<br />");
    data.topMenu = data?.top_menus?.data?.map((item) => {
      return {
        caption: item.attributes.caption,
        link: item.attributes.link,
      };
    });

    if (!data.topMenu) {
      data.topMenu = [];
    }
    commit("setPageCommonData", data);
  },
};
