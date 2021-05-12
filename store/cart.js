import Cookie from "js-cookie";
import serverCookie from "cookie";
import axios from "axios";

// export default {

export const state = () => ({
  cartPorducts: []
});

export const getters = {
  cartProducts(state) {
    return state.cartPorducts;
  },
  totalQuantity(state) {
    let total = 0;
    for (let product of state.cartPorducts) {
      total += product.quantity;
    }
    return total;
  },
  totalPrice(state) {
    let total = 0;
    for (let product of state.cartPorducts) {
      total += product.price * product.quantity;
    }
    return total;
  },
  checkoutProducts(state) {
    let products = [];
    for (let product of state.cartPorducts) {
      let productDetail = {
        id: product.id,
        quantity: product.quantity,
        price: product.price,
        vendorId: product.vendorId
      };
      products.push(productDetail);
    }
    return products;
  }
};

export const mutations = {
  setCartProducts(state, products) {
    state.cartPorducts = products;
  },
  deleteCart(state) {
    state.cartPorducts = [];
  },
  addProduct(state, product) {
    state.cartPorducts.push(product);
  },
  updateProductQuantity(state, info) {
    state.cartPorducts[info.index].quantity = info.quantity;
  },
  deleteElement(state, productIndex) {
    state.cartPorducts.splice(productIndex, 1);
  }
};

