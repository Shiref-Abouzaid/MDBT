<template>
    <div class="all-results">
        <div class="search-heading">
            <p>7,618 {{ $t("search_result.found") }}</p>
        </div>

        <div class="result" v-if="products && products.length > 0">
            <div class="head">
                <h2>
                 {{ $t("search_result.store") }}
                    <span>2,465   {{ $t("search_result.product") }}</span>
                </h2>
                <nuxt-link to="/">  {{ $t("search_result.more") }} </nuxt-link>
            </div>
            <div class="products">
                <div class="slider-product">
                    <div class="swiper arrow-secondary" v-swiper:storeSwiper="swiperOption">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="product in products" :key="product.id">
                                <app-single-product :product="product"></app-single-product>
                            </div>
                        </div>
                        <div class="swiper-button-prev" slot="button-prev">
                            <img style="transform: rotate(180deg)" src="/images/icons/svg/offers-arrow.svg" alt="">
                        </div>
                        <div class="swiper-button-next" slot="button-next">
                            <img src="/images/icons/svg/offers-arrow.svg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="result" v-if="companies && companies.length > 0">
            <div class="head">
                <h2>
                     Companies
                    <span>2,465 {{ $t("search_result.restaurants") }}</span>
                </h2>
                <nuxt-link to="/">  {{ $t("search_result.more") }}</nuxt-link>
            </div>
            <div class="products">
                <div class="slider-product">
                    <div class="swiper arrow-secondary" v-swiper:restaurantSwiper="swiperOption">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="company in companies" :key="company.id">
                                <app-single-company :comp="company"></app-single-company>
                            </div>
                        </div>
                        <div class="swiper-button-prev" slot="button-prev">
                            <img style="transform: rotate(180deg)" src="/images/icons/svg/offers-arrow.svg" alt="">
                        </div>
                        <div class="swiper-button-next" slot="button-next">
                            <img src="/images/icons/svg/offers-arrow.svg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="result" v-if="technicians && technicians.length > 0">
            <div class="head">
                <h2>
                     Technicians
                    <span>2,465 {{ $t("search_result.restaurants") }}</span>
                </h2>
                <nuxt-link to="/">  {{ $t("search_result.more") }}</nuxt-link>
            </div>
            <div class="products">
                <div class="slider-product">
                    <div class="swiper arrow-secondary" v-swiper:technicianSwiper="swiperOption">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="tech in technicians" :key="tech.id">
                                <app-single-technician :tech="tech"></app-single-technician>
                            </div>
                        </div>
                        <div class="swiper-button-prev" slot="button-prev">
                            <img style="transform: rotate(180deg)" src="/images/icons/svg/offers-arrow.svg" alt="">
                        </div>
                        <div class="swiper-button-next" slot="button-next">
                            <img src="/images/icons/svg/offers-arrow.svg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="result" v-if="realestates && realestates.length > 0">
            <div class="head">
                <h2>
                     Realestates
                    <span>2,465 {{ $t("search_result.restaurants") }}</span>
                </h2>
                <nuxt-link to="/">  {{ $t("search_result.more") }}</nuxt-link>
            </div>
            <div class="products">
                <div class="slider-product">
                    <div class="swiper arrow-secondary" v-swiper:realestateSwiper="swiperOption">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="estate in realestates" :key="estate.id">
                                <app-single-realestate :realestate="estate"></app-single-realestate>
                            </div>
                        </div>
                        <div class="swiper-button-prev" slot="button-prev">
                            <img style="transform: rotate(180deg)" src="/images/icons/svg/offers-arrow.svg" alt="">
                        </div>
                        <div class="swiper-button-next" slot="button-next">
                            <img src="/images/icons/svg/offers-arrow.svg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="result" v-if="users && users.length > 0">
            <div class="head">
                <h2>
                     Users
                    <span>2,465 {{ $t("search_result.restaurants") }}</span>
                </h2>
                <nuxt-link to="/">  {{ $t("search_result.more") }}</nuxt-link>
            </div>
            <div class="products">
                <div class="slider-product">
                    <div class="swiper arrow-secondary" v-swiper:userSwiper="swiperOption">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="user in users" :key="user.id">
                                <app-single-user :user="user"></app-single-user>
                            </div>
                        </div>
                        <div class="swiper-button-prev" slot="button-prev">
                            <img style="transform: rotate(180deg)" src="/images/icons/svg/offers-arrow.svg" alt="">
                        </div>
                        <div class="swiper-button-next" slot="button-next">
                            <img src="/images/icons/svg/offers-arrow.svg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import axios from 'axios'
import SingleProduct from '~/components/Product/StoreSingleProduct';
import SingleRestaurant from '~/components/Vendor/SingleRestaurant';
import SingleCompany from '~/components/Vendor/SingleCompany';
import SingleDoctor from '~/components/Vendor/SingleDoctor';
import SingleRealestate from '~/components/Vendor/SingleRealestate';
import SingleTechnician from '~/components/Vendor/SingleProfession';
import SingleUser from '~/components/Vendor/SearchUser';


export default {
    components: {
        appSingleProduct: SingleProduct,
        appSingleRestaurant: SingleRestaurant,
        appSingleCompany: SingleCompany,
        appSingleDoctor: SingleDoctor,
        appSingleRealestate: SingleRealestate,
        appSingleTechnician: SingleTechnician,
        appSingleUser: SingleUser
    },
    data() {
        return {
            keyword: '',

            products: [],
            buy: [],
            realestates: [],
            auctions: [],
            doctors: [],
            companies: [],
            technicians: [],
            vendors: [],
            users: [],

            swiperOption: {
                    slidesPerView: 2,
                    spaceBetween: 5,
                    // initialSlide: 1
                    // centeredSlides: true,
                    // loop: true,
                    // loopedSlides: 54,
                    navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                    }
                    // pagination: {
                    //   el: ".swiper-pagination",
                    //   clickable: true
                    // }
            }
        }
    },
    async fetch() {
        try {
            this.keyword = this.$route.query.keyword
            console.log('keyword >> ', this.keyword);
            let searchResults = await axios.post("/my/search/all", {
                search: this.keyword
            });
            console.log('search results >> ', searchResults.data.data);

            if (searchResults.data.data.products)
                this.products = searchResults.data.data.products;
            if (searchResults.data.data.buyAndSell)
                this.buy = searchResults.data.data.buyAndSell;
            if (searchResults.data.data.realestate)
                this.realestates = searchResults.data.data.realestate;
            if (searchResults.data.data.auctions)
                this.auctions = searchResults.data.data.auctions;
            if (searchResults.data.data.doctors)
                this.doctors = searchResults.data.data.doctors;
            if (searchResults.data.data.catalogues)
                this.companies = searchResults.data.data.catalogues;
            if (searchResults.data.data.vendors)
                this.vendors = searchResults.data.data.vendors;
            if (searchResults.data.data.technicians)
                this.technicians = searchResults.data.data.technicians;
            if (searchResults.data.data.users)
                this.users = searchResults.data.data.users;


        } catch (error) {
            console.log('error >> ', error)
        }
    },
    computed: {
        locale() {
            return this.$store.getters['locale/locale']
        }
    }
}
</script>