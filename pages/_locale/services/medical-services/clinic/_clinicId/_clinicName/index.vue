<template>
    <section class="clinic-page">
        <div class="container">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><nuxt-link to="/">{{ $t("subnav.home") }}</nuxt-link></li>
                    <li class="breadcrumb-item"><nuxt-link :to="{name:'locale-services'}">{{ $t("subnav.service") }}</nuxt-link></li>
                    <li class="breadcrumb-item"><nuxt-link :to="{name:'locale-services-medical-services'}">{{ $t("subnav.medical") }}</nuxt-link></li>
                    <li class="breadcrumb-item"><nuxt-link :to="{name:'locale-services-medical-services-clinics'}">{{ $t("medical_service.clinics") }}</nuxt-link></li>
                    <li class="breadcrumb-item active" aria-current="page">{{ $route.params.clinicName }}</li>
                </ol>
            </nav>

            <div class="row">
                <div class="col-sm-8">
                    <div class="vendor-info">
                        <div class="cover">
                            <img class="cover-img" :src="clinic.cover_image_url ? clinic.cover_image_url : '/images/background-placeholder.png'" alt="">
                            <img :src="clinic.logo_url ? clinic.logo_url : '/images/placeholder.jpg'" alt="" class="personal-img">
                        </div>

                        <!-- <div class="row">
                            <div class="col-9"> -->
                                <div class="info">
                                    <div class="head">
                                        <h4>{{clinic.title}}</h4>
                                        <div class="rate-box">
                                            <span>{{clinic.total_rates}}</span>
                                            <img src="/images/icons/svg/vendor-star.svg" alt="">
                                        </div>
                                    </div>
                                    <p>{{ clinic.description }}</p>
                                </div>

                                <app-medical-thumbnails :gallery="clinic.gallery"></app-medical-thumbnails>

                            <!-- </div> -->
                            <!-- <div class="col-3">

                            </div> -->
                        <!-- </div> -->

                    </div>

                    <div class="clinic">
                        <div class="head">
                            <h3>{{ clinic.title }}</h3>
                            <!-- <nuxt-link to="/">See Profile</nuxt-link> -->
                        </div>

                        <div class="appointments">
                            <div class="swiper arrow-secondary" v-swiper="swiperOption" :instance-name="'mySwiper'">
                                <div class="swiper-wrapper">

                                    <div class="swiper-slide" v-if="clinic.saturday">
                                        <div class="appointment">
                                            <div class="info">
                                                <p class="day">Saturday</p>
                                                <p class="time">{{clinic.open_at}} - {{clinic.closing_at}}</p>
                                                <p class="price">{{currSymbol}}{{clinic.regular_price}}</p>
                                            </div>
                                            <div class="book" @click="onBook(clinic.id, 6)">
                                                Book Now
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide" v-if="clinic.sunday">
                                        <div class="appointment">
                                            <div class="info">
                                                <p class="day">Sunday</p>
                                                <p class="time">{{clinic.open_at}} - {{clinic.closing_at}}</p>
                                                <p class="price">{{currSymbol}}{{clinic.regular_price}}</p>
                                            </div>
                                            <div class="book" @click="onBook(clinic.id, 0)">
                                                Book Now
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide" v-if="clinic.monday">
                                        <div class="appointment">
                                            <div class="info">
                                                <p class="day">Monday</p>
                                                <p class="time">{{clinic.open_at}} - {{clinic.closing_at}}</p>
                                                <p class="price">{{currSymbol}}{{clinic.regular_price}}</p>
                                            </div>
                                            <div class="book" @click="onBook(clinic.id, 1)">
                                                Book Now
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide" v-if="clinic.tuesday">
                                        <div class="appointment">
                                            <div class="info">
                                                <p class="day">Tuesday</p>
                                                <p class="time">{{clinic.open_at}} - {{clinic.closing_at}}</p>
                                                <p class="price">{{currSymbol}}{{clinic.regular_price}}</p>
                                            </div>
                                            <div class="book" @click="onBook(clinic.id, 2)">
                                                Book Now
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide" v-if="clinic.wednesday">
                                        <div class="appointment">
                                            <div class="info">
                                                <p class="day">Wednesday</p>
                                                <p class="time">{{clinic.open_at}} - {{clinic.closing_at}}</p>
                                                <p class="price">{{currSymbol}}{{clinic.regular_price}}</p>
                                            </div>
                                            <div class="book" @click="onBook(clinic.id, 3)">
                                                Book Now
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide" v-if="clinic.thursday">
                                        <div class="appointment">
                                            <div class="info">
                                                <p class="day">Thursday</p>
                                                <p class="time">{{clinic.open_at}} - {{clinic.closing_at}}</p>
                                                <p class="price">{{currSymbol}}{{clinic.regular_price}}</p>
                                            </div>
                                            <div class="book" @click="onBook(clinic.id, 4)">
                                                Book Now
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide" v-if="clinic.friday">
                                        <div class="appointment">
                                            <div class="info">
                                                <p class="day">Friday</p>
                                                <p class="time">{{clinic.open_at}} - {{clinic.closing_at}}</p>
                                                <p class="price">{{currSymbol}}{{clinic.regular_price}}</p>
                                            </div>
                                            <div class="book" @click="onBook(clinic.id, 5)">
                                                Book Now
                                            </div>
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

                    <!-- <div class="vendor-products">
                        <div class="head">
                            <h3>Tom's {{ $t("vendor_profile.product") }}</h3>
                            <span>2,465 {{ $t("vendor_profile.products") }}</span>
                        </div>
                        <div class="products">
                            <div class="row">
                                <div class="col-sm-4" v-for="product in 9" :key="product">
                                    <app-single-product></app-single-product>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="paginator">
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

                            <div class="more" v-if="!hideShowMoreReviews">
                                <p @click="getMoreReviews(reviews.length, 5)"><b-spinner small class="spinner-primary" v-if="loading.getMoreReviews"></b-spinner> See more reviews</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="pharm-contacts">
                        <div class="contacts" v-if="clinic.phone">
                            <div class="row no-gutters">
                                <div class="col-1"><img src="/images/icons/svg/phone.svg" alt=""></div>
                                <div class="col-1"></div>
                                <div class="col-10"><p>{{clinic.phone}}</p></div>
                            </div>
                            <div class="row no-gutters" v-if="clinic.email">
                                <div class="col-1"><img class="mail" src="/images/icons/svg/mail.svg" alt=""></div>
                                <div class="col-1"></div>
                                <div class="col-10"><p>{{clinic.email}}</p></div>
                            </div>
                            <div class="row no-gutters" v-if="clinic.address">
                                <div class="col-1"><img src="/images/icons/svg/location.svg" alt=""></div>
                                <div class="col-1"></div>
                                <div class="col-10"><p>{{clinic.address}}</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <b-modal id="book-date" centered :hide-header="true" :hide-footer="true" title="Choose date">
                <div class="calendar-book">
                    <b-calendar v-model="reserveDate" :date-disabled-fn="dateDisabled" block locale="en-US"></b-calendar>
                    <div class="select-btn">
                        <button class="btn" @click="onConfirm">Select Date</button>
                    </div>
                </div>
            </b-modal>

        </div>
    </section>
