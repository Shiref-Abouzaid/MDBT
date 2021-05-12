<template>
    <section class="store">
        <div class="container">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><nuxt-link to="/">{{ $t("subnav.home") }}</nuxt-link></li>
                    <li class="breadcrumb-item"><nuxt-link :to="`/${locale}/services/`">{{ $t("subnav.service") }}</nuxt-link></li>
                    <li class="breadcrumb-item"><nuxt-link :to="{name:'locale-services-restaurants'}" >{{ $t("subnav.restaurant") }}</nuxt-link></li>
                    <li class="breadcrumb-item"><nuxt-link :to="{name:'locale-services-restaurant-restaurantId-restaurantName', params:{restaurantId:$route.params.restaurantId, restaurantName:$route.params.restaurantName}}" >{{$route.params.restaurantName}}</nuxt-link></li>
                    <li class="breadcrumb-item active" aria-current="page">More Meals</li>
                </ol>
            </nav>

            <div class="row">
                <div class="col-4 mt-4" v-for="(product, index) in products" :key="index">
                    <app-single-product :product="product"></app-single-product>
                </div>
            </div>

            <div class="text-center mt-4" v-if="loading.seeMore">
                <b-spinner variant="default" large type="grow" class="spinner-primary" />
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios'
import SingleProduct from '~/components/Product/StoreSingleProduct'

export default {
    components: {
        appSingleProduct: SingleProduct
    },
    data() {
        return {
            products: [],
            allowToGetMore:true,
            noMore:false,
            loading:{
                seeMore:false
            },
        }
    },
    async fetch() {
        try {
            let resData = await axios.get(`/my/products/store/${this.$route.params.restaurantId}/type/restaurant/skip/0/take/5`)
            console.log('products cat .> ', resData.data.data);
            this.products = resData.data.data
        } catch (error) {
            console.log(error)
        }
    },
    computed: {
        locale() {
            return this.$store.getters['locale/locale'];
        },
    },
    methods:{
        async handleScroll (event) {
            let windowScrollY       =  window.scrollY
            let windowScrollHeight  = document.body.scrollHeight
            let widnowHeight        = window.innerHeight
            if(Math.floor(windowScrollY - (windowScrollHeight-widnowHeight)) < 1 &&  Math.floor(windowScrollY - (windowScrollHeight-widnowHeight)) > -10) {
                 if(this.allowToGetMore && !this.noMore) { 
                     this.allowToGetMore = false;
                     try {
                        this.loading.seeMore = true
                        let resData = await axios.get(`/my/products/store/${this.$route.params.restaurantId}/type/restaurant/skip/${this.products.length}/take/6`)

                        this.products = [...this.products,...resData.data.data]
                        this.loading.seeMore = false
                        this.allowToGetMore = true;
                        if(resData.data.data.length < 1) {
                            this.noMore = true
                        }
                     } catch (error) {
                         console.log(error.response)
                     }

                 }

            }
        },
    },
    created() {

        if (process.client) {
            window.addEventListener('scroll', this.handleScroll);
        }   
    },
}
</script>