<template>
    <div class="social-chat">
        <!--social nav bar-->

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
                                        <span class="bold">{{ $t("chat.create_group") }}</span>
                                    </div>
                                </b-col>
                            </b-row>
                        </div>

                        <!--persons tabs-->
                        <div class="users-select">
                            <!--user-chat head-->
                            <nuxt-link to="/">
                                <div class="user active group">
                                    <b-row>
                                        <b-col cols="2" >
                                            <div class="user-profile-picture">
                                                <img src="https://pbs.twimg.com/profile_images/730985390543278080/W0rPqLGq.jpg" alt="">
                                            </div>
                                            <div class="user-profile-picture">
                                                <img src="https://pbs.twimg.com/profile_images/730985390543278080/W0rPqLGq.jpg" alt="">
                                            </div>
                                        </b-col>
                                        <b-col cols="10">
                                            <div class="user-info">
                                                <div class="name">El Magal</div>
                                                <div class="message">There Is No Other Side, You Turn Yourself Around. That’s What It’s All About</div>
                                            </div>
                                        </b-col>
                                    </b-row>
                                </div>
                            </nuxt-link>

                            <!--user-chat head-->
                            <nuxt-link to="/">
                                <div class="user">
                                    <b-row>
                                        <b-col cols="2" >
                                            <!-- <div class="user-profile-picture" :style="`background-image:url('${'https://pbs.twimg.com/profile_images/730985390543278080/W0rPqLGq.jpg'}`"></div> -->
                                            <img class="user-img" src="/images/placeholder.jpg" alt="">
                                        </b-col>
                                        <b-col cols="10">
                                            <div class="user-info">
                                                <div class="name">Bojack</div>
                                                <div class="message">There Is No Other Side, You Turn Yourself Around. That’s What It’s All About</div>
                                            </div>
                                        </b-col>
                                    </b-row>
                                </div>
                            </nuxt-link>

                            <!--user-chat head-->
                            <nuxt-link to="/">
                                <div class="user notification">
                                    <b-row>
                                        <b-col  cols="2">
                                            <img class="user-img" src="/images/placeholder.jpg" alt="">
                                        </b-col>
                                        <b-col  cols="10">
                                            <div class="user-info">
                                                <div class="name">Dian</div>
                                                <div class="message">Ok</div>
                                            </div>  
                                        </b-col>
                                    </b-row>
                          

                                </div>
                            </nuxt-link>

                            <!--user-chat head-->
                            <nuxt-link to="/">
                                <div class="user notification">
                                    <b-row>
                                        <b-col cols="2">
                                            <img class="user-img" src="/images/placeholder.jpg" alt="">
                                        </b-col>
                                        <b-col cols="10">
                                            <div class="user-info">
                                                <div class="name">Cat</div>
                                                <div class="message">What is the Fish</div>
                                            </div>
                                        </b-col>
                                    </b-row>
                                </div>
                            </nuxt-link>
                        </div>
                    </div>
                </b-col>

                <!--chat box-->
                <b-col sm="9" class="pl-sm-2">
                    <div class="chat-box chat-messages-box mb-sm-5">
                        <div class="chat-header">
                            <b-row>
                                <!--pic and name and status-->
                                <b-col cols="8">
                                    <b-row  align-v="center">
                                        <b-col cols="2">
                                            <div class="header-profile-picture group">
                                                <b-img src="https://pbs.twimg.com/profile_images/730985390543278080/W0rPqLGq.jpg" alt="group-picture"/>
                                            </div>
                                            <div class="header-profile-picture group">
                                                <b-img src="https://pbs.twimg.com/profile_images/730985390543278080/W0rPqLGq.jpg" alt="group-picture"/>
                                            </div>
                                        </b-col>
                                        <b-col cols="10" class="name-status pl-0">
                                            <div>
                                                <div class="user-name">
                                                    El Magal 
                                                </div>
                                                <div class="status text-secondary">
                                                    <span>You, Magdi, Ahmed, Sarah</span>
                                                </div>
                                            </div>
                                        </b-col>
                                    </b-row>
                                </b-col>
    

                                <!--taps of add friend, view as , media, block-->
                                <b-col cols="4">
                                    <b-row class="h-100 tabs-container">
                                        <!--view media-->
                                        <div @click="mediaisOpen = !mediaisOpen; informationIsOpen = false" class="icon-container ml-auto" :class="{'active': mediaisOpen}">
                                            <b-img v-if="mediaisOpen" src="/images/icons/svg/social-image-active.svg" alt="icon"/>
                                            <b-img v-if="!mediaisOpen" src="/images/icons/svg/social-image.svg"  alt="icon"/>
                                        </div>
                                        <!--information-->
                                        <div class="icon-container" @click="informationIsOpen = !informationIsOpen; mediaisOpen = false">
                                            <b-img src="/images/icons/svg/social-information.svg"  alt="icon"/>
                                        </div>
                                    </b-row>
                                </b-col>
                            </b-row>
                        </div>


                        <!--messages box-->
                        <b-row class="flex-nowrap overflow-hidden">
                            <!--if media is open or closed -->
                            <b-col :cols="mediaisOpen || informationIsOpen ? 8 : 12"   class="scroll-container">
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

                                    <div class="sent-message message-container " v-for="rr in 7" :key="rr">
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

                                    <div class="sent-message message-container ">
                                        <!--message-->
                                        <div class="message">
                                            <p class="m-0">Sometimes life’s a sad and then you keep living</p>
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

                            <!--media-->
                            <b-col sm="4" class="chat-media" v-if="mediaisOpen">
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
                            <b-col sm="4" class="group-information" v-if="informationIsOpen">
                                <div>
                                    <label for="changeGropupName" class="title">{{ $t("chat.group_name") }}</label>
                                    <b-form-input class="text-input" placeholder="Group Name" value="El Magal" id="changeGropupName" type="text"/>
                                    <b-button  variant="default" class="change-group-name w-100 text-center">{{ $t("chat.change_btn") }}</b-button>
                                </div>

                                <div>
                                    <label for="changeGropupName" class="title">{{ $t("chat.group_name") }}</label>
                                    <b-button variant="default" class="add-member w-100 text-center">+ {{ $t("chat.add_member") }}</b-button>
                                    <!--You-->
                                    <div class="user d-flex" align-v="center" >
                                        <div class="profile-image">
                                            <b-img src="https://i.pinimg.com/originals/5d/42/d4/5d42d4e1f5fb2d52c7bbae093a34bff6.jpg" alt="profile image"/>
                                        </div>
                                        <div class="name">You</div>
                                    </div>
                                    <!--ither users-->
                                    <div class="user d-flex" v-for="(user, index) in users" :key="index + 'img'" align-v="center">
                                        <div class="profile-image">
                                            <b-img :src="user.image" alt="profile image"/>
                                        </div>
                                        <div class="name">{{user.name}}</div>
                                        <div class="remove">
                                            <b-img  src="/images/icons/svg/social-remove-item.svg" alt="remove"></b-img>
                                        </div>
                                    </div>
                                </div>
                            </b-col>
                        </b-row>                   
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>
<script>
export default {
    name:'chat',
    layout: 'withoutNavbar',
    data() {
        return {
            isOnline:true,
            isFriend:false,
            firendRequestSent:false,
            showpopover:false,
            mediaisOpen:false,
            informationIsOpen:false,
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