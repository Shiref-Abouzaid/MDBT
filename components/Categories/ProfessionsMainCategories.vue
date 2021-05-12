<template>
    <section class="cat-slider">

        <div class="cat-carousel" v-if="categories && categories.length > 0">

            <div class="swiper" v-swiper:mySwiper="swiperOption">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <div class="mini-cat"><nuxt-link :to="'/' + locale + '/services/professions'" class="active">All</nuxt-link></div>
                    </div>
                    <div class="swiper-slide" v-for="cat in categories" :key="cat.id">
                        <div class="mini-cat"><nuxt-link :to="'/' + locale + '/services/professions/' + cat.id + '/' + cat.name">{{cat.name}}</nuxt-link></div>
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

    </section>
</template>

<script>
export default {
    props: ['categories'],
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