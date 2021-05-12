<template>
    <section class="auction-page" v-if="auction">
        <div class="container">

            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><nuxt-link to="/">{{ $t("subnav.home") }}</nuxt-link></li>
                    <li class="breadcrumb-item"><nuxt-link to="/">{{ $t("subnav.vip") }}</nuxt-link></li>
                    <li class="breadcrumb-item active" aria-current="page">{{ $t("subnav.auc_name") }}</li>
                </ol>
            </nav>

            <div class="row">
                <div class="col-sm-8">

                    <app-slider-thumbnails :gallery="auction.gallary"></app-slider-thumbnails>

                    <div class="about">
                        <h3>{{ $t("vip.about_action") }}</h3>

                        <p>{{auction.description}}</p>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="details" v-if="days || hours || minutes || seconds">
                        <h3>{{ $t("vip.auction_details") }}</h3>
                        <div class="time">
                            <div class="row">
                                <div class="col-3">
                                    <div class="num">
                                        <span>{{days}}</span>
                                    </div>
                                    <p>{{ $t("vip.day") }}</p>
                                </div>
                                <div class="col-3">
                                    <div class="num">
                                        <span>{{hours}}</span>
                                    </div>
                                    <p>{{ $t("vip.hr") }}.</p>
                                </div>
                                <div class="col-3">
                                    <div class="num">
                                        <span>{{minutes}}</span>
                                    </div>
                                    <p>{{ $t("vip.mins") }}</p>
                                </div>
                                <div class="col-3">
                                    <div class="num">
                                        <span>{{seconds}}</span>
                                    </div>
                                    <p>{{ $t("vip.sec") }}.</p>
                                </div>
                            </div>
                        </div>
                        <div class="current-bid">
                            <span class="text">{{ $t("vip.current_bid") }}: </span>
                            <span class="price">{{currSymbol}}{{ currentPrice }}</span>
                        </div>
                    </div>

                    <div class="ended" v-else>
                        <h3>{{ $t("vip.auction_details") }}</h3>

                        <h5 class="text-center">This auction has been ended</h5>
                        <p class="text-center" v-if="winnedUser">Owned by <span class="name">{{winnedUser.user.first_name}} {{winnedUser.user.last_name}}</span></p>
                        <p class="text-center" v-if="winnedUser">with <span class="price">{{currSymbol}} {{winnedUser.price}}</span></p>
                    </div>

                    <div class="offer" v-if="(isAuthenticated && !($store.getters['auth/userId'] == auctionOwner.id)) && (days || hours || minutes || seconds)">
                        <div class="head">
                            <h3>{{ $t("vip.pace_an") }}</h3>
                            <img src="/images/icons/svg/question.svg" alt="">
                        </div>
                        <form @submit.prevent="makeBid">
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

                    <div class="deal" v-if="(isAuthenticated && !($store.getters['auth/userId'] == auctionOwner.id)) && (days || hours || minutes || seconds)">
                        <div class="head">
                            <h3>{{ $t("vip.make_deal") }}</h3>
                            <img src="/images/icons/svg/question.svg" alt="">
                        </div>
                        <form @submit.prevent="makeDeal">
                            <div class="form-group">
                                <!-- <label for="governorate">Governorate</label> -->
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
                    </div>

                    <div class="auction-deals" v-if="($store.getters['auth/userId'] == auctionOwner.id) && deals && deals.length > 0"> <!--  v-if="$store.getters['auth/userId'] == auctionOwner.id" -->
                        <h3>{{ $t("vip.deal") }}</h3>
                        <div class="auction-deal" v-for="deal in deals" :key="deal.id">
                            <h6>{{deal.user.first_name}} wanna make a deal with {{deal.price}}</h6>
                            <div class="actions">
                                <button @click="onNo(deal)" class="btn no">No</button>
                                <button @click="onYes(deal)" class="btn yes">Yes</button>
                            </div>
                        </div>
                    </div>

                    <div class="auction-data">
                        <b-tabs>
                            <b-tab title="Auction" active>
                                <div class="auction-realtime">
                                    <div class="bid" v-for="(auc, index) in auctions" :key="index">
                                        <span class="name">{{auc.user.first_name}}</span>
                                        <span class="price">{{currSymbol}}{{auc.paid_price}}</span>
                                    </div>
                                </div>
                            </b-tab>
                            <b-tab title="Auction Log">

                                <div class="auction-log">
                                    <div class="bid" v-for="(auctionee, index) in auctionees" :key="index">
                                        <span class="name">{{auctionee.user.first_name}}</span>
                                        <span class="price">{{currSymbol}}{{auctionee.paid_price}}</span>
                                    </div>
                                </div>
                            </b-tab>
                        </b-tabs>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
