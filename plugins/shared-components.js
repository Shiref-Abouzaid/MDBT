import Vue from 'vue'

import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

Vue.component("VueSlickCarousel", VueSlickCarousel);

// swiper slider
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/css/swiper.css";
// import "swiper/swiper-bundle.css";
Vue.use(VueAwesomeSwiper);

//star rating
import StarRating from "vue-star-rating";
Vue.component("star-rating", StarRating);

//axios configuration
import axios from 'axios'

axios.defaults.baseURL = 'https://developers.api.tbdm.net/v-1872020/eg-en-usd';
// axios.defaults.headers.common["Authorization"] = 60;

//adding vuelidate package
import Vuelidate from "vuelidate";
Vue.use(Vuelidate);

//vue-quill-editor
// import VueQuillEditor from 'vue-quill-editor'

// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

if (process.browser) {
    const VueQuillEditor = require('vue-quill-editor/dist/ssr')
    Vue.use(VueQuillEditor, /* { default global options } */)
}