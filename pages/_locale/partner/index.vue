<template>
    <section class="partners">
        <div class="container">
            <div class="heading">
                <h2 class="main-head">{{ $t("partner.become_partner") }}</h2>
            </div>
            <div class="desc text-center">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. </p>
            </div>
            <div class="row">
                <div class="col-3">
                    <div class="service">
                        <nuxt-link :to="'/' + locale + '/partner/merchant'">
                            <div class="service-img">
                            <img src="/images/icons/svg/shop.svg" alt="">
                            </div>
                            <p>{{$t("partner.merchant") }}</p>
                        </nuxt-link>
                    </div>
                </div>
                <div class="col-3">
                    <div class="service">
                        <nuxt-link :to="'/' + locale + '/partner/doctor'">
                            <div class="service-img">
                            <img src="/images/icons/svg/doctor.svg" alt="">
                            </div>
                            <p>{{$t("partner.doctor") }}</p>
                        </nuxt-link>
                    </div>
                </div>
                <div class="col-3">
                    <div class="service">
                        <nuxt-link :to="'/' + locale + '/partner/profession'">
                            <div class="service-img">
                            <img src="/images/icons/svg/carpenter.svg" alt="">
                            </div>
                            <p>{{$t("partner.profession") }}</p>
                        </nuxt-link>
                    </div>
                </div>
                <div class="col-3">
                    <div class="service">
                        <nuxt-link :to="'/' + locale + '/partner/driver'">
                            <div class="service-img">
                            <img src="/images/icons/svg/driver.svg" alt="">
                            </div>
                            <p>{{$t("partner.driver") }}</p>
                        </nuxt-link>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="service">
                        <nuxt-link :to="'/' + locale + '/partner/realestate-developer'">
                            <div class="service-img">
                            <img src="/images/icons/svg/dog-house.svg" alt="">
                            </div>
                            <p>{{$t("partner.real_state") }}</p>
                        </nuxt-link>
                    </div>
                </div>
                <!-- <div class="col-sm-4">
                    <div class="service">
                        <nuxt-link :to="'/' + locale + '/partner/restaurant-owner'">
                            <div class="service-img">
                            <img src="/images/icons/svg/icon-restaurant.svg" alt="">
                            </div>
                            <p>Restaurant</p>
                        </nuxt-link>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="service">
                        <nuxt-link :to="'/' + locale + '/partner/pharmacist'">
                            <div class="service-img">
                            <img src="/images/icons/svg/icon-pharmacy.svg" alt="">
                            </div>
                            <p>Pharmacy</p>
                        </nuxt-link>
                    </div>
                </div> -->
            </div>
        </div>
    </section>
</template>

<script>
export default {
    computed: {
        locale() {
            return this.$store.getters['locale/locale']
        }
    }
}
</script>