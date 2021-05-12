<template>
    <div class="services-list">
        <div class="container">
            <div class="heading">
                <h2 class="main-head">{{ $t("services.service_header") }}</h2>
            </div>
            <div class="row">
                <div class="col-6 col-sm-3">
                    <div class="service">
                        <nuxt-link to="store/8/0">
                            <div class="service-img">
                            <img src="/images/icons/svg/fast-delivery.svg" alt="">
                            </div>
                            <p>{{ $t("services.store") }}</p>
                        </nuxt-link>
                    </div>
                </div>
                <div class="col-6 col-sm-3">
                    <div class="service">
                        <nuxt-link :to="{name:'locale-services-restaurants'}">
                            <div class="service-img">
                            <img src="/images/icons/svg/pizza.svg" alt="">
                            </div>
                            <p>{{ $t("services.restaurant") }}</p>
                        </nuxt-link>
                    </div>
                </div>
                <div class="col-6 col-sm-3">
                    <div class="service">
                        <nuxt-link :to="{name:'locale-services-realestates'}" >
                            <div class="service-img">
                            <img src="/images/icons/svg/dog-house.svg" alt="">
                            </div>
                            <p>{{ $t("services.real_state") }}</p>
                        </nuxt-link>
                    </div>
                </div>
                <div class="col-6 col-sm-3">
                    <div class="service">
                        <nuxt-link :to="{name:'locale-services-car-rental-main'}">
                            <div class="service-img">
                            <img src="/images/icons/svg/services-key.svg" alt="">
                            </div>
                            <p>{{ $t("services.rental") }}</p>
                        </nuxt-link>
                    </div>
                </div>
                <div class="col-6 col-sm-3">
                    <div class="service">
                        <nuxt-link :to="{name:'locale-services-professions'}">
                            <div class="service-img">
                            <img src="/images/icons/svg/kit.svg" alt="">
                            </div>
                            <p>{{ $t("services.proffession") }}</p>
                        </nuxt-link>
                    </div>
                </div>
                <div class="col-6 col-sm-3">
                    <div class="service">
                        <nuxt-link  :to="{name:'locale-services-medical-services'}">
                            <div class="service-img">
                            <img src="/images/icons/svg/first-aid-kit.svg" alt="">
                            </div>
                            <p>{{ $t("services.medical_service") }}</p>
                        </nuxt-link>
                    </div>
                </div>
                <div class="col-6 col-sm-3">
                    <div class="service">
                        <nuxt-link  :to="{name:'locale-companies-categories'}">
                            <div class="service-img">
                            <img src="/images/icons/svg/agenda.svg" alt="">
                            </div>
                            <p>{{ $t("services.companies_index") }}</p>
                        </nuxt-link>
                    </div>
                </div>
                <div class="col-6 col-sm-3">
                    <div class="service">
                        <nuxt-link :to="{name:'locale-companies-categories'}">
                            <div class="service-img">
                            <img src="/images/icons/svg/icon-services-sports.svg" alt="">
                            </div>
                            <p>{{ $t("services.sports") }}</p>
                        </nuxt-link>
                    </div>
                </div>
                <div class="col-6 col-sm-3">
                    <div class="service">
                        <nuxt-link :to="{name:'locale-companies-categories'}">
                            <div class="service-img">
                            <img src="/images/icons/svg/icon-services-festival.svg" alt="">
                            </div>
                            <p>{{ $t("services.festival") }}</p>
                        </nuxt-link>
                    </div>
                </div>
                <div class="col-6 col-sm-3">
                    <div class="service">
                        <nuxt-link :to="{name:'locale-companies-categories'}">
                            <div class="service-img">
                            <img src="/images/icons/svg/icon-services-shipping.svg" alt="">
                            </div>
                            <p>{{ $t("services.shippingCompanies") }}</p>
                        </nuxt-link>
                    </div>
                </div>
                <div class="col-6 col-sm-3">
                    <div class="service">
                        <nuxt-link :to="{name:'locale-companies-categories'}">
                            <div class="service-img">
                            <img src="/images/icons/svg/icon-services-education.svg" alt="">
                            </div>
                            <p>{{ $t("services.education") }}</p>
                        </nuxt-link>
                    </div>
                </div>
                <div class="col-6 col-sm-3">
                    <div class="service">
                        <nuxt-link :to="{name:'locale-companies-categories'}">
                            <div class="service-img">
                            <img src="/images/icons/svg/icon-services-holidays.svg" alt="">
                            </div>
                            <p>{{ $t("services.holidays") }}</p>
                        </nuxt-link>
                    </div>
                </div>
                <div class="col-6 col-sm-3">
                    <div class="service">
                        <nuxt-link :to="{name:'locale-companies-categories'}">
                            <div class="service-img">
                            <img src="/images/icons/svg/icon-services-security.svg" alt="">
                            </div>
                            <p>{{ $t("services.security") }}</p>
                        </nuxt-link>
                    </div>
                </div>
                <div class="col-6 col-sm-3">
                    <div class="service">
                        <nuxt-link :to="{name:'locale-companies-categories'}">
                            <div class="service-img">
                            <img src="/images/icons/svg/icon-services-tourism.svg" alt="">
                            </div>
                            <p>{{ $t("services.tourism") }}</p>
                        </nuxt-link>
                    </div>
                </div>
                <div class="col-6 col-sm-3">
                    <div class="service">
                        <nuxt-link :to="'/' + locale + '/services/jobs/main'">
                            <div class="service-img">
                            <img src="/images/icons/svg/icon-services-recruitment.svg" alt="">
                            </div>
                            <p>{{ $t("services.recruitment") }}</p>
                        </nuxt-link>
                    </div>
                </div>
                <div class="col-6 col-sm-3">
                    <div class="service">
                        <nuxt-link :to="{name:'locale-companies-categories'}">
                            <div class="service-img">
                            <img src="/images/icons/svg/icon-services-suggest.svg" alt="">
                            </div>
                            <p>{{ $t("services.suggestService") }}</p>
                        </nuxt-link>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    layout: 'withoutNavbar',
    computed: {
        locale() {
            return this.$store.getters['locale/locale']
        }
    },
    mounted() {
        console.log(this.$route.name)
    }
}
</script>