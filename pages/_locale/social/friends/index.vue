<template>
<!--chat box-->
<b-col sm="9" class="pl-sm-2">
    <div class="chat-box chat-messages-box mb-sm-5">
        <div class="chat-header friend-list-header">
            <b-row>
                <b-col sm="3">
                    <div class="title">Friends List</div>
                </b-col>
                <b-col sm="6">
                    <b-input-group>
                        <template #prepend>
                            <b-input-group-text>
                                <b-img src="/images/icons/svg/social-search.svg" alt="icon"/>
                            </b-input-group-text>
                        </template>
                        <b-form-input type="text" placeholder="Search by name or mobile number"></b-form-input>
                    </b-input-group>
                </b-col>

            </b-row>
        </div>


        <!--messages box-->
        <b-row>
            <!--if media is open or closed -->
            <b-col cols="12"   class="scroll-container">

                <div class="scrollable-box-messages">
                    <div class="friends-lists">
                        <b-row v-if="friends && friends.length > 0">
                            <b-col sm="4" v-for="(friend, index) in friends" :key="index">
                                <div class="friend-card flex-nowrap">
                                    <nuxt-link :to="'/' + locale + '/user-profile/' + friend.id + '/' + friend.username" class="d-flex">
                                        <b-img class="profile-img" :src="(friend.user_details && friend.user_details.image_url) ? friend.user_details.image_url : '/images/placeholder.jpg'" alt="icon"/>
                                        <div class="name color-night">{{ friend.first_name }} {{ friend.last_name }}</div>
                                    </nuxt-link>
                                    <div class="details ml-auto" :id="'details' + index">
                                        <b-img src="/images/icons/svg/social-details-secondary.svg" alt="icon"/>
                                    </div>
                                </div>
                                <!--for block - remove friend cancel friend-->
                                <b-popover  placement="bottomleft" boundary-padding="10" :target="'details' + index" triggers="click blur" custom-class="social-block-popover">
                                    <nuxt-link :to="'/' + locale + '/user-profile/' + friend.id + '/' + friend.username" >
                                        <div class="cancel-friend-request-popup">
                                            <b-img  class="mr-2" src="/images/icons/svg/social-view-as-gery.svg"/>
                                            <span class="color-night">View Profile</span>
                                        </div>
                                    </nuxt-link>
                                    <!--remove from friend-->
                                    <div class="cancel-friend-request-popup">
                                        <b-img  src="/images/icons/svg/social-remove.svg"/>
                                        <span>Remove From Friends</span>
                                    </div>
                                
                                    <!--block-->
                                    <!-- <div class="block-popup" @click="hidePopOver()">
                                        <b-img src="/images/icons/svg/social-block.svg"/> 
                                        <span>Block</span>
                                    </div> -->

                                </b-popover>
                            </b-col>
                        </b-row>
                    </div>
                    <div class="text-center w-100 mt-3" v-if="!noMore">
                        <b-button variant="default" class="no-shadow bg-secondary-opacity-1 color-secondary w-25" @click="getMoreFriends(friends.length, 6)">
                            <span v-if="!loading.getMoreFriends">Show more</span>
                            <b-spinner v-if="loading.getMoreFriends" class="spinner-secondary" small  type="grow" label="Spinning"></b-spinner>
                        </b-button>
                    </div>
                </div>
            </b-col>
        </b-row>                   
    </div>

</b-col>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            friends: [],
            noMore:false,
            loading:{
                getMoreFriends:false
            }
        }
    },
    async fetch() {
        let friendsData = await axios.get('/my/social/friends/user/' + this.$store.getters['auth/userId'] + '/skip/0/take/12');
        this.friends = friendsData.data.data;
        if(friendsData.data.data.length < 10) {
            this.noMore = true
        }
    },
    computed:{
        locale() {
            return this.$store.getters["locale/locale"];
        },
    },
    methods:{
        getMoreFriends(skip, take) {
            
            if(!this.loading.getMoreFriends) {
                this.loading.getMoreFriends = true
                axios.get(`/my/social/friends/user/${this.$store.getters['auth/userId']}/skip/${skip}/take/${take}`)
                .then(res=>{
                    this.loading.getMoreFriends =  false
                    this.friends = [...this.friends, ...res.data.data]
                    if(res.data.data.length < 6) {
                        this.noMore = true
                    }
                })
                .catch(err=>{
                    this.loading.getMoreFriends = false
                    console.log(err)
                })
            }

        }
    }
}
</script>
