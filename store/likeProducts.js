// export default {

export const state = () => ({
  likeProducts: []
});

export const getters = {
  likeProducts(state) {
    return state.likeProducts;
  }
};

export const mutations = {
  setLikeProducts(state, likeProducts) {
    state.likeProducts = likeProducts;
  }
};

// }
