<template>
    <section class="course-page">
        <div class="container">

            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><nuxt-link to="/">{{ $t("subnav.home") }}</nuxt-link></li>
                    <li class="breadcrumb-item"><nuxt-link to="/">{{ $t("subnav.buysell") }}</nuxt-link></li>
                    <li class="breadcrumb-item"><nuxt-link to="/">{{ $t("subnav.catename") }}</nuxt-link></li>
                    <li class="breadcrumb-item active" aria-current="page">{{ $t("subnav.apple") }}</li>
                </ol>
            </nav>

            <div class="row">
                <div class="col-sm-8">
                    <!-- <app-slider-thumbnails :gallery="company.gallery"></app-slider-thumbnails> -->

                    <div class="details">
                        <div class="head">
                            <h3>About Title</h3>
                            <!-- <p class="price">$20.00</p> -->
                        </div>
                        <div class="desc">
                            <p>Description</p>
                        </div>
                    </div>

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

                            <!-- <div class="more">
                                <p>See more reviews</p>
                            </div> -->

                        </div>
                    </div>

                </div>
                <div class="col-sm-4">
                    <div class="vendor-profile">
                        <!-- <h3>Vendor Profile</h3> -->
                        <div class="info">
                            <img src="/images/placeholder.jpg" alt="">
                            <div class="name">
                                <h5>Title</h5>
                                <!-- <span>2,465 {{ $t("buyandsell.product") }}</span> -->
                            </div>
                            <div class="rate">
                                <span>5</span>
                                <img src="/images/icons/svg/vendor-star.svg" alt="">
                            </div>
                        </div>
                        <hr>
                        <div class="contacts">
                            <div class="row no-gutters">
                                <div class="col-1"><img src="/images/icons/svg/phone.svg" alt=""></div>
                                <div class="col-1"></div>
                                <div class="col-10"><p>Phone</p></div>
                            </div>
                            <div class="row no-gutters">
                                <div class="col-1"><img class="mail" src="/images/icons/svg/mail.svg" alt=""></div>
                                <div class="col-1"></div>
                                <div class="col-10"><p>Email</p></div>
                            </div>
                            <div class="row no-gutters">
                                <div class="col-1"><img src="/images/icons/svg/location.svg" alt=""></div>
                                <div class="col-1"></div>
                                <div class="col-10"><p>Address</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script>
import axios from 'axios'
import SliderThumbnails from '~/components/SliderThumbnails'

export default {
    components: {
        appSliderThumbnails: SliderThumbnails
    },
    data() {
        return {
            rate: 0,
            comment: "",
            reviews: [],
            company: {}
        }
    },
    async fetch() {
        let companyData = await axios.get('my/index/catalogue/' + this.$route.params.companyId) //this.$route.params.companyId
        this.company = companyData.data.data.catalogue
        this.reviews = companyData.data.data.rates
        console.log('company >> ', companyData.data.data);
    },
    methods: {
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
                    object_id: this.$route.params.companyId,
                    object_name: 'catalogue',
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