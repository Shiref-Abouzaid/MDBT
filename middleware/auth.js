export default function(context) {
  if (!context.store.getters["auth/isAuthenticated"]) {
    context.redirect("/" + context.store.getters["locale/locale"] + "/login");
  }
}