import Pusher from 'pusher-js';
import SliderThumbnails from '~/components/SliderThumbnails'
import { required, decimal, numeric } from 'vuelidate/lib/validators'

export default {
    components: {
        appSliderThumbnails: SliderThumbnails
    },
    data() {
        return {
            auction: {},
            currentPrice: '',
            endDate: null,
            error: false,
            price: "",

            auctions: [],
            auctionees: [],

            deal: "",
            deals: [],

            winnedUser: null,
            auctionOwner: {},

            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
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
        isAuthenticated() {
            return this.$store.getters['auth/isAuthenticated']
        },
        currSymbol() {
            return this.$store.getters['currency/symbol']
        }
    },
    async created() {
        if(process.client) {

            let pusher = new Pusher(`CD123456`, {
                encrypted: false,
                cluster: 'eu',
                forceTLS: false,
                httpHost: 'synchronizer.tbdm.net',
                statsHost: 'http://synchronizer.tbdm.net/stats',
                wsHost: 'synchronizer.tbdm.net',
                wsPort: 6001,
                authEndpoint: 'http://developers.api.tbdm.net/v-1872020/eg-en/auction/broadcasting/auth',
                auth: {
                    headers: {
                        Authorization: this.$store.getters['auth/token']
                    }
                }
            });

            console.log('auction route param id >> ', this.$route.params.auctionId)
            let auctionChannel = pusher.subscribe('presence-auction.' + this.$route.params.auctionId);

            auctionChannel.bind('App\\Events\\BidCreated', (currentBid) => {
                console.log('got data >>>>> ', currentBid)
                this.auctions.push(currentBid.auctionee);

                if(currentBid.userId == this.$store.getters['auth/userId']) {
                    return
                }

                console.log('price for other members >> ', currentBid.auctionee.paid_price);

                this.currentPrice += +currentBid.auctionee.paid_price
            });

            auctionChannel.bind('App\\Events\\DealOffered', (getDeal) => {
                console.log('get deal >> ', getDeal);
                this.deals.push(getDeal.makeDeal)
            });

            auctionChannel.bind('App\\Events\\DealAccepted', (acceptDeal) => {
                console.log('deal Accepted >> ', acceptDeal);

                // this.winnedUser = deal;
                // clearInterval(this.interval);
                // this.days = this.hours = this.minutes = this.seconds = 0
                // console.log('deal accepted >> ', dealAccept);

                // this.deals.push(getDeal.makeDeal)
            });


            // Pusher.logToConsole = true;
            console.log('pusher instance >> ',pusher);

        }

        try {
            let auctionData = await axios.get('/my/auctions/' + this.$route.params.auctionId);
            this.auction = auctionData.data.data;
            console.log('auction >>>> ', this.auction);

            this.endDate = this.auction.ends_at;
            console.log('ends at fetch >> ', this.endDate)
            
            this.currentPrice = this.auction.total_paids ? this.auction.total_paids : this.auction.open_price;

            this.auctionees = this.auction.auctionee;

            this.deals = this.auction.makeDeal;

            this.winnedUser = this.auction.winnedUser;

            this.auctionOwner = this.auction.seller;
            console.log('owner >> ', this.auctionOwner)

            let deadline = new Date(this.endDate).getTime();

            let interval = setInterval(() => {

                let now = new Date().getTime();
                let time = deadline - now;

                this.days = Math.floor(time / (1000 * 60 * 60 * 24));
                this.hours = Math.floor((time % (1000 * 60 * 60 * 24))/(1000 * 60 * 60));
                this.minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
                this.seconds = Math.floor((time % (1000 * 60)) / 1000);

                if(time <= 0) {
                    this.days = 0;
                    this.hours = 0;
                    this.minutes = 0;
                    this.seconds = 0;
                    clearInterval(this.interval);
                }

            }, 1000);
            this.interval = interval;

        } catch (error) {
            console.log('error >> ', error)   
        }

    },
    async fetch() {
        console.log('in fetch');

    },
    mounted() {
        // console.log('in mounted')
        // console.log('ends at >> ', this.endDate)

        // let deadline = new Date(this.endDate).getTime();

        // let interval = setInterval(() => {

        //     let now = new Date().getTime();
        //     let time = deadline - now;

        //     this.days = Math.floor(time / (1000 * 60 * 60 * 24));
        //     this.hours = Math.floor((time % (1000 * 60 * 60 * 24))/(1000 * 60 * 60));
        //     this.minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        //     this.seconds = Math.floor((time % (1000 * 60)) / 1000);

        //     if(time <= 0) {
        //         this.days = 0;
        //         this.hours = 0;
        //         this.minutes = 0;
        //         this.seconds = 0
        //     }

        // }, 1000);
        // this.interval = interval;
    },
    methods: {
        makeBid() {
            console.log('bid now!', this.price);

            if(this.$v.price.$invalid)
                return

            try {
                let userId = this.$store.getters['auth/userId'];
                this.currentPrice += +this.price;
                let altPrice = this.price;
                this.price = '';
                this.$v.price.$reset();

                let bid = {
                    auction_id: this.$route.params.auctionId,
                    paid_price: altPrice,
                    user_id: userId
                }

                let sendBid = axios.post('/my/auctions/' + this.$route.params.auctionId + '/bids', bid, {
                    headers: {
                        Authorization: userId
                    }
                })
            } catch (error) {
                console.log('bid error >> ', error);
            }
        },
        async makeDeal() {
            console.log('deal now! ', this.deal);

            // if(this.$v.deal.$invalid)
            //     return

            try {
                let userId = this.$store.getters['auth/userId'];
                let altDeal = this.deal;
                this.deal = '';
                this.$v.deal.$reset();
                let userDeal = {
                    auction_id: this.$route.params.auctionId,
                    price: altDeal,
                    user_id: userId
                }

                let sendDeal = await axios.post('/my/auctions/' + this.$route.params.auctionId + '/deals', userDeal, {
                    headers: {
                        Authorization: userId
                    }
                });


                
            } catch (error) {
                console.log('error deal >> ', error);
            }
        },
        async onYes(deal) {
            console.log('deal! ', deal);
            
            try {
                let userId = this.$store.getters['auth/userId'];
                let status = {
                    status: 'accepted'
                }

                let dealAccept = await axios.post('/my/auctions/deals/' + deal.id + '/reply', status, {
                    headers: {
                        Authorization: userId
                    }
                });
                this.winnedUser = deal;
                clearInterval(this.interval);
                this.days = this.hours = this.minutes = this.seconds = 0
                console.log('deal accepted >> ', dealAccept);
                this.deals = []
            } catch (error) {
                console.log('error >> ', error);
            }
        },
        async onNo(deal) {
            console.log('deal!', deal);
            try {
                let userId = this.$store.getters['auth/userId'];
                let status = {
                    status: 'rejected'
                }

                let dealReject = await axios.post('/my/auctions/deals/' + deal.id + '/reply', status, {
                    headers: {
                        Authorization: userId
                    }
                })
                console.log('deal rejected >> ', dealReject);
            } catch (error) {
                console.log('error >> ', error);
            }
        }
    },
    destroyed() {
        console.log('destroyed >> ', this.interval);
        clearInterval(this.interval)
    }
}
</script>