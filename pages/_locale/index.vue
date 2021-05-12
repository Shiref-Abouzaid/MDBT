<template>
  <section class="home">
    <!-- <div class="container"> -->
      <div class="intro">
        <div class="container">
          <div class="row">
            <div class="col-sm-7">
              <div class="text">
                <h1>{{ $t("home.main_header") }}</h1>
                <h3>{{ $t("home.sub_header") }}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor. </p>
              </div>
            </div>
            <div class="col-sm-5">
              <div class="video">
                <img src="/images/home-video.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="services">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="heading">
                <h2 class="main-head">{{ $t("home.sub_header") }}</h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-6 col-sm-3">
              <div class="service">
                <!-- <div class="service-content"> -->
                  <nuxt-link to="services/">
                    <div class="service-img">
                      <img src="/images/icons/svg/icon-services.svg" alt="">
                    </div>
                    <p>{{ $t("home.services") }}</p>
                  </nuxt-link>
                <!-- </div> -->
              </div>
            </div>
            <div class="col-6 col-sm-3">
              <div class="service">
                <!-- <div class="service-content"> -->
                  <nuxt-link to="buy-sell/main">
                    <div class="service-img">
                      <img src="/images/icons/svg/icon-buy.svg" alt="">
                    </div>
                    <p>{{ $t("home.buy_sell") }}</p>
                  </nuxt-link>
                <!-- </div> -->
              </div>
            </div>
            <div class="col-6 col-sm-3">
              <div class="service">
                <!-- <div class="service-content"> -->
                  <nuxt-link to="VIP">
                    <div class="service-img">
                      <img src="/images/icons/svg/icon-auction.svg" alt="">
                    </div>
                    <p>{{ $t("menu.vip") }}</p>
                  </nuxt-link>
                <!-- </div> -->
              </div>
            </div>
            <div class="col-6 col-sm-3">
              <div class="service">
                <!-- <div class="service-content"> -->
                  <nuxt-link to="LOT">
                    <div class="service-img">
                      <img src="/images/icons/svg/lot.svg" alt="">
                    </div>
                    <p>{{ $t("menu.lot") }}</p>
                  </nuxt-link>
                <!-- </div> -->
              </div>
            </div>
            <div class="col-6 col-sm-3">
              <div class="service">
                <!-- <div class="service-content"> -->
                  <nuxt-link to="companies-categories/">
                    <div class="service-img">
                      <img src="/images/icons/svg/icon-index.svg" alt="">
                    </div>
                    <p>{{ $t("home.index") }}</p>
                  </nuxt-link>
                <!-- </div> -->
              </div>
            </div>
            <div class="col-6 col-sm-3">
              <div class="service">
                <!-- <div class="service-content"> -->
                  <nuxt-link to="social">
                    <div class="service-img">
                      <img src="/images/icons/svg/icon-chat.svg" alt="">
                    </div>
                    <p>{{ $t("home.chat") }}</p>
                  </nuxt-link>
                <!-- </div> -->
              </div>
            </div>
            <div class="col-6 col-sm-3">
              <div class="service">
                <!-- <div class="service-content"> -->
                  <nuxt-link to="ideas-bank">
                    <div class="service-img">
                      <img src="/images/icons/svg/icon-ideas-bank.svg" alt="">
                    </div>
                    <p>{{ $t("home.idea_bank") }}</p>
                  </nuxt-link>
                <!-- </div> -->
              </div>
            </div>
            <div class="col-6 col-sm-3">
              <div class="service">
                <!-- <div class="service-content"> -->
                  <nuxt-link to="news/">
                    <div class="service-img">
                      <img src="/images/icons/svg/icon-news.svg" alt="">
                    </div>
                    <p>{{ $t("home.new") }}</p>
                  </nuxt-link>
                <!-- </div> -->
              </div>
            </div>
            <div class="col-6 col-sm-3">
              <div class="service">
                <!-- <div class="service-content"> -->
                  <nuxt-link to="videos">
                    <div class="service-img">
                      <img src="/images/icons/svg/icon-youtube.svg" alt="">
                    </div>
                    <p>{{ $t("menu.funnyVideos") }}</p>
                  </nuxt-link>
                <!-- </div> -->
              </div>
            </div>
            <div class="col-6 col-sm-3">
              <div class="service">
                <!-- <div class="service-content"> -->
                  <nuxt-link to="/">
                  <div class="service-img">
                    <img src="/images/icons/svg/icon-soon.svg" alt="">
                  </div>
                  <p>{{ $t("home.coming") }}</p>
                  </nuxt-link>
                <!-- </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>

        <div class="partner">
          <div class="container">
            <div class="row">
              <div class="col-sm-9">
                <h2>{{ $t("home.paragraph") }}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,.</p>
                <nuxt-link to="/"  class="btn d-block d-sm-inline-block  mb-3 m-sm-0">{{ $t("home.partner_button") }}</nuxt-link>
              </div>
              <div  class="col-sm-3 text-center">
                <img src="/images/icons/svg/icon-rocket.svg" alt="">
              </div>
            </div>
          </div>
        </div>

        <div class="vendors">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="heading">
                  <h2 class="main-head">{{ $t("home.vendors") }}</h2>
                </div>
                <app-vendor-slider></app-vendor-slider>
              </div>
            </div>
          </div>
        </div>

    <!-- </div> -->
  </section>
</template>

<script>
import VendorSlider from '~/components/Vendor/SliderVendor'

export default {
  components: {
    appVendorSlider: VendorSlider
  },
  layout: 'withoutNavbar',
}
</script>
