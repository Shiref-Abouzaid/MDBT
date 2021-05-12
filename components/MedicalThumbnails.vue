<template>
    <div class="medical-thumbnails">
        <div class="thumbnails" v-if="gallery && gallery.length > 0">
            <div class="product-thumbnails">
                <div class="slider">
                    <div class="swiper arrow-secondary" v-swiper:medicalThumbnailSwiper="swiperThumbnailOption" @click-slide="showGallery">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="(img, index) in gallery" :key="index">
                                <div class="thumbnail">
                                    <img :src="img" alt="">
                                </div>
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
            </div>
        </div>

        <b-modal id="medical-gllery" size="lg" centered :hide-header="true" :hide-footer="true" title="BootstrapVue">
            <app-gallery :gallery="gallery"></app-gallery>
        </b-modal>

    </div>
</template>

<script>
import Gallery from '~/components/SliderThumbnails';

export default {
    props: ['gallery'],
    components: {
        appGallery: Gallery
    },
    data() {
        return {
            swiperThumbnailOption: {
                slidesPerView: 7,
                spaceBetween: 15,
                slideToClickedSlide: true,
                // loop: true,
                // loopedSlides: 10,
                // touchRatio: 0.8,
                // centeredSlides: true,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                }
            }
        }
    },
    methods: {
        showGallery(index, realIndex) {
            console.log('index >> ', realIndex)
            this.$bvModal.show('medical-gllery');
        }
    }
}
</script>