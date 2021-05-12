<template>
    <section class="auctions">
        <div class="container">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><nuxt-link to="/">{{ $t("subnav.home") }}</nuxt-link></li>
                    <li class="breadcrumb-item active" aria-current="page">{{ $t("subnav.vip") }}</li>
                </ol>
            </nav>

            <div class="categories">
                <div class="head">
                    <h3>{{ $t("vip.cate_head") }}</h3>
                    <div class="add-btn">
                        <button @click="addAuction" class="btn">+ {{ $t("vip.add_auction") }}</button>
                    </div>
                </div>

                <div class="row">
                    <div class="col-sm-4" v-for="category in categories" :key="category.id">
                        <app-auction-category :category="category"></app-auction-category>
                    </div>
                </div>

            </div>

        </div>
    </section>
</template>

<script>
import AuctionCategory from '~/components/Vendor/AuctionCategory';
import axios from 'axios';

export default {
    components: {
        appAuctionCategory: AuctionCategory
    },
    data() {
        return {
            categories: []
        }
    },
    async fetch() {
        try {
            let categoriesData = await axios.get("/my/wholesale/categories");
            this.categories = categoriesData.data.data;
            console.log(this.categories);
        } catch (error) {
            
        }
    },
    methods: {
        addAuction() {
            this.$router.push('/' + this.$store.getters['locale/locale'] + '/LOT/add')
        }
    }
}
</script>