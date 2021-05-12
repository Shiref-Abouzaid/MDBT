import axios from "axios";
import serverCookie from "cookie";

export default async function(context) {
  // console.log('in cart middleware');
  // if(process.server) {

  //     if(!context.req.headers.cookie) //new
  //     return;

  // let userData; //to get user credentials

  // //we check if registered and load user shopping cart and wishlist from server
  // if(context.req.headers.cookie) {
  //     const userDataCookie = context.req.headers.cookie.split(';').find(c => c.trim().startsWith('userData='));
  //     if(userDataCookie) {
  //         userData = userDataCookie.split('=')[1];
  //         // console.log('cookie decoded >> ', decodeURIComponent(userData));
  //         userData = decodeURIComponent(userData);
  //         // console.log('user data after >>> ', JSON.parse(userData));
  //         userData = JSON.parse(userData);
  //         if(userData.token) {
  //             console.log('got token now');
  //             let cartProducts = await axios.get('/carts/' + userData.userId);
  //             console.log('cart >> ', cartProducts.data.data);
  //             let products = cartProducts.data.data;
  //             let cart = [];
  //             // console.log('products >>> ', products);
  //             for(let product of products) {
  //                 let obj = {
  //                     id: product.product.id,
  //                     name: product.product.name,
  //                     imageUrl: product.product.image_url,
  //                     quantity: product.quantity,
  //                     price: product.product.regular_price,
  //                     vendorId: product.vendor_id
  //                 }
  //                 cart.push(obj);
  //             }
  //             // console.log('cart.........',cart);
  //             context.store.commit('setCartProducts', cart);
  //             console.log('store >> ', context.store.getters.cartProducts);

  //             //get wishlist products
  //             let wishlistProducts = await axios.get('/wishlist/' + userData.userId);
  //             console.log('wishlist >> ', wishlistProducts.data.data);
  //             let wishlistAllProducts = wishlistProducts.data.data;
  //             let wishlist = [];
  //             for(let product of wishlistAllProducts) {
  //                 let obj = {
  //                     id: product.product.id,
  //                     name: product.product.name,
  //                     imageUrl: product.product.image_url,
  //                     regularPrice: product.product.regular_price,
  //                     salePrice: product.product.sale_price,
  //                     stockStatus: +product.product.stock_status,
  //                     vendorId: product.product.vendor_id,
  //                     wishlisted: true
  //                 }
  //                 wishlist.push(obj);
  //             }
  //             context.store.commit('setWishlist', wishlist);
  //             console.log('store wishlist >> ', context.store.getters.wishlist);

  //         }
  //     }
  // }

  // console.log('in nuxt server init >> ', context.store.getters.isAuthenticated);

  // //we'll initialize the shopping cart from cookies when first loading
  // console.log('cookies >>> ', context.req.headers.cookie);

  // if(!userData) {
  //     const shoppingCartCookie = context.req.headers.cookie.split(';').find(c => c.trim().startsWith('cartProducts='));
  //     if(shoppingCartCookie) {
  //         let shoppingCart = shoppingCartCookie.split('=')[1];
  //         shoppingCart = decodeURIComponent(shoppingCart);
  //         shoppingCart = JSON.parse(shoppingCart);
  //         console.log('shopping cart from cookies >> ', shoppingCart);
  //         context.store.commit('setCartProducts', shoppingCart);
  //     }

  //     //get wishlist products
  //     const wishlistCookie = context.req.headers.cookie.split(';').find(c => c.trim().startsWith('wishlist='));
  //     if(wishlistCookie) {
  //         let wishlistProducts = wishlistCookie.split('=')[1];
  //         wishlistProducts = decodeURIComponent(wishlistProducts);
  //         wishlistProducts = JSON.parse(wishlistProducts);
  //         console.log('wishlist from cookies >> ', wishlistProducts);
  //         context.store.commit('setWishlist', wishlistProducts);
  //     }

  // }

  // }

  if (process.server) {
    let userId = context.store.getters["auth/userId"];

    //we check if registered and load user shopping cart and wishlist from server
    console.log(
      "in load cart >> ",
      context.store.getters["auth/isAuthenticated"],
      context.store.getters["auth/userId"]
    );

    if (context.store.getters["auth/isAuthenticated"]) {

      try {

        console.log("got token now");
        let cartProducts = await axios.get("/my/carts/" + userId);
        console.log("cart >> ", cartProducts.data.data);
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
        console.log('cart.........',cart);
        context.store.commit("cart/setCartProducts", cart);
        console.log("store >> ", context.store.getters.cartProducts);
  
        console.log("before");
  
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
        context.store.commit("wishlist/setWishlist", wishlist);
        console.log(
          "store wishlist >> ",
          context.store.getters["wishlist/wishlist"]
        );
        
      } catch (error) {
        console.log('cart load middleware error >> ', error);
      }


    } else {
      //we'll initialize the shopping cart from localstorage when first loading

      const cookies = serverCookie.parse(context.req.headers.cookie || "");

      if (cookies.hasOwnProperty("cartProducts")) {
        console.log(
          "cart products from server >>>>> ",
          JSON.parse(decodeURIComponent(cookies.cartProducts))
        );

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
          context.store.commit("cart/setCartProducts", shoppingCart);
        }
      }

      if (cookies.hasOwnProperty("wishlist")) {
        //get wishlist products
        const wishlistCookie = JSON.parse(decodeURIComponent(cookies.wishlist));

        if (wishlistCookie) {
          let wishlistProducts = wishlistCookie;
          // wishlistProducts = decodeURIComponent(wishlistProducts);
          // wishlistProducts = JSON.parse(wishlistProducts);
          console.log("wishlist from cookies >> ", wishlistProducts);
          context.store.commit("wishlist/setWishlist", wishlistProducts);
        }
      }
    }

    console.log(
      "in nuxt server init >> ",
      context.store.getters["auth/isAuthenticated"]
    );
  }
}
