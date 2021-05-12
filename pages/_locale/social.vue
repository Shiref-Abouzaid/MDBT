<template>
    <section class="all-social">
        <div class="social-nav-bar">
            <b-container>
                <b-row class="mr-auto ml-auto social-nav-icons-container">
                    <b-col class="sidebar-btn d-none d-sm-block">
                        <b-button variant="default" v-b-toggle.sidebar >
                            <img src="/images/icons/svg/social-sidebar-cols.svg">
                        </b-button>
                    </b-col>
                    <b-col  class="social-nav-item">
                        <nuxt-link to="/eg-en/social" class="w-100 text-center">
                            <img src="/images/icons/svg/social-group.svg" class="normal" alt="icon">
                            <img src="/images/icons/svg/social-group-active.svg" class="active" alt="icon">
                            <span class="text">{{ $t("chat.rooms") }}</span>
                        </nuxt-link>
                    </b-col>
                    <b-col  class="social-nav-item" v-if="(recentChat && recentChat.length > 0)">
                        <nuxt-link :to="'/eg-en/social/chat/' + recentChat[0].id" class="text-center">
                            <img src="/images/icons/svg/social-message.svg" class="normal" alt="icon">
                            <img src="/images/icons/svg/social-message-active.svg" class="active" alt="icon">
                            <span class="text">Chats</span>
                            <b-badge variant="default" v-if="false">4</b-badge>
                        </nuxt-link>
                    </b-col>
                    <b-col  class="social-nav-item">
                        <nuxt-link to="/eg-en/social/friends" class="text-center">
                            <img src="/images/icons/svg/social-friends.svg" class="normal" alt="icon">
                            <img src="/images/icons/svg/social-friends-active.svg" class="active" alt="icon">
                            <span class="text">Friends</span>
                            <b-badge variant="default" v-if="friendsCount > 0">{{ friendsCount }}</b-badge>
                        </nuxt-link>
                    </b-col>
                    <b-col  class="social-nav-item">
                        <nuxt-link to="/eg-en/social/my-profile" class="text-center">
                            <img src="/images/icons/svg/social-profile.svg" class="normal" alt="icnon">
                            <img src="/images/icons/svg/social-profile-active.svg" class="active" alt="icon">
                            <span class="text">{{ $t("chat.my_profile") }}</span>
                        </nuxt-link>
                    </b-col>
                </b-row>

                <!--sidebar-->
                <div class="social-side-bar">
                    <b-sidebar backdrop id="sidebar"  shadow>
                    <template #title>
                        <span>{{ $t("menu.menu_head") }}</span>
                    </template>
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

                        <nuxt-link to="VIP">
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
            </b-container>
        </div>

        <nuxt-child></nuxt-child>
    </section>
</template>

<script>
import axios from 'axios'

export default {
    layout: 'withoutNavbar',
    middleware: ["auth"],
    data() {
        return {
            recentChat: [],
            friendsCount: 0,
        }
    },
    async fetch() {
        let recentChatsData = await axios.get('/my/chatting/chats/skip/0/take/1', {
            headers: {
                Authorization: this.$store.getters['auth/token']
            }
        });
        this.recentChat = recentChatsData.data.data;
        console.log('recent chats >> ', this.recentChat);

        let landingData = await axios.get('/my/social/user/' + this.$store.getters['auth/userId'] + '/friends-page');
        this.landing = landingData.data.data;
        if(landingData.data.data.friends)
            this.friendsCount = landingData.data.data.friends;

        // console.log('landing >> ', this.landing)

    }
}
</script>

