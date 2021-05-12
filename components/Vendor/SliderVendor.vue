<template>
    <div class="slider-vendor">
        <div class="swiper" v-swiper:mySwiper="swiperOption">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="vendor in 10" :key="vendor">
                    <app-single-vendor></app-single-vendor>
                </div>
            </div>
            <!-- <div class="swiper-button-prev" slot="button-prev">
                <img style="transform: rotate(180deg)" src="/images/icons/svg/offers-arrow.svg" alt="">
            </div>
            <div class="swiper-button-next" slot="button-next">
                <img src="/images/icons/svg/offers-arrow.svg" alt="">
            </div> -->
        </div>
    </div>
</template>

<script>
import SingleVednor from '~/components/Vendor/SingleVendor'

export default {
    components: {
        appSingleVendor: SingleVednor
    },
    data() {
        return {
            swiperOption: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                    // initialSlide: 1
                    // centeredSlides: true,
                    // loop: true,
                    // loopedSlides: 54,
                    breakpoints:{
                        991: {
                            slidesPerView: 5,
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