</template>

<script>
import axios from 'axios'
// import SingleProduct from '~/components/Product/StoreSingleProduct';
import MedicalThumbnails from '~/components/MedicalThumbnails';

export default {
    components: {
        // appSingleProduct: SingleProduct,
        appMedicalThumbnails: MedicalThumbnails
    },
    data() {
        return {
            clinic: {},
            rate: 0,
            comment: "",
            reviews: [],
            loading:{
                getMoreReviews:false,
            },
            hideShowMoreReviews:false,
            reserveDate: null,
            clinicId: null,

            swiperOption: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                    // initialSlide: 1
                    // centeredSlides: true,
                    // loop: true,
                    // loopedSlides: 54,
                    navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                    }
                    // pagination: {
                    //   el: ".swiper-pagination",
                    //   clickable: true
                    // }
            }
        }
    },
    computed: {
        currSymbol() {
            return this.$store.getters['currency/symbol']
        }
    },
    async fetch() {
        try {
            let clinicData = await axios.get('/my/clinic/' + this.$route.params.clinicId);
            console.log('clinic >> ', clinicData.data.data);
            this.clinic = clinicData.data.data;
            this.reviews = this.clinic.rates
        } catch (error) {
            console.log('error >> ', error);
        }
    },
    methods: {
        //get more reviews
        getMoreReviews(skip,take) {
            this.loading.getMoreReviews = true
  
            axios.get(`my/rates/type/clinic/object-id/${this.$route.params.clinicId}/skip/${skip}/take/${take}`)
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
        dateDisabled(ymd, date) {
            // Disable weekends (Sunday = `0`, Saturday = `6`) and
            // disable days that fall on the 13th of the month
            const weekday = date.getDay()
            const day = date.getDate()
            //  console.log('test dat >> ', weekday);
            // Return `true` if the date should be disabled
            return weekday !== this.weekday
        
            // return this.testDay !== 0;
        },
        onConfirm() {
            console.log('confirm', this.reserveDate);
            if(this.reserveDate == null) //if the user doesn't picked a date, return
                return;

            let userId = this.$store.getters['auth/userId'];
            let reservation = {
                user_id: userId,
                datetime: this.reserveDate,
                doctor_id: this.clinic.id,
                clinic_id: this.clinicId
            }
            console.log('rese >> ', reservation);
                axios.post('https://appointments.tbdm.net/v1/appointments', reservation).then(res => {
                    console.log('res >> ', res);
                })
                .catch(err => {
                    console.log(err);
                })
            this.$bvModal.hide('book-date');

            this.reserveDate = null; //make it null after successful reservation
        },
        onBook(clinicId, activeDay) {
            if(this.$store.getters['auth/isAuthenticated']) {
                this.$bvModal.show('book-date');
                this.clinicId = clinicId;
                console.log(clinicId);
                // this.reserveDate = new Date();
                this.weekday = activeDay;
            } else {
                // this.$router.push('/login');
                this.$bvModal.show('popup-login');
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
                    object_id: this.$route.params.clinicId,
                    object_name: 'clinic',
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