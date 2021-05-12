<template>
    <div class="medical-card" v-if="hospital">
        <nuxt-link :to="'/' + locale + '/services/medical-services/hospital/' + hospital.id + '/' + hospital.title">
            <div class="card">
                <div class="card-hover">
                    <div class="card-img">
                        <img :src="hospital.logo_url ? hospital.logo_url : '/images/background-placeholder.png'" class="card-img-top" alt="...">
                    </div>
                    <div class="card-body">
                        <div class="card-head">
                            <h5 class="card-title">{{hospital.title}}</h5>
                            <!-- <span class="price">$20.00</span> -->
                        </div>
                        <div class="desc">
                            <p>{{hospital.description}}</p>
                            <div class="rate-box">
                                <span>{{hospital.total_rates}}</span>
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
    props: ['hospital'],
    computed: {
        locale() {
            return this.$store.getters['locale/locale']
        }
    }
}
</script>