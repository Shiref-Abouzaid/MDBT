<template>
    <div class="car" v-if="car">
        <nuxt-link :to="'/' + locale + '/services/car-rental/' + car.id + '/' + car.title">
            <div class="card">
                <div class="card-hover">
                    <div class="card-img">
                        <img :src="car.image_url" class="card-img-top" alt="...">
                    </div>
                    <div class="card-body">
                        <div class="card-head">
                            <h5 class="card-title">{{car.title}}</h5>
                            <!-- <span class="price">$20.00</span> -->
                        </div>
                        <div class="desc">
                            <p>{{currSymbol}}{{car.rental_price_per_period}} / {{car.rental_period}}</p>
                        </div>
                    </div>
                </div>
                <div class="actions">
                    <div class="row no-gutters">
                        <div class="col add-cart-btn">
                            <span>{{$t("real_state.details_btn")}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </nuxt-link>
    </div>
</template>

<script>
export default {
    props: ['car'],
    data() {
        return {

        }
    },
    computed: {
        locale() {
            return this.$store.getters['locale/locale']
        },
        currSymbol() {
            return this.$store.getters["currency/symbol"];
        }
    }
}
</script>