<template>
    <div class="product" v-if="product && !product.deleted_at">
        <!-- <nuxt-link :to="'/' + locale + '/services/store/product/' + product.id + '/' + product.name"> -->
            <div class="product-container">
                <div class="vendor-img" v-if="product.vendor_details">
                    <img :src="product.vendor_details.image_url" alt="">
                </div>
                <div class="sale" v-if="sale">
                    <span>{{ 100 - sale }}%</span>
                </div>
                <div class="card">
                    <nuxt-link :to="'/' + locale + '/services/store/product/' + product.id + '/' + product.name">
                    <div class="card-hover">
                        <div class="product-img">
                            <img :src="product.image_url" class="card-img-top" alt="...">
                        </div>
                        <div class="card-body">
                            <div class="info">
                                <div class="rate">
                                    <span>{{ product.total_rates }}</span>
                                    <img src="/images/icons/svg/vendor-star.svg" alt="">
                                </div>
                                <div class="price">
                                    <span class="discount" v-if="product.sale_price">{{currSymbol}}{{ product.regular_price }}</span>
                                    <span class="original">{{currSymbol}}{{ product.sale_price ? product.sale_price : product.regular_price }}</span>
                                </div>
                            </div>
                            <h6>{{ productName }}</h6>
                            <p>{{ shortDescription }}</p>
                        </div>
                    </div>
                    </nuxt-link>
                    <div class="actions">
                        <div class="row no-gutters actions-container">

                            <div @click="addToWishlist" class="col-6 wishlist-btn" :class="{'hide-btn': quantity}">
                                <img v-if="!wishlisted" src="/images/icons/svg/heart-empty.svg" alt="">
                                <img v-if="wishlisted" src="/images/icons/svg/heart-filled.svg" alt="">
                                <span>{{ $t("single_product.wishlist_button") }}</span>
                            </div>
                            <div class="col-6" v-if="!(+product.stock_status)">
                                <div class="out-stock">
                                    <span>OUT OF STOCK</span>
                                </div>
                            </div>
                            <template v-else>
                                <div class="col-6 add-cart-btn" :class="{'hide-btn': quantity > 0}" @click="addToCart">
                                    <img src="/images/icons/svg/shopping-bag.svg" alt="">
                                    <span>{{ $t("single_product.add_button") }}</span>
                                </div>
                                <div class="col-12 control" :class="{'hide': quantity == 0}">
                                    <div class="row no-gutters">
                                        <div class="col-10">
                                            <div class="quantity">
                                                <span class="minus" @click="removeFromCart">-</span>
                                                <span class="count">{{ quantity }}</span>
                                                <span class="plus" @click="addToCart">+</span>
                                            </div>
                                        </div>
                                        <div class="col-2" @click="deleteProduct">
                                            <div class="remove">
                                                <img src="/images/icons/svg/icon-remove.svg" alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </template>
                            
                        </div>
                    </div>
                </div>
            </div>
        <!-- </nuxt-link> -->
    </div>
</template>

