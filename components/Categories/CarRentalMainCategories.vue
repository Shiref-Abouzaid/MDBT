<template>
    <section class="cat-slider">

        <div class="main-medical" v-if="categories && categories.length > 0">
            <div class="cat-carousel">

                <div class="swiper" v-swiper:mainSwiper="swiperOption">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div class="mini-cat"><nuxt-link exact :to="'/' + locale + '/services/car-rental/main'" class="active">All</nuxt-link></div>
                        </div>
                        <div class="swiper-slide" v-for="cat in categories" :key="cat.id">
                            <div class="mini-cat"><nuxt-link :to="'/' + locale + '/services/car-rental/main/' + cat.id + '/' + cat.model_name">{{cat.model_name}}</nuxt-link></div>
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

        <div class="doctors-specialities" v-if="($route.params.categoryId || $route.params.modelId) && models && models.length > 0">
            <div class="cat-carousel">

                <div class="swiper" v-swiper:subSwiper="swiperOption">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div class="mini-cat"><nuxt-link exact :to="'/' + locale + '/services/car-rental/main/' + $route.params.categoryId + '/' + $route.params.categoryName" class="active">All</nuxt-link></div>
                        </div>
                        <div class="swiper-slide" v-for="model in models" :key="model.id">
                            <div class="mini-cat"><nuxt-link :to="'/' + locale + '/services/car-rental/main/' + $route.params.categoryId + '/' + $route.params.categoryName + '/model/' + model.id + '/' + model.model_name" class="active">{{model.model_name}}</nuxt-link></div>
                        </div>
                        <!-- <div class="swiper-slide">
                            <div class="mini-cat"><nuxt-link to="/test" class="active">Kia</nuxt-link></div>
                        </div>
                        <div class="swiper-slide">
                            <div class="mini-cat"><nuxt-link to="/test" class="active">Kia</nuxt-link></div>
                        </div>
                        <div class="swiper-slide">
                            <div class="mini-cat"><nuxt-link to="/test" class="active">Kia</nuxt-link></div>
                        </div>
                        <div class="swiper-slide">
                            <div class="mini-cat"><nuxt-link to="/test" class="active">Kia</nuxt-link></div>
                        </div> -->
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
    props: ['categories', 'models'],
    data() {
        return {
            swiperOption: {
                    slidesPerView: "auto",
                    spaceBetween: 50,
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