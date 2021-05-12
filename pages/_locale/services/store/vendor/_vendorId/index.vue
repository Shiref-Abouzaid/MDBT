<template>
    <section class="vendor-page">
        <div class="container">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><nuxt-link to="/">{{ $t("subnav.home") }}</nuxt-link></li>
                    <li class="breadcrumb-item"><nuxt-link :to="{name:'locale-services'}">{{ $t("subnav.service") }}</nuxt-link></li>
                    <li class="breadcrumb-item"><nuxt-link  :to="{name:'locale-services-store-subCatId-id', params:{subCatId:8,id:0}}">{{ $t("subnav.store") }}</nuxt-link></li>
                    <li class="breadcrumb-item active" aria-current="page">{{ $t("subnav.vendor") }}</li>
                </ol>
            </nav>

            <div class="vendor-info" v-if="vendor">
                <div class="cover" v-if="vendor.details">
                    <img class="cover-img" :src="vendor.details.cover_image ? vendor.details.cover_image : '/images/background-placeholder.png'" alt="">
                    <img :src="vendor.details.image_url ? vendor.details.image_url : '/images/placeholder.jpg'" alt="" class="personal-img">
                </div>

                <div class="row">
                    <div class="col-9">
                        <div class="info">
                            <div class="head">
                                <h4>{{ vendor.first_name }} {{ vendor.last_name }}</h4>
                                <div class="rate-box">
                                    <span v-if="vendor.details">{{ vendor.details.total_rates }}</span>
                                    <img src="/images/icons/svg/vendor-star.svg" alt="">
                                </div>
                            </div>
                            <p v-if="vendor.details">{{ vendor.details.description }}</p>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="contacts">
                            <div class="row no-gutters" v-if="vendor.phone">
                                <div class="col-1"><img src="/images/icons/svg/phone.svg" alt=""></div>
                                <div class="col-1"></div>
                                <div class="col-10"><p>{{vendor.phone}}</p></div>
                            </div>
                            <div class="row no-gutters" v-if="vendor.details && vendor.details.email">
                                <div class="col-1"><img class="mail" src="/images/icons/svg/mail.svg" alt=""></div>
                                <div class="col-1"></div>
                                <div class="col-10"><p>{{vendor.details.email}}</p></div>
                            </div>
                            <div class="row no-gutters" v-if="vendor.details && vendor.details.address">
                                <div class="col-1"><img src="/images/icons/svg/location.svg" alt=""></div>
                                <div class="col-1"></div>
                                <div class="col-10"><p>{{vendor.details.address}}</p></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div class="vendor-products">
                <div class="head">
                    <h3>{{ vendor.first_name }}'s Products</h3>
                    <span>2,465 Product</span>
                </div>
                <div class="products" v-if="vendor.products">
                    <div class="row">
                        <div class="col-sm-4" v-for="product in vendor.products" :key="product.id">
                            <app-single-product :product="product"></app-single-product>
                        </div>
                    </div>
                </div>
            </div>

            <!-- <div class="paginator">
                <div class="overflow-auto">
                    <b-pagination-nav :link-gen="linkGen" :limit="10" :hide-goto-end-buttons="true" :number-of-pages="10" align="center" use-router>
                        <template #prev-text><span><img src="/images/icons/svg/chevron-left.svg" alt=""></span></template>
                        <template #next-text><span><img src="/images/icons/svg/chevron-right.svg" alt=""></span></template>
                    </b-pagination-nav>
                </div>
            </div> -->

            <div class="reviews">
                <div class="add-review">
                    <h4>Add your review</h4>
                    <div class="row no-gutters">
                        <div class="col-3">
                            <h6>Your review</h6>
                        </div>
                        <div class="col-9">
                            <textarea v-model="comment" class="form-control" id="review" rows="4"></textarea>
                        </div>
                    </div>
                    <div class="row no-gutters">
                        <div class="col-3 d-flex align-items-center">
                            <h6>Overall rating</h6>
                        </div>
                        <div class="col-9">
                            <client-only>
                                <star-rating 
                                    :rating="rate" 
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
                    <h4>Previous reviews</h4>

                    <template v-if="reviews && reviews.length > 0">
                        <div class="row no-gutters review" v-for="review in vendor.rating" :key="review.id">
                            <div class="col-3">
                                <client-only>
                                    <star-rating 
                                        :rating="review.rate" 
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

        </div>
    </section>
</template>

<script>
import axios from 'axios';
import SingleProduct from '~/components/Product/StoreSingleProduct'

export default {
    components: {
        appSingleProduct: SingleProduct,
    },
    data() {
        return {
            vendor: {},
            rate: 0,
            comment: "",
            reviews: [],
            loading:{
                getMoreReviews:false
            },
            hideShowMoreReviews:false,
        }
    },
    async fetch() {
        try {

            //get vendor by id
            let vendorData = await axios.get('/my/vendor/' + this.$route.params.vendorId);
            console.log('vendor data >> ', vendorData.data.data);
            this.vendor = vendorData.data.data;
            this.reviews = this.vendor.rating

        } catch(error) {
            console.log('error >> ', error);
        }
    },
    methods: {
        getMoreReviews(skip,take) {
            this.loading.getMoreReviews = true
            axios.get(`my/vendor/${this.$route.params.vendorId}/rating/skip/${skip}/take/${take}`)
            .then(res=>{
                this.loading.getMoreReviews = false
                for (let i of res.data.data) {
                    this.reviews.push(i)
                }
                if(res.data.data.length < 1) {
                    this.hideShowMoreReviews = true
                }
            }).catch(()=>{
                this.loading.getMoreReviews = false
            })
        },
      linkGen(pageNum) {
        return pageNum === 1 ? '?' : `?page=${pageNum}`
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
                    object_id: this.$route.params.vendorId,
                    object_name: 'vendor',
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