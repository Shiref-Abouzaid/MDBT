<template>
    <section class="spas-page">
        <div class="container">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><nuxt-link to="/">{{ $t("subnav.home") }}</nuxt-link></li>
                    <li class="breadcrumb-item"><nuxt-link :to="`/${locale}/services/`">{{ $t("subnav.service") }}</nuxt-link></li>
                    <li class="breadcrumb-item"><nuxt-link :to="{name:'locale-services-medical-services'}">{{ $t("subnav.medical") }}</nuxt-link></li>
                    <li class="breadcrumb-item active" aria-current="page">{{$t("medical_service.labs")}}</li>
                </ol>
            </nav>

            <section class="cat-slider">
                <div class="main-medical">
                    <div class="cat-carousel">

                        <div class="swiper" v-swiper:mainSwiper="swiperOption">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <div class="mini-cat"><nuxt-link exact :to="'/' + locale + '/services/medical-services'" class="active">All</nuxt-link></div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="mini-cat"><nuxt-link :to="'/' + locale + '/services/medical-services/doctors'">Doctors</nuxt-link></div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="mini-cat"><nuxt-link :to="'/' + locale + '/services/medical-services/clinics'">Clinics</nuxt-link></div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="mini-cat"><nuxt-link :to="'/' + locale + '/services/medical-services/spas'">SPA</nuxt-link></div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="mini-cat"><nuxt-link :to="'/' + locale + '/services/medical-services/hospitals'">Hospitals</nuxt-link></div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="mini-cat"><nuxt-link :to="'/' + locale + '/services/medical-services/pharmacies'">Pharmacies</nuxt-link></div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="mini-cat"><nuxt-link :to="'/' + locale + '/services/medical-services/laboratories'">Laboratories</nuxt-link></div>
                                </div>
                            </div>
                            <div class="swiper-button-prev" slot="button-prev">
                                <img style="transform: rotate(180deg)" src="/images/icons/svg/store-cat-arrow.svg" alt="">
                            </div>
                            <div class="swiper-button-next" slot="button-next">
                                <img src="/images/icons/svg/store-cat-arrow.svg" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div class="spas-list">
                <div class="head">
                    <h3>Laboratories</h3>
                </div>
                <div class="row">
                    <div class="col-sm-4" v-for="spa in spas" :key="spa.id">
                        <app-single-lab :laboratory="spa"></app-single-lab>
                    </div>
                </div>
                <div class="text-center mt-4" v-if="loading.seeMore">
                    <b-spinner variant="default" large type="grow" class="spinner-primary" />
                </div>
            </div>

        </div>
    </section>
</template>

<script>
import axios from 'axios'
import SingleLab from '~/components/Vendor/SingleLaboratory';

export default {
    components: {
        appSingleLab: SingleLab
    },
    data() {
        return {
            spas: [],
            allowToGetMore:true,
            noMore:false,
            loading:{
                seeMore:false
            },
            swiperOption: {
                    slidesPerView: "auto",
                    spaceBetween: 30,
                    // initialSlide: 1
                    // centeredSlides: true,
                    // loop: true,
                    // loopedSlides: 54,
                    navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                    }
                    // pagination: {
                    //   el: ".swiper-pagination",
                    //   clickable: true
                    // }
            }
        }
    },
    async fetch() {
        let spasData = await axios.get('/my/laboratories/skip/0/take/6');
        console.log('spas >> ', spasData.data.data);
        this.spas = spasData.data.data;
    },
    computed: {
        locale() {
            return this.$store.getters['locale/locale']
        }
    },
    methods:{
        async handleScroll (event) {
            let windowScrollY       =  window.scrollY
            let windowScrollHeight  = document.body.scrollHeight
            let widnowHeight        = window.innerHeight

            if(Math.floor(windowScrollY - (windowScrollHeight-widnowHeight)) < 1 &&  Math.floor(windowScrollY - (windowScrollHeight-widnowHeight)) > -10) {
                 if(this.allowToGetMore && !this.noMore) { 
                     this.allowToGetMore = false;
                     try {
                        this.loading.seeMore = true
                        let spasData = await axios.get(`my/laboratories/skip/${this.spas.length}/take/6`);
                        console.log('spas >> ', spasData.data.data);
                        this.spas = [...this.spas,...spasData.data.data]
                        this.loading.seeMore = false
                        this.allowToGetMore = true;
                        if(spasData.data.data.length < 1) {
                            this.noMore = true
                        }
                     } catch (error) {
                         console.log(error.response)
                     }

                 }

            }
        },
    },
    created() {
        if (process.client) {
            window.addEventListener('scroll', this.handleScroll);
        }   
    },
}
</script>