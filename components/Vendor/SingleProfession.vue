<template>
    <div class="profession-card" v-if="tech">
        <nuxt-link :to="'/' + locale + '/services/professional/' + tech.id + '/' + tech.commercial_name">
            <div class="card">
                <div class="card-hover">
                    <div class="card-img">
                        <img :src="tech.image_url" class="card-img-top" alt="...">
                    </div>
                    <div class="card-body">
                        <div class="card-head">
                            <h5 class="card-title">{{tech.first_name}} {{ tech.last_name }}</h5>
                            <div class="rate-box">
                                <span>{{tech.total_rates}}</span>
                                <img src="/images/icons/svg/vendor-star.svg" alt="">
                            </div>
                        </div>
                        <div class="desc">
                            <p>{{tech.short_description}}</p>
                        </div>
                    </div>
                </div>
                <div class="actions">
                    <div class="row no-gutters">
                        <div class="col add-cart-btn">
                            <span>{{$t("professions.details_btn")}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </nuxt-link>
    </div>
</template>

<script>

export default {
    props: ['tech'],
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