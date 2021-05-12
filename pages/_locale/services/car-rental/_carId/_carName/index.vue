<template>
    <section class="car-rental-landing-page">
        <div class="container">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><nuxt-link to="/">{{ $t("subnav.home") }}</nuxt-link></li>
                    <li class="breadcrumb-item"><nuxt-link :to="`/${locale}/services/`">{{ $t("subnav.service") }}</nuxt-link></li>
                    <li class="breadcrumb-item"><nuxt-link :to="{name:'locale-services-car-rental-main'}">{{ $t("subnav.rental") }}</nuxt-link></li>
                    <!-- this will be restaurant name -->
                    <li class="breadcrumb-item active" aria-current="page">{{ $route.params.carName }}</li>
                </ol>
            </nav>

            <div class="row">
                <div class="col-8">
                    <app-slider-thumbnails :gallery="item.gallery"></app-slider-thumbnails>

                    <div class="details">
                        <div class="head">
                            <h3>{{ item.title }}</h3>
                            <span>{{currSymbol}}{{ item.rental_price_per_period }} / {{ item.rental_period }}</span>
                        </div>
                        <div class="desc">
                            <p>{{ item.description }}</p>
                        </div>
                    </div>

                    <div class="features">
                        <h3> {{$t("carRental.carFeatures")}}</h3>
                        <!-- <div class="row" v-if="item.body_type">
                            <div class="col-4">
                                <p class="title">Car Type</p>
                            </div>
                            <div class="col-8">
                                <span>{{item.body_type}}</span>
                            </div>
                        </div> -->
                        <div class="row" v-if="item.car_model">
                            <div class="col-4">
                                <p class="title"> {{$t("carRental.carModel")}}</p>
                            </div>
                            <div class="col-8">
                                <span>{{item.car_model.model_name}}</span>
                            </div>
                        </div>
                        <div class="row" v-if="item.body_type">
                            <div class="col-4">
                                <p class="title">{{$t("carRental.bodyType")}}</p>
                            </div>
                            <div class="col-8">
                                <span>{{item.body_type}}</span>
                            </div>
                        </div>
                        <div class="row" v-if="item.rental_period">
                            <div class="col-4">
                                <p class="title">{{$t("carRental.rentalPeriod")}}</p>
                            </div>
                            <div class="col-8">
                                <span>{{item.rental_period}}</span>
                            </div>
                        </div>
                        <div class="row" v-if="item.manufacturer_year">
                            <div class="col-4">
                                <p class="title">{{$t("carRental.manufacturerYear")}}</p>
                            </div>
                            <div class="col-8">
                                <span>{{item.manufacturer_year}}</span>
                            </div>
                        </div>
                        <div class="row" v-if="item.color">
                            <div class="col-4">
                                <p class="title">{{$t("carRental.color")}}</p>
                            </div>
                            <div class="col-8">
                                <span>{{item.color}}</span>
                            </div>
                        </div>
                        <div class="row" v-if="item.color">
                            <div class="col-4">
                                <p class="title"> {{$t("carRental.driverAvailability")}}</p>
                            </div>
                            <div class="col-8">
                                <span>{{ item.has_driver ? "Yes" : "No" }}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-4" v-if="item.user">
                    <div class="vendor-profile">
                        <!-- <h3>Vendor Profile</h3> -->
                        <div class="info">
                            <img :src="'/images/placeholder.jpg'" alt="">
                            <div class="name" v-if="item.user">
                                <h5>{{ item.user.first_name }} {{ item.user.last_name }}</h5>
                                <!-- <span>2,465 {{ $t("product.products") }}</span> -->
                            </div>
                            <!-- <div class="rate">
                                <span>5.0</span>
                                <img src="/images/icons/svg/vendor-star.svg" alt="">
                            </div> -->
                        </div>
                        <hr>
                        <div class="contacts" v-if="item.user">
                            <div class="row no-gutters" v-if="item.user.phone">
                                <div class="col-1"><img src="/images/icons/svg/phone.svg" alt=""></div>
                                <div class="col-1"></div>
                                <div class="col-10"><p>{{ item.user.phone }}</p></div>
                            </div>
                            <div class="row no-gutters" v-if="item.user.email">
                                <div class="col-1"><img class="mail" src="/images/icons/svg/mail.svg" alt=""></div>
                                <div class="col-1"></div>
                                <div class="col-10"><p>{{ item.user.email }}</p></div>
                            </div>
                            <div class="row no-gutters" v-if="item.user.address">
                                <div class="col-1"><img src="/images/icons/svg/location.svg" alt=""></div>
                                <div class="col-1"></div>
                                <div class="col-10"><p>{{ item.user.address }}</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script>
import axios from 'axios'
import SliderThumbnails from '~/components/SliderThumbnails';

export default {
    components: {
        appSliderThumbnails: SliderThumbnails
    },
    data() {
        return {
            item: {}
        }
    },
    computed: {
        locale() {
            return this.$store.getters['locale/locale']
        },
        currSymbol() {
            return this.$store.getters['currency/symbol']
        }
    },
    async fetch() {
        let itemData = await axios.get('/my/car-rental/show/' + this.$route.params.carId);
        this.item = itemData.data.data;
        console.log('realestae >> ', this.item);
    },
    watch: {
        currSymbol(oldSymbol, newSymbol) {
            console.log('symbol >> ', oldSymbol, newSymbol);
            this.$fetch();
        }
    }
}
</script>