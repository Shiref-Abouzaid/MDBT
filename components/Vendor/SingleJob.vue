<template>
    <div class="job-card" v-if="job">
        <nuxt-link :to="'/' + locale + '/services/jobs/' + job.id + '/' + job.title">
            <div class="card">
                <div class="card-hover">
                    <div class="card-img">
                        <img src="/images/background-placeholder.png" class="card-img-top" alt="...">
                    </div>
                    <div class="card-body">
                        <div class="card-head">
                            <h5 class="card-title">{{job.title}}</h5>
                            <!-- <span class="price">500</span> -->
                        </div>
                        <div class="desc">
                            <p>{{job.about}}</p>
                        </div>
                    </div>
                </div>
                <div class="actions">
                    <div class="row no-gutters">
                        <div class="col add-cart-btn">
                            <span>{{ $t("buyandsell.see_details") }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </nuxt-link>
    </div>
</template>

<script>
export default {
    props: ['job'],
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