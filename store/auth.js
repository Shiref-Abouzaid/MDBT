import axios from "axios";
import Cookie from "js-cookie";

export const state = () => ({
  token: null,
  userId: null,
  userType: null,
  verified: false,
  firstName: "",
  image: null,
});

export const getters = {
  isAuthenticated(state) {
    return state.token != null;
  },
  token(state) {
    return state.token;
  },
  userId(state) {
    return state.userId;
  },
  userType(state) {
    return state.userType;
  },
  verified(state) {
    return state.verified;
  },
  firstName(state) {
    return state.firstName;
  },
  userImage(state) {
    return state.image
  }
};

export const mutations = {
  authUser(state, userData) {
    console.log("token >>. ", userData);
    state.token = userData.token;
    state.userId = userData.userId;
    state.userType = userData.userType;
    state.verified = userData.verified;
    state.firstName = userData.firstName;
    state.image = userData.image
  },
  logout(state) {
    state.token = null;
    state.userId = null;
    delete axios.defaults.headers.common["x-access-token"];
    Cookie.remove("userData");
    Cookie.remove("x-access-token");
    this.$router.push("/");
    // this.$cookies.remove('userData')

    axios.defaults.headers.common["Authorization"] = '';

    // localStorage.removeItem("userData");
  },
  verify(state, verified) {
    state.verified = verified;
    //then update it in localstorage and cookies
    const userData = {
      token: state.token,
      userId: state.userId,
      userType: state.userType,
      firstName: state.firstName,
      image: state.image,
      verified: verified
    };

    // localStorage.setItem("userData", JSON.stringify(userData));
    Cookie.set("userData", JSON.stringify(userData));

    // Cookie.set('userData', JSON.stringify(userData));
    // this.$cookies.set('userData', userData);
  }
};

export const actions = {
  signup(vuexContext, userData) {
    return axios
      .post("/users", userData)
      .then(res => {
        const userData = {
          token: res.data.data.api_token,
          userId: res.data.data.id,
          userType: res.data.data.type,
          firstName: res.data.data.first_name,
          verified: res.data.data.phone_verified_at ? true : false
        };
        console.log("user data >> ", userData);
        console.log("res >> ", res);
        vuexContext.commit("authUser", userData);
        // localStorage.setItem("userData", JSON.stringify(userData));

        //put user auth data in cookie
        Cookie.set("x-access-token", res.data.data.api_token);
        Cookie.set("userData", JSON.stringify(userData));

        //append products after signup
        vuexContext.dispatch("cart/appendCartProductsAfterLogin", null, {
          root: true
        });

        // Cookie.set('userData', JSON.stringify(userData));
        // this.$cookies.set('userData', userData);
      })
      .catch(err => {
        console.log(err);
      });
  },
  signupVendor(vuexContext, vendorData) {
    let vendorUrl = "";
    if (vendorData.type == "vendor") {
      vendorUrl = "/users/vendor/register";
    } else if (vendorData.type == "doctor") {
      vendorUrl = "/users/doctor/register";
    } else if (vendorData.type == "technician") {
      vendorUrl = "/users/technician/register";
    } else if (vendorData.type == "driver") {
      vendorUrl = "/users/driver/register";
    } else if ((vendorData.type = "developer")) {
      vendorUrl = "/users/developer/register";
    }

    return axios.post(vendorUrl, vendorData).then(res => {
      console.log("res vendor >> ", res);
      const vendorData = {
        token: res.data.data.api_token,
        userId: res.data.data.id,
        userType: res.data.data.type,
        firstName: res.data.data.first_name,
        verified: res.data.data.phone_verified_at ? true : false
      };
      console.log("vendor data >> ", vendorData);
      console.log("res vendor >> ", res);
      vuexContext.commit("authUser", vendorData);
      // localStorage.setItem("userData", JSON.stringify(vendorData));

      //put user auth data in cookie
      Cookie.set("x-access-token", res.data.data.api_token);
      Cookie.set("userData", JSON.stringify(vendorData));

      //append products after signup
      vuexContext.dispatch("cart/appendCartProductsAfterLogin", null, {
        root: true
      });

      // Cookie.set('userData', JSON.stringify(vendorData));
      // this.$cookies.set('userData', vendorData);
    });
    // .catch(err => {
    //   console.log('error >>>', err);
    // });
  },
  login(vuexContext, userData) {
    return axios.post("/my/users/login", userData).then(res => {
      const userData = {
        token: res.data.data.user.token,
        userId: res.data.data.user.id,
        userType: res.data.data.user.type,
        firstName: res.data.data.user.first_name,
        image: res.data.data.user.image.url,
        verified: res.data.data.user.is_phone_verified
      };
      console.log("login >> ", userData);
      console.log("login res >> ", res.data.data);

      axios.defaults.headers.common["Authorization"] = res.data.data.user.token;

      vuexContext.commit("authUser", userData);

      // localStorage.setItem("userData", JSON.stringify(userData));

      //put user auth data in cookie
      Cookie.set("token", res.data.data.user.token);
      Cookie.set("userData", JSON.stringify(userData));

      //append products after login
      vuexContext.dispatch("cart/appendCartProductsAfterLogin", null, {
        root: true
      });

      //get cart data of user from server
      // vuexContext.dispatch("cart/getCart", null, { root: true });

      // this.$cookies.set('userData', userData);
    });
    // .catch(err => {
    //     console.log('error >>', err);
    // })
  },
  saveUserEdit(vuexContext, userEditData) {
    const userId = vuexContext.state.userId;
    // if(vuexContext.getters.userType == 'user')
    return axios.put("/users/" + userId, userEditData); //userId

    // if(vuexContext.getters.userType == 'doctor')
    //     return axios.put('/doctor/')
  },
  // saveUserEditDetails(vuexContext, userEditData) {
  //     const userId = vuexContext.getters.userId;
  //     return axios.post('/user-details/' + userId, userEditData);
  // },
  initAuth(vuexContext) {
    this.$cookies.set("testCookie", "just test");

    let userData = JSON.parse(localStorage.getItem("userData"));
    // const userDataCookie = this.$cookies.get('userData')
    if (userData) {
      // userData = userDataCookie;
      // console.log('cookie decoded >> ', decodeURIComponent(userData));
      // userData = decodeURIComponent(userData);
      // console.log('user data after >>> ', JSON.parse(userData));
      // userData = JSON.parse(userData);
      console.log("auth 22222222 ", userData);
      vuexContext.commit("authUser", userData);
    }
    // else {
    //     if(process.client)
    //         userData = JSON.parse(localStorage.getItem('userData'));
    //     console.log('client >>', userData);
    // }
    // if(userData) //new
    //     vuexContext.commit('authUser', userData);
  }
};
