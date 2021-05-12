<template>
    <section class="footer">
        <b-container>
            <b-row>
                <b-col sm="6">
                    <b-row>
                        <b-col sm="6">
                            <div class="logo-section pl-1">
                                <b-img src="/images/icons/svg/footer-logo.svg"  alt="logo"/>
                                <p>Lorem ipsum dolor sit ametyg, consectetur adipiscing elit?</p>
                                <nuxt-link :to="'/' + locale + '/partner'">
                                    <b-button variant="default" class="no-shadow w-100">
                                     {{ $t("footer.partner") }}
                                    </b-button>
                                </nuxt-link>
                            </div>
                        </b-col>
                        <b-col sm="6">
                            <div class="contact-us-section pr-1">
                                <div class="d-flex single-contact-item">
                                    <b-img src="/images/icons/svg/footer-email.svg" alt="icon"/>
                                    <span>info@tbdm.net</span>
                                </div>
                                <div class="d-flex single-contact-item">
                                    <b-img src="/images/icons/svg/footer-call.svg" alt="icon"/>
                                    <span>+8(888) 513-5971</span>
                                </div>
                                <div class="d-flex single-contact-item">
                                    <b-img src="/images/icons/svg/footer-location.svg" alt="icon"/>
                                    <span>Building C 69, Cairo | Egypt</span>
                                </div>
                            </div>
                            <div class="pr-1 pl-1">
                                <b-row>
                                    <b-col>
                                        <b-img src="/images/icons/svg/footer-linked-in.svg" alt="icon"/>
                                    </b-col>
                                    <b-col>
                                        <b-img src="/images/icons/svg/footer-linked-in.svg" alt="icon"/>
                                    </b-col>
                                    <b-col>
                                        <b-img src="/images/icons/svg/footer-linked-in.svg" alt="icon"/>
                                    </b-col>
                                    <b-col>
                                    <b-img src="/images/icons/svg/footer-linked-in.svg" alt="icon"/>
                                    </b-col>
                                    <b-col>
                                        <b-img src="/images/icons/svg/footer-linked-in.svg" alt="icon"/>
                                    </b-col>

                                </b-row>
                            </div>

                        </b-col>
                    </b-row>
                </b-col>
                <b-col sm="6">
                    <div class="list">
                        <b-row>
                            <b-col cols="4">
                                <ul>
                                    <li >
                                        <nuxt-link to="/">
                                           {{ $t("footer.home") }}
                                        </nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="/notactive">
                                      {{ $t("footer.about") }}
                                        </nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="/notactive">
                                           {{ $t("footer.sign") }}
                                        </nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="/notactive">
                                          {{ $t("footer.contact") }}
                                        </nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="/notactive">
                                       {{ $t("footer.team") }}
                                        </nuxt-link>
                                    </li>
                                </ul>
                            </b-col>
                            <b-col cols="4">
                                <ul>
                                    <li >
                                        <nuxt-link to="/notactive">
                                          {{ $t("footer.services") }}
                                        </nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="/notactive">
                                          {{ $t("footer.index") }}
                                        </nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="/notactive">
                                       {{ $t("footer.chat") }}
                                        </nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="/notactive">
                                         {{ $t("footer.buy_sell") }}
                                        </nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="/notactive">
                                          {{ $t("footer.wholesale") }}
                                        </nuxt-link>
                                    </li>
                                </ul>
                            </b-col>
                            <b-col cols="4">
                                <ul>
                                    <li >
                                        <nuxt-link to="/notactive">
                                         {{ $t("footer.vip") }}
                                        </nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="/notactive">
                                       {{ $t("footer.idea_bank") }}
                                        </nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="/notactive">
                                         {{ $t("footer.new") }}
                                        </nuxt-link>
                                    </li>
                                </ul>
                            </b-col>
                        </b-row>
                    </div>
                </b-col>
            </b-row>

            <div class="copyright text-center">
                <p class="m-0">TBDM &copy; 2020, {{ $t("footer.copyright") }}</p>
            </div>
        </b-container>
    </section>
</template>

<script>
import Pusher from 'pusher-js';

export default {
    computed: {
        locale() {
            return this.$store.getters['locale/locale']
        },
        isAuthenticated() {
            return this.$store.getters['auth/isAuthenticated']
        }
    },
    mounted() {
        // if(process.client) {
            //pusher private user channel

            console.log('before pusher >>>>>>>>>-----------------')

            // if(!this.$store.getters['realtime/pusherCreated']) {

                if(this.isAuthenticated)
                    this.$store.dispatch('realtime/privateUserChannel');

                // let pusher = new Pusher(`dpctgdv35p33t63d3eva`, {
                //     encrypted: false,
                //     cluster: 'eu',
                //     forceTLS: false,
                //     httpHost: 'synchronizer.tbdm.net',
                //     // statsHost: 'http://synchronizer.tbdm.net/stats',
                //     wsHost: 'synchronizer.tbdm.net',
                //     wsPort: 6001,
                //     authEndpoint: 'https://developers.api.tbdm.net/v-1872020/eg-en/my/user/' + this.$store.getters['auth/userId'] + '/auth/private',
                //     auth: {
                //         headers: {
                //             Authorization: this.$store.getters['auth/userId']
                //         }
                //     }

                // });

                // let userChannel = pusher.subscribe('private-user.' + this.$store.getters['auth/userId']);

                // userChannel.bind('App\\Events\\ChatNewMessage', function(data){
                //     let receivedMessage = data.message;
                //     console.log('data in user channel>> ', data)
                // });

                // userChannel.bind('App\\Events\\AuctionDealOffered', (deal) => {
                //     console.log('got deal from user >>>>> ', deal)
                //     // this.auctions.push(currentBid.auctionee);
                // });

                // userChannel.bind('App\\Events\\AuctionDealRejected', (deal) => {
                //     console.log('got deal rejected from user >>>>> ', deal)
                //     // this.auctions.push(currentBid.auctionee);
                // });

                // userChannel.bind('App\\Events\\AuctionDealAccepted', (deal) => {
                //     console.log('got deal accepted from user >>>>> ', deal)
                //     // this.auctions.push(currentBid.auctionee);
                // });

                // userChannel.bind('App\\Events\\FriendRequestAccepted', (request) => {
                //     console.log('got friend request accepted from user >>>>> ', request)
                //     // this.auctions.push(currentBid.auctionee);
                // });

                // userChannel.bind('App\\Events\\FriendRequestCreated', (request) => {
                //     console.log('got friend request from user >>>>> ', request)
                //     // this.auctions.push(currentBid.auctionee);
                // });

                // console.log('after creating pusher instance >> ', pusher);
                // this.$store.commit('realtime/setPusherCreated', true)
            // }
        // }
    }
}
</script>