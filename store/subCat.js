// export default {

export const state = () => ({
  subCategories: [],
  indexCats: [],
  storeCats: [],
  specialityCats: []
});

export const getters = {
  subCategories(state) {
    return state.subCategories;
  },
  indexCats(state) {
    return state.indexCats;
  },
  storeCats(state) {
    return state.storeCats
  },
  specialityCats(state) {
    return state.specialityCats
  }
};

export const mutations = {
  setSubCategories(state, subCategories) {
    state.subCategories = subCategories;
  },
  setIndexCats(state, subCategories) {
    state.indexCats = subCategories;
  },
  setStoreCats(state, subCategories) {
    state.storeCats = subCategories;
  },
  setSpecialityCats(state, subCategories) {
    state.specialityCats = subCategories;
  }
};
// }
