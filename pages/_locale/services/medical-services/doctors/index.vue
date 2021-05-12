<template>
    <section class="specialities-list">

            <div class="specialities" v-for="speciality in doctorSpecialities" :key="speciality.id">
                <div class="head">
                    <h3>{{ speciality.name }}</h3>
                    <nuxt-link :to="{name:`locale-services-medical-services-doctors-specialityId-specialityName`, params:{specialityId:speciality.id, specialityName:speciality.name}}" >{{$t("professions.more")}}</nuxt-link>
                </div>

                <div class="doctors">
                    <app-slider-doctor :doctors="speciality.dotctors"></app-slider-doctor>
                </div>

            </div>

            <!-- <div class="specialities">
                <div class="head">
                    <h3>{{ $t("medical_service.neurologists") }}</h3>
                    <nuxt-link to="/">{{ $t("medical_service.more") }}</nuxt-link>
                </div>

                <div class="doctors">
                    <app-slider-doctor></app-slider-doctor>
                </div>

            </div>

            <div class="specialities">
                <div class="head">
                    <h3>{{ $t("medical_service.cardiologist") }}</h3>
                    <nuxt-link to="/">{{ $t("medical_service.more") }}</nuxt-link>
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
import SliderDoctor from '~/components/Vendor/SliderDoctor'

export default {
    components: {
        appMainCategories: MainCategories,
        appSliderDoctor: SliderDoctor
    },
    data() {
        return {
            doctorSpecialities: [],
        }
    },
    async fetch() {
        let doctorsData = await axios.get('/my/doctors');
        this.doctorSpecialities = doctorsData.data.data['doctors-specialties'];
        console.log('doctors data >> ', this.doctorSpecialities);
        
    }
}
</script>