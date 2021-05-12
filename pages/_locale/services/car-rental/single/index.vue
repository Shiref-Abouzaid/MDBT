<template>
    <section class="car-rental-landing-page">
        <div class="container">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><nuxt-link to="/">{{ $t("subnav.home") }}</nuxt-link></li>
                    <li class="breadcrumb-item"><nuxt-link :to="{name:'locale-services'}">{{ $t("subnav.service") }}</nuxt-link></li>
                    <li class="breadcrumb-item"><nuxt-link to="/">{{ $t("subnav.restaurant") }}</nuxt-link></li>
                    <!-- this will be restaurant name -->
                    <li class="breadcrumb-item active" aria-current="page">{{ $t("subnav.realsate") }}</li>
                </ol>
            </nav>

            <div class="row">
                <div class="col-sm-8">
                    <app-slider-thumbnails :gallery="state.gallery"></app-slider-thumbnails>

                    <div class="details">
                        <div class="head">
                            <h3>{{ state.property_title }}</h3>
                            <span>${{ state.price }}</span>
                        </div>
                        <div class="desc">
                            <p>{{ state.description }}</p>
                        </div>
                    </div>

                    <div class="features">
                        <h3>Car Features</h3>
                        <div class="row">
                            <div class="col-sm-4">
                                <p class="title">Car Type</p>
                            </div>
                            <div class="col-sm-8">
                                <span>Sedan</span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-4">
                                <p class="title">Car Model</p>
                            </div>
                            <div class="col-sm-8">
                                <span>Sedan</span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-4">
                                <p class="title">Body Type</p>
                            </div>
                            <div class="col-sm-8">
                                <span>Sedan</span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-4">
                                <p class="title">Rental Period</p>
                            </div>
                            <div class="col-sm-8">
                                <span>Sedan</span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-4">
                                <p class="title">Manufacturer Year</p>
                            </div>
                            <div class="col-sm-8">
                                <span>Sedan</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4" v-if="state.developer">
                    <div class="vendor-profile">
                        <!-- <h3>Vendor Profile</h3> -->
                        <div class="info">
                            <img :src="state.developer.developer_image" alt="">
                            <div class="name">
                                <h5>{{ state.developer.commercial_name }}</h5>
                                <!-- <span>2,465 {{ $t("product.products") }}</span> -->
                            </div>
                            <!-- <div class="rate">
                                <span>5.0</span>
                                <img src="/images/icons/svg/vendor-star.svg" alt="">
                            </div> -->
                        </div>
                        <hr>
                        <div class="contacts">
                            <div class="row no-gutters" v-if="state.developer.contact_number">
                                <div class="col-1"><img src="/images/icons/svg/phone.svg" alt=""></div>
                                <div class="col-1"></div>
                                <div class="col-10"><p>{{ state.developer.contact_number }}</p></div>
                            </div>
                            <div class="row no-gutters" v-if="state.developer.email">
                                <div class="col-1"><img class="mail" src="/images/icons/svg/mail.svg" alt=""></div>
                                <div class="col-1"></div>
                                <div class="col-10"><p>{{ state.developer.email }}</p></div>
                            </div>
                            <div class="row no-gutters" v-if="state.developer.address">
                                <div class="col-1"><img src="/images/icons/svg/location.svg" alt=""></div>
                                <div class="col-1"></div>
                                <div class="col-10"><p>{{ state.developer.address }}</p></div>
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
            state: {}
        }
    },
    async fetch() {
        let realestateData = await axios.get('/my/realestate/' + this.$route.params.realestateId);
        this.state = realestateData.data.data;
        console.log('realestae >> ', this.state);
    }
}
</script>