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
                                     {{ $t("chat.chats") }}
                                    </div>
                                </b-col>
                                <b-col cols="7">
                                    <div class="create-group" @click="openGroup">
                                        <img src="/images/icons/svg/social-creat-group.svg"  alt="icnon">
                                        <span class="bold">{{ $t("chat.create_group") }}</span>
                                    </div>
                                </b-col>
                            </b-row>
                        </div>

                        <!--persons tabs-->
                        <div class="users-select">
                            <!--user-chat head-->
                            <!-- <nuxt-link to="/">
                                <div class="user active">
                                    <b-row>
                                        <b-col cols="2" >
                                            <div class="user-profile-picture" :style="`background-image:url('${'https://pbs.twimg.com/profile_images/730985390543278080/W0rPqLGq.jpg'}`"></div>
                                        </b-col>
                                        <b-col cols="10">
                                            <div class="user-info">
                                                <div class="name">Bojack</div>
                                                <div class="message">There Is No Other Side, You Turn Yourself Around. That’s What It’s All About</div>
                                            </div>
                                        </b-col>
                                    </b-row>
                                </div>
                            </nuxt-link> -->

                            <!--user-chat head-->
                            <nuxt-link :to="'/' + locale + '/social/chat/' + chat.id" v-for="chat in recentChats" :key="chat.id">
                                <div class="user" :class="{active: chat.id == $route.params.chatId}" v-if="chat.subscriptions.length == 2">
                                    
                                    <div v-for="user in chat.subscriptions" :key="user.id">
                                        <b-row v-if="user.id != $store.getters['auth/userId']">
                                            <b-col cols="2">
                                                <!-- <div class="user-profile-picture" :style="`background-image:url('${'https://pbs.twimg.com/profile_images/730985390543278080/W0rPqLGq.jpg'}`"></div> -->
                                                <img v-if="user.details && user.details.image_url" class="user-img" :src="user.details.image_url" alt="">
                                                <img v-else class="user-img" src="/images/placeholder.jpg" alt="">
                                            </b-col>
                                            <b-col  cols="10">
                                                <div class="user-info">
                                                    <div class="name">{{user.first_name}} {{user.last_name}}</div>
                                                    <!-- <div class="message">There Is No Other Side, You Turn Yourself Around. That’s What It’s All About</div> -->
                                                </div>  
                                            </b-col>
                                        </b-row>
                                    </div>              
                                </div>
                                <div class="user" :class="{active: chat.id == $route.params.chatId}" v-else>
                                    
                                    <b-row>
                                        <b-col  cols="2">
                                            <!-- <div class="user-profile-picture" :style="`background-image:url('${'https://pbs.twimg.com/profile_images/730985390543278080/W0rPqLGq.jpg'}`"></div> -->
                                            <img class="user-img" src="/images/group-img.png" alt="">
                                        </b-col>
                                        <b-col  cols="10">
                                            <div class="user-info">
                                                <div class="name">{{ chat.title }}</div>
                                                <!-- <div class="message">There Is No Other Side, You Turn Yourself Around. That’s What It’s All About</div> -->
                                            </div>  
                                        </b-col>
                                    </b-row>

                                </div>
                            </nuxt-link>
                            <b-button v-if="!noMoreRecentChats" @click="getMorChats(recentChats.length, 10)" variant="default" class="no-shadow bg-primary-opacity-1  mt-1 color-primary text-center p-2 w-100">
                                <span v-if="!loading.moreChats">Show More</span>
                                <b-spinner v-if="loading.moreChats" type="grow" small class="spinner-primary"></b-spinner> 
                            </b-button>
                            <!--user-chat head-->

                            <!-- <nuxt-link to="/">
                                <div class="user notification">
                                    <b-row>
                                        <b-col cols="2">
                                            <div class="user-profile-picture" :style="`background-image:url('${'https://pbs.twimg.com/profile_images/730985390543278080/W0rPqLGq.jpg'}`"></div>
                                        </b-col>
                                        <b-col cols="10">
                                            <div class="user-info">
                                                <div class="name">Bojack</div>
                                                <div class="message">There Is No Other Side, You Turn Yourself Around. That’s What It’s All About</div>
                                            </div>
                                        </b-col>
                                    </b-row>
                                </div>
                            </nuxt-link> -->

                        </div>
                    </div>
                </b-col>

                <!--chat box-->
                <b-col sm="9" class="pl-sm-2">
                    <div class="chat-box chat-messages-box mb-sm-5">
                        <div class="chat-header">
                            <b-row>
                                <!--pic and name and status-->
                                <b-col sm="4" cols="7">
                                    <b-row  align-v="center">
                                        <b-col cols="3">
                                            <div class="header-profile-picture">
                                                <b-img v-if="chatWith && chatWith.details && chatWith.details.image_url" :src="chatWith.details.image_url" alt="user-picture"/>
                                                <b-img v-else src="/images/placeholder.jpg" alt="user-picture"/>
                                            </div>
                                        </b-col>
                                        <b-col cols="9" class="name-status">
                                            <div>
                                                <div class="user-name">
                                                    {{chatName}}
                                                </div>
                                                <!-- <div class="status">
                                                    <span v-if="isOnline" class="online">{{ $t("chat.online") }}</span>
                                                    <span v-if="!isOnline" class="text-secondary">{{ $t("chat.offline") }}</span>
                                                </div> -->
                                            </div>
                                        </b-col>
                                    </b-row>
                                </b-col>
                                
                                <!--friend request sent-->
                                <b-col sm="4" class="d-none d-sm-block">
                                    <transition name="fade">
                                        <div v-if="firendRequestSent" class="friend-request-sent-successfully">
                                          {{ $t("chat.request_success") }}
                                        </div>
                                    </transition>

                                </b-col>

                                <!--taps of add friend, view as , media, block-->
                                <b-col sm="4" cols="5">
                                    <b-row class="h-100 tabs-container justify-content-end">
                                        <!--add friend-->
                                        <!-- <b-col cols="3">
                                            <div class="icon-container" >
                                                <div id="cancelFriendRequest">
                                                    <b-img v-if="firendRequestSent" src="/images/icons/svg/social-friend-request-sent.svg"  alt="icon"/>
                                                </div>

                                                <div>
                                                    <b-img v-if="!firendRequestSent" @click="firendRequestSent = !firendRequestSent" src="/images/icons/svg/social-friend-request.svg"  alt="icon"/>
                                                </div>

                                                <b-popover target="cancelFriendRequest" :show.sync="showpopover" triggers="click blur focus" boundary-padding="10" placement="bottomleft" custom-class="social-block-popover">
                                                        
                                                        <div class="cancel-friend-request-popup" @click="firendRequestSent = false; hidePopOver()">
                                                            <b-img  src="/images/icons/svg/social-friend-request.svg" alt="icon"/>
                                                            <span>  {{ $t("chat.cancel_request") }}</span>
                                                        </div>
                                                </b-popover>
                                            </div>

                                        </b-col> -->
                                        <!--view profile-->
                                        <b-col cols="3" v-if="chatWith">
                                            <nuxt-link :to="'/' + locale + '/user-profile/' + chatWith.id + '/' + chatWith.username">
                                                <div class="icon-container">
                                                    <b-img src="/images/icons/svg/social-view-as.svg"  alt="icon"/>
                                                </div>
                                            </nuxt-link>
                                        </b-col>
                                        <!--view media-->
                                        <!-- <b-col cols="3">
                                            <div class="icon-container" :class="{'active': mediaisOpen}">
                                                <b-img v-if="mediaisOpen"  @click="mediaisOpen = false" src="/images/icons/svg/social-image-active.svg" alt="icon"/>
                                                <b-img v-if="!mediaisOpen"  @click="mediaisOpen = true ; informationIsOpen = false" src="/images/icons/svg/social-image.svg"  alt="icon"/>
                                            </div>
                                        </b-col> -->

                                        <b-col cols="3" v-if="!chatWith && isAdmin">
                                            <div class="icon-container" @click="informationIsOpen = !informationIsOpen; mediaisOpen = false">
                                                <b-img src="/images/icons/svg/social-information.svg"  alt="icon"/>
                                            </div>
                                        </b-col>

                                        <!--block-->
                                        <!-- <b-col cols="3">
                                            <div class="icon-container">
                                                <b-img src="/images/icons/svg/social-block.svg"  alt="icon"/>
                                            </div>
                                        </b-col> -->
                                    </b-row>
                                </b-col>
                            </b-row>
                        </div>


                        <!--messages box-->
                        <b-row class="flex-nowrap overflow-hidden">
                            <!--if media is open or closed -->
                            <b-col :sm="mediaisOpen || informationIsOpen ? 8 : 12"  :cols="mediaisOpen || informationIsOpen ? 7 : 12" class="scroll-container">
                                    <!--input box to send messages-->

                                <div class="scrollable-box-messages" @scroll="loadMoreMessages()">

                                    <!-- <div class="date">
                                        <span>April 4, 2020</span>
                                    </div> -->
                                    <div class="text-center" style="position:sticky;top:3rem" v-if="loading.moremessages">
                                        <b-spinner class="spinner-primary" small  type="grow" label="Spinning"></b-spinner>
                                    </div>

                                    <!--recived message-->
                                    <!-- <div class="recived-message message-container  message-container">
                                        <div class="profile-image" :style="`background-image:url('${'https://pbs.twimg.com/profile_images/730985390543278080/W0rPqLGq.jpg'}`"></div>
                                        <div class="message">
                                            <p class="m-0">Hello Friend</p>

                                        </div>
                                    </div> -->

                                    <!-- <div class="sent-message message-container ">
                                        <div class="message">
                                            <p class="m-0">Hello Bocjak how are you?</p>
                                            <div class="time">
                                                10:33 am
                                            </div>
                                        </div>
                                    </div> -->

                                    <!-- <div class="recived-message message-container  ">
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
                                    
                                    <div class="chat-content" v-for="(message, index) in messages" :key="index">
                                        <div class="recived-message message-container " v-if="message.user_id != $store.getters['auth/userId']">
                                            <!--profile photo-->
                                            <!-- <div class="profile-image" :style="`background-image:url('${(members[message.user_id].details && members[message.user_id].details.image_url) ? members[message.user_id].details.image_url : 'https://pbs.twimg.com/profile_images/730985390543278080/W0rPqLGq.jpg'}`"></div> -->
                                            <img class="profile-image" :src="(members[message.user_id] && members[message.user_id].details && members[message.user_id].details.image_url) ? members[message.user_id].details.image_url : '/images/placeholder.jpg'" alt="">
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

                                                <p class="m-0" v-if="message.content">{{ message.content }}</p>
                                                <div class="time">
                                                    {{ message.created_at | moment("from", "now") }}
                                                </div>
                                            </div>
                                        </div>

                                        <div class="sent-message message-container " v-else>
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
                                                <p class="m-0" v-if="message.content">{{ message.content }}</p>
                                                <div class="time">
                                                    {{ message.created_at | moment("from", "now") }}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

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
                                <div class="input-box">

                                    <form @submit.prevent="sendMessage">
                                        <b-input-group>
                                            <template #prepend>
                                                <b-input-group-text >
                                                    <input @change="onFileSelected($event)" type="file" hidden id="sendImg">
                                                    <!-- <input type="file" hidden id="sendImg"> -->
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
                            <b-col sm="4" class="chat-media" v-if="mediaisOpen && !informationIsOpen">
                                <div>
                                    <div class="title"> {{ $t("chat.cat_media") }}</div>
                                    <b-row>
                                        <b-col  cols="6" class="p-0 text-center" v-for="img in gallery" :key="img">
                                            <b-img v-b-modal.modal-1 @click="popupImageSrc = img" :src="img" alt="img"/>
                                        </b-col>
                                    </b-row>
                                </div>
                                <b-modal no-fade id="modal-1" size="lg" centered hide-header-close hide-footer hide-header >
                                    <b-img  class="w-100" :src="popupImageSrc" alt="img"/>
                                </b-modal>
                            </b-col>

                            <!--information is open-->
                            <b-col sm="4" class="group-information" v-if="informationIsOpen && !mediaisOpen">
                                <div>
                                    <label for="changeGropupName" class="title">{{ $t("chat.group_name") }}</label>
                                    <b-form-input class="text-input" placeholder="Group Name"  v-model="groupChatName" id="changeGropupName" type="text"/>
                                    <b-button  variant="default" class="change-group-name w-100 text-center" @click="changeGroupTitle();">
                                        <span v-if="!loading.changeGroupName">{{ $t("chat.change_btn") }}</span>
                                        <b-spinner type="grow" small v-if="loading.changeGroupName"></b-spinner>    
                                    </b-button>
                                </div>

                                <div>
                                    <label for="changeGropupName" class="title">{{ $t("chat.group_name") }}</label>
                                    <b-button variant="default" class="add-member w-100 text-center"  @click="openAddMembers()">+ {{ $t("chat.add_member") }}</b-button>
                                    <!--You-->
                                    <div class="user d-flex" align-v="center" >
                                        <div class="profile-image" v-if="currentUserInfo.length > 0">
                                            <b-img  :src="currentUserInfo[0].details.image_url" alt="profile image"/>
                                        </div>
                                        <div class="name">You</div>

                                    </div>
                                    <!--ither users-->
                                    <template v-for="(user, index) in membersInArray" >
                                        <div class="user d-flex" :key="index + 'img'" align-v="center" v-if="user.id != currentUser.userId" >
                                            <div class="profile-image">
                                                <b-img :src="user.details.image_url" alt="profile image"/>
                                            </div>
                                            <div class="name">{{user.username}}</div>
                                            <b-button  @click="$bvModal.show(`modal-${user.id}`)" variant="default" class="no-shadow p-0 remove">
                                                <b-img  src="/images/icons/svg/social-remove-item.svg" alt="remove"></b-img>
                                            </b-button>

                                            <!--remove user popup-->
                                            <b-modal :id="`modal-${user.id}`" centered dialog-class="delete-video-modal" hide-header>
                                                <p class="m-0">Are you sure you want to remove <span class="color-primary">{{user.username}}</span> from <span class="color-primary">{{chatName}}</span> ?</p>
                                                <template #modal-footer>
                                                    <div class="d-flex">
                                                        <div class="pt-1" v-if="loading.delete">
                                                            <b-spinner class="spinner-primary" small type="grow"/>
                                                        </div>
                                                        <b-button variant="default" class="no-shadow" @click="$bvModal.hide(`modal-${user.id}`)">No</b-button>
                                                        <b-button :disabled="loading.delete" variant="default" class="no-shadow color-white bg-secondary-1" @click="removeUserFromGroup(user.id)">
                                                            <span v-if="!loading.removeMemberFromGroup">Yes</span>
                                                            <b-spinner type="grow" small v-if="loading.removeMemberFromGroup"></b-spinner>   
                                                        </b-button>
                                                    </div>
                                                </template>
                                            </b-modal>
                                        </div>
                                    </template>
  
                                </div>
                            </b-col>

                        </b-row>                   
                    </div>
                </b-col>
            </b-row>


        </b-container>
        
        <!--add member-->
        <b-modal content-class="create-group-popup"  id="addmemberpopup" size="lg" centered  >
            <!--header modal-->
            <template #modal-title>
                <div class="title">Add Members to {{chatName}}</div>
            </template>

            <!--modal header close-->
            <template #modal-header-close>
                <b-img class="close-icon" src="/images/icons/svg/social-close-btn.svg" alt="icon"/>
            </template>

            <!--body modal-->
            <div class="form-container">
                <b-form>
                    <!--members-->
                    <div class="mt-2">
                        <b-button variant="default">
                            <label for="Members">Add Members</label>
                        </b-button>
                        
                        <div class="members-container">
                            <!--selected friends-->
                            <div class="single-selected-friend d-inline-block" v-for="(selectedFriend, index) in selectedFriends" :key="selectedFriend.id">
                                <!-- <b-img src="/images/placeholder.jpg" class="friend-profile" alt="friend photo" /> -->
                                <span>
                                    <b-img class="friend-profile" src="/images/placeholder.jpg" alt="profile img" v-if="!selectedFriend.user_details.image_url"/>
                                    <b-img  class="friend-profile" v-else :src="selectedFriend.user_details.image_url"  alt="profile img"/>
                                </span>
                                <span>{{selectedFriend.first_name}} {{selectedFriend.last_name}}</span>
                                <span class="close-btn" @click="removeFromSelected(index)">
                                    <b-img src="/images/icons/svg/social-remove-selected-friend.svg" alt="icon"/>
                                </span>
                            </div>
                            <input ref="friendSearchInput" type="text" v-model="friendSearchInput" placeholder="Type.." class="w-auto select-friend-input"/>
                        </div>
                    </div>

                    <!--friends-->
                    <div class="friends">
                        <label>Friends</label>
                        <template v-for="(friend, index) in filltredUsers">
                            <div v-if="!selectedFriends.includes(friend) && !isMember(friend.id)" class="single-friend" :key="index" @click="pushToSelectedFriend(friend)">
                                <div class="d-flex" vertical-align="center">
                                    <div class="profile-image">
                                        <b-img src="/images/placeholder.jpg" alt="profile img" v-if="!friend.user_details.image_url"/>
                                        <b-img  v-else :src="friend.user_details.image_url"  alt="profile img"/>
                                    </div>
                                    <div class="name">
                                        <span>{{friend.first_name}} {{friend.last_name}}</span>
                                    </div>
                                </div>
                            </div>
                        </template>
                        <p v-if="filltredUsers.length < 1" class="text-center text-secondary" size="lg">No Friend Found</p>
                    </div> 
                </b-form>
            </div>


   
 
            <!--footer medal-->
            <template #modal-footer>
                <!--Set disabled to button to show to make it gery -->
                <b-button @click="addMemberToGroup()" :disabled="selectedFriends.length < 1" class="b-block text-center p-2 w-100 create-room-btn no-shadow mb-0 mr-0 ml-0" variant="default">
                    <span v-if="!loading.addMemberToGroup">Add Member to chat</span>
                    <b-spinner type="grow" small v-if="loading.addMemberToGroup"></b-spinner> 
                </b-button>
            </template>
        </b-modal>

        <!--creat Group modal-->
        <b-modal content-class="create-group-popup"  id="creatGroup" size="lg" centered  >
            <!--header modal-->
            <template #modal-title>
                <div class="title">{{ $t("chat.create_group_chat") }}</div>
            </template>

            <!--modal header close-->
            <template #modal-header-close>
                <b-img class="close-icon" src="/images/icons/svg/social-close-btn.svg" alt="icon"/>
            </template>

            <!--body modal-->
            <div class="form-container">
                <b-form>
                    <!--group name-->
                    <div>
                        <label for="groupName">{{ $t("chat.group_name") }}</label>
                        <b-form-input v-model="groupName" class="text-input" type="text" :placeholder="$t('chat.group_name')"></b-form-input>
                    </div>
                    <!--members-->
                    <div class="mt-2">
                        <label for="Members">Add Members</label>
                        <div class="members-container">
                            <!--selected friends-->
                            <div class="single-selected-friend d-inline-block" v-for="(selectedFriend, index) in selectedFriends" :key="selectedFriend.id">
                                <b-img src="/images/placeholder.jpg" class="friend-profile" alt="friend photo" />
                                <span>{{selectedFriend.first_name}} {{selectedFriend.last_name}}</span>
                                <span class="close-btn" @click="removeFromSelected(index)">
                                    <b-img src="/images/icons/svg/social-remove-selected-friend.svg" alt="icon"/>
                                </span>
                            </div>
                            <input ref="friendSearchInput" type="text" v-model="friendSearchInput" placeholder="Type.." class="w-auto select-friend-input"/>
                        </div>
                    </div>

                    <!--friends-->
                    <div class="friends">
                        <label>Friends</label>
                        <template v-for="(friend, index) in filltredUsers">
                            <div v-if="!selectedFriends.includes(friend)" class="single-friend" :key="index" @click="pushToSelectedFriend(friend)">
                                <div class="d-flex" vertical-align="center">
                                    <div class="profile-image">
                                        <b-img src="/images/placeholder.jpg" alt="profile img"/>
                                    </div>
                                    <div class="name">
                                        <span>{{friend.first_name}} {{friend.last_name}}</span>
                                    </div>
                                </div>
                            </div>
                        </template>
                        <p v-if="filltredUsers.length < 1" class="text-center text-secondary" size="lg">No Friend Found</p>

                    </div> 
                </b-form>
            </div>


   
 
            <!--footer medal-->
            <template #modal-footer>
                <!--Set disabled to button to show to make it gery -->
                <b-button @click="createGroup" :disabled="selectedFriends.length < 2" class="b-block text-center p-2 w-100 create-room-btn no-shadow mb-0 mr-0 ml-0" variant="default">
                    Create Group Chat
                </b-button>
            </template>
        </b-modal>
    </div>
