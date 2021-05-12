import axios from 'axios'

export default (context, inject) => {
    // Inject $hello(msg) in Vue, context and store.
    // inject('hello', msg => console.log(`Hello ${msg}!`))

    console.log("in axios --------------- >>>>>>> ", context.store.getters['auth/userId']);
    
    if(context.store.getters['auth/token'])
        axios.defaults.headers.common["Authorization"] = context.store.getters['auth/token'];
}