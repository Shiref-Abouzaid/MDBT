<template>
    <div class="restaurant" v-if="restaurant">
        
        <div class="card">
            <div class="card-hover">
                <nuxt-link :to="'/' + locale + '/services/restaurant/' + restaurant.RestaurantId + '/' + restaurant.title">
                    <div class="card-img">
                        <img :src="restaurant.logo_url" class="card-img-top" alt="...">
                    </div>
                    <div class="card-body">
                        <div class="head">
                            <h5 class="card-title">{{restaurant.title}}</h5>
                            <div class="rate-box">
                                <span>{{restaurant.total_rates}}</span>
                                <img src="/images/icons/svg/restaurant-star.svg" alt="">
                            </div>
                        </div>
                        <p>{{restaurant.description}}</p>
                    </div>
                </nuxt-link>
            </div>
            <div class="actions">
                <div class="row no-gutters">
                    <div class="col-6 wishlist-btn" @click="modalShow = !modalShow">
                        <img src="/images/icons/svg/map.svg" alt="">
                        <span>{{ $t("restaurant.open_button") }}</span>
                    </div>
                    <div class="col-6 add-cart-btn">
                        <nuxt-link to="/">
                            <img src="/images/icons/svg/compass.svg" alt="">
                            <span>{{ $t("restaurant.explore") }}</span>
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>

        <b-modal v-model="modalShow" hide-footer>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7286615.899145397!2d30.8768375!3d26.906099949999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1591700467233!5m2!1sen!2seg" width="100%" height="400px" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </b-modal>
        
    </div>
</template>

<script>
export default {
    props: ['restaurant'],
    data() {
        return {
            modalShow: false
        }
    },
    computed: {
        locale() {
            return this.$store.getters['locale/locale']
        }
    }
}
</script>