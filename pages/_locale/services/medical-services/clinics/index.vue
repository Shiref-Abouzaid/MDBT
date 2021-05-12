<template>
    <section class="specialities-list">

            <div class="specialities" v-for="speciality in clinicSpecialities" :key="speciality.id">
                <div class="head">
                    <h3>{{ speciality.name }}</h3>
                    <nuxt-link :to="{name:`locale-services-medical-services-clinics-specialityId-specialityName`, params:{specialityId:speciality.id, specialityName:speciality.name}}">{{$t("professions.more")}}</nuxt-link>
                </div>

                <div class="doctors">
                    <app-slider-clinic :clinics="speciality.clinics"></app-slider-clinic>
                </div>

            </div>

            <!-- <div class="specialities">
                <div class="head">
                    <h3>Neurologists</h3>
                    <nuxt-link to="/">See more</nuxt-link>
                </div>

                <div class="doctors">
                    <app-slider-doctor></app-slider-doctor>
                </div>

            </div>

            <div class="specialities">
                <div class="head">
                    <h3>Cardiologist</h3>
                    <nuxt-link to="/">See more</nuxt-link>
                </div>

                <div class="doctors">
                    <app-slider-doctor></app-slider-doctor>
                </div>

            </div> -->

    </section>
</template>

<script>
import axios from 'axios'
import MainCategories from '~/components/Categories/MedicalMainCategories'
import SliderClinic from '~/components/Vendor/SliderClinic'

export default {
    components: {
        appMainCategories: MainCategories,
        appSliderClinic: SliderClinic
    },
    data() {
        return {
            clinicSpecialities: [],
        }
    },
    async fetch() {
        let clinicsData = await axios.get('/my/clinics');
        this.clinicSpecialities = clinicsData.data.data['clinics-specialties'];
        console.log('clinics data >> ', this.clinicSpecialities);
        
    }
}
</script>