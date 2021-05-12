<template>
    <div class="search-page">
        <div class="container">

            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><nuxt-link to="/">{{ $t("subnav.home") }}</nuxt-link></li>
                    <li class="breadcrumb-item active" aria-current="page">{{ $t("subnav.search") }}</li>
                </ol>
            </nav>

            <div class="row">
                <div class="col-sm-4">
                    <div class="search-heading">
                        <p>{{ $t("search_result.filter_search") }}</p>
                    </div>
                    <div class="filter-menu">
                        <nuxt-link exact :to="'/' + locale + '/search?keyword=' + keyword" v-if="total.all">All ({{total.all}})</nuxt-link>
                        <nuxt-link :to="'/' + locale + '/search/products?keyword=' + keyword" v-if="total.products">Store ({{total.products}})</nuxt-link>
                        <nuxt-link :to="'/' + locale + '/search/restaurants?keyword=' + keyword" v-if="total.restaurants">Restaurants ({{total.restaurants}})</nuxt-link>
                        <nuxt-link :to="'/' + locale + '/search/realestates?keyword=' + keyword" v-if="total.realestate">Realestates ({{total.realestate}})</nuxt-link>
                        <!-- <nuxt-link :to="'/' + locale + '/search/car-rental?keyword=' + keyword">Car Rental (320)</nuxt-link> -->
                        <nuxt-link :to="'/' + locale + '/search/professions?keyword=' + keyword" v-if="total.technicians">Professions ({{total.technicians}})</nuxt-link>
                        <nuxt-link :to="'/' + locale + '/search/users?keyword=' + keyword" v-if="total.users">Users ({{total.users}})</nuxt-link>
                        <nuxt-link :to="'/' + locale + '/search/vendors?keyword=' + keyword" v-if="total.vendors">Vendors ({{total.vendors}})</nuxt-link>
                        <nuxt-link :to="'/' + locale + '/search/doctors?keyword=' + keyword" v-if="total.doctors">Doctors ({{total.doctors}})</nuxt-link>
                        <nuxt-link :to="'/' + locale + '/search/companies?keyword=' + keyword" v-if="total.catalogues">Companies ({{total.catalogues}})</nuxt-link>
                    </div>
                </div>
                <div class="col-sm-8">
                    <div class="search-results">
                        <nuxt-child></nuxt-child>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            total: {},
            keyword: ''
        }
    },
    computed: {
        locale() {
            return this.$store.getters['locale/locale']
        }
    },
    async fetch() {
        try {
            this.keyword = this.$route.query.keyword
            console.log('keyword >> ', this.keyword);
            let searchResults = await axios.post("/my/search/all", {
                search: this.keyword
            });
            console.log('search results >> ', searchResults.data.data);
            if(searchResults.data.data.total)
                this.total = searchResults.data.data.total

        } catch (error) {
            console.log('error >> ', error)
        }
    },
}
</script>