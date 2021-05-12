<template>
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

        <div class="doctors-specialities">
            <div class="cat-carousel" v-if="specialities && specialities.length > 0">

                <div class="swiper" v-swiper:subSwiper="swiperOption">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div class="mini-cat"><nuxt-link exact :to="'/' + locale + '/services/medical-services/doctors'" class="active">All</nuxt-link></div>
                        </div>
                        <div class="swiper-slide" v-for="speciality in specialities" :key="speciality.id">
                            <div class="mini-cat"><nuxt-link :to="'/' + locale + '/services/medical-services/doctors/' + speciality.id + '/' + speciality.name">{{ speciality.name }}</nuxt-link></div>
                        </div>
                    </div>
                    <div class="swiper-button-prev" slot="button-prev">
                        <img style="transform: rotate(180deg)" src="/images/icons/svg/doctor-arrow.svg" alt="">
                    </div>
                    <div class="swiper-button-next" slot="button-next">
                        <img src="/images/icons/svg/doctor-arrow.svg" alt="">
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>

<script>
export default {
    props: ['specialities'],
    data() {
        return {
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
    computed: {
        locale() {
            return this.$store.getters['locale/locale']
        }
    }
}
</script>