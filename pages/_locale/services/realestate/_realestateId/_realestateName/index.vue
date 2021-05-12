<template>
    <section class="realestate-page">
        <div class="container">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><nuxt-link to="/">{{ $t("subnav.home") }}</nuxt-link></li>
                    <li class="breadcrumb-item"><nuxt-link :to="`/${locale}/services/`">{{ $t("subnav.service") }}</nuxt-link></li>
                    <li class="breadcrumb-item"><nuxt-link :to="{name:'locale-services-realestates'}">{{ $t("services.real_state") }}</nuxt-link></li>
                    <!-- this will be restaurant name -->
                    <li class="breadcrumb-item active" aria-current="page">{{ $route.params.realestateName }}</li>
                </ol>
            </nav>

            <div class="row">
                <div class="col-sm-8">
                    <app-slider-thumbnails :gallery="state.gallery"></app-slider-thumbnails>

                    <div class="details">
                        <div class="head">
                            <h3>{{ state.property_title }}</h3>
                            <span>{{currSymbol}}{{ state.price }}</span>
                        </div>
                        <div class="desc">
                            <p>{{ state.description }}</p>
                        </div>
                    </div>

                    <div class="features">
                        <h3>{{ $t("product.features") }}</h3>
                        <div class="row justify-content-between">
                            <div class="col-5">
                                <div class="feature" v-if="state.realstate_category">
                                    <div class="icon">
                                        <img src="/images/icons/svg/realestate-type.svg" alt="">
                                        <span>{{ $t("product.type") }}</span>
                                    </div>
                                    <p>{{state.realstate_category}}</p>
                                </div>
                                <div class="feature" v-if="state.estate_furnishing">
                                    <div class="icon">
                                        <img src="/images/icons/svg/realestate-finishing.svg" alt="">
                                        <span>{{ $t("product.finishing") }}</span>
                                    </div>
                                    <p>{{state.estate_furnishing}}</p>
                                </div>
                                <div class="feature" v-if="state.floor_space">
                                    <div class="icon">
                                        <img src="/images/icons/svg/realestate-space.svg" alt="">
                                        <span>{{ $t("product.floor_space") }}</span>
                                    </div>
                                    <p>{{state.floor_space }} {{state.unit}}</p>
                                </div>
                                <div class="feature" v-if="state.payment_methods">
                                    <div class="icon">
                                        <img src="/images/icons/svg/realestate-payment.svg" alt="">
                                        <span>{{ $t("product.payment_method") }}</span>
                                    </div>
                                    <p>{{state.payment_methods}}</p>
                                </div>
                            </div>
                            <div class="col-5">
                                <div class="feature" v-if="state.number_of_bedrooms">
                                    <div class="icon">
                                        <img src="/images/icons/svg/realestate-bedroom.svg" alt="">
                                        <span>{{ $t("product.bedroom") }}</span>
                                    </div>
                                    <p>{{state.number_of_bedrooms}}</p>
                                </div>
                                <div class="feature" v-if="state.number_of_balconies">
                                    <div class="icon">
                                        <img src="/images/icons/svg/realestate-balacony.svg" alt="">
                                        <span>{{ $t("product.balconies") }}</span>
                                    </div>
                                    <p>{{state.number_of_balconies}}</p>
                                </div>
                                <div class="feature" v-if="state.number_of_bathrooms">
                                    <div class="icon">
                                        <img src="/images/icons/svg/realestate-bathroom.svg" alt="">
                                        <span>{{ $t("product.bathroom") }}</span>
                                    </div>
                                    <p>{{state.number_of_bathrooms}}</p>
                                </div>
                                <div class="feature" v-if="state.estate_furnishing">
                                    <div class="icon">
                                        <img src="/images/icons/svg/realestate-furnishing.svg" alt="">
                                        <span>{{ $t("product.furnisging") }}</span>
                                    </div>
                                    <p>Furnished</p>
                                </div>

                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <hr>
                            </div>
                        </div>
                        <div class="row justify-content-between">
                            <div class="col-5">
                                <div class="feature" v-if="state.has_pool">
                                    <div class="icon">
                                        <img src="/images/icons/svg/realestate-pool.svg" alt="">
                                        <span>{{ $t("product.pool") }}</span>
                                    </div>
                                    <div class="check">
                                        <img src="/images/icons/svg/realestate-check.svg" alt="">
                                    </div>
                                </div>
                                <div class="feature" v-if="state.has_garden">
                                    <div class="icon">
                                        <img src="/images/icons/svg/realestate-garden.svg" alt="">
                                        <span>{{ $t("product.garden") }}</span>
                                    </div>
                                    <div class="check">
                                        <img src="/images/icons/svg/realestate-check.svg" alt="">
                                    </div>
                                </div>
                                <div class="feature" v-if="state.has_security">
                                    <div class="icon">
                                        <img src="/images/icons/svg/realestate-security.svg" alt="">
                                        <span>{{ $t("product.security") }}</span>
                                    </div>
                                    <div class="check">
                                        <img src="/images/icons/svg/realestate-check.svg" alt="">
                                    </div>
                                </div>
                                <div class="feature" v-if="state.pets_allowed">
                                    <div class="icon">
                                        <img src="/images/icons/svg/realestate-pets.svg" alt="">
                                        <span>{{ $t("product.pets") }}</span>
                                    </div>
                                    <div class="check">
                                        <img src="/images/icons/svg/realestate-check.svg" alt="">
                                    </div>
                                </div>
                                <div class="feature" v-if="state.has_kitchen_appliances">
                                    <div class="icon">
                                        <img src="/images/icons/svg/realestate-kitchen.svg" alt="">
                                        <span>{{ $t("product.kitchen") }}</span>
                                    </div>
                                    <div class="check">
                                        <img src="/images/icons/svg/realestate-check.svg" alt="">
                                    </div>
                                </div>
                            </div>
                            <div class="col-5">
                                <div class="feature" v-if="state.has_view">
                                    <div class="icon">
                                        <img src="/images/icons/svg/realestate-view.svg" alt="">
                                        <span>{{ $t("product.view") }}</span>
                                    </div>
                                    <div class="check">
                                        <img src="/images/icons/svg/realestate-check.svg" alt="">
                                    </div>
                                </div>
                                <div class="feature" v-if="state.has_bbq_area">
                                    <div class="icon">
                                        <img src="/images/icons/svg/realestate-area.svg" alt="">
                                        <span>{{ $t("product.bbq") }}</span>
                                    </div>
                                    <div class="check">
                                        <img src="/images/icons/svg/realestate-check.svg" alt="">
                                    </div>
                                </div>
                                <div class="feature" v-if="state.has_concierge">
                                    <div class="icon">
                                        <img src="/images/icons/svg/realestate-concierge.svg" alt="">
                                        <span>{{ $t("product.concierge") }}</span>
                                    </div>
                                    <div class="check">
                                        <img src="/images/icons/svg/realestate-check.svg" alt="">
                                    </div>
                                </div>
                                <div class="feature" v-if="state.has_maid_service">
                                    <div class="icon">
                                        <img src="/images/icons/svg/realestate-maid.svg" alt="">
                                        <span>{{ $t("product.maid_services") }}</span>
                                    </div>
                                    <div class="check">
                                        <img src="/images/icons/svg/realestate-check.svg" alt="">
                                    </div>
                                </div>
                                <div class="feature" v-if="state.has_children_play_area">
                                    <div class="icon">
                                        <img src="/images/icons/svg/realestate-maid.svg" alt="">
                                        <span>Children Area</span>
                                    </div>
                                    <div class="check">
                                        <img src="/images/icons/svg/realestate-check.svg" alt="">
                                    </div>
                                </div>
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
    computed: {
        currSymbol() {
            return this.$store.getters['currency/symbol']
        },
        locale() {
            return this.$store.getters['locale/locale'];
        },
    },
    async fetch() {
        let realestateData = await axios.get('/my/realestate/' + this.$route.params.realestateId);
        this.state = realestateData.data.data;
        console.log('realestae >> ', this.state);
    },
    watch: {
        currSymbol(oldSymbol, newSymbol) {
            console.log('symbol >> ', oldSymbol, newSymbol);
            this.$fetch();
        }
    }
}
</script>