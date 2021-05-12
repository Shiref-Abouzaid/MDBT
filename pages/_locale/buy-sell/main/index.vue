<template>

<div class="row">
    <div class="col-sm-4" v-for="item in items" :key="item.id">
        <app-single-buy :item="item"></app-single-buy>
    </div>

    <template v-if="auctions && auctions.length > 0">
        <div class="col-sm-4" v-for="auction in auctions" :key="auction.id">
            <app-single-auction :auction="auction"></app-single-auction>
        </div>
    </template>

</div>

</template>

<script>
import axios from 'axios'
// import MainCategories from '~/components/Categories/BuyMainCategories'
import SingleBuy from '~/components/Vendor/SingleBuy'
import SingleAuction from '~/components/Vendor/SingleAuction'

export default {
    components: {
        // appMainCategories: MainCategories,
        appSingleBuy: SingleBuy,
        appSingleAuction: SingleAuction,
    },
    data() {
        return {
            items: [],
            auctions: []
        }
    },
    computed: {
        currSymbol() {
            return this.$store.getters['currency/symbol']
        }
    },
    async fetch() {
        // console.log('in buy main cat')
        let buyData = await axios.get('/my/buy-sells-items');
        console.log('buy data >> ', buyData.data.data);
        this.items = buyData.data.data.items;
        this.auctions = buyData.data.data.auctions
        console.log('auctions > ', this.auctions)
    },
    watch: {
        currSymbol(oldSymbol, newSymbol) {
            console.log('symbol >> ', oldSymbol, newSymbol);
            this.$fetch();
        }
    }
}
</script>