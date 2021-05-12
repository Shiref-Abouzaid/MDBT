<template>
    <section class="medical-services-page">
        <div class="container">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><nuxt-link to="/">{{ $t("subnav.home") }}</nuxt-link></li>
                    <li class="breadcrumb-item"><nuxt-link :to="`/${locale}/services/`">{{ $t("subnav.service") }}</nuxt-link></li>
                    <li class="breadcrumb-item active" aria-current="page">{{ $t("subnav.medical") }}</li>
                </ol>
            </nav>

            <app-main-categories></app-main-categories>

            <section class="medical-service">
                <div class="head">
                    <h3>{{ $t("medical_service.doctors") }}</h3>
                    <nuxt-link :to="{name:'locale-services-medical-services-doctors'}">{{ $t("medical_service.more") }}</nuxt-link>
                </div>

                <div class="doctor-cards">
                    <app-slider-doctor :doctors="doctors"></app-slider-doctor>
                </div>

            </section>

            <section class="medical-service">
                <div class="head">
                    <h3>{{ $t("medical_service.clinics") }}</h3>
                    <nuxt-link :to="{name:'locale-services-medical-services-clinics'}">{{ $t("medical_service.more") }}</nuxt-link>
                </div>

                <div class="doctor-cards">
                    <app-slider-clinic :clinics="clinics"></app-slider-clinic>
                </div>

            </section>

            <section class="medical-service">
                <div class="head">
                    <h3>{{ $t("medical_service.spa") }}</h3>
                    <nuxt-link :to="{name:'locale-services-medical-services-spas'}">{{ $t("medical_service.more") }}</nuxt-link>
                </div>

                <div class="doctor-cards">
                    <app-slider-spa :spas="spas"></app-slider-spa>
                </div>

            </section>

            <section class="medical-service">
                <div class="head">
                    <h3>{{ $t("medical_service.hospital") }}</h3>
                    <nuxt-link :to="{name:'locale-services-medical-services-hospitals'}">{{ $t("medical_service.more") }}</nuxt-link>
                </div>

                <div class="doctor-cards">
                    <app-slider-hospital :hospitals="hospitals"></app-slider-hospital>
                </div>

            </section>

            <section class="medical-service">
                <div class="head">
                    <h3>{{ $t("medical_service.pharmacies") }}</h3>
                    <nuxt-link :to="{name:'locale-services-medical-services-pharmacies'}">{{ $t("medical_service.more") }}</nuxt-link>
                </div>

                <div class="doctor-cards">
                    <app-slider-pharmacy :pharmacies="pharmacies"></app-slider-pharmacy>
                </div>

            </section>

            <section class="medical-service">
                <div class="head">
                    <h3>{{$t("medical_service.labs")}}</h3>
                    <nuxt-link :to="{name:'locale-services-medical-services-laboratories'}">{{ $t("medical_service.more") }}</nuxt-link>
                </div>

                <div class="doctor-cards">
                    <app-slider-laboratory :laboratories="laboratories"></app-slider-laboratory>
                </div>

            </section>

        </div>
    </section>
</template>

<script>
import axios from 'axios'
import MainCategories from '~/components/Categories/MedicalMainCategories'
import SliderDoctor from '~/components/Vendor/SliderDoctor'
import SliderClinic from '~/components/Vendor/SliderClinic'
import SliderSpa from '~/components/Vendor/SliderSpa'
import SliderHospital from '~/components/Vendor/SliderHospital'
import SliderPharmacy from '~/components/Vendor/SliderPharmacy'
import SliderLoboratory from '~/components/Vendor/SliderLaboratory'

export default {
    components: {
        appMainCategories: MainCategories,
        appSliderDoctor: SliderDoctor,
        appSliderClinic: SliderClinic,
        appSliderSpa: SliderSpa,
        appSliderHospital: SliderHospital,
        appSliderPharmacy: SliderPharmacy,
        appSliderLaboratory: SliderLoboratory
    },
    data() {
        return {
            clinics: [],
            doctors: [],
            hospitals: [],
            laboratories: [],
            pharmacies: [],
            spas: [],
            laboratories: []
        }
    },
    computed: {
        currSymbol() {
            return this.$store.getters['currency/symbol']
        },
        locale() {
            return this.$store.getters['locale/locale'];
        },
    },
    async fetch() {
        let medicalServicesData = await axios.get('/my/medical-services')
        console.log('medical services data >> ', medicalServicesData.data.data);
        let medicalServices = medicalServicesData.data.data;
        this.clinics = medicalServices.clinics;
        this.doctors = medicalServices.doctors;
        this.hospitals = medicalServices.hospitals;
        this.laboratories = medicalServices.laboratories;
        this.pharmacies = medicalServices.pharmacies;
        this.spas = medicalServices.spa;
        console.log('doctors >> ', this.laboratories);
    },
    watch: {
        currSymbol(oldSymbol, newSymbol) {
            console.log('symbol >> ', oldSymbol, newSymbol);
            this.$fetch();
        }
    }

}
</script>