export const actions = {
  addOrUpdateCartProduct(vuexContext, product) {
    let productExists = vuexContext.state.cartPorducts.find(pro => {
      return pro.id == product.id;
    });
    console.log("product exists >> ", productExists);

    if (!productExists) {
      //if product not exist in cart, then push it
      // vuexContext.state.cartPorducts.push(product);

      vuexContext.commit("addProduct", product);

      //then, push cart in cookie to retrieve it later
      if (!vuexContext.rootGetters["auth/isAuthenticated"])
        Cookie.set("cartProducts", vuexContext.state.cartPorducts);

    } else {
      //if product exist, then update it's quantity
      let productIndex = vuexContext.state.cartPorducts.findIndex(pro => {
        return pro.id == product.id;
      });
      console.log("product found >> ", productIndex);

      // vuexContext.state.cartPorducts[productIndex].quantity = product.quantity;
      vuexContext.commit("updateProductQuantity", {
        index: productIndex,
        quantity: product.quantity
      });

      if (!vuexContext.rootGetters["auth/isAuthenticated"])
        Cookie.set("cartProducts", vuexContext.state.cartPorducts);

    }
  },
  removeCartProduct(vuexContext, product) {
    let productIndex = vuexContext.state.cartPorducts.findIndex(pro => {
      return pro.id == product.id;
    });

    vuexContext.commit("deleteElement", productIndex);
    if (!vuexContext.rootGetters["auth/isAuthenticated"])
      Cookie.set("cartProducts", vuexContext.state.cartPorducts);

  },
  saveCartProduct(vuexContext, product) {
    let cartProduct = {
      user_id: vuexContext.rootGetters["auth/userId"],
      product_id: product.id,
      quantity: product.quantity,
      vendor_id: product.vendorId
    };
    console.log("save cart product >> ", cartProduct);
    axios
      .post("/carts", cartProduct)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  },
  updateCartProduct(vuexContext, product) {
    let cartProduct = {
      user_id: vuexContext.rootGetters["auth/userId"],
      product_id: product.id,
      quantity: product.quantity,
      vendor_id: product.vendorId
    };
    console.log("update cart product >> ", cartProduct);
    axios
      .put("/cart/" + vuexContext.rootGetters["auth/userId"] + "/" + product.id, cartProduct)
      .then(res => {
        console.log("res >> ", res);
      })
      .catch(err => {
        console.log("err >> ", err);
      });
  },
  deleteCartProduct(vuexContext, id) {
    console.log("delete cart product >> ", id);
    axios
      .delete("/cart/" + vuexContext.rootGetters["auth/userId"]+ "/" + id)
      .then(res => {
        console.log("res >> ", res);
      })
      .catch(err => {
        console.log("err >> ", err);
      });
  },
  moveToCart(vuexContext, product) {
    // console.log('product in store >> ', product);
    let productExists = vuexContext.state.cartPorducts.find(pro => {
      return pro.id == product.id;
    });
    console.log("product exists >> ", productExists);

    if (!productExists) {
      vuexContext.state.cartPorducts.push(product);

      if (vuexContext.rootGetters["auth/isAuthenticated"]) {
        vuexContext.dispatch("saveCartProduct", product);
      } else {
        Cookie.set("cartProducts", vuexContext.state.cartPorducts);
        // this.$cookies.set('cartProducts', vuexContext.state.cartPorducts);
        // localStorage.setItem(
        //   "cartProducts",
        //   JSON.stringify(vuexContext.state.cartPorducts)
        // );
      }
    }
  },
  async loadCart(vuexContext, context) {
    // let userData = JSON.parse(localStorage.getItem("userData")); //to get user credentials

    let userId = vuexContext.rootGetters["auth/userId"];

    //we check if registered and load user shopping cart and wishlist from server
    console.log(
      "in load cart >> ",
      vuexContext.rootGetters["auth/isAuthenticated"],
      vuexContext.rootGetters["auth/userId"]
    );
    if (vuexContext.rootGetters["auth/isAuthenticated"]) {
      console.log("got token now");

      try {
        
        let cartProducts = await axios.get("/carts/" + userId);
        // console.log("cart >> ", cartProducts.data.data);
        let products = cartProducts.data.data;
        let cart = [];
        // console.log('products >>> ', products);
        for (let product of products) {
          let obj = {
            id: product.product_id,
            name: product.name,
            imageUrl: product.image_url,
            quantity: product.quantity,
            price: product.regular_price,
            vendorId: product.vendor_id
          };
          cart.push(obj);
        }
        // console.log('cart.........',cart);
        vuexContext.commit("setCartProducts", cart);
        // console.log("store >> ", vuexContext.getters.cartProducts);

      } catch (error) {
        console.log('loading cart error >> ', error);
      }


      console.log("before");

      try {
        //get wishlist products
        let wishlistProducts = await axios.get("/my/wishlist/user/" + userId);
        console.log("wishlist >> ", wishlistProducts.data.data);
        let wishlistAllProducts = wishlistProducts.data.data;
        let wishlist = [];
        for (let product of wishlistAllProducts) {
          let obj = {
            id: product.product.id,
            name: product.product.name,
            imageUrl: product.product.image_url,
            regularPrice: product.product.regular_price,
            salePrice: product.product.sale_price,
            stockStatus: +product.product.stock_status,
            vendorId: product.product.vendor_id,
            wishlisted: true
          };
          wishlist.push(obj);
        }
        vuexContext.commit("wishlist/setWishlist", wishlist, { root: true });
        // console.log("store wishlist >> ", vuexContext.rootGetters["wishlist/wishlist"]);
      } catch (error) {
        console.log('loading wishlist error >> ', error);
      }

    } else {
      //we'll initialize the shopping cart from localstorage when first loading

      const cookies = serverCookie.parse(context.req.headers.cookie || "");

      if (cookies.hasOwnProperty("cartProducts")) {
        console.log(
          "cart products from server >>>>> ",
          JSON.parse(decodeURIComponent(cookies.cartProducts))
        );
      }

      // const shoppingCartCookie = JSON.parse(
      //   localStorage.getItem("cartProducts")
      // );

      const shoppingCartCookie = JSON.parse(
        decodeURIComponent(cookies.cartProducts)
      );

      if (shoppingCartCookie) {
        let shoppingCart = shoppingCartCookie;
        // shoppingCart = decodeURIComponent(shoppingCart);
        // shoppingCart = JSON.parse(shoppingCart);
        console.log("shopping cart from cookies >> ", shoppingCart);
        vuexContext.commit("setCartProducts", shoppingCart);
      }

      //get wishlist products
      const wishlistCookie = JSON.parse(decodeURIComponent(cookies.wishlist));

      if (wishlistCookie) {
        let wishlistProducts = wishlistCookie;
        // wishlistProducts = decodeURIComponent(wishlistProducts);
        // wishlistProducts = JSON.parse(wishlistProducts);
        console.log("wishlist from cookies >> ", wishlistProducts);
        vuexContext.commit("wishlist/setWishlist", wishlistProducts, {
          root: true
        });
      }
    }

    console.log(
      "in nuxt server init >> ",
      vuexContext.rootGetters["auth/isAuthenticated"]
    );
  },
  async getCart(vuexContext) {
    // the same as loadCart(), but without context to get cart data on client only
    let userId = vuexContext.rootGetters["auth/userId"];

    //we check if registered and load user shopping cart and wishlist from server
    console.log("in load cart >> ", vuexContext.rootGetters["auth/isAuthenticated"], vuexContext.rootGetters["auth/userId"]);
    
    if (vuexContext.rootGetters["auth/isAuthenticated"]) {
      console.log("got token now");

      try {
        let cartProducts = await axios.get("/my/carts/" + userId);
        console.log("cart >> ", cartProducts.data.data);
        let products = cartProducts.data.data;
        let cart = [];
        // console.log('products >>> ', products);
        for (let product of products) {
          let obj = {
            id: product.id,
            name: product.name,
            imageUrl: product.image_url,
            quantity: product.quantity,
            price: product.regular_price,
            vendorId: product.vendor_id
          };
          cart.push(obj);
        }
        // console.log('cart.........',cart);
        vuexContext.commit("setCartProducts", cart);
        // console.log("store >> ", vuexContext.getters.cartProducts);
      } catch (error) {
        console.log('loading cart error >> ', error);
      }

      try {
        //get wishlist products
        let wishlistProducts = await axios.get("/my/wishlist/user/" + userId);
        console.log("wishlist >> ", wishlistProducts.data.data);
        let wishlistAllProducts = wishlistProducts.data.data;
        let wishlist = [];
        for (let product of wishlistAllProducts) {
          let obj = {
            id: product.product.id,
            name: product.product.name,
            imageUrl: product.product.image_url,
            regularPrice: product.product.regular_price,
            salePrice: product.product.sale_price,
            stockStatus: +product.product.stock_status,
            vendorId: product.product.vendor_id,
            wishlisted: true
          };
          wishlist.push(obj);
        }
        vuexContext.commit("wishlist/setWishlist", wishlist, { root: true });
        // console.log("store wishlist >> ", vuexContext.rootGetters["wishlist/wishlist"]);
      } catch (error) {
        console.log('loading wishlist error >> ', error);
      }

    }
  },
  appendCartProductsAfterLogin(vuexContext) {
    const shoppingCartCookie = Cookie.get("cartProducts");

    console.log("cart products after login", shoppingCartCookie);

    if (shoppingCartCookie) {
      let shoppingCart = JSON.parse(shoppingCartCookie);
      console.log("shopping cart from cookies >> ", shoppingCart);
      let cookiesProducts = [];

      for (let cartProduct of shoppingCart) {
        let product = {
          user_id: vuexContext.rootGetters["auth/userId"],
          product_id: cartProduct.id,
          quantity: cartProduct.quantity,
          vendor_id: cartProduct.vendorId
        };
        cookiesProducts.push(product);
      }

      console.log("cookies products >> ", cookiesProducts);

      axios
        .post("/carts/add-to-cart-after-login", {
          cartProducts: cookiesProducts
        })
        .then(res => {
          console.log("cart res >> ", res);
          vuexContext.dispatch("getCart");
          Cookie.remove("cartProducts");
        })
        .catch(err => {
          console.log("err >> ", err);
        });
    } else {
      vuexContext.dispatch("getCart");
    }
  }
};

// };
