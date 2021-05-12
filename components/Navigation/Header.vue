<template>
    <section class="header">
        <div class="container">
            <div class="elements flex-wrap flex-sm-nowrap">

                <div class="social-nav-bar p-0">
                    <div class="sidebar-btn d-sm-none">
                        <b-button variant="default" v-b-toggle.sidebar >
                            <img src="/images/icons/svg/social-sidebar-cols.svg">
                        </b-button>
                    </div>
                    <!--side bar-->
                    <div class="social-side-bar d-sm-none">
                        <b-sidebar backdrop id="sidebar"  shadow>
                        <template #title>
                            <span>{{ $t("menu.menu_head") }}</span>
                        </template>
                        <b-row>
                            <b-col cols="6" class="text-center pb-3">
                                <span class="currency d-sm-none color-secondary" id="curr-menu-mobile" tabindex="0">
                                    <span class="symbol font-weight-bold">{{currSymbol}}</span>
                                    <span>{{currCode}}</span>
                                </span>
                            </b-col>
                            <b-col cols="6" class="text-center pb-3">
                                <span class="lang d-sm-none color-secondary" id="lang-menu-mobile" tabindex="0">
                                    <img src="/images/icons/svg/header-lang.svg" alt="">
                                    <span>{{ $t("navbar.lang") }}</span>
                                </span>
                            </b-col>
                        </b-row>
                        <div>
                            <b-button v-b-toggle.collapse-1 variant="default" class="no-shadow d-flex collapse-header w-100">
                                <b-img src="/images/icons/svg/social-sidebar-services.svg" class="icon" alt="icon"/>
                                <span>{{ $t("menu.services") }}</span>
                                <b-img src="/images/icons/svg/social-sidebar-arrow-right.svg" class="arrow" alt="icon"/>
                            </b-button>
                            <b-collapse id="collapse-1">
                                <div class="single-dropdown">
                                    <nuxt-link to="/">
                                        <b-img src="/images/icons/svg/social-sidebar-fast-delivery.svg" alt="icon"/>
                                        <span>{{ $t("menu.store") }}</span>
                                    </nuxt-link>
                                </div>
                                <div class="single-dropdown">
                                    <nuxt-link to="/">
                                        <b-img src="/images/icons/svg/social-sidebar-pizza.svg" alt="icon"/>
                                        <span>{{ $t("menu.restaurant") }}</span>
                                    </nuxt-link>
                                </div>
                                <div class="single-dropdown">
                                    <nuxt-link to="/">
                                        <b-img src="/images/icons/svg/social-sidebar-dog-house.svg" alt="icon"/>
                                        <span>{{ $t("menu.real_state") }}</span>
                                    </nuxt-link>
                                </div>
                                <div class="single-dropdown">
                                    <nuxt-link to="/">
                                        <b-img src="/images/icons/svg/social-sidebar-car-key.svg" alt="icon"/>
                                        <span>{{ $t("menu.rental") }}</span>
                                    </nuxt-link>
                                </div>
                                <div class="single-dropdown">
                                    <nuxt-link to="/">
                                        <b-img src="/images/icons/svg/social-sidebar-kit.svg" alt="icon"/>
                                        <span>{{ $t("menu.proffession") }}</span>
                                    </nuxt-link>
                                </div>
                                <div class="single-dropdown">
                                    <nuxt-link to="/">
                                        <b-img src="/images/icons/svg/social-sidebar-first-aid-kit.svg" alt="icon"/>
                                        <span>{{ $t("menu.medical_service") }}</span>
                                    </nuxt-link>
                                </div>
                                <div class="single-dropdown">
                                    <nuxt-link to="/">
                                        <b-img src="/images/icons/svg/social-sidebar-agenda.svg" alt="icon"/>
                                        <span>{{ $t("menu.companies_index") }}</span>
                                    </nuxt-link>
                                </div>
                            </b-collapse>

                            <nuxt-link to="/">
                                <b-button variant="default" class="no-shadow d-flex collapse-header w-100">
                                    <b-img src="/images/icons/svg/social-sidebar-auctions.svg" class="icon" alt="icon"/>
                                    <span>{{ $t("menu.auction") }}</span>
                                    <b-img src="/images/icons/svg/social-sidebar-arrow-right.svg" class="arrow" alt="icon"/>
                                </b-button>
                            </nuxt-link>

                            <nuxt-link to="/">
                                <b-button variant="default" class="no-shadow d-flex collapse-header w-100">
                                    <b-img src="/images/icons/svg/social-sodebar-buy-and-sell.svg" class="icon" alt="icon"/>
                                    <span>{{ $t("menu.buy_sell") }}</span>
                                    <b-img src="/images/icons/svg/social-sidebar-arrow-right.svg" class="arrow" alt="icon"/>
                                </b-button>
                            </nuxt-link>

                            <nuxt-link to="/">
                                <b-button variant="default" class="no-shadow d-flex collapse-header w-100">
                                    <b-img src="/images/icons/svg/social-sidebar-agenda.svg" class="icon" alt="icon"/>
                                    <span>{{ $t("menu.index") }}</span>
                                    <b-img src="/images/icons/svg/social-sidebar-arrow-right.svg" class="arrow" alt="icon"/>
                                </b-button>
                            </nuxt-link>
                            <nuxt-link to="/">
                                <b-button variant="default" class="no-shadow d-flex collapse-header w-100">
                                    <b-img src="/images/icons/svg/social-sidebar-news.svg" class="icon" alt="icon"/>
                                    <span>{{ $t("menu.new") }}</span>
                                    <b-img src="/images/icons/svg/social-sidebar-arrow-right.svg" class="arrow" alt="icon"/>
                                </b-button>
                            </nuxt-link>
                            <nuxt-link to="/social/allrooms">
                                <b-button variant="default" class="no-shadow d-flex collapse-header w-100">
                                    <b-img src="/images/icons/svg/social-sidebar-chats.svg" class="icon" alt="icon"/>
                                    <span>{{ $t("menu.chat") }}</span>
                                    <b-img src="/images/icons/svg/social-sidebar-arrow-right.svg" class="arrow" alt="icon"/>
                                </b-button>
                            </nuxt-link>
                            <nuxt-link to="/">
                                <b-button variant="default" class="no-shadow d-flex collapse-header w-100">
                                    <b-img src="/images/icons/svg/social-sidebar-lamb.svg" class="icon" alt="icon"/>
                                    <span>{{ $t("menu.idea_bank") }}</span>
                                    <b-img src="/images/icons/svg/social-sidebar-arrow-right.svg" class="arrow" alt="icon"/>
                                </b-button>
                            </nuxt-link>
   

                        </div>
                        </b-sidebar>
                    </div>
                </div>
                <div class="logo ml-2 mr-2 mr-sm-0 ml-sm-0"> <!-- @click="changeLocale" -->
                    <nuxt-link to="/eg-en/">
                        <img src="/images/icons/svg/logo-vertical.svg" alt="">
                    </nuxt-link>
                </div>

                <div class="location d-none d-sm-flex" @click="loadCountries">
                    <div class="icon">
                        <img src="/images/icons/svg/location.svg" alt="">
                    </div>
                    <div class="location-content">
                        <span class="text">{{ $t("navbar.location") }}</span>
                        <span class="country">{{selectedLocation}}</span>
                    </div>
                </div>
                <div class="search order-3 order-sm-0">
                    <!-- <div class="input-group input-group-lg"> -->
                        <b-input-group>

                        <!-- <div class="input-group-prepend">
                            <span class="input-group-text">
                                <span>All</span>
                                <img src="/images/icons/svg/search-down-arrow.svg" alt="">
                            </span>
                        </div> -->
                        <template #prepend>
                            <b-dropdown :text="searchFeild" variant="info">
                                <b-dropdown-item @click="changeSearch('All')">All</b-dropdown-item>
                                <b-dropdown-item @click="changeSearch('Products')">Products</b-dropdown-item>
                                <b-dropdown-item @click="changeSearch('Buy & Sell')">Buy &amp; Sell</b-dropdown-item>
                                <b-dropdown-item @click="changeSearch('Realestates')">Realestates</b-dropdown-item>
                                <b-dropdown-item @click="changeSearch('Auctions')">Auctions</b-dropdown-item>
                                <b-dropdown-item @click="changeSearch('Doctors')">Doctors</b-dropdown-item>
                                <b-dropdown-item @click="changeSearch('Companies')">Companies</b-dropdown-item>
                                <b-dropdown-item @click="changeSearch('Vendors')">Vendors</b-dropdown-item>
                                <b-dropdown-item @click="changeSearch('Technicians')">Technicians</b-dropdown-item>
                                <b-dropdown-item @click="changeSearch('Users')">Users</b-dropdown-item>
                            </b-dropdown>
                        </template>
                        <input type="text" @keyup="search($event.target.value)" @keyup.enter="searchNow($event.target.value)" placeholder="Type products, brands or categories" class="form-control" aria-label="Amount (to the nearest dollar)">
                        <div class="input-group-append">
                            <span class="input-group-text">
                                <img src="/images/icons/svg/header-search.svg" alt="">
                            </span>
                        </div>
                        </b-input-group>
                    <!-- </div> -->
                    <div class="search-popup" v-if="products.length > 0 || 
                        buy.length > 0 || 
                        realestates.length > 0 || 
                        auctions.length > 0 ||
                        doctors.length > 0 ||
                        companies.length > 0 ||
                        vendors.length > 0 ||
                        technicians.length > 0 ||
                        users.length > 0">

                        <div class="result" v-if="products && products.length > 0">
                            <div class="head">
                                <h6>Products <span>({{total.products}} results)</span></h6>
                                <nuxt-link :to="'/' + locale + '/search/products?keyword=' + searchValue" class="all">See All</nuxt-link>
                            </div>
                            <div class="text">
                                <nuxt-link :to="'/' + locale + '/search/products?keyword=' + product.name" v-for="product in products" :key="product.id">{{ product.name }}</nuxt-link>
                            </div>
                        </div>
                        <div class="result" v-if="auctions && auctions.length > 0">
                            <div class="head">
                                <h6>Auctions <span>({{total.auctions}} results)</span></h6>
                                <nuxt-link :to="'/' + locale + '/search/auctions?keyword=' + searchValue" class="all">See All</nuxt-link>
                            </div>
                            <div class="text">
                                <nuxt-link :to="'/' + locale + '/search/auctions?keyword=' + auction.name" v-for="auction in auctions" :key="auction.id">{{auction.name}}</nuxt-link>
                                <!-- <nuxt-link to="/">Adidas</nuxt-link> -->
                            </div>
                        </div>
                        <div class="result" v-if="buy && buy.length > 0">
                            <div class="head">
                                <h6>Buy & Sell <span>({{total.buyAndSell}} results)</span></h6>
                                <nuxt-link :to="'/' + locale + '/search/buy-sell?keyword=' + searchValue" class="all">See All</nuxt-link>
                            </div>
                            <div class="text">
                                <nuxt-link :to="'/' + locale + '/search/buy-sell?keyword=' + item.name" v-for="item in buy" :key="item.id">{{ item.name }}</nuxt-link>
                            </div>
                        </div>
                        <div class="result" v-if="realestates && realestates.length > 0">
                            <div class="head">
                                <h6>Realestates <span>({{total.realestate}} results)</span></h6>
                                <nuxt-link :to="'/' + locale + '/search/realestates?keyword=' + searchValue" class="all">See All</nuxt-link>
                            </div>
                            <div class="text">
                                <nuxt-link :to="'/' + locale + '/search/realestates?keyword=' + realestate.name" v-for="realestate in realestates" :key="realestate.id">{{ realestate.name }}</nuxt-link>
                            </div>
                        </div>
                        <div class="result" v-if="technicians && technicians.length > 0">
                            <div class="head">
                                <h6>Technicians <span>({{total.technicians}} results)</span></h6>
                                <nuxt-link :to="'/' + locale + '/search/technicians?keyword=' + searchValue" class="all">See All</nuxt-link>
                            </div>
                            <div class="text">
                                <nuxt-link :to="'/' + locale + '/search/technicians?keyword=' + tech.name" v-for="tech in technicians" :key="tech.id">{{ tech.name }}</nuxt-link>
                            </div>
                        </div>
                        <div class="result" v-if="vendors && vendors.length > 0">
                            <div class="head">
                                <h6>Vendors <span>({{total.vendors}} results)</span></h6>
                                <nuxt-link :to="'/' + locale + '/search/vendors?keyword=' + searchValue" class="all">See All</nuxt-link>
                            </div>
                            <div class="text">
                                <nuxt-link :to="'/' + locale + '/search/vendors?keyword=' + vendor.name" v-for="vendor in vendors" :key="vendor.id">{{ vendor.name }}</nuxt-link>
                            </div>
                        </div>
                        <div class="result" v-if="users && users.length > 0">
                            <div class="head">
                                <h6>Users <span>({{total.users}} results)</span></h6>
                                <nuxt-link :to="'/' + locale + '/search/users?keyword=' + searchValue" class="all">See All</nuxt-link>
                            </div>
                            <div class="text">
                                <nuxt-link :to="'/' + locale + '/search/users?keyword=' + user.username" v-for="user in users" :key="user.id">{{ user.username }}</nuxt-link>
                            </div>
                        </div>
                    </div>

                    <div class="overlay" @click="emptySearch" v-if="displaySearch"></div>

                </div>
                <div class="preferences">
                    <span class="login-menu" id="popover-login" tabindex="0">
                        <img src="/images/icons/svg/header-user.svg" alt="">
                        <span class="d-none d-sm-flex" v-if="isAuthenticated">{{ firstName }}</span>
                        <span class="d-none d-sm-flex" v-else>{{ $t("navbar.login") }}</span>
                        <img class="d-none d-sm-flex" src="/images/icons/svg/header-bottom-arrow.svg" alt="">
                    </span>
                    <span class="wishlist" @click="$router.push('/' + $store.getters['locale/locale'] + '/wishlist')">
                        <img src="/images/icons/svg/header-heart.svg" alt="">
                        <span v-if="wishlistProductsCount > 0">{{ wishlistProductsCount }}</span>
                    </span>
                    <span class="cart" id="popover-cart" tabindex="0">
                        <img src="/images/icons/svg/header-cart.svg" alt="">
                        <span v-if="totalQuantity > 0">{{ totalQuantity }}</span>
                    </span>
                    <span class="separator d-none d-sm-inline-block"></span>
                    <span class="currency d-none d-sm-flex" id="curr-menu" tabindex="0">
                        <span class="symbol">{{currSymbol}}</span>
                        <span>{{currCode}}</span>
                    </span>
                    <span class="lang d-none d-sm-flex" id="lang-menu" tabindex="0">
                        <img src="/images/icons/svg/header-lang.svg" alt="">
                        <span>{{ $t("navbar.lang") }}</span>
                    </span>
                </div>
            </div>
        </div>

        <!-- Login popup -->
        <b-popover placement="bottom" target="popover-login" triggers="click blur">
            <!-- <template #title>My Wishlist</template> -->
            <template v-if="!isAuthenticated">
                <div class="login-popup text-center">
                    <nuxt-link :to="'/' + locale + '/login'" class="login-btn">{{ $t("navbar.log") }}</nuxt-link>
                    <p>{{ $t("navbar.account") }}</p>
                    <nuxt-link :to="'/' + locale + '/signup'" class="signup">{{ $t("navbar.sign_link") }}</nuxt-link>
                    <span>Or</span>
                    <nuxt-link :to="'/' + locale + '/partner'" class="partner-btn">{{ $t("navbar.partner") }}</nuxt-link>
                </div>
            </template>

            <template v-else>
                <div class="user-menu">
                    <div class="info">
                        <div class="user-img">
                            <img :src="userImage ? userImage : '/images/placeholder.jpg'" alt="">
                        </div>
                        <div class="name">
                            <h6>{{firstName}} {{lastName}}</h6>
                            <nuxt-link :to="'/' + locale + '/profile'">View Profile</nuxt-link>
                        </div>
                    </div>
                    <div class="links">
                        <ul>
                            <li>
                                <nuxt-link to="/">
                                    <img src="/images/icons/svg/user-popup.svg" alt="">
                                    <span>Account Info</span>
                                </nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/">
                                    <img src="/images/icons/svg/cart-popup.svg" alt="">
                                    <span>Orders</span>
                                </nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/">
                                    <img src="/images/icons/svg/reserve-popup.svg" alt="">
                                    <span>Reservation</span>
                                </nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/">
                                    <img src="/images/icons/svg/auction-popup.svg" alt="">
                                    <span>My Auctions</span>
                                </nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/">
                                    <img src="/images/icons/svg/auction-popup.svg" alt="">
                                    <span>Subscribed Auctions</span>
                                </nuxt-link>
                            </li>
                        </ul>
                        <div class="logout" @click="logout">
                            Logout
                        </div>
                    </div>
                </div>
            </template>

        </b-popover>

        <!-- Cart popup -->
        <b-popover placement="bottom" target="popover-cart" triggers="click blur">
            <template #title>{{ $t("navbar.cart") }}</template>
            <div class="cart-popup">
                <div class="products">
                    <div class="row" v-for="(product, index) in cartProducts" :key="index">
                        <div class="col-4">
                            <img :src="product.imageUrl" class="img-thumbnail" alt="">
                        </div>
                        <div class="col-8 mt-3">
                            <h6>{{product.name}}</h6>
                            <p>QTY: {{product.quantity}}</p>
                        </div>
                    </div>
                    <!-- <div class="row">
                        <div class="col-4">
                            <img src="/images/apple-watch.PNG" class="img-thumbnail" alt="">
                        </div>
                        <div class="col-8 mt-3">
                            <h6>Green T-shirt Men</h6>
                            <p>{{ $t("navbar.qty") }}: 2</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4">
                            <img src="/images/apple-watch.PNG" class="img-thumbnail" alt="">
                        </div>
                        <div class="col-8 mt-3">
                            <h6>Green T-shirt Men</h6>
                            <p>{{ $t("navbar.qty") }}: 2</p>
                        </div>
                    </div> -->
                </div>
                <p class="total text-center">Total: <span>{{currSymbol}}</span><strong>{{totalPrice}}</strong></p>
                <div class="action-btns">
                    <nuxt-link :to="'/' + locale + '/cart'" class="btn cart-btn">View Cart</nuxt-link>
                    <nuxt-link :to="'/' + locale + '/checkout'" class="btn checkout-btn">Checkout</nuxt-link>
                </div>
            </div>
        </b-popover>

        <b-popover placement="bottom" target="curr-menu" triggers="click blur">
            <template #title>Currency:</template>
            <div class="curr-menu">
                <ul>
                    <li :class="{active: currCode == curr.code}" @click="changeCurrency(curr.symbol, curr.code)" v-for="(curr, index) in currencies" :key="index">{{ curr.symbol }} - {{ curr.code }}</li>
                    <li>EGP - EGP</li>
                </ul>
            </div>
        </b-popover>
        
        <b-popover placement="bottom" target="curr-menu-mobile" triggers="click blur">
            <template #title>Currency:</template>
            <div class="curr-menu">
                <ul>
                    <li :class="{active: currCode == curr.code}" @click="changeCurrency(curr.symbol, curr.code)" v-for="(curr, index) in currencies" :key="index">{{ curr.symbol }} - {{ curr.code }}</li>
                    <li>EGP - EGP</li>
                </ul>
            </div>
        </b-popover>

        <b-popover placement="bottom" target="lang-menu" triggers="click blur">
            <template #title>{{ $t("navbar.language") }}:</template>
            <div class="lang-menu">
                <ul>
                    <li :class="{active: langCode == 'en'}" @click="changeLang({ langCode: 'en', langName: 'English', dir: false })">English - UK</li>
                    <li :class="{active: langCode == 'ar'}" @click="changeLang({ langCode: 'ar', langName: 'العربيه', dir: true })">العربيه</li>
                </ul>
            </div>
        </b-popover>

        <b-popover placement="bottom" target="lang-menu-mobile" triggers="click blur">
            <template #title>{{ $t("navbar.language") }}:</template>
            <div class="lang-menu">
                <ul>
                    <li class="active" @click="changeLang({ langCode: 'en', langName: 'English', dir: false })">English - UK</li>
                    <li @click="changeLang({ langCode: 'ar', langName: 'العربيه', dir: true })">العربيه</li>
                </ul>
            </div>
        </b-popover>

        <b-modal id="location" title="Choose your location" hide-footer size="md" centered>
            <div class="d-block text-center">
                <!-- <div class="loader" v-if="isLoading">
                    <phone-loader></phone-loader>
                </div> -->
                <div class="form-group">
                    <select class="form-control" v-model="country" @change="changeLocation">
                        <option value>Select Country</option>
                        <option
                        :value="{ code: country.sortname, name: country.name }"
                        v-for="country in countries"
                        :key="country.id"
                        >{{ country.name }}</option>
                    </select>
                </div>
            </div>
        </b-modal>

    </section>
