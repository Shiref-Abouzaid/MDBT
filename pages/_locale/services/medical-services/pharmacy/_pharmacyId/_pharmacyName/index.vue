<template>
    <section class="pharmacy-page">
        <div class="container">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><nuxt-link to="/">{{ $t("subnav.home") }}</nuxt-link></li>
                    <li class="breadcrumb-item"><nuxt-link to="/">{{ $t("subnav.service") }}</nuxt-link></li>
                    <li class="breadcrumb-item"><nuxt-link to="/">{{ $t("subnav.medical") }}</nuxt-link></li>
                    <li class="breadcrumb-item"><nuxt-link to="/">{{ $t("subnav.pharmacy") }}</nuxt-link></li>
                    <li class="breadcrumb-item active" aria-current="page">{{ $route.params.pharmacyName }}</li>
                </ol>
            </nav>

            <div class="vendor-info">
                <div class="cover">
                    <img class="cover-img" :src="pharmacy.cover_image_url ? pharmacy.cover_image_url : '/images/background-placeholder.png' " alt="">
                    <img :src="pharmacy.logo_url ? pharmacy.logo_url : '/images/placeholder.jpg'" alt="" class="personal-img">
                </div>

                <div class="row">
                    <div class="col-9">
                        <div class="info">
                            <div class="head">
                                <h4>{{pharmacy.title}}</h4>
                                <div class="rate-box">
                                    <span>{{pharmacy.total_rates}}</span>
                                    <img src="/images/icons/svg/vendor-star.svg" alt="">
                                </div>
                            </div>
                            <p>{{ pharmacy.description }}</p>
                        </div>

                        <app-medical-thumbnails :gallery="pharmacy.gallery"></app-medical-thumbnails>

                    </div>
                    <div class="col-3">
                        <div class="contacts">
                            <div class="row no-gutters" v-if="pharmacy.phone">
                                <div class="col-1"><img src="/images/icons/svg/phone.svg" alt=""></div>
                                <div class="col-1"></div>
                                <div class="col-10"><p>{{pharmacy.phone}}</p></div>
                            </div>
                            <div class="row no-gutters" v-if="pharmacy.email">
                                <div class="col-1"><img class="mail" src="/images/icons/svg/mail.svg" alt=""></div>
                                <div class="col-1"></div>
                                <div class="col-10"><p>{{pharmacy.email}}</p></div>
                            </div>
                            <div class="row no-gutters" v-if="pharmacy.address">
                                <div class="col-1"><img src="/images/icons/svg/location.svg" alt=""></div>
                                <div class="col-1"></div>
                                <div class="col-10"><p>{{pharmacy.address}}</p></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div class="vendor-products">
                <div class="head">
                    <h3>{{pharmacy.title}}'s Medicins</h3>
                    <span>0 {{ $t("vendor_profile.products") }}</span>
                    <nuxt-link class="see-more" :to="{name:'locale-services-medical-services-pharmacy-pharmacyId-pharmacyName-more-medicins', params:{pharmacyId:$route.params.pharmacyId, pharmacyName:$route.params.pharmacyName}}">{{ $t("store.more") }}</nuxt-link>
                </div>
                <div class="products">
                    <div class="row">
                        <div class="col-sm-4" v-for="product in products" :key="product.id">
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
                        <div class="row no-gutters review" v-for="review in reviews" :key="review.id">
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

                    <div class="more" v-if="!hideShowMoreReviews && reviews.length > 4">
                        <p @click="getMoreReviews(reviews.length, 5)"><b-spinner small class="spinner-primary" v-if="loading.getMoreReviews"></b-spinner> See more reviews</p>
                    </div>

                </div>
            </div>

        </div>
    </section>
</template>

<script>
import axios from 'axios'
import SingleProduct from '~/components/Product/StoreSingleProduct';
import MedicalThumbnails from '~/components/MedicalThumbnails';

export default {
    components: {
        appSingleProduct: SingleProduct,
        appMedicalThumbnails: MedicalThumbnails
    },
    data() {
        return {
            pharmacy: {},
            products: [],
            rate: 0,
            comment: "",
            reviews: [],
            loading:{
                getMoreReviews:false,
            },
            hideShowMoreReviews:false,
            reserveDate: null,
            clinicId: null,
        }
    },
    computed: {
      
        currSymbol() {
            return this.$store.getters['currency/symbol']
        }
    },
    async fetch() {
        try {
            let pharmacyData = await axios.get('/my/pharmacy/' + this.$route.params.pharmacyId);
            console.log('pharmacy >> ', pharmacyData.data.data);
            this.pharmacy = pharmacyData.data.data.pharmacy;
            this.reviews = pharmacyData.data.data.rates;
            this.products = pharmacyData.data.data.products;
        } catch (error) {
            console.log('error >> ', error)
        }
    },
    mounted() {
        console.log(this.$route)
    },
    methods: {
        getMoreReviews(skip,take) {
            this.loading.getMoreReviews = true
  
            axios.get(`my/rates/type/pharmacy/object-id/${this.$route.params.pharmacyId}/skip/${skip}/take/${take}`)
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
                    object_id: this.$route.params.pharmacyId,
                    object_name: 'pharmacy',
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
    },
    watch: {
        currSymbol(oldSymbol, newSymbol) {
            console.log('symbol >> ', oldSymbol, newSymbol);
            this.$fetch();
        }
    }
}
</script>