// export default {

export const state = () => ({
  popularProducts: []
});

export const getters = {
  popularProducts(state) {
    return state.likeProducts;
  }
};

export const mutations = {
  setPopularProducts(state, likeProducts) {
    state.likeProducts = likeProducts;
  }
};

// }
