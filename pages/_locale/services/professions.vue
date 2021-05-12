<template>
    <div class="professions-page">
        <div class="container">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><nuxt-link to="/">{{ $t("subnav.home") }}</nuxt-link></li>
                    <li class="breadcrumb-item"><nuxt-link :to="`/${locale}/services/`">{{ $t("subnav.service") }}</nuxt-link></li>
                    <li class="breadcrumb-item active" aria-current="page">{{ $t("subnav.profession") }}</li>
                </ol>
            </nav>

            <app-main-categories :categories="categories"></app-main-categories>

            <nuxt-child></nuxt-child>

        </div>
    </div>
</template>

<script>
import axios from 'axios'
import MainCategories from '~/components/Categories/ProfessionsMainCategories';
import SliderProfession from '~/components/Vendor/SliderProfession';

export default {
    components: {
        appMainCategories: MainCategories,
        appSliderProfession: SliderProfession
    },
    data() {
        return {
            categories: []
        }
    },
    computed: {
        locale() {
            return this.$store.getters['locale/locale'];
        },
    },
    async fetch() {
        try {
            let professionsData = await axios.get('/my/technicians');
            this.categories = professionsData.data.data.categories
        } catch (error) {
            console.log('error << ', error)
        }
    }
}
</script>