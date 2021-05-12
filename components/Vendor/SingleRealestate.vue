<template>
    <div class="realestate" v-if="realestate">
        <nuxt-link :to="'/' + locale + '/services/realestate/' + realestate.id + '/' + realestate.property_title">
            <div class="card">
                <div class="card-hover">
                    <div class="card-img">
                        <img :src="realestate.property_image" class="card-img-top" alt="...">
                    </div>
                    <div class="card-body">
                        <div class="card-head">
                            <h5 class="card-title">{{realestate.property_title}}</h5>
                            <span class="price">{{currSymbol}}{{realestate.price}}</span>
                        </div>
                        <div class="desc">
                            <div class="features">
                                <div class="feature" v-if="realestate.number_of_bedrooms">
                                    <img src="/images/icons/svg/realestate-bedroom-black.svg" alt="">
                                    <div class="text">
                                        <span class="name">{{ $t("product.bedroom") }}:</span>
                                        <span class="count">{{ realestate.number_of_bedrooms }}</span>
                                        <span class="plus" v-if="realestate.has_maid_service">+ Maid</span>
                                    </div>
                                </div>
                                <div class="feature" v-if="realestate.number_of_bathrooms">
                                    <img src="/images/icons/svg/realestate-bathroom-black.svg" alt="">
                                    <div class="text">
                                        <span class="name">{{ $t("product.bathroom") }}:</span>
                                        <span class="count">{{ realestate.number_of_bathrooms }}</span>
                                    </div>
                                </div>
                            </div>
                            <!-- <div class="rate-box">
                                <span>5.0</span>
                                <img src="/images/icons/svg/vendor-star.svg" alt="">
                            </div> -->
                        </div>
                    </div>
                </div>
                <div class="actions">
                    <div class="row no-gutters">
                        <div class="col add-cart-btn">
                            <span>{{ $t("medical_service.details_button") }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </nuxt-link>
    </div>
</template>

<script>
export default {
    props: ['realestate'],
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