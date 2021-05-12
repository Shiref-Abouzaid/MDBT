<template>
    <section class="offers">
        <div class="swiper arrow-secondary" v-swiper:mySwiper="swiperOption">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="offer in 6" :key="offer">
                    <single-offer></single-offer>
                </div>
                <!-- <div class="swiper-slide">
                    <single-offer></single-offer>
                </div>
                <div class="swiper-slide">
                    <single-offer></single-offer>
                </div> -->
            </div>
            <div class="swiper-button-prev" slot="button-prev">
                <img style="transform: rotate(180deg)" src="/images/icons/svg/offers-arrow.svg" alt="">
            </div>
            <div class="swiper-button-next" slot="button-next">
                <img src="/images/icons/svg/offers-arrow.svg" alt="">
            </div>
        </div>
    </section>
</template>

<script>
import StoreSingleOffer from '~/components/Product/StoreSingleOffer'

export default {
    components: {
        singleOffer: StoreSingleOffer
    },
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
    }
}
</script>