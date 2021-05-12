<template>
    <section class="profession-page">
        <div class="container">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><nuxt-link to="/">{{ $t("subnav.home") }}</nuxt-link></li>
                    <li class="breadcrumb-item"><nuxt-link :to="`/${locale}/services/`">{{ $t("subnav.service") }}</nuxt-link></li>
                    <li class="breadcrumb-item"><nuxt-link :to="{name:'locale-services-professions'}">{{ $t("subnav.profession") }}</nuxt-link></li>
                    <li class="breadcrumb-item active" aria-current="page">{{ $route.params.professionalName }}</li>
                </ol>
            </nav>

            <div class="row">
                <div class="col-sm-8">
                    <div class="doctor-info" v-if="tech">
                        <div class="info">
                            <div class="doctor-img">
                                <img :src="tech.image_url" alt="">
                            </div>
                            <div class="title">
                                <h4>{{ tech.first_name }} {{ tech.last_name }}</h4>
                                <span>{{ tech.category }}</span>
                            </div>
                            <div class="rate">
                                <div class="rate-box">
                                    <span>{{ tech.total_rates }}</span>
                                    <img src="/images/icons/svg/vendor-star.svg" alt="">
                                </div>
                            </div>
                        </div>
                        <p>{{ tech.description }}</p>
                    </div>
                    <div class="clinic" v-for="workshop in tech.workshops" :key="workshop.id">
                        <h3>{{ workshop.title }}</h3>
                        <div class="clinic-contacts">
                            <div class="contacts">
                                <div class="row">
                                    <div class="col-sm-6" v-if="workshop.phone">
                                        <div class="contact">
                                            <img src="/images/icons/svg/phone.svg" alt="">
                                            <p>{{workshop.phone}}</p>
                                        </div>
                                    </div>
                                    <div class="col-sm-6" v-if="workshop.email">
                                        <div class="contact">
                                            <img class="mail" src="/images/icons/svg/mail.svg" alt="">
                                            <p>{{workshop.email}}</p>
                                        </div>
                                    </div>
                                    <div class="col-sm-6" v-if="workshop.address">
                                        <div class="contact">
                                            <img src="/images/icons/svg/location.svg" alt="">
                                            <p class="location">{{workshop.address}}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="appointments">
                            <div class="swiper arrow-secondary" v-swiper="swiperOption" :instance-name="'mySwiper' + workshop">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide" v-if="workshop.saturday">
                                            <div class="appointment">
                                                <div class="info">
                                                    <p class="day">{{$t("days.saturday")}}</p>
                                                    <p class="time">{{workshop.open_from}} - {{workshop.open_to}}</p>
                                                    <!-- <p class="price">{{workshop.regular_price}} <span>EGP</span></p> -->
                                                </div>
                                                <div class="book" @click="onBook(workshop.id, 6)">
                                                   {{$t("professions.book_button")}}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide" v-if="workshop.sunday">
                                            <div class="appointment">
                                                <div class="info">
                                                    <p class="day">{{$t("days.sunday")}}</p>
                                                    <p class="time">{{workshop.open_from}} - {{workshop.open_to}}</p>
                                                    <!-- <p class="price">{{workshop.regular_price}} <span>EGP</span></p> -->
                                                </div>
                                                <div class="book" @click="onBook(workshop.id, 0)">
                                                    {{$t("professions.book_button")}}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide" v-if="workshop.monday">
                                            <div class="appointment">
                                                <div class="info">
                                                    <p class="day">{{$t("days.monday")}}</p>
                                                    <p class="time">{{workshop.open_from}} - {{workshop.open_to}}</p>
                                                    <!-- <p class="price">{{workshop.regular_price}} <span>EGP</span></p> -->
                                                </div>
                                                <div class="book" @click="onBook(workshop.id, 1)">
                                                    {{$t("professions.book_button")}}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide" v-if="workshop.tuesday">
                                            <div class="appointment">
                                                <div class="info">
                                                    <p class="day">{{$t("days.tuesday")}}</p>
                                                    <p class="time">{{workshop.open_from}} - {{workshop.open_to}}</p>
                                                    <!-- <p class="price">{{workshop.regular_price}} <span>EGP</span></p> -->
                                                </div>
                                                <div class="book" @click="onBook(workshop.id, 2)">
                                                    {{$t("professions.book_button")}}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide" v-if="workshop.wednesday">
                                            <div class="appointment">
                                                <div class="info">
                                                    <p class="day">{{$t("days.wednesday")}}</p>
                                                    <p class="time">{{workshop.open_from}} - {{workshop.open_to}}</p>
                                                    <!-- <p class="price">{{workshop.regular_price}} <span>EGP</span></p> -->
                                                </div>
                                                <div class="book" @click="onBook(workshop.id, 3)">
                                                    {{$t("professions.book_button")}}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide" v-if="workshop.thursday">
                                            <div class="appointment">
                                                <div class="info">
                                                    <p class="day">{{$t("days.thursday")}}</p>
                                                    <p class="time">{{workshop.open_from}} - {{workshop.open_to}}</p>
                                                    <!-- <p class="price">{{workshop.regular_price}} <span>EGP</span></p> -->
                                                </div>
                                                <div class="book" @click="onBook(workshop.id, 4)">
                                                    {{$t("professions.book_button")}}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide" v-if="workshop.friday">
                                            <div class="appointment">
                                                <div class="info">
                                                    <p class="day">{{$t("days.friday")}}</p>
                                                    <p class="time">{{workshop.open_from}} - {{workshop.open_to}}</p>
                                                    <!-- <p class="price">{{workshop.regular_price}} <span>EGP</span></p> -->
                                                </div>
                                                <div class="book" @click="onBook(workshop.id, 5)">
                                                    {{$t("professions.book_button")}}
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
                                    <button @click="saveComment" class="btn">{{$t("professions.submit")}}</button>
                                </div>
                            </div>
                        </div>
                        <hr>
                        <div class="prev-reviews">
                            <h4>{{$t("professions.previous_review")}}</h4>

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
                                <p @click="getMoreReviews(reviews.length, 5)"><b-spinner small class="spinner-primary" v-if="loading.getMoreReviews"></b-spinner> {{$t("professions.more_review")}}</p>
                            </div>

                        </div>
                    </div>

                </div>
                <div class="col-sm-4">
                    <div class="doctor-contacts">
                        <div class="contacts">
                            <div class="row no-gutters" v-if="tech.phone">
                                <div class="col-1"><img src="/images/icons/svg/phone.svg" alt=""></div>
                                <div class="col-1"></div>
                                <div class="col-10"><p>{{ tech.phone }}</p></div>
                            </div>
                            <div class="row no-gutters" v-if="tech.email">
                                <div class="col-1"><img class="mail" src="/images/icons/svg/mail.svg" alt=""></div>
                                <div class="col-1"></div>
                                <div class="col-10"><p>{{ tech.email }}</p></div>
                            </div>
                            <div class="row no-gutters" v-if="tech.address">
                                <div class="col-1"><img src="/images/icons/svg/location.svg" alt=""></div>
                                <div class="col-1"></div>
                                <div class="col-10"><p>{{ tech.address }}</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <b-modal id="book-date" centered :hide-header="true" :hide-footer="true" title="Choose date">
                <div class="calendar-book">
                    <b-calendar v-model="reserveDate" :date-disabled-fn="dateDisabled" block locale="en-US"></b-calendar>
                    <div class="select-btn">
                        <button class="btn" @click="onConfirm">{{$t("professions.select_date")}}</button>
                    </div>
                </div>
            </b-modal>

        </div>
    </section>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            tech: {},
            rate: 0,
            comment: "",
            reviews: [],
            loading:{
                getMoreReviews:false
            },
            hideShowMoreReviews:false,
            reserveDate: null,
            workshopId: null,
            professionId: null,

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
        },
        locale() {
            return this.$store.getters['locale/locale'];
        },
    },
    async fetch() {
        let professionData = await axios.get('my/technicians/' + this.$route.params.professionalId);
        console.log('profession >> ', professionData.data.data);
        this.tech = professionData.data.data;
        this.reviews = this.tech.rate
    },
    methods: {
        getMoreReviews(skip,take) {
            this.loading.getMoreReviews = true
            axios.get(`my/technicians/${this.$route.params.professionalId}/rating/skip/${skip}/take/${take}`)
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
        dateDisabled(ymd, date) {
        // Disable weekends (Sunday = `0`, Saturday = `6`) and
        // disable days that fall on the 13th of the month
        const weekday = date.getDay();
        const day = date.getDate();
        //  console.log('test dat >> ', weekday);
        // Return `true` if the date should be disabled
        return weekday !== this.weekday;

        // return this.testDay !== 0;
        },
        onConfirm() {
        console.log("confirm", this.reserveDate);
        if (this.reserveDate == null)
            //if the user doesn't picked a date, return
            return;

        let userId = this.$store.getters['auth/userId'];
        let reservation = {
            user_id: userId,
            datetime: this.reserveDate,
            technician_id: this.tech.id,
            workshop_id: this.professionId
        };
        console.log("rese >> ", reservation);
        axios
            .post("/tech-appointments", reservation)
            .then(res => {
            console.log("res >> ", res);
            })
            .catch(err => {
            console.log(err);
            });
        this.$bvModal.hide("book-date");

        this.reserveDate = null; //make it null after successful reservation
        },
        onBook(professionId, activeDay) {
            if(this.$store.getters['auth/isAuthenticated']) {
            this.$bvModal.show("book-date");
            this.professionId = professionId;
            console.log(professionId);
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
            console.log('user >> ', userData.data.data)

            let review = {
                rate: this.rate,
                created_at: new Date().toDateString(),
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
                    object_id: this.$route.params.professionalId,
                    object_name: 'technician',
                    comment: this.comment
                }
                axios.post('/rates', rateObj).then(res => {
                console.log(res);
                this.rate = 0;
                this.comment = "";
                this.showComment = false;
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

