<template>
    <section class="profile-page">
        <div class="container">
            <div class="row">
                <div class="col-sm-4">
                    <div class="menu">
                        <div class="head">
                            <div class="profile-img">
                                <img :src="userImage ? userImage : image" alt="">
                            </div>
                            <div class="title">
                                <h4>Tom Hanks</h4>
                                <div class="form-group">
                                    <label for="profile">{{ $t("user_profile.upload") }}</label>
                                    <input
                                        type="file"
                                        class="form-control"
                                        id="profile"
                                        @change="onImagePicked($event)"
                                        hidden
                                    />
                                </div>
                            </div>
                        </div>
                        <ul>
                            <li>
                                <nuxt-link to="/eg-en/profile" exact>
                                    <img class="icon" src="/images/icons/svg/profile-user.svg" alt="">
                                    <span>{{ $t("user_profile.account_info") }}</span>
                                    <img class="arrow" src="/images/icons/svg/profile-arrow.svg" alt="">
                                </nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/eg-en/profile/wishlist">
                                    <img class="icon" src="/images/icons/svg/profile-heart.svg" alt="">
                                    <span>{{ $t("user_profile.wishlist") }}</span>
                                    <img class="arrow" src="/images/icons/svg/profile-arrow.svg" alt="">
                                </nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/eg-en/profile/orders">
                                    <img class="icon" src="/images/icons/svg/profile-cart.svg" alt="">
                                    <span>{{ $t("user_profile.orders") }}</span>
                                    <img class="arrow" src="/images/icons/svg/profile-arrow.svg" alt="">
                                </nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/eg-en/profile/user-reservations">
                                    <img class="icon" src="/images/icons/svg/profile-doctor.svg" alt="">
                                    <span>{{ $t("user_profile.reservation") }}</span>
                                    <img class="arrow" src="/images/icons/svg/profile-arrow.svg" alt="">
                                </nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/eg-en/profile/subscribed-auctions">
                                    <img class="icon" src="/images/icons/svg/profile-auction.svg" alt="">
                                    <span>{{ $t("user_profile.sub_auction") }}</span>
                                    <img class="arrow" src="/images/icons/svg/profile-arrow.svg" alt="">
                                </nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/eg-en/profile/my-auctions">
                                    <img class="icon" src="/images/icons/svg/profile-auction.svg" alt="">
                                    <span>{{ $t("user_profile.my_auction") }}</span>
                                    <img class="arrow" src="/images/icons/svg/profile-arrow.svg" alt="">
                                </nuxt-link>
                            </li>
                        </ul>
                        <div class="logout" @click="logout">
                            <button class="btn">{{ $t("user_profile.log") }}</button>
                        </div>
                    </div>
                </div>
                <div class="col-sm-8">
                    <div class="profile-content">
                        <nuxt-child></nuxt-child>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    layout: 'withoutNavbar',
    data() {
        return {
            image: "/images/placeholder.jpg",
        }
    },
    computed: {
        userImage() {
            return this.$store.getters['auth/userImage']
        }
    },
    methods: {
        onImagePicked(event) {
            console.log("picked");
            let file = event.target.files[0];

            if (file) {
                const fileReader = new FileReader();
                fileReader.addEventListener("load", () => {
                this.image = fileReader.result;
                console.log("image >> ", this.image);
                });
                fileReader.readAsDataURL(file);
            }
        },
        logout() {
            console.log("logout");
            this.$store.commit("auth/logout");
            this.$store.commit("cart/deleteCart");
            this.$store.commit("wishlist/deleteWishlist");
        },
    }
}
</script>