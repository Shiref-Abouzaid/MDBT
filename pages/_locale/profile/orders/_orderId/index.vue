<template>
    <div class="order-details">
        <div class="head">
            <h3>{{$t("user_profile.order_button") }}</h3>
            <div class="cancel">
                <img src="/images/icons/svg/reservation-remove.svg" alt="">
                <span>{{$t("user_profile.cancel_link") }}</span>
            </div>
        </div>
        <div class="details">
            <div class="order">
                <div class="info">
                    <div class="row">
                        <div class="col-sm-4 col-6 title">
                            <p>{{$t("user_profile.order_palced") }}: </p>
                            <p>{{$t("user_profile.order_id") }}: </p>
                            <p>{{$t("user_profile.recipient") }}: </p>
                            <p>{{$t("user_profile.payment_method") }}: </p>
                        </div>
                        <div class="col-sm-8 col-6 answer">
                            <p v-if="order.created_at">{{order.created_at | moment('MMMM Do YYYY, h:mm:ss a')}}</p>
                            <p>{{order.id}}</p>
                            <p>TBDM</p>
                            <p>Card end with **** 6987</p>
                        </div>
                    </div>
                </div>
                <div class="total">
                    <h6>{{$t("user_profile.total") }}</h6>
                    <p class="price">{{currSymbol}}{{order.total}}</p>
                    <!-- <button class="btn">Order Details</button> -->
                </div>
            </div>
        </div>
        <hr>
        <div class="shipment-details">
            <h3>{{$t("user_profile.shipment") }}</h3>

            <div class="milestones">
                <div class="cirlce active"></div> <!-- class="active" -->
                <hr :class="{active: confirmed}"> <!-- class="active" -->
                <div class="confirmed" v-if="!picked" :class="{active: confirmed}"> <!-- class="active" -->
                    <div class="icon">
                        <img v-if="!confirmed" src="/images/icons/svg/right-white.svg" alt="">
                        <img v-if="confirmed" src="/images/icons/svg/right-primary.svg" alt="">
                    </div>
                </div>
                <div class="cirlce active" v-if="picked"></div>
                <hr :class="{active: picked}">
                <div class="picked" v-if="confirmed && !shipped" :class="{active: picked}">
                    <div class="icon">
                        <img v-if="!picked" src="/images/icons/svg/order-carrier-unactive.svg" alt="">
                        <img v-if="picked" src="/images/icons/svg/order-carrier-white.svg" alt="">
                    </div>
                </div>
                <div class="cirlce active" v-if="confirmed && shipped"></div>
                <div v-if="!confirmed" class="cirlce"></div>
                <hr :class="{active: shipped}">
                <div class="shipped" v-if="picked && !arrived" :class="{active: shipped}">
                    <div class="icon">
                        <img v-if="!shipped" src="/images/icons/svg/order-truck-unactive.svg" alt="">
                        <img v-if="shipped" src="/images/icons/svg/order-truck-white.svg" alt="">
                    </div>
                </div>
                <div class="cirlce active" v-if="picked && arrived"></div>
                <div class="cirlce" v-if="!picked"></div>
                <hr :class="{active: arrived}">
                <div class="box" v-if="shipped" :class="{active: arrived}">
                    <div class="icon">
                        <img v-if="!arrived" src="/images/icons/svg/order-box-unactive.svg" alt="">
                        <img v-if="arrived" src="/images/icons/svg/order-box-white.svg" alt="">
                    </div>
                </div>
                <div class="cirlce" v-if="!shipped"></div>
            </div>
            <div class="desc">
                <p v-if="!confirmed" class="placed">Order Placed</p>
                <p v-if="confirmed && !picked" class="confirmed">Order Confirmed</p>
                <p class="picked" v-if="picked && !shipped">Picked by courier</p>
                <p class="shipped" v-if="shipped && !arrived">Shipped</p>
                <p class="arrived" v-if="arrived">Arrived</p>
            </div>

        </div>
        <hr>
        <div class="product-details">
            <h3>{{$t("user_profile.product_details") }}</h3>
            <div class="products">
                <div class="row">
                    <div class="col-6" v-for="(product, index) in products" :key="index">
                        <div class="product">
                            <div class="row">
                                <div class="col-sm-4">
                                    <div class="product-img">
                                        <img :src="product.image" alt="">
                                    </div>
                                </div>
                                <div class="col-sm-8">
                                    <div class="info">
                                        <p class="name">{{product.name}}</p>
                                        <p class="seller">Seller: {{product.vendor_name}}</p>
                                        <span class="price">{{currSymbol}}{{product.price}}</span>
                                        <span class="quantity">Qty: {{product.quantity}}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            order: {},
            products: [],
            confirmed: false,
            picked: false,
            shipped: false,
            arrived: false
        }
    },
    computed: {
        currSymbol() {
            return this.$store.getters['currency/symbol']
        }
    },
    async fetch() {
        try {
            let orderData = await axios.get('/my/order/' + this.$route.params.orderId);
            console.log('order >> ', orderData.data.data);
            this.order = orderData.data.data;
            this.products = this.order.orderItems;

            if(this.order.status == 'confirmed')
                this.confirmed = true;
            else if(this.order.status == 'processing') {
                this.confirmed = true;
                this.picked = true;
            }
            else if(this.order.status == 'shipped') {
                this.confirmed = true;
                this.picked = true;
                this.shipped = true;
            }
            else if(this.order.status == 'completed') {
                this.confirmed = true;
                this.picked = true;
                this.shipped = true;
                this.arrived = true;
            }

        } catch (error) {
            console.log('error >> ', error);
        }
    }
}
</script>