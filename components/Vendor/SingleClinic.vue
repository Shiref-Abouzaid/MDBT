<template>
    <div class="medical-card" v-if="clinic">
        <nuxt-link :to="'/' + locale + '/services/medical-services/clinic/' + clinic.id + '/' + clinic.title">
            <div class="card">
                <div class="card-hover">
                    <div class="card-img">
                        <img :src="clinic.logo_url ? clinic.logo_url : '/images/background-placeholder.png'" class="card-img-top" alt="...">
                    </div>
                    <div class="card-body">
                        <div class="card-head">
                            <h5 class="card-title">{{ clinic.title }}</h5>
                            <span class="price">{{currSymbol}}{{ clinic.regular_price }}</span>
                        </div>
                        <div class="desc">
                            <p>{{clinic.description}}</p>
                            <div class="rate-box">
                                <span>{{ clinic.total_rates }}</span>
                                <img src="/images/icons/svg/vendor-star.svg" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="actions">
                    <div class="row no-gutters">
                        <div class="col add-cart-btn">
                            <span>See Details</span>
                        </div>
                    </div>
                </div>
            </div>
        </nuxt-link>
    </div>
</template>

<script>
export default {
    props: ['clinic'],
    computed: {
        locale() {
            return this.$store.getters['locale/locale']
        },
        currSymbol() {
            return this.$store.getters['currency/symbol']
        }
    }
}
</script>