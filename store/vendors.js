// export default {

export const state = () => ({
  vendors: []
});

export const getters = {
  vendors(state) {
    return state.vendors;
  }
};

export const mutations = {
  setVendors(state, vendorsData) {
    for (let vendor of vendorsData) {
      let vendorObject = {
        id: vendor.id,
        imageUrl: vendor.details.image_url
      };
      state.vendors.push(vendorObject);
    }
    console.log("store vendors >> ", state.vendors);
  }
};
// }
