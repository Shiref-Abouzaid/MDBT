<template>
    <div class="slider-medical" v-if="clinics && clinics.length > 0">
        <div class="swiper arrow-secondary" v-swiper:mySwiper="swiperOption">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="clinic in clinics" :key="clinic.id">
                    <app-single-clinic :clinic="clinic"></app-single-clinic>
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
import SingleClinic from '~/components/Vendor/SingleClinic';

export default {
    props: ['clinics'],
    components: {
        appSingleClinic: SingleClinic
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