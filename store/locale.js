export const state = () => ({
    rtl: false,
    langCode: "en",
    langName: "English",
    countryCode: "eg",
    defaultClientLocation: "Egypt",
    // locales: ["en", "fr"],
    // locale: "fr",
    langs: [
        {
            name: 'English',
            code: 'en',
            dir: false
        },
        {
            name: 'العربيه',
            code: 'ar',
            dir: true
        }
    ]
});

export const getters = {
    rtl(state) {
        return state.rtl;
    },
    langCode(state) {
        return state.langCode;
    },
    langName(state) {
        return state.langName
    },
    countryCode(state) {
        return state.countryCode;
    },
    defaultClientLocation(state) {
        return state.defaultClientLocation;
    },
    locale(state) {
        return state.countryCode + '-' + state.langCode;
    },
    langs(state) {
        return state.langs
    }
    // locale(state) {
    //     return state.locale;
    // }
};

export const mutations = {
    setRtl(state, rtl) {
        state.rtl = rtl;
    },
    setLangCode(state, lang) {
        state.langCode = lang;
    },
    setLangName(state, name) {
        state.langName = name
    },
    setCountryCode(state, countryCode) {
        state.countryCode = countryCode;
    },
    setDefaultClientLocation(state, location) {
        state.defaultClientLocation = location;
    },
    // SET_LANG(state, locale) {
    //     if (state.locales.indexOf(locale) !== -1) {
    //         state.locale = locale;
    //     }
    // }
};
