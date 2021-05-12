// export default {

export const state = () => ({
  clientIp: null,
  defaultClientLocation: "Egypt",
  selectedClientLocation: ""
});

export const getters = {
  clientIp(state) {
    return state.clientIp;
  },
  defaultClientLocation(state) {
    return state.defaultClientLocation;
  },
  selectedClientLocation(state) {
    return state.selectedClientLocation
  }
};

export const mutations = {
  setClientIp(state, ip) {
    state.clientIp = ip;
  },
  setDefaultClientLocation(state, location) {
    state.defaultClientLocation = location;
  },
  setSelectedClientLocation(state, location) {
    state.selectedClientLocation = location;
  },
};

export const actions = {};

// }
