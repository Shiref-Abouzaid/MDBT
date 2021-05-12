export default function({ isHMR, app, store, route, params, error, redirect }) {
  console.log(
    "in locale >> ",
    store.getters.locale,
    store.state.locale,
    store.getters.cartProducts
  );
  //   const defaultLocale = app.i18n.fallbackLocale;
  //   if (isHMR) return;
  //   const locale = route.query.lang || defaultLocale;
  //   if (store.state.locales.indexOf(locale) === -1) {
  //     return error({ message: "This page could not be found.", statusCode: 404 });
  //   }
  store.commit("SET_LANG", store.getters.locale);
  app.i18n.locale = store.getters.locale;
}
