<template>
    <div class="all-rooms">
        <!--side bar-->

        <!--rooms-->
        <b-container>
            <div class="all-rooms-container p-4 mt-4 mb-4">
                <div>
                    <div class="rooms-container-header d-flex">
                        <h2 class="title">Admin Rooms</h2>
                        <!-- <nuxt-link class="ml-auto see-more" to="/">See more</nuxt-link> -->
                    </div>
                    <div class="body" v-if="adminRooms && adminRooms.length > 0">
                        <b-row>
                            <b-col sm="3" v-for="(room, index) in adminRooms" :key="index">
                                <div class="single-room" >
                                    <b-img :src="room.image_url ? room.image_url : '/images/background-placeholder.png'" alt="room"/>
                                    <div class="title text-center">
                                        {{ room.name }}
                                    </div>
                                    <nuxt-link :to="'/' + locale + '/social/rooms/' + room.id">
                                        <b-button variant="default" class="bg-primary-1 no-shadow color-white text-white text-center w-100">Join Room</b-button>
                                    </nuxt-link>
                                </div>
                            </b-col>
                        </b-row>
                    </div>

                    <div class="text-center mt-3">
                        <b-button v-if="!noMore.admin" @click="moreAdminRooms(usersRooms.length,8)" variant="default"  class="bg-primary-opacity-1 no-shadow color-primary w-25">
                            <span v-if="!loading.getMoreAdminRooms">{{$t("chat.more")}}</span>
                            <b-spinner type="grow" v-if="loading.getMoreAdminRooms" small class="spinner-primary"></b-spinner> 
                        </b-button>
                    </div>
                </div>

                <div class="mt-4">
                    <div class="rooms-container-header d-flex">
                        <h2 class="title">Users Rooms</h2>
                        <!-- <nuxt-link class="ml-auto see-more" to="/">See more</nuxt-link> -->
                    </div>
                    <div class="body" v-if="usersRooms && usersRooms.length > 0">
                        <b-row>
                            <b-col sm="3" v-for="(room, index) in usersRooms" :key="index">
                                <div class="single-room" >
                                    <b-img :src="room.image_url ? room.image_url : '/images/background-placeholder.png'" alt="room"/>
                                    <div class="title text-center">
                                        {{ room.name }}
                                    </div>
                                    <nuxt-link :to="'/' + locale + '/social/rooms/' + room.id">
                                        <b-button variant="default" class="bg-primary-1 no-shadow color-white text-white text-center w-100">Join Room</b-button>
                                    </nuxt-link>
                                </div>
                            </b-col>
                        </b-row>
                    </div>

                    <div class="text-center mt-3">
                        <b-button v-if="!noMore.users" @click="moreUsersRooms(usersRooms.length,8)" variant="default"  class="bg-primary-opacity-1 no-shadow color-primary w-25">
                            <span v-if="!loading.getMoreUsersRooms">{{$t("chat.more")}}</span>
                            <b-spinner type="grow" v-if="loading.getMoreUsersRooms" small class="spinner-primary"></b-spinner> 
                        </b-button>
                    </div>
                </div>
            </div>
        </b-container>

    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            adminRooms: [],
            usersRooms: [],
            loading:{
                getMoreUsersRooms:false,
                getMoreAdminRooms:false
            },
            noMore:{
                users:false,
                admin:false
            }
        }
    },
    async fetch() {
        // let roomsData = await axios.get('/my/public-rooms');
        // console.log('rooms >> ', roomsData.data.data);
        // this.adminRooms = roomsData.data.data['admins-rooms'];
        // this.usersRooms = roomsData.data.data['users-rooms'];

        //admin rooms request
        let adminRooms = await axios.get(`/my/rooms/creator/admin/skip/0/take/8`)
        this.adminRooms = adminRooms.data.data
        if(adminRooms.data.data.length < 8) {
            this.noMore.admin = true
        }

        //users rooms request
        let usersRooms = await axios.get(`/my/rooms/creator/user/skip/0/take/8`)
        this.usersRooms = usersRooms.data.data
        if(usersRooms.data.data.length < 8) {
            this.noMore.users = true
        }



    },
    computed: {
        locale() {
            return this.$store.getters['locale/locale']
        }
    },
    methods:{
        moreUsersRooms(skip,take) {
            if(!this.loading.getMoreUsersRooms) {
                this.loading.getMoreUsersRooms = true
                axios.get(`/my/rooms/creator/user/skip/${skip}/take/${take}`)
                .then(res=>{
                    this.loading.getMoreUsersRooms = false
                    this.usersRooms = [...this.usersRooms, ...res.data.data]
                     this.hideShowMoreReviews = false
                    if(res.data.data.length < take) {
                        this.noMore.users = true
                    }
                }).catch(()=>{
                    this.loading.getMoreUsersRooms = false
                })
            }
        },
        moreAdminRooms(skip,take) {
            if(!this.loading.getMoreAdminRooms) {
                this.loading.getMoreAdminRooms = true
                axios.get(`/my/rooms/creator/admin/skip/${skip}/take/${take}`)
                .then(res=>{
                    this.loading.getMoreAdminRooms = false
                    this.adminRooms = [...this.adminRooms, ...res.data.data]
                     this.hideShowMoreReviews = false
                    if(res.data.data.length < take) {
                        this.noMore.admin = true
                    }
                }).catch(()=>{
                    this.loading.getMoreAdminRooms = false
                })
            }
        }
    }
}
</script>