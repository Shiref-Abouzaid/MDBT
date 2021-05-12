<template>
    <section class="buy-sell-page">
        <div class="container">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><nuxt-link to="/">{{ $t("subnav.home") }}</nuxt-link></li>
                    <template v-if="!$route.params">
                        <li class="breadcrumb-item active" aria-current="page">{{ $t("subnav.buysell") }}</li>
                    </template>
                    <template v-if="$route.params">
                        <li class="breadcrumb-item"><nuxt-link :to="`/${locale}/buy-sell/main/`">{{ $t("subnav.buysell") }}</nuxt-link></li>
                        <li class="breadcrumb-item active" aria-current="page">{{ $route.params.categoryName}}</li>
                    </template>
                </ol>
            </nav>

            <app-main-categories :categories="categories"></app-main-categories>

            <div class="items">

                <div class="head">
                    <h3>{{ $t("buyandsell.product_head") }}</h3>
                    <div class="add-btn">
                        <button class="btn" @click="$router.push('/' + locale + '/buy-sell/add')">+ {{ $t("buyandsell.sell_btn") }}</button>
                    </div>
                </div>

                <nuxt-child></nuxt-child>

            </div>

        </div>
    </section>
</template>

<script>
import axios from 'axios'
import MainCategories from '~/components/Categories/BuyMainCategories'
// import SingleBuy from '~/components/Vendor/SingleBuy'

export default {
    components: {
        appMainCategories: MainCategories,
        // appSingleBuy: SingleBuy
    },
    data() {
        return {
            categories: []
        }
    },
    computed: {
        locale() {
            return this.$store.getters['locale/locale']
        }
    },
    async fetch() {
        // console.log('in buy main cat')
        let buyData = await axios.get('/my/buy-sells-items');
        console.log('buy data >> ', buyData.data.data);
        this.categories = buyData.data.data.categories;
    }
}
</script>