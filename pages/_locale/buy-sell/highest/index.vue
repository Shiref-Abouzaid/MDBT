<template>
    <section class="single-buy-page">
        <div class="container">

            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><nuxt-link to="/">{{ $t("subnav.home") }}</nuxt-link></li>
                    <li class="breadcrumb-item"><nuxt-link to="/">{{ $t("subnav.buysell") }}</nuxt-link></li>
                    <li class="breadcrumb-item"><nuxt-link to="/">{{ $t("subnav.catename") }}</nuxt-link></li>
                    <li class="breadcrumb-item active" aria-current="page">{{ $t("subnav.apple") }}</li>
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
                <div class="col-sm-4">

                    <div class="vendor-profile">
                        <!-- <h3>Vendor Profile</h3> -->
                        <div class="info">
                            <img :src="item.seller ? item.seller : '/images/placeholder.jpg'" alt="">
                            <div class="name">
                                <h5>{{item.seller}} {{item.seller}}</h5>
                                <!-- <span>2,465 {{ $t("buyandsell.product") }}</span> -->
                            </div>
                            <!-- <div class="rate">
                                <span>5.0</span>
                                <img src="/images/icons/svg/vendor-star.svg" alt="">
                            </div> -->
                        </div>
                        <hr>
                        <div class="contacts">
                            <div class="row no-gutters" v-if="item.seller">
                                <div class="col-1"><img src="/images/icons/svg/phone.svg" alt=""></div>
                                <div class="col-1"></div>
                                <div class="col-10"><p>{{item.seller}}</p></div>
                            </div>
                            <div class="row no-gutters" v-if="item.seller">
                                <div class="col-1"><img class="mail" src="/images/icons/svg/mail.svg" alt=""></div>
                                <div class="col-1"></div>
                                <div class="col-10"><p>{{item.seller}}</p></div>
                            </div>
                            <div class="row no-gutters" v-if="item.seller">
                                <div class="col-1"><img src="/images/icons/svg/location.svg" alt=""></div>
                                <div class="col-1"></div>
                                <div class="col-10"><p>{{item.seller}}</p></div>
                            </div>
                        </div>
                    </div>

                    <div class="price-info">
                        <div class="row">
                            <div class="col-6">
                                <div class="higher">
                                    <div class="price">
                                        <span>$10000</span>
                                        <img src="/images/icons/svg/buy-arrow-up.svg" alt="">
                                    </div>
                                    <p>Higher Price</p>
                                    <span class="date">18 May 2020, 2:30 PM</span>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="lower">
                                    <div class="price">
                                        <span>$10000</span>
                                        <img src="/images/icons/svg/buy-arrow-down.svg" alt="">
                                    </div>
                                    <p>Lower Price</p>
                                    <span class="date">18 May 2020, 2:30 PM</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="offer">
                        <div class="head">
                            <h3>{{ $t("vip.pace_an") }}</h3>
                            <img src="/images/icons/svg/question.svg" alt="">
                        </div>
                        <form @submit.prevent="">
                            <div class="form-group">
                                <!-- <label for="governorate">Governorate</label> -->
                                <input
                                    v-model="price" 
                                    @input="$v.price.$touch()" 
                                    type="text" 
                                    :class="{ invalid: $v.price.$error }"
                                    placeholder="Place Offer" 
                                    class="form-control 
                                    form-control-lg" id="offer"/>
                                    <small class="form-text text-muted">
                                        <span>offer Bid {{currSymbol}}{{ auction.increment_value }} or more</span>
                                    </small>
                            </div>
                            <div class="submit-btn">
                                <button type="submit" class="btn">{{ $t("vip.submit") }}</button>
                            </div>
                        </form>
                    </div>

                    <!-- <div class="deal">
                        <div class="head">
                            <h3>{{ $t("vip.make_deal") }}</h3>
                            <img src="/images/icons/svg/question.svg" alt="">
                        </div>
                        <form @submit.prevent="">
                            <div class="form-group">
                                <input 
                                    v-model="deal" 
                                    @input="$v.deal.$touch()" 
                                    type="text" 
                                    placeholder="Place Offer" 
                                    :class="{ invalid: $v.deal.$error }"
                                    class="form-control form-control-lg" id="deal"/>
                            </div>
                            <div class="submit-btn">
                                <button type="submit" class="btn">{{ $t("vip.submit") }}</button>
                            </div>
                        </form>
                    </div> -->

                    <div class="log">
                        <h3>Price Log</h3>
                        <div class="bid">
                            <span class="name">Ali</span>
                            <span class="price">44 EGP</span>
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
import { required, decimal, numeric } from 'vuelidate/lib/validators'

export default {
    components: {
        appSliderThumbnails: SliderThumbnails
    },
    data() {
        return {
            item: {},
            auction: {},

            deal: "",
            price: "",
        }
    },
    validations: {
        price: {
            required,
            decimal,
            exact: function(val) {
                if(val == "")
                    return true;
                if(val >= this.auction.increment_value)
                    return true;
                else
                    return false;
            }
        },
        deal: {
            required,
            numeric
        }
    },
    computed: {
        currSymbol() {
            return this.$store.getters["currency/symbol"];
        }
    },
    async fetch() {
        // let itemData = await axios.get('/my/buy-sells/' + this.$route.params.itemId);
        // console.log('item >> ', itemData.data.data);
        // this.item = itemData.data.data
    }
}
</script>