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
                        <b-row>
                            <b-col sm="4" v-for="(request, index) in requests" :key="index">
                                <div class="friend-card">
                                    
                                    <nuxt-link :to="'/social/user-profile/' + request.id + '/' + request.username" align-v="center" class="w-100 d-flex" >
                                        <b-img class="profile-img" :src="(request.user_details && request.user_details.image_url) ? request.user_details.image_url : '/images/placeholder.jpg'" alt="icon"/>
                                        <div class="name color-night">{{ request.first_name }} {{ request.last_name }}</div>
                                    </nuxt-link>
                                    <b-row class="mt-3 w-100 pr-2">
                                        <b-col cols="10" class="pr-0">
                                            <b-button variant="default" @click="confirm(request.id, index)"  class="bg-primary-opacity-1 color-primary w-100 no-shadow ">Confirm</b-button>
                                        </b-col>
                                        <b-col cols="2">
                                            <b-button @click="deleteFriendship(request.id, index)" variant="default" class="bg-red-opacity-1 no-shadow" >
                                                <b-img src="/images/icons/svg/social-remove.svg" alt="icon"/>
                                            </b-button>
                                        </b-col>
                                    </b-row>
                                </div>

                            </b-col>
                        </b-row>
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
            requests: []
        }
    },
    async fetch() {
        let requestsData = await axios.get('/my/social/friendrequests/user/' + this.$store.getters['auth/userId']);
        console.log('requests >> ', requestsData.data.data);
        this.requests = requestsData.data.data;
    },
    methods: {
        async confirm(friendId, index) {
            try {
                let confrimRequest = await axios.post('/my/social/friendrequests/user/' + this.$store.getters['auth/userId'] + '/friend/' + friendId);
                console.log('confirm >> ', confrimRequest);
                this.requests.splice(index, 1);
            } catch (error) {
                console.log('error >> ', error)
            }
        },
        async deleteFriendship(friendId, index) {
            let deleteRequest = await axios.delete('/my/social/friendrequests/user/' + this.$store.getters['auth/userId'] + '/friend/' + friendId);
            console.log('delete friend >> ', deleteRequest);
            this.requests.splice(index, 1);
        }
    }
}
</script>