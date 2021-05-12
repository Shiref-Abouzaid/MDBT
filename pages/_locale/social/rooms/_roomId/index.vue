<template>
    <div class="social-chat">
        <!--social nav bar-->

        <!--chats-->
        <b-container>
            <b-row class="mt-3">
                <!--persons chats-->
                <b-col sm="3" class="pr-sm-2 mb-sm-5">
                    <div class="chats-persons chat-box  h-100">
                        <div class="chat-header">
                            <b-row>
                                <b-col cols="5" >
                                    <div class="title">
                                        Chats
                                    </div>
                                </b-col>
                                <b-col cols="7">
                                    <div class="create-group" @click="$bvModal.show('creatGroup')">
                                        <img src="/images/icons/svg/social-creat-group.svg"  alt="icnon">
                                        <span class="bold">Create Room</span>
                                    </div>
                                </b-col>
                            </b-row>
                        </div>

                        <!--persons tabs-->
                        <div class="users-select room-chat-select">
                            <!--user-chat head-->
                            <div class="mt-2">
                                <b-button v-b-toggle.collapse-admin-rooms variant="default" class="bg-secondary-opacity-1 d-flex admin-rooms color-secondary w-100 no-shadow">
                                    <span>Admin Rooms</span>
                                    <b-img src="/images/icons/svg/social-arrow-bottom.svg" alt="icon" class="icon"/>
                                </b-button>
                                <b-collapse id="collapse-admin-rooms" class="mt-2">
                                    <nuxt-link :to="'/' + locale + '/social/rooms/' + room.id" v-for="room in suggestedAdminRooms" :key="room.id">
                                        <div class="single-chat-room-select">
                                            {{ room.name }}
                                        </div>
                                    </nuxt-link>

                                    <b-button  v-if="!noMore.admin" @click="moreAdminRooms(suggestedAdminRooms.length, 8)" variant="default" class="no-shadow bg-primary-opacity-1 color-primary text-center p-2 mt-1 w-100">
                                        <span v-if="!loading.getMoreAdminRooms">Show More</span>
                                        <b-spinner type="grow" v-if="loading.getMoreAdminRooms" small class="spinner-primary"></b-spinner> 
                                    </b-button>
                                </b-collapse>
                            </div>

                            <div class="mt-2">
                                <b-button v-b-toggle.collapse-users-rooms variant="default" class="bg-secondary-opacity-1 d-flex admin-rooms color-secondary w-100 no-shadow">
                                    <span>Users Rooms</span>
                                    <b-img src="/images/icons/svg/social-arrow-bottom.svg" alt="icon" class="icon"/>
                                </b-button>
                                <b-collapse id="collapse-users-rooms" class="mt-2">
                                    <nuxt-link :to="'/' + locale + '/social/rooms/' + room.id" v-for="room in sugesstedUserRooms" :key="room.id">
                                        <div class="single-chat-room-select">
                                            {{ room.name }}
                                        </div>
                                    </nuxt-link>

                                    <b-button  v-if="!noMore.users" @click="moreUsersRooms(sugesstedUserRooms.length, 8)" variant="default" class="no-shadow bg-primary-opacity-1  mt-1 color-primary text-center p-2 w-100">
                                        <span v-if="!loading.getMoreUsersRooms">Show More</span>
                                        <b-spinner type="grow" v-if="loading.getMoreUsersRooms" small class="spinner-primary"></b-spinner> 
                                    </b-button>
                                </b-collapse>
                            </div>

                        </div>
                    </div>
                </b-col>

                <!--chat box-->
                <b-col sm="6" >
                    <div class="chat-box chat-messages-box mb-sm-5">
                        <div class="chat-header">
                            <b-row>
                                <!--pic and name and status-->
                                <b-col cols="10" class="p-0">
                                    <div class="title">
                                        <img v-if="room.image_url" :src="room.image_url" alt="">
                                        <span>{{ room.name }}</span>
                                    </div>
                                </b-col>
                                <b-col cols="2" class="tabs-container">
                                    <div class="icon-container" @click="$bvModal.show('roomSetting')">
                                        <b-img src="/images/icons/svg/social-room-setting.svg" alt="icon"/>
                                    </div>
                                </b-col>
                            </b-row>
                        </div>


                        <!--messages box-->
                        <b-row class="flex-nowrap overflow-hidden">
                            <!--if media is open or closed -->
                            <b-col cols="12"  class="scroll-container">
                                <div class="scrollable-box-messages" @scroll="loadMoreMessages()">

                                    <!-- <div class="date">
                                        <span>April 4, 2020</span>
                                    </div> -->
                                   <div class="text-center" style="position:sticky;top:3rem" v-if="loading.moremessages">
                                        <b-spinner class="spinner-primary" small  type="grow" label="Spinning"></b-spinner>
                                    </div>
                                    <div class="chat-content" v-for="message in messages" :key="message.id">
                                        <!--recived message-->
                                        <div class="recived-message message-container" v-if="message.user_id != $store.getters['auth/userId']">
                                            <!--profile photo-->
                                            <img class="profile-image" :src="(message.user_data && message.user_data.image_url) ? message.user_data.image_url : '/images/placeholder.jpg'" alt="">
                                            <!--message-->
                                            <div class="message">
                                                <template v-if="message.attachment">
                                                    <img v-if="message.attachment.content && (message.attachment.type == 'image')" :src="message.attachment.content" alt="sent photo.">
                                                    <video v-else-if="message.attachment.content && (message.attachment.type == 'video')" width="320" height="240" controls>
                                                        <source :src="message.attachment.content">
                                                        <!-- <source src="movie.ogg" type="video/ogg"> -->
                                                        <!-- Your browser does not support the video tag. -->
                                                    </video>
                                                </template>
                                                <p class="m-0" v-if="message.post_body">{{ message.post_body }}</p>
                                                <div class="time">
                                                    {{ message.created_at | moment("from", "now") }}
                                                </div>
                                            </div>

                                        </div>
                                        <div class="sent-message message-container" v-else>
                                            <!--message-->
                                            <div class="message">
                                                <template v-if="message.attachment">
                                                    <img v-if="message.attachment.content && (message.attachment.type == 'image')" :src="message.attachment.content" alt="sent photo.">
                                                    <video v-else-if="message.attachment.content && (message.attachment.type == 'video')" width="320" height="240" controls>
                                                        <source :src="message.attachment.content">
                                                        <!-- <source src="movie.ogg" type="video/ogg"> -->
                                                        <!-- Your browser does not support the video tag. -->
                                                    </video>
                                                </template>
                                                <p class="m-0" v-if="message.post_body">{{ message.post_body }}</p>
                                                <div class="time">
                                                    {{ message.created_at | moment("from", "now") }}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- <div class="recived-message message-container ">
                                        <div class="profile-image" :style="`background-image:url('${'https://pbs.twimg.com/profile_images/730985390543278080/W0rPqLGq.jpg'}`"></div>
                                        <div class="message">
                                            <p class="m-0">There Is No Other Side, You Turn Yourself Around. That’s What It’s All About, Sometimes Life’s A sad And Then You Keep Living.</p>
                                            <div class="time">
                                                10:34 am
                                            </div>
                                        </div>
                                    </div> -->

                                    <!-- <div class="sent-message message-container ">
                                        <div class="message">
                                            <p class="m-0">Life’s a sad and then you die, right?</p>
                                            <div class="time">
                                                10:35 am
                                            </div>
                                        </div>
                                    </div> -->

                                    <!-- <div class="sent-message message-container ">
                                        <div class="message">
                                            <p class="m-0">Sometimes life’s a sad ba and then you keep living</p>
                                            <div class="time">
                                                10:36 am
                                            </div>
                                        </div>
                                    </div> -->
                                    
                                    <!-- <div class="recived-message message-container ">
                                        <div class="profile-image" :style="`background-image:url('${'https://pbs.twimg.com/profile_images/730985390543278080/W0rPqLGq.jpg'}`"></div>
                                        <div class="message">
                                            <p class="m-0">They agree that it’s a nice night and decide to just look up at the sky. It was the perfect way to end the series</p>
                                            <div class="time">
                                                10:37 am
                                            </div>
                                        </div>
                                    </div> -->

                                    <!-- <div class="recived-message message-container ">
                                        <div class="profile-image" :style="`background-image:url('${'https://pbs.twimg.com/profile_images/730985390543278080/W0rPqLGq.jpg'}`"></div>
                                        <div class="message">
                                            <p class="m-0">It Gets Easier</p>
                                            <div class="time">
                                                10:38 am
                                            </div>
                                        </div>
                                    </div> -->


                                    <!-- <div class="recived-message message-container ">
                                        <div class="profile-image" :style="`background-image:url('${'https://pbs.twimg.com/profile_images/730985390543278080/W0rPqLGq.jpg'}`"></div>
                                        <div class="message">
                                            <img src="https://pbs.twimg.com/profile_images/730985390543278080/W0rPqLGq.jpg" class="w-100" alt="sent photo.">
                                            <div class="time">
                                                10:38 am
                                            </div>
                                        </div>
                                    </div> -->

                                    <!-- <div class="sent-message message-container ">
                                        <div class="message">
                                            <p class="m-0">
                                                <img src="https://i.pinimg.com/originals/5d/42/d4/5d42d4e1f5fb2d52c7bbae093a34bff6.jpg" class="w-100" alt="sent photo.">
                                            </p>
                                            
                                            <div class="time">
                                                10:39 am
                                            </div>
                                        </div>
                                    </div> -->

                                </div>
                                <!--input box to send messages-->
                                <div class="input-box">
                                    <form @submit.prevent="sendMessage">
                                        <b-input-group>
                                            <template #prepend>
                                                <b-input-group-text >
                                                    <input @change="onFileSelected($event)" type="file" hidden id="sendImg">
                                                    <label for="sendImg" class="m-0">
                                                        <b-img src="/images/icons/svg/social-image-gery.svg" alt="icon"/>
                                                    </label>
                                                    <div class="attach" v-if="attach">
                                                        <template v-if="attachType == 'image'">
                                                            <img class="image" :src="attachUrl" alt="">
                                                            <img class="icon" style="cursor: pointer" src="/images/icons/svg/reservation-remove.svg" alt="">
                                                        </template>
                                                        <template v-else-if="attachType == 'video'">
                                                            <video class="video">
                                                                <source :src="attachUrl">
                                                                <!-- <source src="movie.ogg" type="video/ogg"> -->
                                                                <!-- Your browser does not support the video tag. -->
                                                            </video>
                                                        </template>
                                                    </div>
                                                    
                                                </b-input-group-text>
                                            </template>
                                            <b-form-input v-model="message" placeholder="Type your message…"></b-form-input>
                                            <b-input-group-append>
                                                <b-button type="submit" variant="default">Send</b-button>
                                            </b-input-group-append>
                                        </b-input-group>
                                    </form>
                                </div>
                            </b-col>

                        </b-row>                   
                    </div>
                </b-col>

                <b-col sm="3" class="pl-sm-2" >
                    <div class="chat-box chat-messages-box mb-sm-5">
                        <div class="chat-header pl-0">
                            <div class="title pt-2">
                                Active Users
                            </div>
                        </div>
                        <div class="active-users">
                            <div class="user d-flex" v-for="(member, id) in members" :key="id">
                                <!-- <div class="profile-image">
                                    <img src="https://i.pinimg.com/originals/5d/42/d4/5d42d4e1f5fb2d52c7bbae093a34bff6.jpg" alt="profile image" class="">
                                </div> -->
                                <div class="name">{{member.name}}</div>
                            </div>
                            <!-- <div class="user d-flex">
                                <div class="profile-image">
                                    <img src="https://i.pinimg.com/originals/5d/42/d4/5d42d4e1f5fb2d52c7bbae093a34bff6.jpg" alt="profile image" class="">
                                </div>
                                <div class="name">Ahmed</div>
                            </div>
                            <div class="user d-flex">
                                <div class="profile-image">
                                    <img src="https://i.pinimg.com/originals/5d/42/d4/5d42d4e1f5fb2d52c7bbae093a34bff6.jpg" alt="profile image" class="">
                                </div>
                                <div class="name">Ahmed</div>
                            </div>
                            <div class="user d-flex" v-for="s in 10" :key="s">
                                <div class="profile-image">
                                    <img src="https://i.pinimg.com/originals/5d/42/d4/5d42d4e1f5fb2d52c7bbae093a34bff6.jpg" alt="profile image" class="">
                                </div>
                                <div class="name">Todd</div>
                            </div> -->
                        </div>
                    </div>
                </b-col>
            </b-row>
        </b-container>

        <!--creat Group modal-->
        <b-modal content-class="create-group-popup create-rooms-popup"  id="creatGroup" size="lg" centered  >
            <!--header modal-->
            <template #modal-title>
                <div class="title">Create Room</div>
            </template>
            <!--modal header close-->
            <template #modal-header-close>
                <b-img class="close-icon" src="/images/icons/svg/social-close-btn.svg" alt="icon"/>
            </template>
            <!--body modal-->
            <div class="form-container">
                <b-form>
                    <!--Room name-->
                    <div>
                        <label for="room-name">Room Name</label>
                        <b-form-input v-model="roomName" id="room-name" class="text-input" type="text" placeholder="Room Name"></b-form-input>
                    </div>


                    <!--Room Cover-->
                    <div class="friends">
                        <div class="lable mb-2">Room Cover</div>
                        <!--cover img-->
                        <div class="selected-cover mb-3" v-if="selectedCover">
                            <b-img :src="cover" alt="cover" />
                        </div>
                        <!--label-->
                        <label for="room-cover" class="w-100 bg-primary-opacity-1 p-2 color-primary d-flex text-center upload-photo">
                            <b-img src="/images/icons/svg/social-photo-cloud.svg" alt="icon"/>
                            <span v-if="!selectedCover">Upload Photo</span>
                            <span v-if="selectedCover">Change Photo</span>
                        </label>
                        <!--hidden input-->
                        <input @change="onImagePicked" id="room-cover"  hidden type="file">

                        <!--remove img btn-->
                        <b-button @click="removePhoto" variant="default" v-if="selectedCover" class="remove font-weight-bold mt-4 bg-red-opacity-1 no-shadow color-red w-100 p-2">
                            Remove Photo
                        </b-button>
                    </div> 
                </b-form>
            </div>

            <!--footer medal-->
            <template #modal-footer>
                <!--Set disabled to button to show to make it gery -->
                <b-button @click="createRoom" class="b-block text-center p-2 w-100 create-room-btn no-shadow mt-5 mb-0 mr-0 ml-0" variant="default">
                    Create Public Room
                </b-button>
            </template>
        </b-modal>

        <!--room setting modal-->
        <b-modal content-class="create-group-popup create-rooms-popup"  id="roomSetting" size="lg" centered  >
            <!--header modal-->
            <template #modal-title>
                <div class="title">Room Setting</div>
            </template>
            <!--modal header close-->
            <template #modal-header-close>
                <b-img class="close-icon" src="/images/icons/svg/social-close-btn.svg" alt="icon"/>
            </template>
            <!--body modal-->
            <div class="form-container">
                <b-form>
                    <!--Room name-->
                    <div>
                        <label for="room-name">Room Name</label>
                        <b-form-input id="room-name" v-model="roomNameToChange" class="text-input" type="text" placeholder="Room Name"></b-form-input>
                    </div>


                    <!--Room Cover-->
                    <div class="friends">
                        <div class="lable mb-2">Room Cover</div>
                        <!--cover img-->
                        <div class="selected-cover mb-3" v-if="selectedCover">
                            <span class="remove-img" @click="room.image_url = ''; roomDetails.image = ''">Remove Photo</span>
                            <div v-if="roomDetails.image">
                                <b-img :src="roomDetails.image" alt="cover" ></b-img>
                            </div>
                            <div v-if="room.image_url && !roomDetails.image">
                                <b-img :src="room.image_url" alt="cover" />
                            </div>
                        </div>
                        <!--label-->
                        <label for="room-cover" class="w-100 bg-primary-opacity-1 p-2 color-primary d-flex text-center upload-photo">
                            <b-img src="/images/icons/svg/social-photo-cloud.svg" alt="icon"/>
                            <span v-if="!selectedCover">Upload Photo</span>
                            <span v-if="selectedCover">Change Photo</span>
                        </label>
                        <!--hidden input-->
                        <input id="room-cover" @change="onCoverPicked"  hidden type="file">

                        <!--remove img btn-->
                        <b-button variant="default" @click="deleteRoom()" v-if="selectedCover" class="remove font-weight-bold mt-4 bg-red-opacity-1 no-shadow color-red w-100 p-2">
                            Delete Public Room
                        </b-button>
                    </div> 
                </b-form>
            </div>

            <!--footer medal-->
            <template #modal-footer>
                <!--Set disabled to button to show to make it gery -->
                <b-button @click="updateChanges()" class="b-block text-center p-2 w-100 create-room-btn no-shadow mt-5 mb-0 mr-0 ml-0" variant="default">
                    
                    <span v-if="!loading.updateRoom">Save Changes</span>
                    <b-spinner type="grow" small v-if="loading.updateRoom"></b-spinner> 
                </b-button>
                <!-- <b-button @click="deleteRoom" class="b-block text-center p-2 w-100 delete-room-btn no-shadow mt-5 mb-0 mr-0 ml-0" variant="default">
                    Delete Public Room
                </b-button> -->
            </template>
        </b-modal>
    </div>
