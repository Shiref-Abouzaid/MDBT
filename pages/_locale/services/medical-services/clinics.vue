<template>
    <section class="doctors-page">
        <div class="container">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><nuxt-link to="/">{{ $t("subnav.home") }}</nuxt-link></li>
                    <li class="breadcrumb-item"><nuxt-link :to="`/${locale}/services/`">{{ $t("subnav.service") }}</nuxt-link></li>
                    <li class="breadcrumb-item"><nuxt-link :to="{name:'locale-services-medical-services'}">{{ $t("subnav.medical") }}</nuxt-link></li>
                    <li class="breadcrumb-item active" aria-current="page">{{$t("medical_service.clinics")}}</li>
                </ol>
            </nav>

            <app-main-categories :specialities="specialities"></app-main-categories>

            <nuxt-child></nuxt-child>

        </div>
    </section>
</template>

<script>
import axios from 'axios'
import MainCategories from '~/components/Categories/ClinicsMainCategories'

export default {
    components: {
        appMainCategories: MainCategories,
    },
    data() {
        return {
            specialities: []
        }
    },
    computed: {
        locale() {
            return this.$store.getters['locale/locale']
        }
    },
    mounted() {
        console.log(this.$route.name)
    },
    async fetch() {
        let clinicsData = await axios.get('/my/clinics');
        this.specialities = clinicsData.data.data.specialties;
        console.log('specialities >> ', this.specialities);
    }
}
</script>