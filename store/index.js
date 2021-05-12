import Pusher from 'pusher-js'

import axios from "axios";

import cookie from "cookie";

//solve, do not mutate vuex store state outside mutation handlers.
//don't forget to resolve it
export const strict = false

export const state = () => ({});

export const getters = {};

export const mutations = {};

export const actions = {
  async nuxtServerInit(vuexContext, context) {
    // console.log("ip address >>>>>>>> ", context.req.connection.remoteAddress);
    // vuexContext.commit(
    //   "location/setClientIp",
    //   context.req.connection.remoteAddress
    // );

    // let location = await axios
    //   .get(
    //     "https://api.ipgeolocationapi.com/geolocate/" +
    //       context.req.connection.remoteAddress
    //   )
    //   .then(res => {
    //     console.log("country response >>>", res);
    //   })
    //   .catch(err => {
    //     console.log("country error >>>", err);
    //   });


    const cookies = cookie.parse(context.req.headers.cookie || "");
    console.log("in nuxt server init method >>>>>>> ", cookies);

    if (cookies.hasOwnProperty("x-access-token")) {
      // console.log(
      //   "check token cookie nuxt server init >> ",
      //   JSON.parse(decodeURIComponent(cookies.userData))
      // );
      // let userData = JSON.parse(decodeURIComponent(cookies.userData));
      // vuexContext.commit("auth/authUser", userData);
    }

    if (cookies.hasOwnProperty("userData")) {
      console.log("check token cookie nuxt server init >> ", JSON.parse(decodeURIComponent(cookies.userData)));
      let userData = JSON.parse(decodeURIComponent(cookies.userData));
      vuexContext.commit("auth/authUser", userData);
      console.log('before axios >>', userData.token)
      axios.defaults.headers.common["Authorization"] = userData.token;

      //pusher private user channel

    //   console.log('before pusher >>>>>>>>>-----------------')
    //   let pusher = new Pusher(`dpctgdv35p33t63d3eva`, {
    //     encrypted: false,
    //     cluster: 'eu',
    //     forceTLS: false,
    //     httpHost: 'synchronizer.tbdm.net',
    //     // statsHost: 'http://synchronizer.tbdm.net/stats',
    //     wsHost: 'synchronizer.tbdm.net',
    //     wsPort: 6001,
    //     authEndpoint: 'https://developers.api.tbdm.net/v-1872020/eg-en/my/user/' + userData.userId + '/auth/private',
    //     auth: {
    //         headers: {
    //             Authorization: userData.userId
    //         }
    //     }

    //   });

    //   let userChannel = pusher.subscribe('private-user.' + userData.userId);

    //   userChannel.bind('App\\Events\\ChatNewMessage', function(data){
    //     let receivedMessage = data.message;
    //     console.log('data in user channel>> ', data)
    // })

    //   console.log('after creating pusher instance >> ', pusher);

    }

    // context.store.dispatch("cart/loadCart", context);
    // vuexContext.commit("location/setClientIp", "127.0.0.1");
  }
};
