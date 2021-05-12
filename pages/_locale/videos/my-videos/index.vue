<template>
    <div class="all-videos">


        <b-container>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><nuxt-link to="/">Home</nuxt-link></li>
                    <li class="breadcrumb-item"><nuxt-link :to="`/${locale}/videos`">Funny Video</nuxt-link></li>
                    <li class="breadcrumb-item active" aria-current="page">My Videos</li>
                </ol>
            </nav>
            <div class="all-videos-container">
                <!--header-->
                <div class="all-videos-header d-flex">

                    <nuxt-link exact :to="'/' + locale + '/videos/'" class="videos-link">
                        Popular Videos
                    </nuxt-link>

                    <nuxt-link :to="'/' + locale + '/videos/my-videos/'"  class="videos-link">
                        My Videos
                    </nuxt-link>
                    <nuxt-link :to="'/' + locale + '/videos/add/'" class="add-video-link-container">
                        <b-button variant="default" class="add-video-link no-shadow bg-secondary-1 color-white ">
                            <b-img src="/images/icons/svg/videos-add-video.svg" alt="icon"/>
                            <span>Add Video</span>
                        </b-button>
                    </nuxt-link>

                </div>

                <!--videos card-->
                <div class="cards-container">
                    <!--single video-->
                    <b-row>
                        <b-col sm="3" v-for="video in mainData" :key="video.id">
                            <div class="single-video-card">
                                <div class="video">
                                    <nuxt-link :to="`/${locale}/videos/watch/${video.id}/${video.title}`">
                                        <b-embed type="video" aspect="4by3" >
                                            <!--should we load the video while user cant play it in this page? -->
                                            <source :src="video.path" type="video/mp4">
                                        </b-embed>
                                    </nuxt-link>
                                    <!--duration-->
                                    <div class="duration">
                                        {{video.duration}}
                                    </div>

                                    <div class="my-edit-edit">
                                        <b-button variant="defailt" class="no-shadow p-0" :id="`edit-options-${video.id}`">
                                            <b-img src="/images/icons/svg/videos-dots-edit.svg"></b-img>
                                        </b-button>
                                    </div>

                                    <b-popover custom-class="my-video-edit" placement="bottomleft" :target="`edit-options-${video.id}`" triggers="click blur">
                                        <nuxt-link class="d-block" :to="`/videos/editvideo/${video.id}`">
                                            <div class="d-flex box">
                                                <b-img src="/images/icons/svg/videos-edit.svg" alt="icon"></b-img>
                                                <span>Edit Video</span>
                                            </div>
                                        </nuxt-link>
                                        <div class="box">
                                            <b-button @click="$bvModal.show(`modal-${video.id}`)" variant="default" class="d-flex p-0 no-shadow">
                                                <b-img src="/images/icons/svg/videos-remove.svg" alt="icon"></b-img>
                                                <span>Remove Video</span>
                                            </b-button>
                                        </div>
                                    </b-popover>


                                    <b-modal :id="`modal-${video.id}`" centered dialog-class="delete-video-modal" hide-header>
                                        <p class="m-0">Are you sure you want to delete this video?</p>
                                        
                                        <template #modal-footer>

                                            <div class="d-flex">
                                                <div class="pt-1" v-if="loading.delete">
                                                    <b-spinner class="spinner-primary" small type="grow"  />
                                                </div>
                                                <b-button variant="default" class="no-shadow" @click="$bvModal.hide(`modal-${video.id}`)">No</b-button>
                                                <b-button :disabled="loading.delete" variant="default" class="no-shadow color-white bg-secondary-1" @click="deleteVideo(video.id)">Yes</b-button>
                                            </div>
                                        </template>
                                    </b-modal>
                                </div>
                                
                                <nuxt-link :to="`/videos/watch/${video.id}`">
                                    <div class="info">
                                        <!--title of video-->
                                        <h2 class="title">
                                            {{video.title}}
                                        </h2>


                                        <!--channel details-->
                                        <div class="channel d-flex">
                                            <b-img src="https://pyxis.nymag.com/v1/imgs/aa3/7b2/822e840e4c37dfcb821e8e6bd8005b6795-23-bojack-horseman.rsquare.w700.jpg" alt="icon"></b-img>
                                            <h3 class="channel-name">{{video.user.username}}</h3>
                                        </div>

                                        <!--views and date-->
                                        <div class="views">
                                            <b-row>
                                                <!--views-->
                                                <b-col cols="6">
                                                    <div class="d-flex box">
                                                        <img src="/images/icons/svg/videos-view.svg" alt="icon">
                                                        <span>{{video.views}} views</span>
                                                    </div>
                                                </b-col>
                                                <!--date-->
                                                <b-col cols="6" >
                                                    <div class="d-flex box">
                                                        <img src="/images/icons/svg/videos-time.svg" alt="icon">
                                                        <span>
                                                            {{ $moment(video.created_at).fromNow() }}
                                                        </span>
                                                    </div>
                                                </b-col>
                                            </b-row>
                                        </div>
                                    </div>
                                </nuxt-link>
                            
                            </div>
                        </b-col>
                    </b-row>
                    <div class="text-center mt-4" v-if="loading.main">
                        <b-spinner type="grow" class="spinner-primary"/>
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
            mainData:[],
            userId:2,
            allowToGetMorVideos:true,
            noMoreVideos:false,
            loading:{
                delete:false,
                main:false,
            }
        }
    },
    computed: {
        isAuthenticated() {
            return this.$store.getters['auth/isAuthenticated']
        },
        locale() {
            return this.$store.getters['locale/locale'];
        },
    },
    methods:{
        handleScroll (event) {
            let windowScrollY       =  window.scrollY
            let windowScrollHeight  = document.body.scrollHeight
            let widnowHeight        = window.innerHeight
            if(windowScrollY - (windowScrollHeight-widnowHeight) == 0) {
                //get more videos if allowed
                this.getMainData(this.mainData.length,4)
            }
           
        },
        
        getMainData(skipCount, takeCount) {
            if(!this.noMoreVideos){
                this.loading.main = true
                this.allowToGetMorVideos = false
                axios.get(`/my/videos/user/${this.$store.getters['auth/userId']}/skip/${skipCount}/take/${takeCount}`)
                .then(res=>{
                    this.loading.main = false
                    this.allowToGetMorVideos = true

                    let recivedOjbects = res.data.data

                    this.allowToGetMorVideos = true
                    for(let i of recivedOjbects) {
                        this.mainData.push(i)
                    }
                    if(res.data.data.length < 1) {
                        this.noMoreVideos = true
                    }
                })
                .catch(err=>{
                    console.log(err)
                    this.loading.main = false
                })
            }
        },

        //delete video
        deleteVideo(id) {
            this.loading.delete = true
            axios.delete(`/my/videos/${id}`)
            .then(res=>{
                this.loading.delete = false
                //remove viedo static
                this.$bvModal.hide(`modal-${id}`)
                this.mainData = this.mainData.filter(video => {
                    return video.id != id
                })
                this.$bvToast.toast(`Video has ben deleted successfuly`, {
                    title: 'Video deleted',
                    autoHideDelay: 5000,
                    variant:'success'
                })
            })
            .catch(err=>{
                console.log(err)
                this.loading.delete = false
            })
        },
        


    },
    created() {
        this.getMainData(0,8)
        if (process.browser) {
            window.addEventListener('scroll', this.handleScroll);
        }   
    }
}
</script>