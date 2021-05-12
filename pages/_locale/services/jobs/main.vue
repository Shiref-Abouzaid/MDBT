<template>
    <section class="jobs-page">
        <div class="container">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><nuxt-link to="/">{{ $t("subnav.home") }}</nuxt-link></li>
                    <li class="breadcrumb-item active" aria-current="page">{{ $t("subnav.buysell") }}</li>
                </ol>
            </nav>

            <app-main-categories :categories="categories"></app-main-categories>

            <div class="items">

                <div class="head">
                    <h3>{{ $t("buyandsell.product_head") }}</h3>
                    <div class="add-btn">
                        <button class="btn" @click="$router.push('/' + locale + '/services/jobs/add')">+ Add Job</button>
                    </div>
                </div>

                <nuxt-child></nuxt-child>

            </div>

        </div>
    </section>
</template>

<script>
import axios from 'axios'
import MainCategories from '~/components/Categories/JobMainCategories'
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
        let categoriesData = await axios.get('/my/jobs/categories');
        console.log('buy data >> ', categoriesData.data.data);
        this.categories = categoriesData.data.data;
    }
}
</script>