</template>
<script>
import Pusher from 'pusher-js'
import axios from 'axios'

export default {
    name:'AllRooms',
    layout: 'withoutNavbar',
    data() {
        return {
            pusher: null,
            auctionChannel: null,
            channelName: '',
            roomDetails:{
                name:'',
                image:''
            },
            members: [],
            allowToGetMore:true,
            message: '',
            messages: [],
            selectedCover: true,
            room: {},
            suggestedAdminRooms: [],
            sugesstedUserRooms: [],
            cover: '',
            roomName:'',
            attachType: '',
            attachUrl: '',
            attach: '',
            loading:{
                moremessages:true,
                updateRoom:false,
                getMoreUsersRooms:false,
                getMoreAdminRooms:false
            },
            roomNameToChange:'',

            noMore:{
                users:false,
                admin:false,
                messages:false,
            }
        }
    },
    async fetch() {
        let roomData = await axios.get('/my/rooms/' + this.$route.params.roomId);
        console.log('room >> ', roomData.data.data);
        this.room = roomData.data.data.room;
        this.roomNameToChange = roomData.data.data.room.name;
        this.messages = roomData.data.data.room.posts;
        this.messages.reverse();
        this.suggestedAdminRooms = roomData.data.data['suggested-admin-rooms'];
        this.sugesstedUserRooms = roomData.data.data['suggested-users-rooms'];

        this.scrollToBottomOfChat()
    },
    computed: {

        locale() {
            return this.$store.getters['locale/locale'];
        }
    },
    watch: {

        $route(from, to) {
            this.$fetch();
            this.scrollToBottomOfChat();

            if(this.pusher)
                this.pusher.unsubscribe(this.channelName);

            console.log('pusher in watch', this.pusher, this.channelName);

            this.initPusher();
        }
    },
    mounted() {
        this.scrollToBottomOfChat();
        this.initPusher();
    },
    methods:{

        onCoverPicked(event) {
            // console.log(event);
            this.room.image_url = ''
            let file = event.target.files[0];
            if (file) {
                const fileReader = new FileReader();
                fileReader.addEventListener("load", () => {
                // this.imageUrl = fileReader.result
                this.roomDetails.image = fileReader.result;
                });
                fileReader.readAsDataURL(file); //used to preview image in the browser, considered as a string
            } else {
                this.roomDetails.image = "";
            }
        },
        //get more users rooms
        moreUsersRooms(skip,take) {
            if(!this.loading.getMoreUsersRooms) {
                this.loading.getMoreUsersRooms = true
                axios.get(`/my/rooms/creator/user/skip/${skip}/take/${take}`)
                .then(res=>{
                    this.loading.getMoreUsersRooms = false
                    this.sugesstedUserRooms = [...this.sugesstedUserRooms, ...res.data.data]
                     this.hideShowMoreReviews = false
                    if(res.data.data.length < take) {
                        this.noMore.users = true
                    }
                }).catch(()=>{
                    this.loading.getMoreUsersRooms = false
                })
            }
        },

        //get more admin rooms
        moreAdminRooms(skip,take) {
            if(!this.loading.getMoreAdminRooms) {
                this.loading.getMoreAdminRooms = true
                axios.get(`/my/rooms/creator/admin/skip/${skip}/take/${take}`)
                .then(res=>{
                    this.loading.getMoreAdminRooms = false
                    this.suggestedAdminRooms = [...this.suggestedAdminRooms, ...res.data.data]
                     this.hideShowMoreReviews = false
                    if(res.data.data.length < take) {
                        this.noMore.admin = true
                    }
                }).catch(()=>{
                    this.loading.getMoreAdminRooms = false
                })
            }
        },
        
        updateChanges(){
            this.loading.updateRoom = true
            let obj = {
                name:this.roomNameToChange
            }
            if(this.roomDetails.image || this.room.image_url == '') {
                obj.image = this.roomDetails.image
            }
            axios.put(`my/rooms/${this.$route.params.roomId}`, obj)
            .then(res=>{
                console.log(res)
                this.loading.updateRoom = false;
                this.$bvModal.hide('roomSetting')
                this.room.name = this.roomNameToChange
                this.$bvToast.toast(`Room has been updated successfully`, {
                    title: 'Removed Successfully',
                    autoHideDelay: 5000,
                    variant:'default'
                })
            })
            .catch(err=>{
                this.loading.updateRoom = false
                this.$bvToast.toast(err.response.data.message, {
                    title: 'Error',
                    autoHideDelay: 5000,
                    variant:'danger'
                })

            })
        },
        initPusher() {
            // if(process.client) {

                console.log('in create >>>>>>>>>', this.channelName);

                this.pusher = new Pusher(`dpctgdv35p33t63d3eva`, {
                    encrypted: false,
                    cluster: 'eu',
                    forceTLS: false,
                    httpHost: 'synchronizer.tbdm.net',
                    statsHost: 'http://synchronizer.tbdm.net/stats',
                    wsHost: 'synchronizer.tbdm.net',
                    wsPort: 6001,
                    authEndpoint: 'https://developers.api.tbdm.net/v-1872020/' + this.locale + '/my/group/' + this.$route.params.roomId + '/auth/presence',
                    auth: {
                        headers: {
                            Authorization: this.$store.getters['auth/token']
                        }
                    }

                });

                

                console.log('auction route param id >> ', this.$route.params.roomId);

                this.channelName = 'presence-group.' + this.$route.params.roomId;
                console.log('auction route param id >> ', this.$route.params.roomId, this.channelName);
                this.auctionChannel = this.pusher.subscribe('presence-group.' + this.$route.params.roomId);
                console.log('auction channel', this.auctionChannel, this.auctionChannel.members);

                this.auctionChannel.bind('pusher:subscription_succeeded', members => {
                    console.log('members >. ', members);
                    //delete myself from the presence channel
                    delete members.members[this.$store.getters['auth/userId']];
                    let allMembers = []
                    let obj = {}
                    for (const key in members.members) {
                        console.log('key>> ', key)
                        allMembers.push({
                            id: key,
                            name: members.members[key].username
                        })
                    }
                    this.members = allMembers;
                    console.log('members arr >> ', this.members)
                });

                this.auctionChannel.bind('pusher:member_added', member => {
                    // for example:
                    console.log('members before >> ', this.members);
                    console.log('member added >> ', member);
                    this.members.push({
                        id: member.id,
                        name: member.info.username
                    })
                    // this.members= {}
                    // this.addMember(member);
                    console.log('all members >> ', this.members);
                });

                this.auctionChannel.bind('pusher:member_removed', member => {
                    // for example:
                    console.log('all members >> ', this.members);
                    console.log('member removed >> ', member);
                    // delete this.members[member.id];
                    // this.removeMemmber(member)
                    this.members = this.members.filter(mem => {
                        return mem.id != member.id
                    })
                });

                let self = this;
                let userId = this.$store.getters['auth/userId']
                this.auctionChannel.bind('App\\Events\\PublicGroupNewPost', function(data){
                    // let receivedMessage = data.message;
                    console.log('data >> ', data);
                    console.log('data post >> ', data.post);

                    if(data.post.user_id == userId)
                        return;

                    self.messages.push(data.post);
                    self.scrollToBottomOfChat();
                })


                // Pusher.logToConsole = true;
                // console.log('pusher instance >> ',pusher);

            // }
        },
        // removeMemmber(member) {
        //     delete this.members[member.id];
        // },
        // addMember(member) {
        //     this.members[member.id] = member.info;
        // },
        async sendMessage() {
            console.log('message >> ', this.message, new Date());

            let messageDate = new Date().toISOString().substring(0, 10);
            let messageTime = new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();
            console.log('date >. ', messageDate + " " + messageTime)

            // let fileUrl = null;
            // if(this.attach)
            //     fileUrl = window.URL.createObjectURL(this.attach);

            try {
                this.messages.push({
                    attachment: {
                        content: this.attachUrl,
                        type: this.attachType
                    },
                    post_body: this.message,
                    created_at: messageDate + " " + messageTime,
                    user_id: this.$store.getters["auth/userId"],
                    user_data: {
                        image_url: null
                    }
                });
                //free up file resource
                // if(fileUrl)
                //     window.URL.revokeObjectURL(fileUrl)

                console.log('messages log >> ', this.messages, this.attach);
                let altMessage = this.message;
                let altAttach = this.attach;
                this.message = '';
                this.attach = '';

                let formData = new FormData();
                formData.append('room_id', this.$route.params.roomId)
                formData.append('user_id', this.$store.getters['auth/userId'])
                formData.append('post_body', altMessage)
                formData.append('attachment', altAttach)

                let messageSending = await axios.post('/my/rooms/post-message', formData, {
                    headers: {
                        Authorization: this.$store.getters['auth/token'],
                        'content-Type': 'multipart/form-data'
                    }
                });
                console.log('message sending >> ', messageSending);

            } catch (error) {
                console.log('send error >> ', error);
            }

            this.message = '';
            this.scrollToBottomOfChat();
        },
        //scroll to bottom of chat
        scrollToBottomOfChat() {
            setTimeout(()=>{
                if(process.client) {
                    var container = this.$el.querySelector(".scrollable-box-messages");
                    container.scrollTop = container.scrollHeight;
                }
            },10)
        },
        // loadMoreMessages() {
        //     if(process.client) {
        //         let container = this.$el.querySelector(".scrollable-box-messages");
        //         let scrollTop    = container.scrollTop
        //         if (scrollTop < 1) {
        //             console.log('should get more messages')
        //             this.loading.moremessages = true
        //         } else {
        //             this.loading.moremessages = false
        //         }
        //     }
        // },
        loadMoreMessages() {

            if(process.client) {
                let container = this.$el.querySelector(".scrollable-box-messages");
                let scrollTop    = container.scrollTop
                if (scrollTop < 10 && scrollTop > -10) {
                    
                    if(this.allowToGetMore && !this.noMore.messages) {
                        this.loading.moremessages = true
                        this.allowToGetMore = false
                        axios.get(`/my/chatting/rooms/${this.$route.params.roomId}/messages/skip/${this.messages.length}/take/10`)
                        .then(res=>{
                            this.loading.moremessages = false
                            console.log(res)
                            this.allowToGetMore = true
                            this.messages = [...res.data.data.messages.reverse(), ...this.messages]
                            if(res.data.data.messages.length < 10) {
                                this.noMore.messages = true
                            } 
                        })
                        .catch(err=>{
                            this.loading.moremessages = false
                            this.allowToGetMore = true
                        })
                    }

                } else {
                    this.loading.moremessages = false
                }
            }
        },
        async createRoom() {
            console.log('room created');
            let createdRoom = {
                name: this.roomName,
                creator_id: this.$store.getters['auth/userId'],
                image: this.cover
            }
            console.log('room info >> ', createdRoom);
            try {
                let createRoom = await axios.post('/my/rooms/create', createdRoom);
                this.$bvModal.hide('creatGroup')
                console.log('room creted >> ', createRoom);
                this.$router.push('/' + this.locale + '/social/rooms/' + createRoom.data.data.id)
            } catch (error) {
                console.log('error >> ', error);
            }
            
        },
        deleteRoom() {
            console.log('room deleted')
        },
        onImagePicked(event) {
            console.log("picked");
            // console.log(event);
            let file = event.target.files[0];

            if (file) {
                const fileReader = new FileReader();
                fileReader.addEventListener("load", () => {
                // this.imageUrl = fileReader.result
                this.cover = fileReader.result;
                console.log("base 64 >> ", this.cover);
                this.selectedCover = true;
                });
                fileReader.readAsDataURL(file); //used to preview image in the browser, considered as a string
            } else {
                this.cover = "";
            }
        },
        onFileSelected(event) {
            // console.log("picked", event);
            // console.log(event);
            let file = event.target.files[0];
            let fileUrl = window.URL.createObjectURL(file);
            console.log("picked", fileUrl);
            this.attachUrl = fileUrl;
            this.attach = file;

            if(file.type.match('image.*'))
                this.attachType = 'image'
            else if(file.type.match('video.*'))
                this.attachType = 'video'

            console.log('file >> ', this.attach)

            // if (file) {
            //     const fileReader = new FileReader();
            //     fileReader.addEventListener("load", () => {
            //     // this.imageUrl = fileReader.result
            //     this.cover = fileReader.result;
            //     console.log("base 64 >> ", this.cover);
            //     this.selectedCover = true;
            //     });
            //     fileReader.readAsDataURL(file); //used to preview image in the browser, considered as a string
            // } else {
            //     this.cover = "";
            // }
        },
        removePhoto() {
            this.cover = ''
            this.selectedCover = false
        }
    },
    beforeDestroy() {
        console.log('destroyed >> ', this.pusher, this.channelName);
        if(this.pusher)
            this.pusher.unsubscribe(this.channelName);
    }
        
}
</script>

