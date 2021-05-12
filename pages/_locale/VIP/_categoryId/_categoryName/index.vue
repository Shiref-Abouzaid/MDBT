<template>
    <section class="auctions-cats">
        <div class="container">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><nuxt-link to="/">{{ $t("subnav.home") }}</nuxt-link></li>
                    <li class="breadcrumb-item"><nuxt-link :to="`/${locale}/vip`">{{ $t("subnav.vip") }}</nuxt-link></li>
                    <li class="breadcrumb-item active" aria-current="page">{{$route.params.categoryName}}</li>
                </ol>
            </nav>

            <div class="categories">
                <div class="head">
                    <h3>{{ this.$route.params.categoryName }}</h3>
                    <div class="add-btn">
                        <button class="btn" @click="addAuction">+ {{ $t("vip.add_auction") }}</button>
                    </div>
                </div>

                <div class="row" v-if="auctions && auctions.length > 0">
                    <div class="col-sm-4" v-for="auction in auctions" :key="auction.id">
                        <app-single-auction :auction="auction"></app-single-auction>
                    </div>
                </div>

            </div>

        </div>
    </section>
</template>

<script>
import Pusher from 'pusher-js'
import axios from 'axios';
import SingleAuction from '~/components/Vendor/SingleAuction';

export default {
    middleware: ["auth"],
    components: {
        appSingleAuction: SingleAuction,
    },
    data() {
        return {
            pusher: null,
            auctionChannel: null,

            auctions: []
        }
    },
    computed: {
        locale() {
            return this.$store.getters['locale/locale']
        }
    },
    async fetch() {
        try {
            console.log('cat id >>>> ', this.$route.params.categoryId)
            let auctionsData = await axios.get('my/auctions/categories/' + this.$route.params.categoryId + '/auctions/skip/0/take/100');
            this.auctions = auctionsData.data.data;
            console.log('auctions in category >> ', this.auctions)
        } catch (error) {
            
        }
    },
    mounted() {

        this.pusher = new Pusher(`dpctgdv35p33t63d3eva`, {
            encrypted: false,
            cluster: 'eu',
            forceTLS: false,
            httpHost: 'synchronizer.tbdm.net',
            statsHost: 'http://synchronizer.tbdm.net/stats',
            wsHost: 'synchronizer.tbdm.net',
            wsPort: 6001,
            authEndpoint: 'https://developers.api.tbdm.net/v-1872020/' + this.locale + '/my/auctions/category/' + this.$route.params.categoryId + '/auth/private',
            auth: {
                headers: {
                    Authorization: this.$store.getters['auth/token']
                }
            }

        });
        this.auctionChannel = this.pusher.subscribe('private-auctionsCategory.' + this.$route.params.categoryId);
        console.log('auction channel', this.auctionChannel);

        this.auctionChannel.bind('App\\Events\\AuctionBidCreated', (currentBid) => {
            console.log('got data from category >>>>> ', currentBid)
            // this.auctions.push(currentBid.auctionee);

            let auction = this.auctions.find(auc => {
                return auc.id == currentBid.auctionID
            })

            console.log('auction now >> ', auction)
            auction.total_paids += +currentBid.auctionee.paid_price
            console.log('auction after > ', auction)

            // if(currentBid.userId == this.$store.getters['auth/userId']) {
            //     return
            // }

            // console.log('price for other members >> ', currentBid.auctionee.paid_price);

            // this.currentPrice += +currentBid.auctionee.paid_price
        });

        this.auctionChannel.bind('App\\Events\\AuctionClosed', (closed) => {
            console.log('got data closed event category >>>>> ', closed)
            // this.auctions.push(currentBid.auctionee);

            // if(currentBid.userId == this.$store.getters['auth/userId']) {
            //     return
            // }

            // console.log('price for other members >> ', currentBid.auctionee.paid_price);

            // this.currentPrice += +currentBid.auctionee.paid_price
        });

    },
    methods: {
        addAuction() {
            this.$router.push('/' + this.$store.getters['locale/locale'] + '/VIP/add')
        }
    }
}
</script>