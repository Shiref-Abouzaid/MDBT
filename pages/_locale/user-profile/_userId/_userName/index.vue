<template>
    <div class="social-my-profile">
        <!--social nav bar-->
        

        <div class="social-profile-section">
            <b-container>
                <!--my profile-->
                <div class="social-my-profile">
                    <div class="social-main">
                        <!--cover-->
                        <div class="cover" :style="`background-image:url('${coverImg ? coverImg : '/images/background-placeholder.png'}')`" >
   
                            <!--profile image-->
                            <div class="profile-image" :style="`background-image:url('${profileURL ? profileURL : '/images/placeholder.jpg'}')`" >
                                
                            </div>
                        </div>

                        <!--name and bio-->
                        <b-row class="social-name-bio m-0">
                            <b-col sm="7" class="info pl-1 pr-1" >
                                <h1 class="title">{{firstName}} {{lastName}}</h1>
                                <p class="m-0">{{bio}}</p>
                            </b-col>
                            <b-col sm="5" class="message-block-add">
                                <!--if frined-->
                                <b-button v-if="isFriend" variant="default" class="friend-request-sent">
                                    <b-img  src="/images/icons/svg/social-friend-request-sent.svg" alt="icon"/>
                                    <span>Friend</span>
                                </b-button>

                                <!--add friend request-->
                                <b-button @click="addFriend" v-if="!friendRequestSent && !isFriend" variant="default" class="add-friend">
                                    <b-img  src="/images/icons/svg/social-friend-request.svg" alt="icon"/>
                                    <span>Add Friend</span>
                                </b-button>
                                <!--friend request sent-->
                                <b-button v-if="friendRequestSent" variant="default" class="friend-request-sent">
                                    <b-img  src="/images/icons/svg/social-friend-request-sent.svg" alt="icon"/>
                                    <span>Friend Request Sent</span>
                                </b-button>

                                 <!--message buttom-->
                                <b-button @click="createChat" class="message" variant="default">
                                    <b-img src="/images/icons/svg/social-message-active.svg" alt="icon"/>
                                </b-button>

                                <!--block buttom-->
                                <!-- <b-button id="block" class="block" variant="default">
                                    <b-img src="/images/icons/svg/social-dots.svg" alt="icon"/>
                                </b-button> -->
                            </b-col>
 
                            <!--for block - remove friend cancel friend-->
                            <b-popover :show.sync="showpopover" placement="bottomleft" boundary-padding="10" target="block" triggers="click blur focus" custom-class="social-block-popover" >
                                
                                <!--cancel friend request-->
                                <div class="cancel-friend-request-popup" v-if="friendRequestSent" @click="friendRequestSent = !friendRequestSent; hidePopOver()" triggers="click">
                                    <b-img  src="/images/icons/svg/social-friend-request.svg" alt="icon"/>
                                    <span>Cancel Friend Request</span>
                                </div>

                                <!--remove from friend-->
                                <div class="cancel-friend-request-popup" v-if="isFriend" @click="removeFriend">
                                    <b-img src="/images/icons/svg/social-remove.svg"/>
                                    <span>Remove From Friends</span>
                                </div>
                                
                                <!--block-->
                                <!-- <div class="block-popup" @click="hidePopOver()">
                                    <b-img src="/images/icons/svg/social-block.svg"/> 
                                    <span>Block</span>
                                </div> -->

                            </b-popover>




                        </b-row>


                        <!--about-->
                        <div class="social-myprofile-about mt-3">
                            <h2>About</h2>
                            <b-row>
                                <b-col sm="7">
                                    <div class="info">
                                        <b-img src="/images/icons/svg/social-education.svg" alt="icon"/>
                                        <p class="m-0">{{education}}</p>
                                    </div>
                                    <div class="info">
                                        <b-img src="/images/icons/svg/social-job.svg" alt="icon"/>
                                        <p class="m-0">{{job}}</p>
                                    </div>
                                    <div class="info">
                                        <b-img src="/images/icons/svg/social-location.svg" alt="icon"/>
                                        <p class="m-0">{{location}}</p>
         
                                    </div>
                                </b-col>
                            </b-row>

                        </div>

                        <!--gallery-->
                        <div class="social-myprofile-gallery mt-3 ">
                            <h2>{{firstName}} {{lastName}}'s Gallery</h2>
                            <b-row>
                                <b-col sm="4" v-for="(img, index) in gallery" :key="index">
                                    <b-img class="gallery-img" :src="img" alt="img"></b-img>

                                </b-col>
                            </b-row>
                        </div>
                    </div>
                </div>
            </b-container>
        </div>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    layout: 'withoutNavbar',
    data() {
        return {
            user: {},
            coverImg:'/images/background-placeholder.png',
            profileURL:'/images/placeholder.jpg',
            firstName: '',
            lastName: '',
            bio:'',
            isFriend: false,
            friendRequestSent: false,
            location:'Cairo, Egypt',
            education:'Faculty of Engineering - Cairo University',
            job:'Digital Product Designer',
            showpopover:false,
            gallery:[
            ],
            
        }
    },
    computed: {
        locale() {
            return this.$store.getters['locale/locale']
        }
    },
    async fetch() {
        try {
            let userData = await axios.get('/my/social/profile/' + this.$route.params.userId);
            console.log('user data >> ', userData.data.data);
            this.user = userData.data.data;

            console.log('status >> ', this.user['friendship-status'] == 'friend', this.user['friendship-status'])
            if(this.user['friendship-status'] == 'friend')
                this.isFriend = true
            else if(this.user['friendship-status'] == 'friend-request-send') {
                this.friendRequestSent = true;
            }

            if(this.user.details) {
                this.firstName = this.user.details.first_name;
                this.lastName = this.user.details.last_name;
            }

            if(this.user.details.user_details) {
                this.coverImg = this.user.details.user_details.cover_image_url;
                this.profileURL = this.user.details.user_details.image_url;
                this.bio = this.user.details.user_details.description;
                this.education = this.user.details.user_details.education;
                this.job = this.user.details.user_details.job_title;
                this.location = this.user.details.user_details.address
            }

            this.gallery = this.user.gallery.length > 0 ? this.user.gallery : ['/images/placeholder.jpg'];

        } catch (error) {
            console.log('error >> ', error)
        }
    },
    methods: {
        hidePopOver() {
            this.showpopover = false
        },
        async addFriend() {
            try {
                this.friendRequestSent = true;
                let addFriend = await axios.post('/my/social/friendrequests', {
                    sender_user_id: this.$store.getters['auth/userId'],
                    receiver_user_id: this.$route.params.userId
                }, {
                    headers: {
                        Authorization: this.$store.getters['auth/token']
                    }
                })
            console.log('add friend >> ', addFriend);

            } catch (error) {
                console.log('error >> ', error);
            }
        },
        async removeFriend() {
            let deleteFriend = await axios.delete('/my/social/friends/user/' + this.$store.getters['auth/userId'] + '/friend/' + this.user.details.id);
            console.log('deleted >> ', deleteFriend)
            this.isFriend = false;
            this.hidePopOver()
        },
        async createChat() {
            try {
                let initiateChat = await axios.post('/my/chatting/initiate', {
                    title: 'private',
                    users: [this.user.details.id, this.$store.getters['auth/userId']],
                    created_by: this.$store.getters['auth/userId']
                });
                console.log('initiated >> ', initiateChat.data.data);
                this.$router.push('/' + this.locale + '/social/chat/' + initiateChat.data.data.id);
            } catch (error) {
                console.log('error >> ', error);
            }
        }
    }
}
</script>