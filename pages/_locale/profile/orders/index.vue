<template>
    <div class="orders">
        <h3>{{$t("user_profile.orders") }}</h3>

        <div class="order" v-for="order in orders" :key="order.id">
            <div class="info">
                <div class="row">
                 <div class="col-sm-4 col-6 title">
                            <p>{{$t("user_profile.order_palced") }}: </p>
                            <p>{{$t("user_profile.order_id") }}: </p>
                            <p>{{$t("user_profile.recipient") }}: </p>
                            <p>{{$t("user_profile.payment_method") }}: </p>
                        </div>
                    <div class="col-sm-8 col-6 answer">
                        <p>{{order.created_at | moment('MMMM Do YYYY, h:mm:ss a')}}</p>
                        <p>{{order.id}}</p>
                        <p>TBDM</p>
                        <p>Card end with **** 6987</p>
                    </div>
                </div>
            </div>
            <div class="total">
                <div>
                <h6>{{$t("user_profile.total") }}</h6>
                <p class="price">{{currSymbol}}{{order.total}}</p>
                </div>
                <button @click="$router.push('/' + locale + '/profile/orders/' + order.id)" class="btn">{{$t("user_profile.order_button") }}</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            orders: []
        }
    },
    computed: {
        locale() {
            return this.$store.getters['locale/locale'];
        },
        currSymbol() {
            return this.$store.getters['currency/symbol']
        }
    },
    async fetch() {
        let ordersData = await axios.get('/my/orders/user/' + this.$store.getters['auth/userId'])
        this.orders = ordersData.data.data;
        console.log('orders >> ', ordersData.data.data)
    },
    watch: {
        currSymbol() {
            this.$fetch();
        }
    }
}
</script>