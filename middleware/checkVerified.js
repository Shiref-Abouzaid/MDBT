export default function(context) {
  if (!context.store.getters["auth/verified"]) {
    context.redirect("/verify");
  }
}