</template>
<script>
import axios from 'axios';
import Pusher from 'pusher-js';
import Vue from 'vue'
export default {
    name:'chat',
    layout: 'withoutNavbar',
    data() {
        return {
            pusher: null,
            auctionChannel: null,
            channelName: '',
            allowToGetMore:true,
            noMore:false,
            noMoreRecentChats:false,
            groupName: '',
            chatName: '',
            chatImage: '',
            chatWith: null,

            groupImages: [],

            recentChats: [],
            message: '',
            messages: [],
            members: {},
            informationIsOpen: false,

            loading:{
                moremessages:false,
                changeGroupName:'',
                moreChats:false,
                addMemberToGroup:false,
                removeMemberFromGroup:false,
            },
            subscriptions:[],
            friendSearchInput:"",
            selectedFriends:[],
            isOnline:true,
            isFriend:false,
            firendRequestSent:false,
            showpopover:false,
            mediaisOpen:false,
            popupImageSrc:"",
            value: [],
            membersInArray:[],
            groupChatName:'',
            users:[],
            isAdmin:false,
            filltredUsers:[],
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

            attachType: '',
            attachUrl: '',
            attach: ''

        }
    },
    mounted() {
        this.scrollToBottomOfChat()

        
        
    },
    watch: {
        $route(to, from) {
            // console.log('to >> ', to, ' from >> ', from);

            // this.$created();
            this.chatWith = null;
            this.$fetch();
            // this.$forceUpdate();
        },
        //search friends
        'friendSearchInput' : function() {
            this.filltredUsers = this.users.filter(user=> {
                console.log(user.username.indexOf(this.friendSearchInput))
                return user.username.toLowerCase().indexOf(this.friendSearchInput.toLowerCase()) !== -1 
            })
        }
    },
    async fetch() {
        console.log('user id >> ', this.$store.getters['auth/userId']);

        // if(process.client) {

        //     console.log('in create >>>>>>>>>', this.channelName);

        //     this.pusher = new Pusher(`dpctgdv35p33t63d3eva`, {
        //         encrypted: false,
        //         cluster: 'eu',
        //         forceTLS: false,
        //         httpHost: 'synchronizer.tbdm.net',
        //         statsHost: 'http://synchronizer.tbdm.net/stats',
        //         wsHost: 'synchronizer.tbdm.net',
        //         wsPort: 6001,
        //         authEndpoint: 'https://developers.api.tbdm.net/v-1872020/' + this.locale + '/my/chat/' + this.$route.params.chatId + '/auth/presence',
        //         auth: {
        //             headers: {
        //                 Authorization: this.$store.getters['auth/userId']
        //             }
        //         }

        //     });

            

        //     console.log('auction route param id >> ', this.$route.params.chatId);

        //     this.channelName = 'presence-chat.' + this.$route.params.chatId;
        //     this.auctionChannel = this.pusher.subscribe('presence-chat.' + this.$route.params.chatId);
        //     console.log('auction channel', this.auctionChannel)

        //     let self = this;
        //     let userId = this.$store.getters['auth/userId']
        //     this.auctionChannel.bind('App\\Events\\ChatNewMessage', function(data){
        //         let receivedMessage = data.message;
        //         console.log('data >> ', data)
        //         if(userId == receivedMessage.user_id)
        //             return;

        //         self.messages.push({
        //             chat_id: receivedMessage.chat_id,
        //             content: receivedMessage.content,
        //             created_at: receivedMessage.created_at,
        //             user_id: receivedMessage.user_id,
        //             id: receivedMessage.id,
        //             updated_at: receivedMessage.updated_at
        //         });
        //         self.scrollToBottomOfChat();
        //     })


        //     // Pusher.logToConsole = true;
        //     // console.log('pusher instance >> ',pusher);

        // }

        try {

            let recentChatsData = await axios.get('/my/chatting/chats/skip/0/take/10', { ///skip/3/take/100
                headers: {
                    Authorization: this.$store.getters['auth/token']
                }
            });
            this.recentChats = recentChatsData.data.data;
            console.log('recent chats >> ', this.recentChats);
            if(recentChatsData.data.data.length < 10) {
                this.noMoreRecentChats = true
            }
            for (const chat of this.recentChats) {
                if(chat.id == this.$route.params.chatId) {
                    if(chat.subscriptions.length > 2) {
                        this.chatName = chat.title;
                        this.groupChatName = chat.title

                    for (const sub of chat.subscriptions) {
                        if(sub.details) {
                            this.groupImages.push({
                                name: sub.first_name + sub.last_name,
                                image: sub.details.image_url
                            })
                        }
                    }

                    console.log('group members >> ', this.groupImages);

                    } else {
                        for (const sub of chat.subscriptions) {
                            if(sub.id != this.$store.getters['auth/userId']) {
                                this.chatName = sub.first_name + ' ' + sub.last_name;
                                console.log('sub member >> ', sub);
                                //if the chat is individual
                                this.chatWith = sub;
                            }
                        }
                    }
                }
            }

            let messagesData = await axios.get('/my/chatting/chat/' + this.$route.params.chatId + '/messages', {
                headers: {
                    Authorization: this.$store.getters['auth/token']
                }
            });
            this.messages = messagesData.data.data.messages.reverse();
            
            let membersData = messagesData.data.data.members;

            console.log('members >> ', membersData);
            console.log('messages >> ', this.messages);
            console.log('messages data >> ', messagesData);
            this.subscriptions = messagesData.data.data.chat.subscriptions;
            this.membersInArray = messagesData.data.data.members;
            let currentUser = this.subscriptions.find(user=>{
                return user.user_id == this.$store.getters['auth/userId']
            })
            if(currentUser.is_admin == 1 ) {
                this.isAdmin = true
            } else {
                this.isAdmin = false
            }
            for (let member of membersData) {
                this.members[member.id] = member
            }
            console.log('members obj >> ', this.members);

            this.scrollToBottomOfChat()

        } catch (error) {
            console.log('error >> ', error);
        }
    },
    computed: {

        locale() {
            return this.$store.getters["locale/locale"];
        },
        currentUser() {
            return {
                userId:this.$store.getters['auth/userId'],
                image:this.$store.getters['auth/image']
            }
        },
        currentUserInfo() {
            return this.membersInArray.filter(user=>{return user.id == this.$store.getters['auth/userId']})
        },
        // isAdmin(){
        //     //set default value to prevent error before data update

        //     //filter suvscriptions
        //     currentUser = this.subscriptions.find(user=>{
        //         return user.user_id == this.$store.getters['auth/userId']
        //     })
        //     return currentUser
        //     // if(currentUser[0].is_admin == 1) {
        //     //     return true
        //     // } else {
        //     //     return false
        //     // }
        // }
    },
    mounted() {

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
                authEndpoint: 'https://developers.api.tbdm.net/v-1872020/' + this.locale + '/my/chat/' + this.$route.params.chatId + '/auth/presence',
                auth: {
                    headers: {
                        Authorization: this.$store.getters['auth/token']
                    }
                }

            });

            

            console.log('auction route param id >> ', this.$route.params.chatId);

            this.channelName = 'presence-chat.' + this.$route.params.chatId;
            this.auctionChannel = this.pusher.subscribe('presence-chat.' + this.$route.params.chatId);
            console.log('auction channel', this.auctionChannel)

            let self = this;
            let userId = this.$store.getters['auth/userId']
            this.auctionChannel.bind('App\\Events\\ChatNewMessage', function(data){
                let receivedMessage = data.message;
                console.log('data >> ', data)
                if(userId == receivedMessage.user_id)
                    return;

                self.messages.push({
                    attachment: {
                        id: receivedMessage.attachment.id,
                        content: receivedMessage.attachment.content,
                        type: receivedMessage.attachment.type
                    },
                    chat_id: receivedMessage.chat_id,
                    content: receivedMessage.content,
                    created_at: receivedMessage.created_at,
                    user_id: receivedMessage.user_id,
                    id: receivedMessage.id,
                    updated_at: receivedMessage.updated_at
                });
                self.scrollToBottomOfChat();
            })


            // Pusher.logToConsole = true;
            // console.log('pusher instance >> ',pusher);

        // }
    },
    methods:{ 

        //add member to group 
        addMemberToGroup() {
            let usersToAdd = []
            for(let i of this.selectedFriends) {
                usersToAdd.push(i.id)
            }
            let obj = {
                users_ids:usersToAdd,
                chat_id:this.$route.params.chatId
            }
            this.loading.addMemberToGroup = true
            axios.put(`/my/chatting/chat/add/members`,obj)
            .then(()=>{
                this.$bvToast.toast(`User has been add successfully to ${this.chatName}`, {
                    title: 'user added Successfully',
                    autoHideDelay: 5000,
                    variant:'default'
                })
                this.loading.addMemberToGroup = false;
                //merge selected friends and members, i use this stupid way because the diffrent btween members recived object and friends recived object
                for(let i of this.selectedFriends) {
                    let x = i
                    x.details = i.user_details
                    this.membersInArray.push(x)
                }


                this.$bvModal.hide(`addmemberpopup`);
            })
            .catch(err=>{
                this.loading.addMemberToGroup = false;
                this.$bvToast.toast(err.response.data.message, {
                    title: 'Error',
                    autoHideDelay: 5000,
                    variant:'danger'
                })
            })
        },
        //get more 
        getMorChats(skip,take){
            this.loading.moreChats = true
            axios.get(`my/chatting/chats/skip/${skip}/take/${take}`)
            .then(res=>{
                this.recentChats = [...this.recentChats, ...res.data.data]
                this.loading.moreChats = false
                if(res.data.data.length < 10) {
                    this.noMoreRecentChats = true
                }
            })
            .catch(()=>{
                this.loading.moreChats = false;

            })
        },
        //remove member from group
        removeUserFromGroup(id) {
            this.loading.removeMemberFromGroup = true
            let obj = {
                chat_id: this.$route.params.chatId,
                users_ids:[id]
            }
            axios.delete(`/my/chatting/chat/remove/members`,{
                headers:{
                    Authorization: this.$store.getters['auth/token']
                },
                data:obj
            })
            .then(res=>{
                this.loading.removeMemberFromGroup = false
                this.getChatInfo();
                this.$bvModal.hide(`modal-${id}`)

                //to delete user static from members list
                Vue.delete(this.members, id)
                this.membersInArray = this.membersInArray.filter(user=>{
                    return user.id != id 
                })
                this.$bvToast.toast(`User has been removed successfully from ${this.chatName}`, {
                    title: 'Removed Successfully',
                    autoHideDelay: 5000,
                    variant:'default'
                })
            })
            .catch(err=>{
                this.loading.removeMemberFromGroup = false
                this.$bvToast.toast(err.response.data.message, {
                    title: 'Error',
                    autoHideDelay: 5000,
                    variant:'danger'
                })

            })
        },
        getChatInfo() {
            axios.get(`my/chatting/chat/${this.$route.params.chatId}/info`)
        },
        //change group name
        changeGroupTitle() {
            this.loading.changeGroupName = true
            let obj = {
                title: this.groupChatName
            }
            axios.put(`my/chatting/chat/${this.$route.params.chatId}/info`,obj )
            .then(res=>{
                this.loading.changeGroupName = false
                this.$bvToast.toast(`Group name has been updated successfuly`, {
                    title: 'Video published',
                    autoHideDelay: 5000,
                    variant:'default'
                })
            })
            .catch(err=>{
                this.loading.changeGroupName = false
                console.log(err.response)
                this.$bvToast.toast(err.response.data.message, {
                    title: 'Error',
                    autoHideDelay: 5000,
                    variant:'danger'
                })

            })
        },

        async sendMessage() {
            console.log('message >> ', this.message, new Date());

            let messageDate = new Date().toISOString().substring(0, 10);
            let messageTime = new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();
            console.log('date >. ', messageDate + " " + messageTime)

            try {
                this.messages.push({
                    attachment: {
                        content: this.attachUrl,
                        type: this.attachType
                    },
                    chat_id: this.$route.params.chatId,
                    content: this.message,
                    created_at: messageDate + " " + messageTime,
                    user_id: this.$store.getters["auth/userId"]
                });
                console.log('messages log >> ', this.messages);
                let altMessage = this.message;
                let altAttach = this.attach;
                this.message = '';
                this.attach = '';

                let formData = new FormData();
                formData.append('chat_id', this.$route.params.chatId)
                formData.append('user_id', this.$store.getters['auth/userId'])
                formData.append('content', altMessage)
                formData.append('attachment', altAttach)

                let messageSending = await axios.post('/my/chatting/chat/' + this.$route.params.chatId + '/messages', formData, {
                    headers: {
                        Authorization: this.$store.getters['auth/token']
                    }
                });
                console.log('message sending >> ', messageSending);

            } catch (error) {
                console.log('send error >> ', error);
            }

            this.message = '';
            this.scrollToBottomOfChat();
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
        loadMoreMessages() {
            if(process.client) {
                let container = this.$el.querySelector(".scrollable-box-messages");
                let scrollTop    = container.scrollTop
                if (scrollTop < 1) {
                    
                    if(this.allowToGetMore && !this.noMore) {
                        this.loading.moremessages = true
                        this.allowToGetMore = false
                        axios.get(`/my/chatting/chat/${this.$route.params.chatId}/messages/skip/${this.messages.length}/take/10`)
                        .then(res=>{
                            this.loading.moremessages = false
                            this.allowToGetMore = true
                            this.messages = [...res.data.data.messages.reverse(), ...this.messages]
                            if(res.data.data.messages.length < 10) {
                                this.noMore = true
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
        //push to selected friends
        pushToSelectedFriend(data) {
            //push
            this.selectedFriends.push(data)
            //to foucs in input
            this.$refs.friendSearchInput.focus()
        },
        onTagState(valid) {
            console.log(valid)
        },
        hidePopOver() {
            this.showpopover = false
        },
        removeFromSelected(index) {
            this.selectedFriends.splice(index, 1);
        },
        openAddMembers() {
            this.$bvModal.show('addmemberpopup');
            this.selectedFriends = []
            if(this.users.length < 1) {
                axios.get('/my/social/friends/user/' + this.$store.getters['auth/userId'] + '/skip/0/take/100')
                .then(res=>{
                    this.users = res.data.data;
                    this.filltredUsers = res.data.data
                })
            
            }
           
        },
        async createGroup() {

            try {
                let users = [];
                for (const friend of this.selectedFriends) {
                    users.push(friend.id)
                }

                console.log('firends >> ', users)

                let createGroup = await axios.post('/my/chatting/initiate', {
                    title: this.groupName,
                    users: [...users, this.$store.getters['auth/userId']],
                    created_by: this.$store.getters['auth/userId']
                });
                console.log('group >> ', createGroup.data.data)

                this.$bvModal.hide('creatGroup');

                this.$router.push('/' + this.locale + '/social/chat/' + createGroup.data.data.id)
            } catch (error) {
                console.log('error >> ', error);
            }

        },
        async openGroup() {
            this.$bvModal.show('creatGroup');
            let friendsData = await axios.get('/my/social/friends/user/' + this.$store.getters['auth/userId'] + '/skip/0/take/100')
            this.users = friendsData.data.data
            this.filltredUsers = friendsData.data.data
        },

        //is member
        isMember(id){

            let x = this.membersInArray.filter(user=>{
                return user.id == id
            })
            if(x.length > 0) {
                return true
            } else {
                return false
            }
            
        },


    },
    beforeDestroy() {
        console.log('destroyed >> ', this.channelName)
        // this.pusher.unsubscribe(this.channelName);
    }
}
</script>
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>