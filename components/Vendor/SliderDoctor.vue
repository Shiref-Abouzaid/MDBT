<template>
    <div class="slider-medical" v-if="doctors && doctors.length > 0">
        <div class="swiper arrow-secondary" v-swiper:mySwiper="swiperOption">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="doctor in doctors" :key="doctor.id">
                    <app-single-medical :doctor="doctor"></app-single-medical>
                </div>
            </div>
            <div class="swiper-button-prev" slot="button-prev">
                <img style="transform: rotate(180deg)" src="/images/icons/svg/offers-arrow.svg" alt="">
            </div>
            <div class="swiper-button-next" slot="button-next">
                <img src="/images/icons/svg/offers-arrow.svg" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import SingleMedical from '~/components/Vendor/SingleDoctor';

export default {
    props: ['doctors'],
    components: {
        appSingleMedical: SingleMedical
    },
    data() {
        return {
            swiperOption: {
                    slidesPerView: 1,
                    spaceBetween: 14,
                    // initialSlide: 1
                    // centeredSlides: true,
                    // loop: true,
                    // loopedSlides: 54,
                    breakpoints:{
                        991: {
                            slidesPerView: 3,
                        }
                    },
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
    }
}
</script>