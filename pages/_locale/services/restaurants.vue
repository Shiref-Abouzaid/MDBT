<template>
<section class="restaurants-page">
    <div class="container">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><nuxt-link to="/">{{ $t("subnav.home") }}</nuxt-link></li>
                <li class="breadcrumb-item"><nuxt-link :to="`/${locale}/services/`">{{ $t("subnav.service") }}</nuxt-link></li>
                <li class="breadcrumb-item active" aria-current="page">{{ $t("subnav.restaurant") }}</li>
            </ol>
        </nav>

        <app-main-categories :categories="categories"></app-main-categories>

        <nuxt-child></nuxt-child>

    </div>
</section>
</template>

<script>
import axios from 'axios'
import MainCategories from '~/components/Categories/RestaurantMainCategories'

export default {
    components: {
        appMainCategories: MainCategories,
    },
    data() {
        return {
            categories: [],
        }
    },
    computed:{
        locale() {
            return this.$store.getters['locale/locale']
        },
    },
    async fetch() {
        try {
            let restaurantsData = await axios.get('/my/restaurants');
            console.log('restaurnats data >> ', restaurantsData.data.data);
            if(restaurantsData.data.data) {
                this.categories = restaurantsData.data.data.categories;
            }
        } catch (error) {
            console.log('error >> ', error);
        }
    }
}
</script>