</template>

<script>
import axios from 'axios'
import { locale } from 'vue-moment';

export default {
    data() {
        return {
            displaySearch: false,
            searchValue: '',
            searchFeild: 'All',

            countries: [],
            country: "",
            isLoading: false,

            total: {},
            products: [],
            buy: [],
            realestates: [],
            auctions: [],
            doctors: [],
            companies: [],
            technicians: [],
            vendors: [],
            users: []
        }
    },
    computed: {
        isAuthenticated() {
        return this.$store.getters["auth/isAuthenticated"];
        },
        totalQuantity() {
        return this.$store.getters["cart/totalQuantity"];
        },
        cartProducts() {
        return this.$store.getters["cart/cartProducts"];
        },
        totalPrice() {
        return this.$store.getters["cart/totalPrice"];
        },
        wishlistProductsCount() {
        return this.$store.getters["wishlist/totalProductsCount"];
        },
        userType() {
        return this.$store.getters["auth/userType"];
        },
        firstName() {
        return this.$store.getters["auth/firstName"];
        },
        lastName() {
        return this.$store.getters["auth/lastName"];
        },
        dir() {
        return this.$store.getters["locale/rtl"];
        },
        currencies() {
        return this.$store.getters["currency/currencies"];
        },
        currCode() {
            return this.$store.getters["currency/code"];
        },
        langCode() {
            return this.$store.getters["locale/langCode"];
        },
        currSymbol() {
            return this.$store.getters["currency/symbol"];
        },
        locale() {
            return this.$store.getters['locale/locale']
        },
        selectedLocation() {
            return this.$store.getters["locale/defaultClientLocation"]
        },
        userImage() {
            return this.$store.getters['auth/userImage']
        }
    },
    watch: {
        currCode(oldCurr, newCurr) {
            console.log('curr changed > ', oldCurr, newCurr)
            this.$store.dispatch('cart/getCart');
        }
    },
    methods: {
        searchNow() {
            if(this.searchValue.length > 1) {
                this.$router.push('/' + this.locale + '/search?keyword=' + this.searchValue)
            }
        },
        async search(value) {

            this.searchValue = value;

            if (value.length > 1) {
                try {
                    let searchResults = await axios.post("/my/search-light", {
                        search: value
                    });
                    console.log('search results >> ', searchResults.data.data);

                    if(searchResults.data.data.total) {
                        this.total = searchResults.data.data.total
                    }

                    if (searchResults.data.data.products) {
                        this.products = searchResults.data.data.products;
                        this.displaySearch = true;
                    } else {
                        this.products = [];
                    }

                    if (searchResults.data.data.buyAndSell) {
                        this.buy = searchResults.data.data.buyAndSell;
                        this.displaySearch = true;
                    } else {
                        this.buy = [];
                    }

                    if (searchResults.data.data.realestate) {
                        this.realestates = searchResults.data.data.realestate;
                        this.displaySearch = true;
                    } else {
                        this.realestates = [];
                    }

                    if (searchResults.data.data.auctions) {
                        this.auctions = searchResults.data.data.auctions;
                        this.displaySearch = true;
                    } else {
                        this.auctions = [];
                    }

                    if (searchResults.data.data.doctors) {
                        this.doctors = searchResults.data.data.doctors;
                        this.displaySearch = true;
                    } else {
                        this.doctors = [];
                    }

                    if (searchResults.data.data.catalogues) {
                        this.companies = searchResults.data.data.catalogues;
                        this.displaySearch = true;
                    } else {
                        this.companies = [];
                    }

                    if (searchResults.data.data.vendors) {
                        this.vendors = searchResults.data.data.vendors;
                        this.displaySearch = true;
                    } else {
                        this.vendors = [];
                    }

                    if (searchResults.data.data.technicians) {
                        this.technicians = searchResults.data.data.technicians;
                        this.displaySearch = true;
                    } else {
                        this.technicians = [];
                    }

                    if (searchResults.data.data.users) {
                        this.users = searchResults.data.data.users;
                        this.displaySearch = true;
                    } else {
                        this.users = [];
                    }

                } catch (error) {
                    console.log('error >> ', error)
                }
            } else {
                this.emptySearch();
            }

        },
        emptySearch() {
            console.log("empty search");
            this.displaySearch = false;
            this.products = [];
            this.buy = [];
            this.realestates = [];
            this.auctions = [];
            this.doctors = [];
            this.companies = [];
            this.vendors = [];
            this.technicians = [];
            this.users = []
        },
        changeSearch(searchFeild) {
            this.searchFeild = searchFeild
        },
        logout() {
            console.log("logout");
            this.$store.commit("auth/logout");
            this.$store.commit("cart/deleteCart");
            this.$store.commit("wishlist/deleteWishlist");
        },
        async loadCountries() {
            console.log("changed");
            // this.isLoading = true;
            this.$bvModal.show("location");
            axios
                .get("/countries")
                .then(res => {
                console.log("countries data >> ", res.data.data);
                this.countries = res.data.data;
                // this.isLoading = false;
                })
                .catch(err => {
                // this.isLoading = false;
                console.log(err);
                });
        },
        changeLocation() {
            console.log("country >> ", this.country);
            if(this.country) {

                this.$store.commit("locale/setDefaultClientLocation", this.country.name);
                this.$store.commit("locale/setCountryCode", this.country.code);
                axios.defaults.baseURL = "https://developers.api.tbdm.net/v-1872020/" + this.locale + '-' + this.currSymbol;

                // this.$route.params.locale = 'ht-uu'
                console.log('changed route >> ', this.$route.path);
                let pathArr = this.$route.path.split('/');
                console.log('arr >> ', pathArr);
                pathArr.splice(0, 2);
                console.log('processed path >> ', pathArr);
                pathArr.unshift(this.country.code + "-" + this.langCode)
                console.log('added locale >> ', pathArr)
                let path = pathArr.join("/");
                console.log('path >> ', path);
                this.$router.push('/' + path);
                // this.$router.push('/us-en/services/store/5/6');
            }
        },
        changeCurrency(symbol, code) {
            axios.defaults.baseURL = "https://developers.api.tbdm.net/v-1872020/" + this.locale + "-" + code;
          this.$store.commit("currency/setSymbol", symbol);
          this.$store.commit("currency/setCode", code);
        },
        changeLang(langObj) {
            // this.$store.commit("lang/setRtl", this.language.dir);
            this.$store.commit("locale/setLangCode", langObj.langCode);
            this.$store.commit("locale/setLangName", langObj.langName);

            // this.$store.commit('SET_LANG', lang);
            // this.$router.push({path: `${this.$router.currentRoute.path}?lang=${lang}`});

            // console.log(
            //     "dir >> ",
            //     this.$store.getters["lang/rtl"],
            //     this.$store.getters["lang/lang"]
            // );

            console.log("lang >> ", this.$i18n.locale);
            if (langObj.langCode == "en") {
                this.$i18n.locale = "en"
                this.$store.commit("locale/setRtl", langObj.dir);
            } else if (langObj.langCode == "ar") {
                this.$i18n.locale = "ar";
                this.$store.commit("locale/setRtl", langObj.dir);
            }
            console.log("lang >> ", this.$i18n.locale);
        }
    },
    mounted() {
        console.log('changed.......');
    },
    fetch() {
        console.log('fetched');
    }
}
</script>