<script>
export default {
    props: ["product"],
    data() {
        return {
            quantity: 0,
            wishlisted: false
        }
    },
    created() {
        // console.log('single product >> ', this.product)
        let cartProducts = this.$store.getters["cart/cartProducts"];
        // console.log('product in single >> ', cartProducts);
        let wishlistProducts = this.$store.getters["wishlist/wishlist"];

        if (this.product) {
        let cartProduct = cartProducts.find(pro => {
            return pro.id == this.product.id;
        });
        if (cartProduct) {
            this.quantity = cartProduct.quantity;
        }

        //check if wishlisted
        let wishlistProduct = wishlistProducts.find(pro => {
            return pro.id == this.product.id;
        });
        if (wishlistProduct) {
            this.wishlisted = wishlistProduct.wishlisted;
        }
        }
    },
    computed: {
        sale() {
            if (this.product.sale_price) {
                return Math.ceil(
                (this.product.sale_price / this.product.regular_price) * 100
                );
            }
            return null;
        },
        productName() {
            let name = this.product.name;
            if (name.length > 30) {
                return name.substr(0, 30) + "...";
            }
            return name;
        },
        shortDescription() {
            let desc = this.product.short_description;
            if(desc.length > 40) {
                return desc.substr(0, 40) + "...";
            }
            return desc;
        },
        locale() {
            return this.$store.getters['locale/locale'];
        },
        currSymbol() {
            return this.$store.getters["currency/symbol"];
        }
    },
    methods: {
        addToCart() {
            // console.log('add to cart');
            //increase quantity by 1 when clicking
            this.quantity++;
            const cartProduct = {
                id: this.product.id,
                name: this.product.name,
                imageUrl: this.product.image_url,
                quantity: this.quantity,
                price: this.product.sale_price ? this.product.sale_price : this.product.regular_price,
                vendorId: this.product.vendor_id
            };
            console.log("quantity >>>>>>>> ", this.quantity);
            this.$store.dispatch("cart/addOrUpdateCartProduct", cartProduct);
            console.log(this.$store.getters["cart/cartProducts"]);
            console.log("total >> ", this.$store.getters["cart/totalQuantity"]);

            if (this.$store.getters["auth/isAuthenticated"] && this.quantity == 1) {
                this.$store.dispatch("cart/saveCartProduct", cartProduct);
                return;
            }

            if (this.$store.getters["auth/isAuthenticated"])
                this.$store.dispatch("cart/updateCartProduct", cartProduct);
        },
        removeFromCart() {
            this.quantity--;
            const cartProduct = {
                id: this.product.id,
                name: this.product.name,
                imageUrl: this.product.image_url,
                quantity: this.quantity,
                price: this.product.sale_price ? this.product.sale_price : this.product.regular_price,
                vendorId: this.product.vendor_id
            };
            // console.log('quantity >> ', this.quantity);
            if (this.quantity == 0) {
                this.$store.dispatch("cart/removeCartProduct", cartProduct);

                if (this.$store.getters["auth/isAuthenticated"])
                this.$store.dispatch("cart/deleteCartProduct", cartProduct.id);
            } else {
                this.$store.dispatch("cart/addOrUpdateCartProduct", cartProduct);
                if (this.$store.getters["auth/isAuthenticated"])
                this.$store.dispatch("cart/updateCartProduct", cartProduct);
            }

            console.log(this.$store.getters["cart/cartProducts"]);
            console.log("total >> ", this.$store.getters["cart/totalQuantity"]);
        },
        deleteProduct() {
            console.log("delete");
            this.quantity = 0;
            const cartProduct = {
                id: this.product.id,
                name: this.product.name,
                imageUrl: this.product.image_url,
                quantity: this.quantity,
                price: this.product.sale_price ? this.product.sale_price : this.product.regular_price,
                vendorId: this.product.vendor_id
            };
            console.log("delete product >> ", cartProduct);
            this.$store.dispatch("cart/removeCartProduct", cartProduct);
            if (this.$store.getters["auth/isAuthenticated"])
                this.$store.dispatch("cart/deleteCartProduct", cartProduct.id);
        },
        singleProduct(product) {
            console.log("one product >>> ", product);
            this.$store.commit("setSingleProduct", product);
        },
        addToWishlist() {
            this.wishlisted = !this.wishlisted;
            let wishlistProduct = {
                id: this.product.id,
                name: this.product.name,
                imageUrl: this.product.image_url,
                regularPrice: this.product.regular_price,
                salePrice: this.product.sale_price,
                stockStatus: +this.product.stock_status,
                vendorId: this.product.vendor_id, //to use it when moving to cart
                wishlisted: this.wishlisted
            };
            if (this.wishlisted == true) {
                this.$store.dispatch("wishlist/addToWishlist", wishlistProduct);
                console.log("wishlist ", this.$store.getters["wishlist/wishlist"]);

                if (this.$store.getters["auth/isAuthenticated"])
                this.$store.dispatch("wishlist/saveToWishlist", this.product.id);
            } else {
                this.$store.dispatch("wishlist/removeFromWishlist", wishlistProduct);
                // this.wishlisted = !this.wishlisted;

                if (this.$store.getters["auth/isAuthenticated"])
                this.$store.dispatch("wishlist/deleteFromWishlist", this.product.id);
            }
        }
    }
}
</script>