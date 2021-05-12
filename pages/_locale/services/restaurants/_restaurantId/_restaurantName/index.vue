<template>
    <section class="restaurant-page">
        <div class="container">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><nuxt-link to="/">{{ $t("subnav.home") }}</nuxt-link></li>
                    <li class="breadcrumb-item"><nuxt-link :to="{name:'locale-services'}">{{ $t("subnav.service") }}</nuxt-link></li>
                    <li class="breadcrumb-item"><nuxt-link to="/">{{ $t("subnav.restaurant") }}</nuxt-link></li>
                    <!-- this will be restaurant name -->
                    <li class="breadcrumb-item active" aria-current="page">{{ $t("subnav.rest") }}</li>
                </ol>
            </nav>

            <div class="row">
                <div class="col-sm-8">

                    <app-slider-thumbnails></app-slider-thumbnails>

                    <div class="meals">
                        <div class="head">
                            <div class="title">
                                <h3>Pizza Hut Meals</h3>
                                <span>2,465 {{ $t("restaurant.meal") }}</span>
                            </div>
                            <nuxt-link to="/">{{ $t("restaurant.more") }}</nuxt-link>
                        </div>
                        <div class="row">
                            <div class="col-6" v-for="meal in 4" :key="meal">
                                <app-single-meal></app-single-meal>
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
                                    <textarea class="form-control" id="review" rows="4"></textarea>
                                </div>
                            </div>
                            <div class="row no-gutters">
                                <div class="col-3 d-flex align-items-center">
                                    <h6>{{ $t("review.rating") }}</h6>
                                </div>
                                <div class="col-9">
                                    <client-only>
                                        <star-rating 
                                            :rating="3.5" 
                                            :increment=".5"
                                            active-color="#FFD506" 
                                            :show-rating="false" 
                                            :star-size="20"
                                            :padding=".9">
                                        </star-rating>
                                    </client-only>
                                </div>
                            </div>
                            <div class="row no-gutters">
                                <div class="col-3"></div>
                                <div class="col-9">
                                    <button class="btn">{{ $t("review.submit") }}</button>
                                </div>
                            </div>
                        </div>
                        <hr>
                        <div class="prev-reviews">
                            <h4>{{ $t("review.previous_review") }}</h4>
                            <div class="row no-gutters review">
                                <div class="col-3">
                                    <client-only>
                                        <star-rating 
                                            :rating="3.5" 
                                            :increment=".5"
                                            :read-only="true" 
                                            active-color="#FFD506" 
                                            :show-rating="false" 
                                            :star-size="20"
                                            :padding=".9">
                                        </star-rating>
                                    </client-only>
                                    <h6>Pablo Permins</h6>
                                    <span class="time">one hour ago</span>
                                </div>
                                <div class="col-9">
                                    <div class="comment">
                                        <p>Got this through the post the other day and right from opening the packet I knew this was quality, put it on and I was right!! Well done</p>
                                        <div class="icons">
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
                                            <!-- <div class="more">
                                                <p>See more reviews</p>
                                            </div> -->
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row no-gutters review">
                                <div class="col-3">
                                    <client-only>
                                        <star-rating 
                                            :rating="3.5" 
                                            :increment=".5"
                                            :read-only="true" 
                                            active-color="#FFD506" 
                                            :show-rating="false" 
                                            :star-size="20"
                                            :padding=".9">
                                        </star-rating>
                                    </client-only>
                                    <h6>Pablo Permins</h6>
                                    <span class="time">one hour ago</span>
                                </div>
                                <div class="col-9">
                                    <div class="comment">
                                        <p>Got this through the post the other day and right from opening the packet I knew this was quality, put it on and I was right!! Well done</p>
                                        <div class="icons">
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
                                            <!-- <div class="more">
                                                <p>See more reviews</p>
                                            </div> -->
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="more">
                                <p>{{ $t("review.more_review") }}</p>
                            </div>

                        </div>
                    </div>

                </div>
                <div class="col-sm-4">
                    <div class="vendor-profile">
                        <!-- <h3>Restaurant Contact</h3> -->
                        <div class="info">
                            <img src="/images/vendor.png" alt="">
                            <div class="name">
                                <h5>Tom Hanks</h5>
                                <span>Pizza</span>
                            </div>
                            <div class="rate">
                                <span>5.0</span>
                                <img src="/images/icons/svg/vendor-star.svg" alt="">
                            </div>
                        </div>
                        <hr>
                        <div class="contacts">
                            <div class="row no-gutters">
                                <div class="col-1"><img src="/images/icons/svg/phone.svg" alt=""></div>
                                <div class="col-1"></div>
                                <div class="col-10"><p>414-4645-5416</p></div>
                            </div>
                            <div class="row no-gutters">
                                <div class="col-1"><img class="mail" src="/images/icons/svg/mail.svg" alt=""></div>
                                <div class="col-1"></div>
                                <div class="col-10"><p>info@tbdm.net</p></div>
                            </div>
                            <div class="row no-gutters">
                                <div class="col-1"><img src="/images/icons/svg/location.svg" alt=""></div>
                                <div class="col-1"></div>
                                <div class="col-10"><p>New Cairo, Egypt</p></div>
                            </div>
                            <div class="row no-gutters">
                                <div class="col-1"><img class="web" src="/images/icons/svg/world-wide-web.svg" alt=""></div>
                                <div class="col-1"></div>
                                <div class="col-10"><p>www.tbdm.net</p></div>
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

export default {
    components: {
        appSingleMeal: SingleMeal,
        appSliderThumbnails: SliderThumbnails
    },
}
</script>