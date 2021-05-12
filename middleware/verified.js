export default function(context) {
    if(context.store.getters.verified) {
        context.redirect('/');
    }
}