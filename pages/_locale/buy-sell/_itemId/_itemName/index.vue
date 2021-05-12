<template>
    <section class="single-buy-page">
        <div class="container">

            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><nuxt-link to="/">{{ $t("subnav.home") }}</nuxt-link></li>
                    <li class="breadcrumb-item"><nuxt-link :to="`/${locale}/buy-sell/main/`">{{ $t("subnav.buysell") }}</nuxt-link></li>
                    <!-- <li class="breadcrumb-item"><nuxt-link to="/">{{ $t("subnav.catename") }}</nuxt-link></li> -->
                    <li class="breadcrumb-item active" aria-current="page">{{ $route.params.itemName}}</li>
                </ol>
            </nav>

            <div class="row">
                <div class="col-sm-8">
                    <app-slider-thumbnails :gallery="item.gallery"></app-slider-thumbnails>

                    <div class="details">
                        <div class="head">
                            <h3>{{ item.title }}</h3>
                            <p class="price">{{currSymbol}}{{item.price}}</p>
                        </div>
                        <div class="desc">
                            <p>{{item.description}}</p>
                        </div>
                    </div>

                </div>
                <div class="col-sm-4" v-if="item.seller">
                    <div class="vendor-profile">
                        <!-- <h3>Vendor Profile</h3> -->
                        <div class="info">
                            <img :src="item.seller.image_url ? item.seller.image_url : '/images/placeholder.jpg'" alt="">
                            <div class="name">
                                <h5>{{item.seller.first_name}} {{item.seller.last_name}}</h5>
                                <!-- <span>2,465 {{ $t("buyandsell.product") }}</span> -->
                            </div>
                            <!-- <div class="rate">
                                <span>5.0</span>
                                <img src="/images/icons/svg/vendor-star.svg" alt="">
                            </div> -->
                        </div>
                        <hr>
                        <div class="contacts">
                            <div class="row no-gutters" v-if="item.seller.phone">
                                <div class="col-1"><img src="/images/icons/svg/phone.svg" alt=""></div>
                                <div class="col-1"></div>
                                <div class="col-10"><p>{{item.seller.phone}}</p></div>
                            </div>
                            <div class="row no-gutters" v-if="item.seller.email">
                                <div class="col-1"><img class="mail" src="/images/icons/svg/mail.svg" alt=""></div>
                                <div class="col-1"></div>
                                <div class="col-10"><p>{{item.seller.email}}</p></div>
                            </div>
                            <div class="row no-gutters" v-if="item.seller.address">
                                <div class="col-1"><img src="/images/icons/svg/location.svg" alt=""></div>
                                <div class="col-1"></div>
                                <div class="col-10"><p>{{item.seller.address}}</p></div>
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
import SliderThumbnails from '~/components/SliderThumbnails'

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
        currSymbol() {
            return this.$store.getters["currency/symbol"];
        },
        locale() {
            return this.$store.getters['locale/locale']
        }
    },
    async fetch() {
        let itemData = await axios.get('/my/buy-sells/' + this.$route.params.itemId);
        console.log('item >> ', itemData.data.data);
        this.item = itemData.data.data
    },
    watch: {
        currSymbol(oldSymbol, newSymbol) {
            console.log('symbol >> ', oldSymbol, newSymbol);
            this.$fetch();
        }
    }
}
</script>