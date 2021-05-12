<template>
    <section class="restaurant-page">
        <div class="container">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><nuxt-link to="/">{{ $t("subnav.home") }}</nuxt-link></li>
                    <li class="breadcrumb-item"><nuxt-link :to="`/${locale}/services/`">{{ $t("subnav.service") }}</nuxt-link></li>
                    <li class="breadcrumb-item"><nuxt-link :to="{name:'locale-services-restaurants'}" >{{ $t("subnav.restaurant") }}</nuxt-link></li>
                    <!-- this will be restaurant name -->
                    <li class="breadcrumb-item active" aria-current="page">{{$route.params.restaurantName}}</li>
                </ol>
            </nav>

            <div class="row">
                <div class="col-sm-8">
                    <!-- <template v-if="restaurant.gallery && restaurant.gallery > 0"> -->
                        <app-slider-thumbnails :gallery="restaurant.gallery"></app-slider-thumbnails>
                    <!-- </template> -->

                    <div class="meals">
                        <div class="head">
                            <div class="title">
                                <h3>{{restaurant.title}}</h3>
                                <span>{{mealsCount}} {{$t("restaurant.meal")}}</span>
                            </div>
                            <nuxt-link :to="{name:'locale-services-restaurant-restaurantId-restaurantName-more-meals', params:{restaurantId:$route.params.restaurantId, restaurantName:$route.params.restaurantName}}">{{$t("restaurant.more")}}</nuxt-link>
                        </div>
                        <div class="row">
                            <div class="col-6" v-for="meal in restaurant.products" :key="meal.id">
                                <app-single-meal :product="meal"></app-single-meal>
                            </div>
                        </div>
                    </div>

                    <div class="reviews">
                        <div class="add-review">
                            <h4>{{$t("restaurant.add_review")}}</h4>
                            <div class="row no-gutters">
                                <div class="col-sm-3">
                                    <h6>{{$t("restaurant.your_review")}}</h6>
                                </div>
                                <div class="col-sm-9">
                                    <textarea v-model="comment" class="form-control" id="review" rows="4"></textarea>
                                </div>
                            </div>
                            <div class="row no-gutters">
                                <div class="col-sm-3 d-flex align-items-center">
                                    <h6>{{$t("restaurant.rating")}}</h6>
                                </div>
                                <div class="col-sm-9">
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
                                <div class="col-sm-3"></div>
                                <div class="col-sm-9">
                                    <button @click="saveComment" class="btn">{{$t("review.submit")}}</button>
                                </div>
                            </div>
                        </div>
                        <hr>
                        <div class="prev-reviews">
                            <h4>{{$t("review.previous_review")}}</h4>

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

                            <div class="more" v-if="!hideShowMoreReviews">
                                <p @click="getMoreReviews(reviews.length, 5)"><b-spinner small class="spinner-primary" v-if="loading.getMoreReviews"></b-spinner>{{$t("review.more_review")}}</p>
                            </div>

                        </div>
                    </div>

                </div>
                <div class="col-sm-4">
                    <div class="vendor-profile">
                        <!-- <h3>Restaurant Contact</h3> -->
                        <div class="info">
                            <img :src="restaurant.logo_url" alt="">
                            <div class="name">
                                <h5>{{ restaurant.title }}</h5>
                                <!-- <span>Pizza</span> -->
                                <!-- <span>{{restaurant.description}}</span> -->
                            </div>
                            <div class="rate">
                                <span>{{ restaurant.total_rates }}</span>
                                <img src="/images/icons/svg/vendor-star.svg" alt="">
                            </div>
                        </div>
                        <hr>
                        <div class="contacts">
                            <div class="row no-gutters" v-if="restaurant.phone">
                                <div class="col-1"><img src="/images/icons/svg/phone.svg" alt=""></div>
                                <div class="col-1"></div>
                                <div class="col-10"><p>{{ restaurant.phone }}</p></div>
                            </div>
                            <div class="row no-gutters" v-if="restaurant.email">
                                <div class="col-1"><img class="mail" src="/images/icons/svg/mail.svg" alt=""></div>
                                <div class="col-1"></div>
                                <div class="col-10"><p>{{ restaurant.email }}</p></div>
                            </div>
                            <div class="row no-gutters" v-if="restaurant.address">
                                <div class="col-1"><img src="/images/icons/svg/location.svg" alt=""></div>
                                <div class="col-1"></div>
                                <div class="col-10"><p>{{ restaurant.address }}</p></div>
                            </div>
                            <div class="row no-gutters" v-if="restaurant.website">
                                <div class="col-1"><img class="web" src="/images/icons/svg/world-wide-web.svg" alt=""></div>
                                <div class="col-1"></div>
                                <div class="col-10"><p>{{ restaurant.website }}</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script>
import SingleMeal from '~/components/Product/StoreSingleProduct';
import SliderThumbnails from '~/components/SliderThumbnails';
import axios from 'axios'

export default {
    components: {
        appSingleMeal: SingleMeal,
        appSliderThumbnails: SliderThumbnails
    },
    data() {
        return {
            restaurant: {},
            rate: 0,
            comment: "",
            reviews: [],
            mealsCount:0,
            loading:{
                getMoreReviews:false
            },
            hideShowMoreReviews:false
        }
    },
    computed:{
        locale() {
            return this.$store.getters['locale/locale'];
        },
    },
    async fetch() {
        let restaurantData = await axios.get('/my/restaurants/' + this.$route.params.restaurantId);
        console.log('restaurant data >> ', restaurantData.data.data);
        this.restaurant = restaurantData.data.data;
        this.reviews = this.restaurant.rates
    },
    methods: {
        //get leams count
        getMealsCount() {
            axios.get(`/my/products/store/${this.$route.params.restaurantId}/type/restaurant/count`)
            .then(res=>{
                this.mealsCount = res.data.data 
            })
        },
        //get more reviews
        getMoreReviews(skip,take) {
            this.loading.getMoreReviews = true
            axios.get(`my/restaurants/${this.$route.params.restaurantId}/rating/skip/${skip}/take/${take}`)
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
                    object_id: this.$route.params.restaurantId,
                    object_name: 'restaurant',
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
    created() {
        this.getMealsCount() 
    }
}
</script>