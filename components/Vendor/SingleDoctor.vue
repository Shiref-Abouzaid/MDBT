<template>
    <div class="medical-card" v-if="doctor">
        <nuxt-link :to="'/' + locale + '/services/medical-services/doctor/' + doctor.user.id + '/' + doctor.user.username">
            <div class="card">
                <div class="card-hover">
                    <div class="card-img">
                        <img :src="doctor.image_url" class="card-img-top" alt="...">
                    </div>
                    <div class="card-body">
                        <div class="card-head">
                            <h5 class="card-title">{{ doctor.user.first_name }} {{ doctor.user.last_name }}</h5>
                            <!-- <span class="price">$20.00</span> -->
                        </div>
                        <div class="desc">
                            <p>{{ doctor.short_description }}</p>
                            <div class="rate-box">
                                <span>{{ doctor.total_rates }}</span>
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
    props: ['doctor'],
    data() {
        return {

        }
    },
    computed: {
        locale() {
            return this.$store.getters['locale/locale']
        }
    }
}
</script>