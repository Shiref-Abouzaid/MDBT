// export default {

export const state = () => ({
  rtl: false,
  lang: "en",
  locales: ["en", "fr"],
  locale: "fr"
});

export const getters = {
  rtl(state) {
    return state.rtl;
  },
  lang(state) {
    return state.lang;
  },
  locale(state) {
    return state.locale;
  }
};

export const mutations = {
  setRtl(state, rtl) {
    state.rtl = rtl;
  },
  setLang(state, lang) {
    state.lang = lang;
  },
  SET_LANG(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale;
    }
  }
};

// };
