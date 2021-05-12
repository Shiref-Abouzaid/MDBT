// export default {

export const state = () => ({
  categories: []
});

export const getters = {
  categories(state) {
    return state.categories;
  }
};

export const mutations = {
  setCategories(state, categories) {
    state.categories = categories;
  }
};

export const actions = {
  loadCategories(vuexContext) {
    // return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve([
    //         {id: 'home', cat: 'Home'},
    //         {id: 'offers', cat: 'Hot Offers'},
    //         {id: 'products', cat: 'Produts'},
    //         {id: 'services', cat: 'Services'},
    //         {id: 'news', cat: 'News Feed'},
    //         {id: 'terms', cat: 'Terms & Policy'}
    //       ]);
    //     //   reject('an error occurred');
    //     }, 2000);
    //   })
    //   .then(res => {
    //     // console.log(res);
    //     // this.categories = res;
    //     return res;
    //   })
    // //   .catch(err => {
    // //     console.log(err);
    // //   })
  }
};

// }
