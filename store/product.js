export const state = () => ({
  productList: [],
  product: {},
});

export const mutations = {
  setProductList(state, data) {
    state.productList = data;
  },
  setProduct(state, data) {
    state.product = data;
  },
};

export const getters = {
  product: (state) => state.product,
  productList: (state) => state.productList,
};

export const actions = {
  async loadProduct({ state, commit, dispatch, rootGetters }, data) {
    commit("setProduct", data);
  },
  async loadProductList({ state, commit, dispatch, rootGetters }, data) {
    commit("setProductList", data);
  },
};
