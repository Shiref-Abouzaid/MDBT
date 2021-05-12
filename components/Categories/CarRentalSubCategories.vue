<template>
    <section class="cat-slider">

        <div class="main-medical">
            <div class="cat-carousel">

                <div class="swiper" v-swiper:mainSwiper="swiperOption">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div class="mini-cat"><nuxt-link to="/eg-en/services/car-rental" class="active">All</nuxt-link></div>
                        </div>
                        <div class="swiper-slide">
                            <div class="mini-cat"><nuxt-link to="/test">Doctors</nuxt-link></div>
                        </div>
                        <div class="swiper-slide">
                            <div class="mini-cat"><nuxt-link to="/test">Clinics</nuxt-link></div>
                        </div>
                        <div class="swiper-slide">
                            <div class="mini-cat"><nuxt-link to="/test">SPA</nuxt-link></div>
                        </div>
                        <div class="swiper-slide">
                            <div class="mini-cat"><nuxt-link to="/test">Hospitals</nuxt-link></div>
                        </div>
                        <div class="swiper-slide">
                            <div class="mini-cat"><nuxt-link to="/test">Pharmacies</nuxt-link></div>
                        </div>
                        <div class="swiper-slide">
                            <div class="mini-cat"><nuxt-link to="/test">Laboratories</nuxt-link></div>
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
            <div class="cat-carousel">

                <div class="swiper" v-swiper:subSwiper="swiperOption">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div class="mini-cat"><nuxt-link exact to="/eg-en/services/car-rental/model" class="active">All</nuxt-link></div>
                        </div>
                        <div class="swiper-slide">
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
                        </div>
                        <div class="swiper-slide">
                            <div class="mini-cat"><nuxt-link to="/test" class="active">Kia</nuxt-link></div>
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
    }
}
</script>