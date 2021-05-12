<template>
    <section class="single-job-page">
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
                    <!-- <app-slider-thumbnails :gallery="item.gallery"></app-slider-thumbnails> -->

                    <div class="details">
                        <div class="head">
                            <h3>{{job.title}}</h3>
                            <!-- <p class="price">{{currSymbol}}{{item.price}}</p> -->
                        </div>
                        <div class="desc">
                            <div class="title">
                                <h6>Employment Type</h6>
                                <p>{{job.type}}</p>
                            </div>
                            <div class="title">
                                <h6>Location</h6>
                                <p>Cairo, Egypt</p>
                            </div>
                            <div class="job-desc">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae debitis suscipit alias? Libero reprehenderit eos quisquam quos animi possimus deleniti provident doloribus exercitationem eveniet. Nihil hic consectetur recusandae a molestiae.</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="col-sm-4">
                    <div class="vendor-profile" v-if="job.recruiter">
                        <!-- <h3>Vendor Profile</h3> -->
                        <div class="info">
                            <!-- <img :src="item.seller.image_url ? item.seller.image_url : '/images/placeholder.jpg'" alt=""> -->
                            <div class="name">
                                <h5>Ali mohamed</h5>
                                <!-- <span>2,465 {{ $t("buyandsell.product") }}</span> -->
                            </div>
                            <!-- <div class="rate">
                                <span>5.0</span>
                                <img src="/images/icons/svg/vendor-star.svg" alt="">
                            </div> -->
                        </div>
                        <hr>
                        <div class="contacts">
                            <div class="row no-gutters">
                                <div class="col-1"><img src="/images/icons/svg/phone.svg" alt=""></div>
                                <div class="col-1"></div>
                                <div class="col-10"><p>{{job.mobile}}</p></div>
                            </div>
                            <div class="row no-gutters">
                                <div class="col-1"><img class="mail" src="/images/icons/svg/mail.svg" alt=""></div>
                                <div class="col-1"></div>
                                <div class="col-10"><p>{{job.email}}</p></div>
                            </div>
                            <!-- <div class="row no-gutters">
                                <div class="col-1"><img src="/images/icons/svg/location.svg" alt=""></div>
                                <div class="col-1"></div>
                                <div class="col-10"><p>Address</p></div>
                            </div> -->
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
            job: {}
        }
    },
    computed: {
        currSymbol() {
            return this.$store.getters["currency/symbol"];
        }
    },
    async fetch() {
        let jobData = await axios.get('/my/jobs/' + this.$route.params.jobId);
        console.log('job >> ', jobData.data.data);
        this.job = jobData.data.data;
    }
}
</script>