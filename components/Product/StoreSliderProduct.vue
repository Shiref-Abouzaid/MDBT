<template>
    <div class="slider-product">
        <div class="swiper arrow-secondary" v-swiper:mySwiper="swiperOption">
            <div class="swiper-wrapper" v-if="products && products.length > 0">
                <div class="swiper-slide" v-for="prodcut in products" :key="prodcut.id">
                    <app-single-product :product="prodcut"></app-single-product>
                    <!-- <app-product-loader></app-product-loader> -->
                </div>
            </div>
            <div class="swiper-wrapper" v-else>
                <div class="swiper-slide" v-for="loader in 10" :key="loader">
                    <app-product-loader></app-product-loader>
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
import SingleProduct from '~/components/Product/StoreSingleProduct';
import ProductLoader from '~/components/Loaders/ProductLoader';

export default {
    props: ["products"],
    components: {
        appSingleProduct: SingleProduct,
        appProductLoader: ProductLoader
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