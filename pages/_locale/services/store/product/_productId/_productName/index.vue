<template>
    <section class="product-page">
        <div class="container">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><nuxt-link to="/">{{ $t("subnav.home") }}</nuxt-link></li>
                    <li class="breadcrumb-item"><nuxt-link :to="`/${locale}/services/`">{{ $t("subnav.service") }}</nuxt-link></li>
                    <li class="breadcrumb-item" > <nuxt-link :to="`/${locale}/services/store/8/0/`">{{ $t("subnav.store") }}</nuxt-link></li>
                    <li class="breadcrumb-item active" aria-current="page">{{ $route.params.productName }}</li>
                </ol>
            </nav>

            <div class="row">
                <div class="col-sm-8">
                    <div class="product-info" v-if="product">
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="product-slider">

                                    <div class="swiper" v-swiper:mainSwiper="swiperOption">
                                        <div class="swiper-wrapper">
                                            <div class="swiper-slide" v-for="(img, index) in product.gallery" :key="index">
                                                <div class="product-img text-center">
                                                    <img :src="img" alt="">
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="info">
                                    <h5>{{ product.name }}</h5>
                                    <div class="rate">
                                        <client-only>
                                            <star-rating 
                                                :rating="+product.total_rates" 
                                                :increment=".5"
                                                :read-only="true" 
                                                active-color="#FFD506" 
                                                :show-rating="false" 
                                                :star-size="20"
                                                :padding=".9">
                                            </star-rating>
                                        </client-only>
                                    </div>
                                    <div class="price">
                                        <p class="original">{{currSymbol}}{{ product.sale_price ? product.sale_price : product.regular_price }}</p>
                                        <p class="sale" v-if="product.sale_price">{{currSymbol}}{{ product.regular_price }}</p>
                                        <p class="percent" v-if="product.sale_price">{{ 100 - Math.ceil((this.product.sale_price / this.product.regular_price) * 100) }}%</p>
                                    </div>
                                    <div class="quantity">
                                        <p>{{ $t("single_product.quantity") }}</p>
                                        <div class="control">
                                            <span @click="removeFromCart">
                                                <img src="/images/icons/svg/minus-black.svg" alt="">
                                            </span>
                                            <span>{{ quantity }}</span>
                                            <span @click="addToCart">
                                                <img src="/images/icons/svg/plus-black.svg" alt="">
                                            </span>
                                        </div>
                                    </div>
                                    <div class="row no-gutters actions flex-nowrap">

                                        <div @click="addToWishlist" class="col-6 wishlist-btn">
                                            <img v-if="!wishlisted" src="/images/icons/svg/heart-empty.svg" alt="">
                                            <img v-if="wishlisted" src="/images/icons/svg/heart-filled.svg" alt="">
                                            <span>WISHLIST</span>
                                        </div>

                                        <div class="col-6 add-cart-btn" @click="saveToCart" v-if="!inCart">
                                            <img src="/images/icons/svg/shopping-bag.svg" alt="">
                                            <span>{{ $t("single_product.add_button") }}</span>
                                        </div>

                                        <div class="col-6 remove-btn" @click="deleteProduct" v-if="inCart">
                                            <img src="/images/icons/svg/icon-remove.svg" alt="">
                                            <span>REMOVE</span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="col-12 slider-thumbnails">
                                <div class="product-thumbnails">
                                    <div class="slider">
                                        <div class="swiper arrow-secondary" v-swiper:thumbnailSwiper="swiperThumbnailOption">
                                            <div class="swiper-wrapper" v-if="product.gallery && product.gallery.length >0">
                                                <div class="swiper-slide" v-for="(img, index) in product.gallery" :key="index">
                                                    <div class="thumbnail">
                                                        <img :src="img" alt="">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="swiper-button-prev" slot="button-prev">
                                                <img style="transform: rotate(180deg)" src="/images/icons/svg/offers-arrow.svg" alt="">
                                            </div>
                                            <div class="swiper-button-next" slot="button-next">
                                                <img src="/images/icons/svg/offers-arrow.svg" alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="desc-reviews">
                        <div>
                            <b-tabs content-class="mt-3">
                                <b-tab title="Desription" >
                                    <div class="desc" v-if="product">
                                        <p>{{ product.description }}</p>
                                    </div>
                                </b-tab>
                                <b-tab title="Reviews" active>
                                    <div class="reviews">
                                        <div class="add-review">
                                            <h4>{{ $t("review.add_review") }}</h4>
                                            <div class="row no-gutters">
                                                <div class="col-3">
                                                    <h6>{{ $t("review.your_review") }}</h6>
                                                </div>
                                                <div class="col-9">
                                                    <textarea v-model="comment" class="form-control" id="review" rows="4"></textarea>
                                                </div>
                                            </div>
                                            <div class="row no-gutters">
                                                <div class="col-3 d-flex align-items-center">
                                                    <h6>{{ $t("review.rating") }}</h6>
                                                </div>
                                                <div class="col-9">
                                                    <client-only>
                                                        <star-rating 
                                                            :rating="+rate" 
                                                            :increment=".5"
                                                            active-color="#FFD506" 
                                                            :show-rating="false" 
                                                            :star-size="20"
                                                            :padding=".9"
                                                            @rating-selected="setRating"
                                                            >
                                                        </star-rating>
                                                    </client-only>
                                                </div>
                                            </div>
                                            <div class="row no-gutters">
                                                <div class="col-3"></div>
                                                <div class="col-9">
                                                    <button @click="saveComment" class="btn">Submit</button>
                                                </div>
                                            </div>
                                        </div>
                                        <hr>
                                        <div class="prev-reviews">
                                            <h4>{{ $t("review.previous_review") }}</h4>

                                            <template v-if="reviews && reviews.length > 0">
                                                <div class="row no-gutters review" v-for="review in reviews" :key="review.id">
                                                    <div class="col-3">
                                                        <client-only>
                                                            <star-rating 
                                                                :rating="+review.rate" 
                                                                :increment=".5"
                                                                :read-only="true" 
                                                                active-color="#FFD506" 
                                                                :show-rating="false" 
                                                                :star-size="20"
                                                                :padding=".9">
                                                            </star-rating>
                                                        </client-only>
                                                        <h6>{{ review.user.first_name }} {{ review.user.last_name }}</h6>
                                                        <span class="time">{{ review.created_at | moment("from", "now") }}</span>
                                                    </div>
                                                    <div class="col-9">
                                                        <div class="comment">
                                                            <p>{{ review.comment }}</p>
                                                            <!-- <div class="icons">
                                                                <div class="icon">
                                                                    <span class="image">
                                                                        <img src="/images/icons/svg/comment-heart.svg" alt="">
                                                                    </span>
                                                                    <span class="count">113</span>
                                                                </div>
                                                                <div class="icon">
                                                                    <span class="image">
                                                                        <img src="/images/icons/svg/icon-comment.svg" alt="">
                                                                    </span>
                                                                    <span class="count">6</span>
                                                                </div>
                                                            </div> -->
                                                        </div>
                                                    </div>
                                                </div>
                                            </template>

                                            <div class="more" v-if="!hideShowMoreReviews">
                                                <p @click="getMoreReviews(reviews.length, 5)"><b-spinner small class="spinner-primary" v-if="loading.getMoreReviews"></b-spinner> See more reviews</p>
                                            </div>

                                        </div>
                                    </div>
                                </b-tab>
                            </b-tabs>
                        </div>
                    </div>

                    <div class="related-products">
                        <div class="head">
                            <h2>{{ $t("single_product.related_product") }}</h2>
                            <nuxt-link to="/">{{ $t("single_product.more") }}</nuxt-link>
                        </div>
                        <div class="products">
                            <app-related-products :products="relatedProducts"></app-related-products>
                        </div>
                    </div>

                </div>
                <div class="col-sm-4">
                    <div class="vendor-profile">
                        <!-- <h3>Vendor Profile</h3> -->
                        <div class="info" v-if="vendor">
                            <nuxt-link :to="'/' + locale + '/services/store/vendor/' + vendor.id">
                                <img class="profile-img" v-if="vendor.details" :src="vendor.details.image_url" alt="">
                            </nuxt-link>
                            <div class="name">
                                <nuxt-link :to="'/' + locale + '/services/store/vendor/' + vendor.id">
                                    <h5>{{ vendor.first_name }} {{ vendor.last_name }}</h5>
                                    <span>{{vendor.productsCount}} Product</span>
                                </nuxt-link>
                            </div>
                            <div class="rate">
                                <span v-if="vendor.details">{{ vendor.details.total_rates }}</span>
                                <img src="/images/icons/svg/vendor-star.svg" alt="">
                            </div>
                        </div>
                        <hr>
                        <div class="contacts">
                            <div class="row no-gutters" v-if="vendor.phone">
                                <div class="col-1"><img src="/images/icons/svg/phone.svg" alt=""></div>
                                <div class="col-1"></div>
                                <div class="col-10"><p>{{ vendor.phone }}</p></div>
                            </div>
                            <div class="row no-gutters" v-if="vendor.details && vendor.details.email">
                                <div class="col-1"><img class="mail" src="/images/icons/svg/mail.svg" alt=""></div>
                                <div class="col-1"></div>
                                <div class="col-10"><p>{{ vendor.details.email }}</p></div>
                            </div>
                            <div class="row no-gutters" v-if="vendor.details && vendor.details.address">
                                <div class="col-1"><img src="/images/icons/svg/location.svg" alt=""></div>
                                <div class="col-1"></div>
                                <div class="col-10"><p>{{ vendor.details.address }}</p></div>
                            </div>
                        </div>
                    </div>
                    <div class="vendor-products">
                        <h3>{{ $t("single_product.vendor_product") }}</h3>

                        <template v-if="vendorProducts && vendorProducts.length > 0">
                            <app-single-product v-for="product in vendorProducts" :key="product.id" :product="product"></app-single-product>
                            
                        </template>
                        <template v-else>
                            <app-product-loader v-for="product in 2" :key="product"></app-product-loader>
                        </template>

                        <div class="see-more">
                            <nuxt-link to="/" class="btn">{{ $t("single_product.more") }}</nuxt-link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script>
