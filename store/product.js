export const state = () => ({
  productList: [],
  product: {},
  selectedSkuId: -1,
});

export const mutations = {
  setProductList(state, data) {
    state.productList = data;
  },
  setProduct(state, data) {
    state.product = data;
  },
  setSelectedSkuId(state, data) {
    state.selectedSkuId = data;
  },
};

export const getters = {
  product: (state) => state.product,
  productList: (state) => state.productList,
  selectedSkuId: (state) => state.selectedSkuId,
};

export const actions = {
  async loadProduct({ state, commit, dispatch, rootGetters }, data) {
    commit("setProduct", data);
  },
  async loadProductList({ state, commit, dispatch, rootGetters }, data) {
    commit("setProductList", data);
  },
  setSelectedSkuId({ commit }, data) {
    commit("setSelectedSkuId", data);
  },
};
