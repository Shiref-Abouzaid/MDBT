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
                                    <div class="create-group" @click="$bvModal.show('creatGroup')">
                                        <img src="/images/icons/svg/social-creat-group.svg"  alt="icnon">
                                        <span class="bold">    {{ $t("chat.create_room") }}</span>
                                    </div>
                                </b-col>
                            </b-row>
                        </div>

                        <!--persons tabs-->
                        <div class="users-select room-chat-select">
                            <!--user-chat head-->
                            <div class="mt-2">
                                <b-button v-b-toggle.collapse-admin-rooms variant="default" class="bg-secondary-opacity-1 d-flex admin-rooms color-secondary w-100 no-shadow">
                                    <span> {{ $t("chat.admin") }}</span>
                                    <b-img src="/images/icons/svg/social-arrow-bottom.svg" alt="icon" class="icon"/>
                                </b-button>
                                <b-collapse id="collapse-admin-rooms" class="mt-2">
                                    <nuxt-link to="/">
                                        <div class="single-chat-room-select active">
                                            Buy and sell room
                                        </div>
                                    </nuxt-link>

                                    <nuxt-link to="/">
                                        <div class="single-chat-room-select">
                                            Buy and sell room
                                        </div>
                                    </nuxt-link>

                                    <nuxt-link to="/">
                                        <div class="single-chat-room-select">
                                            Buy and sell room
                                        </div>
                                    </nuxt-link>

                                    <nuxt-link to="/">
                                        <div class="single-chat-room-select">
                                            Buy and sell room
                                        </div>
                                    </nuxt-link>

                                    <b-button variant="default" class="no-shadow bg-primary-opacity-1 color-primary text-center p-2 w-100">
                                        {{ $t("chat.more") }}
                                    </b-button>
                                </b-collapse>
                            </div>

                            <div class="mt-2">
                                <b-button v-b-toggle.collapse-users-rooms variant="default" class="bg-secondary-opacity-1 d-flex admin-rooms color-secondary w-100 no-shadow">
                                    <span>    {{ $t("chat.user_room") }}</span>
                                    <b-img src="/images/icons/svg/social-arrow-bottom.svg" alt="icon" class="icon"/>
                                </b-button>
                                <b-collapse id="collapse-users-rooms" class="mt-2">
                                    <nuxt-link to="/">
                                        <div class="single-chat-room-select active">
                                            Buy and sell room
                                        </div>
                                    </nuxt-link>

                                    <nuxt-link to="/">
                                        <div class="single-chat-room-select">
                                            Buy and sell room
                                        </div>
                                    </nuxt-link>

                                    <nuxt-link to="/">
                                        <div class="single-chat-room-select">
                                            Buy and sell room
                                        </div>
                                    </nuxt-link>

                                    <nuxt-link to="/">
                                        <div class="single-chat-room-select">
                                            Buy and sell room
                                        </div>
                                    </nuxt-link>

                                    <b-button variant="default" class="no-shadow bg-primary-opacity-1 color-primary text-center p-2 w-100">
                                       {{ $t("chat.more") }}
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
                                    <div class="title pt-2">
                                        Buy &amp; Sell 
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
                                <div class="scrollable-box-messages">

                                    <div class="date">
                                        <span>April 4, 2020</span>
                                    </div>

                                    <!--recived message-->
                                    <div class="recived-message message-container ">
                                        <!--profile photo-->
                                        <div class="profile-image" :style="`background-image:url('${'https://pbs.twimg.com/profile_images/730985390543278080/W0rPqLGq.jpg'}`"></div>
                                        <!--message-->
                                        <div class="message">
                                            <p class="m-0">Hello Friend</p>

                                        </div>
                                    </div>
                                    <div class="sent-message message-container ">
                                        <!--message-->
                                        <div class="message">
                                            <p class="m-0">Hello Bocjak how are you?</p>
                                            <div class="time">
                                                10:33 am
                                            </div>
                                        </div>
                                    </div>

                                    <div class="recived-message message-container ">
                                        <!--profile photo-->
                                        <div class="profile-image" :style="`background-image:url('${'https://pbs.twimg.com/profile_images/730985390543278080/W0rPqLGq.jpg'}`"></div>
                                        <!--message-->
                                        <div class="message">
                                            <p class="m-0">There Is No Other Side, You Turn Yourself Around. That’s What It’s All About, Sometimes Life’s A sad And Then You Keep Living.</p>
                                            <div class="time">
                                                10:34 am
                                            </div>
                                        </div>
                                    </div>

                                    <div class="sent-message message-container ">
                                        <!--message-->
                                        <div class="message">
                                            <p class="m-0">Life’s a sad and then you die, right?</p>
                                            <div class="time">
                                                10:35 am
                                            </div>
                                        </div>
                                    </div>

                                    <div class="sent-message message-container ">
                                        <!--message-->
                                        <div class="message">
                                            <p class="m-0">Sometimes life’s a sad ba and then you keep living</p>
                                            <div class="time">
                                                10:36 am
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="recived-message message-container ">
                                        <!--profile photo-->
                                        <div class="profile-image" :style="`background-image:url('${'https://pbs.twimg.com/profile_images/730985390543278080/W0rPqLGq.jpg'}`"></div>
                                        <!--message-->
                                        <div class="message">
                                            <p class="m-0">They agree that it’s a nice night and decide to just look up at the sky. It was the perfect way to end the series</p>
                                            <div class="time">
                                                10:37 am
                                            </div>
                                        </div>
                                    </div>

                                    <div class="recived-message message-container ">
                                        <!--profile photo-->
                                        <div class="profile-image" :style="`background-image:url('${'https://pbs.twimg.com/profile_images/730985390543278080/W0rPqLGq.jpg'}`"></div>
                                        <!--message-->
                                        <div class="message">
                                            <p class="m-0">It Gets Easier</p>
                                            <div class="time">
                                                10:38 am
                                            </div>
                                        </div>
                                    </div>


                                    <div class="recived-message message-container ">
                                        <!--profile photo-->
                                        <div class="profile-image" :style="`background-image:url('${'https://pbs.twimg.com/profile_images/730985390543278080/W0rPqLGq.jpg'}`"></div>
                                        <!--message-->
                                        <div class="message">
                                            <img src="https://pbs.twimg.com/profile_images/730985390543278080/W0rPqLGq.jpg" class="w-100" alt="sent photo.">
                                            <div class="time">
                                                10:38 am
                                            </div>
                                        </div>
                                    </div>

                                    <div class="sent-message message-container ">
                                        <!--message-->
                                        <div class="message">
                                            <p class="m-0">
                                                <img src="https://i.pinimg.com/originals/5d/42/d4/5d42d4e1f5fb2d52c7bbae093a34bff6.jpg" class="w-100" alt="sent photo.">
                                            </p>
                                            
                                            <div class="time">
                                                10:39 am
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!--input box to send messages-->
                                <div class="input-box">
                                    <b-input-group>
                                        <template #prepend>
                                            <b-input-group-text >
                                                <input type="file" hidden id="sendImg">
                                                <label for="sendImg" class="m-0">
                                                    <b-img src="/images/icons/svg/social-image-gery.svg" alt="icon"/>
                                                </label>
                                            </b-input-group-text>
                                        </template>
                                        <b-form-input placeholder="Type your message…"></b-form-input>
                                        <b-input-group-append>
                                            <b-button variant="default">Send</b-button>
                                        </b-input-group-append>
                                    </b-input-group>
                                </div>
                            </b-col>

                        </b-row>                   
                    </div>
                </b-col>

                <b-col sm="3" class="pl-sm-2" >
                    <div class="chat-box chat-messages-box mb-5">
                        <div class="chat-header pl-0">
                            <div class="title pt-2">
                              {{ $t("chat.active_user") }}
                            </div>
                        </div>
                        <div class="active-users">
                            <div class="user d-flex">
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
                            </div>
                        </div>
                    </div>
                </b-col>
            </b-row>
        </b-container>

        <!--creat Group modal-->
        <b-modal content-class="create-group-popup create-rooms-popup"  id="creatGroup" size="lg" centered  >
            <!--header modal-->
            <template #modal-title>
                <div class="title"> {{ $t("chat.create_room") }}</div>
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
                        <label for="room-name">{{ $t("chat.name") }}</label>
                        <b-form-input id="room-name" class="text-input" type="text" :placeholder="$t('chat.name')"></b-form-input>
                    </div>


                    <!--Room Cover-->
                    <div class="friends">
                        <div class="lable mb-2">{{ $t("chat.cover") }}</div>
                        <!--cover img-->
                        <div class="selected-cover mb-3" v-if="slectedCover">
                            <b-img src="https://nakedsecurity.sophos.com/wp-content/uploads/sites/2/2016/04/tinder-social-fail.png?w=780&h=408&crop=1" alt="cover" />
                        </div>
                        <!--label-->
                        <label for="room-cover" class="w-100 bg-primary-opacity-1 p-2 color-primary d-flex text-center upload-photo">
                            <b-img src="/images/icons/svg/social-photo-cloud.svg" alt="icon"/>
                            <span v-if="!slectedCover">{{ $t("chat.upload_photo") }}</span>
                            <span v-if="slectedCover">{{ $t("chat.change_photo") }}</span>
                        </label>
                        <!--hidden input-->
                        <input id="room-cover"  hidden type="file">

                        <!--remove img btn-->
                        <b-button variant="default" v-if="slectedCover" class="remove font-weight-bold mt-4 bg-red-opacity-1 no-shadow color-red w-100 p-2">
                         {{ $t("chat.remove_photo") }}
                        </b-button>
                    </div> 
                </b-form>
            </div>

            <!--footer medal-->
            <template #modal-footer>
                <!--Set disabled to button to show to make it gery -->
                <b-button :disabled="!slectedCover" class="b-block text-center p-2 w-100 create-room-btn no-shadow mt-5 mb-0 mr-0 ml-0" variant="default">
                  {{ $t("chat.public_room") }}
                </b-button>
            </template>
        </b-modal>

        <!--room setting modal-->
        <b-modal content-class="create-group-popup create-rooms-popup"  id="roomSetting" size="lg" centered  >
            <!--header modal-->
            <template #modal-title>
                <div class="title"> {{ $t("chat.setting") }}</div>
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
                        <label for="room-name">{{ $t("chat.name") }}</label>
                        <b-form-input id="room-name" class="text-input" type="text" :placeholder="$t('chat.name')"></b-form-input>
                    </div>


                    <!--Room Cover-->
                    <div class="friends">
                        <div class="lable mb-2">{{ $t("chat.cover") }}</div>
                        <!--cover img-->
                        <div class="selected-cover mb-3" v-if="slectedCover">
                            <b-img src="https://nakedsecurity.sophos.com/wp-content/uploads/sites/2/2016/04/tinder-social-fail.png?w=780&h=408&crop=1" alt="cover" />
                        </div>
                        <!--label-->
                        <label for="room-cover" class="w-100 bg-primary-opacity-1 p-2 color-primary d-flex text-center upload-photo">
                            <b-img src="/images/icons/svg/social-photo-cloud.svg" alt="icon"/>
                            <span v-if="!slectedCover">{{ $t("chat.upload_photo") }}</span>
                            <span v-if="slectedCover">{{ $t("chat.change_photo") }}</span>
                        </label>
                        <!--hidden input-->
                        <input id="room-cover"  hidden type="file">

                        <!--remove img btn-->
                        <b-button variant="default" v-if="slectedCover" class="remove font-weight-bold mt-4 bg-red-opacity-1 no-shadow color-red w-100 p-2">
                              {{ $t("chat.remove_photo") }}
                        </b-button>
                    </div> 
                </b-form>
            </div>

            <!--footer medal-->
            <template #modal-footer>
                <!--Set disabled to button to show to make it gery -->
                <b-button  class="b-block text-center p-2 w-100 delete-room-btn no-shadow mt-5 mb-0 mr-0 ml-0" variant="default">
                     {{ $t("chat.delete_room") }}
                </b-button>
            </template>
        </b-modal>
    </div>
</template>
<script>
export default {
    name:'chat',
    layout: 'withoutNavbar',
    data() {
        return {
            slectedCover:true,
            isAdmin:true,
            users:[
                {
                    name:'Todd',
                    id:1,
                    image:'https://i.pinimg.com/originals/5d/42/d4/5d42d4e1f5fb2d52c7bbae093a34bff6.jpg',
                },
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
    methods:{
        onTagState(valid) {
            console.log(valid)
        },

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