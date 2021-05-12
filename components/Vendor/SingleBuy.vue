<template>
    <div class="buy-card" v-if="item">
        <nuxt-link :to="'/' + locale + '/buy-sell/' + item.id + '/' + item.title">
            <div class="card">
                <div class="card-hover">
                    <div class="card-img">
                        <img :src="item.image_url" class="card-img-top" alt="...">
                    </div>
                    <div class="card-body">
                        <div class="card-head">
                            <h5 class="card-title">{{item.title}}</h5>
                            <span class="price">{{currSymbol}}{{item.price}}</span>
                        </div>
                        <div class="desc">
                            <p>{{item.description}}</p>
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
    props: ['item'],
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