<template>
    <div class="auction" v-if="auction">
        <nuxt-link :to="'/' + locale + '/VIP/auction/' + auction.id + '/' + auction.title">
            <div class="card">
                <div class="card-hover">
                    <div class="card-img">
                        <img :src="auction.image_url" class="card-img-top" alt="...">
                    </div>
                    <div class="card-body">
                        <div class="card-head">
                            <h5 class="card-title">{{ auction.title }}</h5>
                        </div>
                        <div class="price">
                            <span class="text">{{ $t("vip.start_price") }}: </span>
                            <span class="amount">{{currSymbol}}{{ auction.open_price }}</span>
                        </div>
                        <div class="info">
                            <div class="bid">
                                <span>{{auction.total_paids}} {{ $t("vip.bid") }}</span>
                            </div>
                            <div class="left" v-if="new Date(auction.ends_at).getTime() > new Date().getTime()">
                                {{ auction.ends_at | moment("from", true) }} left
                            </div>
                        </div>
                    </div>
                </div>
                <div class="actions">
                    <div class="row no-gutters">
                        <div class="col add-cart-btn">
                            <span>{{ $t("vip.details_btn") }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </nuxt-link>
    </div>
</template>

<script>

export default {
    props: ['auction'],
    data() {
        return {

        }
    },
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