<template>
    <section class="store">
        <div class="container">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><nuxt-link to="/">{{ $t("subnav.home") }}</nuxt-link></li>
                    <li class="breadcrumb-item"><nuxt-link :to="`/${locale}/services/`">{{ $t("subnav.service") }}</nuxt-link></li>
                    <li class="breadcrumb-item active" aria-current="page" >{{ $t("subnav.store") }}</li>
                </ol>
            </nav>

            <app-main-categories :categories="subCategories"></app-main-categories>

            <app-hot-offers></app-hot-offers>

            <section class="like">
                <div class="head">
                    <h2>{{ $t("store.main_header") }}</h2>
                    <nuxt-link :to="'/' + locale + '/services/store/' + $route.params.subCatId + '/' + $route.params.id + '/more-products'">{{ $t("store.more") }}</nuxt-link>
                </div>

                <div class="products">
                    <app-slider-product :products="likeProducts"></app-slider-product>
                </div>

            </section>

            <section class="popular">
                <div class="head">
                    <h2>{{ $t("store.sub_header") }}</h2>
                    <nuxt-link :to="'/' + locale + '/services/store/' + $route.params.subCatId + '/' + $route.params.id + '/more-products'">{{ $t("store.more") }}</nuxt-link>
                </div>

                <div class="products">
                    <app-slider-product :products="popularProducts"></app-slider-product>
                </div>

            </section>

            <section class="vendors">
                <div class="head">
                    <h2>{{ $t("store.vendor_header") }}</h2>
                    <nuxt-link to="more-vendors">{{ $t("store.more") }}</nuxt-link>
                </div>

                <!-- <app-slider-product></app-slider-product> -->
                <div class="popular-vendors">
                    <app-vendor-slider :vendors="vendors"></app-vendor-slider>
                </div>

            </section>

        </div>
    </section>
</template>

<script>
import axios from "axios";
import MainCategories from '~/components/Categories/StoreMainCategories';
import HotOffers from '~/components/Product/StoreSliderOffer';
import SliderProduct from '~/components/Product/StoreSliderProduct';
import VendorSlider from '~/components/Vendor/StoreSliderVendor'

export default {
    components: {
        appMainCategories: MainCategories,
        appHotOffers: HotOffers,
        appSliderProduct: SliderProduct,
        appVendorSlider: VendorSlider
    },
    data() {
        return {
            subCategories: [],
            hotOffers: [],
            likeProducts: [],
            popularProducts: [],
            vendors: [],
        }
    },
    computed: {
        locale() {
            return this.$store.getters['locale/locale'];
        },
        currCode() {
            return this.$store.getters["currency/code"];
        },
    },
    async fetch() {
        console.log('store fetch');

        try {

            let subCategoriesData = await axios.get(
                "/categories/parent/" + this.$route.params.subCatId
            );
            this.subCategories = subCategoriesData.data.data;
            console.log('subcategories >> ', this.subCategories);

            let hotOffersData = await axios.get("/products/hot-offers/category/" + this.$route.params.id);
            console.log("hot offers >> ", hotOffersData.data.data);
            this.hotOffers = hotOffersData.data.data;

            let likeProductsData = await axios.get(
                "/products/products-you-may-like/category/" + this.$route.params.id
            );
            this.likeProducts = likeProductsData.data.data
            console.log('like products >> ', this.likeProducts);

            let popularProductsData = await axios.get(
            "/products/popular/category/" + this.$route.params.id
            );
            this.popularProducts = popularProductsData.data.data;
            console.log('popular products >> ', this.popularProducts);

            let vendorsData = await axios.get("/users/vendors");
            this.vendors = vendorsData.data.data;
            console.log('vendors >> ', this.vendors);

        } catch (error) {
            console.log('error >> ', error);
        }
    },
    mounted() {
        console.log(this.$route)
    },
    watch: {
        currCode(oldCurr, newCurr) {
            console.log('curr changed > ', oldCurr, newCurr);
            this.likeProducts = [];
            this.popularProducts = [];
            this.$fetch();
        }
    },
}
</script>
