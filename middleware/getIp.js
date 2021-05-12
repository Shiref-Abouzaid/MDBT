import axios from "axios";
// const requestIp = require("request-ip");

export default function(context) {
  console.log("in ip middleware");
  // if (process.server) {
  //   const clientIp = requestIp.getClientIp(context.req);
  //   console.log("client ip >>>>>>> ", clientIp);
  //   context.store.commit("location/setClientIp", clientIp);
  // }

  //   console.log("ip address >>>>>>>> ", context.req.connection.remoteAddress);
  //   context.store.commit(
  //     "location/setClientIp",
  //     context.req.connection.remoteAddress
  //   );

  //   let location = axios
  //     .get(
  //       "https://api.ipgeolocationapi.com/geolocate/" +
  //         context.req.connection.remoteAddress
  //     )
  //     .then(res => {
  //       console.log("country response >>>", res);
  //     })
  //     .catch(err => {
  //       console.log("country error >>>", err);
  //     });
}