import axios from 'axios';
import SingleProduct from '~/components/Product/StoreSingleProduct';
import RelatedProducts from '~/components/Product/StoreSliderRelatedProduct';
import ProductLoader from '~/components/Loaders/ProductLoader';

export default {
    name:'SingleProduct',
    components: {
        appSingleProduct: SingleProduct,
        appRelatedProducts: RelatedProducts,
        appProductLoader: ProductLoader
    },
    data() {
        return {
            loading:{
                getMoreReviews:false
            },
            hideShowMoreReviews:false,
            quantity: 1,
            wishlisted: false,
            inCart: false,
            product: null,
            vendorProducts: [],
            relatedProducts: [],
            vendor: {},
            rate: 0,
            comment: "",
            reviews: [],
            swiperOption: {
                    slidesPerView: 3,
                    breakpoints:{
                        991: {
                            slidesPerView: 3,
                        }
                    },
                    // loopedSlides: 5,
                    // loop: true,
                    // spaceBetween: 14,
                    // initialSlide: 1
                    // centeredSlides: true,
                    // loop: true,
                    // loopedSlides: 54,

                    // pagination: {
                    //   el: ".swiper-pagination",
                    //   clickable: true
                    // }
            },
            swiperThumbnailOption: {
                slidesPerView: 7,
                spaceBetween: 10,
                slideToClickedSlide: true,
                // loop: true,
                // loopedSlides: 5,
                // touchRatio: 0.8,
                // centeredSlides: true,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                }
            }
        }
    },
    computed: {
        sale() {
            if (this.product.sale_price) {
                return Math.ceil((this.product.sale_price / this.product.regular_price) * 100);
            }
            return null;
        },
        locale() {
            return this.$store.getters['locale/locale']
        },
        currSymbol() {
            return this.$store.getters["currency/symbol"];
        }
    },
    async fetch() {
        try {
            let productData = await axios.get('/my/product/' + this.$route.params.productId);
            this.product = productData.data.data.product;
            this.relatedProducts = productData.data.data.relatedByCategory;
            this.vendorProducts = productData.data.data.relatedByVendor;
            this.reviews = productData.data.data.rates;
            console.log('product >> ', this.product);
            console.log('related products >> ', this.relatedProducts);
            console.log('vendor products >> ', this.vendorProducts);
            console.log('reviews >> ', this.reviews);

            //get vendor by id
            let vendorData = await axios.get('/my/vendor/' + this.product.vendor_id);
            console.log('vendor data >> ', vendorData.data.data);
            this.vendor = vendorData.data.data;

        } catch(error) {
            console.log('error >> ', error);
        }
    },
    mounted() {
        // this.mainSwiper.controller.control = this.thumbnailSwiper;
        // this.thumbnailSwiper.controller.control = this.mainSwiper;
        console.log('swiper >>> ', this.mainSwiper, this.thumbnailSwiper);
    },
    watch: {
        product: function() {
            console.log('watch >>>>>>>>>>>>>>>>');
            let cartProducts = this.$store.getters['cart/cartProducts'];
            // console.log('product in single >> ', cartProducts);
            let wishlistProducts = this.$store.getters['wishlist/wishlist'];
            console.log('wishlist in single >> ', wishlistProducts);

            if(this.product) {
                console.log('single product >> ', this.product)
                let cartProduct = cartProducts.find(pro => {
                return pro.id == this.product.id
                });
                if(cartProduct) {
                    this.quantity = cartProduct.quantity;
                    this.inCart = true;
                }

                //check if wishlisted
                let wishlistProduct = wishlistProducts.find(pro => {
                    return pro.id == this.product.id
                });
                if(wishlistProduct) {
                    this.wishlisted = wishlistProduct.wishlisted;
                }

            }
        },
        currSymbol(oldSymbol, newSymbol) {
            console.log('symbol >> ', oldSymbol, newSymbol);
            this.$fetch();
        }
    },
    methods: {
        //get more reviews
        getMoreReviews(skip,take) {
            this.loading.getMoreReviews = true
            axios.get(`my/product/${this.$route.params.productId}/rating/skip/${skip}/take/${take}`)
            .then(res=>{
                this.loading.getMoreReviews = false
                for (let i of res.data.data) {
                    this.reviews.push(i)
                }
                if(res.data.data.length < 5) {
                    this.hideShowMoreReviews = true
                }
            }).catch(()=>{
                this.loading.getMoreReviews = false
            })
        },
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
            if(this.inCart) {
                console.log("quantity >>>>>>>> ", this.quantity);
                this.$store.dispatch("cart/addOrUpdateCartProduct", cartProduct);
                console.log(this.$store.getters["cart/cartProducts"]);
                console.log("total >> ", this.$store.getters["cart/totalQuantity"]);

                // if (this.$store.getters["auth/isAuthenticated"] && !this.inCart) {
                //     this.$store.dispatch("cart/saveCartProduct", cartProduct);
                //     return;
                // }

                if (this.$store.getters["auth/isAuthenticated"] && this.inCart)
                    this.$store.dispatch("cart/updateCartProduct", cartProduct);
            }
        },
        saveToCart() {
            this.inCart = true;
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

            if (this.$store.getters["auth/isAuthenticated"]) {
                this.$store.dispatch("cart/saveCartProduct", cartProduct);
                return;
            }

            // if (this.$store.getters["auth/isAuthenticated"] && this.inCart)
            //     this.$store.dispatch("cart/updateCartProduct", cartProduct);
        },
        removeFromCart() {
            if(this.quantity == 1)
                return;

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
            // if (this.quantity == 0) {
                // this.$store.dispatch("cart/removeCartProduct", cartProduct);

                // if (this.$store.getters["auth/isAuthenticated"])
                // this.$store.dispatch("cart/deleteCartProduct", cartProduct.id);
                if(this.inCart) {
                    this.$store.dispatch("cart/addOrUpdateCartProduct", cartProduct);
                    if (this.$store.getters["auth/isAuthenticated"])
                        this.$store.dispatch("cart/updateCartProduct", cartProduct);
                }
            // }

            console.log(this.$store.getters["cart/cartProducts"]);
            console.log("total >> ", this.$store.getters["cart/totalQuantity"]);
        },
        deleteProduct() {
            console.log("delete");
            this.inCart = false;
            this.quantity = 1;
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
        },
        setRating(rate) {
            console.log(rate);
            this.rate = rate;
            
        },
        async saveComment() {
            console.log('comment');

            if(this.$store.getters['auth/isAuthenticated']) {

                let userId = this.$store.getters['auth/userId'];
                let userData = await axios.get('/users/' + userId);

                let messageDate = new Date().toISOString().substring(0, 10);
                let messageTime = new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();
                console.log('user >> ', userData.data.data)

                let review = {
                    rate: this.rate,
                    created_at: messageDate + " " + messageTime,
                    comment: this.comment,
                    user: {
                        first_name: userData.data.data.first_name,
                        last_name: userData.data.data.last_name,
                        image_url: userData.data.data.user_details ?  userData.data.data.user_details.image_url : 'https://orbitermag.com/wp-content/uploads/2017/03/default-user-image-300x300.png'
                    }
                }

                this.reviews.unshift(review);

                console.log('reviews >> ',this.reviews)
            
                let rateObj = {
                    rate: this.rate,
                    user_id:userId,
                    object_id: this.$route.params.productId,
                    object_name: 'product',
                    comment: this.comment
                }
                axios.post('/rates', rateObj).then(res => {
                    console.log(res);
                    this.rate = 0;
                    this.comment = "";
                })
                .catch(err => {
                console.log(err);
                });
            } else {
                this.$bvModal.show('popup-login');
            }
        }
    }
}
</script>