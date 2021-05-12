<template>
    <div class="slider-medical">
        <div class="swiper arrow-secondary" v-swiper:mySwiper="swiperOption">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="vendor in 10" :key="vendor">
                    <app-single-doctor></app-single-doctor>
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
import SingleDoctor from '~/components/Vendor/SingleDoctor';

export default {
    components: {
        appSingleDoctor: SingleDoctor
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