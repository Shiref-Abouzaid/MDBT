<template>
    <div class="social-chat freinds-manage">
        <!--social nav bar-->

        <b-container>
            <b-row class="mt-3">
                
                <!--persons chats-->
                <b-col sm="3" class="pr-sm-2 mb-sm-5">
                    <div class="chats-persons chat-box  h-100">
                        <div class="chat-header">
                            <b-row>
                                <b-col cols="12" >
                                    <div class="title">
                                        Friends
                                    </div>
                                </b-col>
                            </b-row>
                        </div>

                        <!--persons tabs-->
                        <div class="users-select">
                            <!--user-chat head-->
                            <nuxt-link to="/eg-en/social/friends" exact>
                                <b-button variant="default" align-v="center" class="d-flex no-shadow bg-grey-light-4 color-night w-100 friends-btn">
                                    <b-img src="/images/icons/svg/social-friends.svg" alt="icon"/>
                                    <span>Friends List</span>
                                </b-button>
                            </nuxt-link>
                            
                            <nuxt-link to="/eg-en/social/friends/requests">
                                <b-button variant="default" align-v="center" class="d-flex no-shadow bg-grey-light-4 color-night w-100 friends-btn">
                                    <b-img src="/images/icons/svg/social-add-friend-gery.svg" alt="icon"/>
                                    <span>Friend Requests</span>
                                    <b-badge class="ml-auto" variant="default" v-if="friendrequestsCount > 0">{{ friendrequestsCount }}</b-badge>
                                </b-button>
                            </nuxt-link>

                            <!-- <nuxt-link to="/eg-en/social/friends/block">
                                <b-button variant="default" align-v="center" class="d-flex no-shadow bg-grey-light-4 color-night w-100 friends-btn">
                                    <b-img src="/images/icons/svg/social-block-gery.svg" alt="icon"/>
                                    <span>Block List</span>
                                </b-button>
                            </nuxt-link> -->
                        </div>
                    </div>
                </b-col>

                <nuxt-child></nuxt-child>


            </b-row>
        </b-container>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    name:'chat',
    layout: 'withoutNavbar',
    data() {
        return {
            friendrequestsCount: 0,
            isOnline:true,
            isFriend:false,
            firendRequestSent:false,
            showpopover:false,
            popupImageSrc:"",

            value: [],
            users:[
                {
                    name:'Diane',
                    id:2,
                    image:'https://variety.com/wp-content/uploads/2020/06/bojack.jpg?w=681&h=383&crop=1'
                },
                {
                    name:'Cat',
                    id:3,
                    image:'https://4.bp.blogspot.com/-tQRNAwgFw8c/XDJJOho0QQI/AAAAAAAAZSg/SFU5aFdugeMYFWMpyo7fb0kfvOOV3E1bgCLcBGAs/s1600/bojack.jpg'
                },
                {
                    name:'Dog',
                    id:4,
                    image:'https://media.npr.org/assets/img/2015/03/20/bojac_s1_029_h_sq-76687651cffd981036a1ee25758fbd28f743c43f-s800-c85.jpg'
                },

            ],
            gallery:[
                'https://pyxis.nymag.com/v1/imgs/897/4aa/e1547854e6a546b9c11a13317ca19bf6f4-08-bojack-409.rsquare.w700.jpg',
                'https://images.squarespace-cdn.com/content/58cd7ccd46c3c40813a3412d/1505452320177-HK9EOKHE4DZXC7KKHXL1/Bojack+Horseman+Season+4+Courtney+Portnoy.png?content-type=image%2Fpng',
                'https://pbs.twimg.com/profile_images/997077562533740544/feamgA9P_400x400.jpg',
                'https://i.pinimg.com/originals/4e/17/af/4e17af7beb6cb1175407246980af8a6f.png',
                'https://www.etonline.com/sites/default/files/styles/max_970x546/public/images/2016-07/1280_bojackhorseman_s1_netflix.jpg?itok=J3Uhe8n2',
                'https://data.whicdn.com/images/327256690/original.jpg',
                'https://pbs.twimg.com/profile_images/997077562533740544/feamgA9P_400x400.jpg',
                'https://pyxis.nymag.com/v1/imgs/897/4aa/e1547854e6a546b9c11a13317ca19bf6f4-08-bojack-409.rsquare.w700.jpg',
            ],
        }
    },
    async fetch() {
        console.log('id >> ', this.$store.getters['auth/userId'])
        let landingData = await axios.get('/my/social/user/' + this.$store.getters['auth/userId'] + '/friends-page');
        console.log('landing >> ', landingData.data.data)
        if(landingData.data.data['friends_requests'])
            this.friendrequestsCount = landingData.data.data['friends_requests'];
    },
    methods:{
        onTagState(valid) {
            console.log(valid)
        },
        hidePopOver() {
            this.showpopover = false
        }
    }
}
</script>