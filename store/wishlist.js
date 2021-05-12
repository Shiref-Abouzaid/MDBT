import Cookie from "js-cookie";
import axios from "axios";

// export default {

export const state = () => ({
  wishlist: []
});

export const getters = {
  wishlist(state) {
    return state.wishlist;
  },
  totalProductsCount(state) {
    return state.wishlist.length;
  }
};

export const mutations = {
  setWishlist(state, wishlist) {
    // console.log('wishlist from cookie init >>', wishlist);
    state.wishlist = wishlist;
  },
  deleteWishlist(state) {
    state.wishlist = [];
  },
  addProduct(state, product) {
    state.wishlist.push(product);
  },
  deleteElement(state, index) {
    state.wishlist.splice(index, 1);
  }
};

export const actions = {
  addToWishlist(vuexContext, product) {
    console.log("in add");
    vuexContext.commit("addProduct", product);

    if (!vuexContext.rootGetters["auth/isAuthenticated"])
      Cookie.set("wishlist", vuexContext.state.wishlist);
    // this.$cookies.set('wishlist', vuexContext.state.wishlist);
    // localStorage.setItem(
    //   "wishlist",
    //   JSON.stringify(vuexContext.state.wishlist)
    // );
    // console.log("wishlist cookie >> ", this.$cookies.get("wishlist"));
  },
  removeFromWishlist(vuexContext, product) {
    console.log("in remove");
    let index = vuexContext.state.wishlist.findIndex(pro => {
      return pro.id == product.id;
    });
    vuexContext.commit("deleteElement", index);

    if (!vuexContext.rootGetters["auth/isAuthenticated"])
      Cookie.set("wishlist", vuexContext.state.wishlist);
    // this.$cookies.set('wishlist', vuexContext.state.wishlist);
    // localStorage.setItem(
    //   "wishlist",
    //   JSON.stringify(vuexContext.state.wishlist)
    // );
    // console.log("wishlist cookie >> ", this.$cookies.get("wishlist"));
  },
  saveToWishlist(vuexContext, id) {
    let wishlistProduct = {
      product_id: id,
      user_id: vuexContext.rootGetters["auth/userId"]
    };

    axios
      .post("/wishlist", wishlistProduct)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  },
  deleteFromWishlist(vuexContext, id) {
    axios
      .delete("/wishlist/" + id + "/" + vuexContext.rootGetters["auth/userId"])
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
};

// };
