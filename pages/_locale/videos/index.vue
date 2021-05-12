<template>
    <div class="all-videos">


        <b-container>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><nuxt-link to="/">Home</nuxt-link></li>
                    <li class="breadcrumb-item active" aria-current="page">Funny Videos</li>
                </ol>
            </nav>
            <div class="all-videos-container">
                <!--header-->
                <div class="all-videos-header d-flex">

                    <nuxt-link exact :to="'/' + locale + '/videos/'" class="videos-link">
                        Popular Videos
                    </nuxt-link>

                    <template v-if="isAuthenticated">
                        <nuxt-link :to="'/' + locale + '/videos/my-videos/'"  class="videos-link">
                            My Videos
                        </nuxt-link>
                        <nuxt-link :to="'/' + locale + '/videos/add/'" class="add-video-link-container">
                            <b-button variant="default" class="add-video-link no-shadow bg-secondary-1 color-white ">
                                <b-img src="/images/icons/svg/videos-add-video.svg" alt="icon"/>
                                <span>Add Video</span>
                            </b-button>
                        </nuxt-link>
                    </template>

                </div>

                <!--videos card-->
                <div class="cards-container">
                    <!--single video-->
                    <b-row>
                        <b-col sm="3" v-for="video in allVideos" :key="video.id">
                            <div class="single-video-card">
                                <nuxt-link :to="'/' + locale + '/videos/watch/' + video.id + '/' + video.title">
                                    <div class="video">
                                        <b-embed type="video" aspect="4by3">
                                            <!--should we load the video while user cant play it in this page? -->
                                            <source :src="video.path" type="video/mp4">
                                        </b-embed>
                                        <!--duration-->
                                        <div class="duration">
                                            00:{{ Math.round(video.duration) }}
                                        </div>
                                    </div>
                                    
                                    <div class="info">
                                        <!--title of video-->
                                        <h2 class="title">
                                            {{video.title}}
                                        </h2>

                                        <!--channel details-->
                                        <div class="channel d-flex">
                                            <b-img :src="'/images/placeholder.jpg'" alt="icon"></b-img>
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
                    <div class="text-center mt-4">
                        <b-spinner variant="default" large type="grow" class="spinner-primary" v-if="loading.seeMore"/>
                    </div>
 
                </div>
            </div>
        </b-container>
    </div>
</template>

<script>
import axios from 'axios'

export default {

    name:'Popularvideos',
    data() {
        return {
            loading:{
                seeMore:false,

            },
            allowToGetMorVideos:true,
            allVideos:[],
            noMoreVideos:false,
        }
    },
    computed: {
        locale() {
            return this.$store.getters['locale/locale'];
        },
        isAuthenticated() {
            return this.$store.getters['auth/isAuthenticated']
        }
    },
    created() {
        this.getVideos(0,8)
        if (process.client) {
            window.addEventListener('scroll', this.handleScroll);
        }   
    },
    methods:{
        handleScroll (event) {
            let windowScrollY       =  window.scrollY
            let windowScrollHeight  = document.body.scrollHeight
            let widnowHeight        = window.innerHeight
            if(Math.floor(windowScrollY - (windowScrollHeight-widnowHeight)) < 1 &&  Math.floor(windowScrollY - (windowScrollHeight-widnowHeight)) > -10) {
                //get more videos if allowed
                this.getVideos(this.allVideos.length,4)
            }
        },
        getVideos(skipCount, takeCount){
            if(this.allowToGetMorVideos && !this.noMoreVideos) {
                this.loading.seeMore = true
                this.allowToGetMorVideos = false
                axios.get(`/my/videos/skip/${skipCount}/take/${takeCount}`)
                .then(res=>{
                    let recivedOjbects = res.data.data
                    this.loading.seeMore = false
                    this.allowToGetMorVideos = true
                    this.allVideos = [...this.allVideos, ...res.data.data]
                    // for(let i of recivedOjbects) {
                    //     this.allVideos.push(i)
                    // }
                    if(res.data.data.length < 1) {
                        this.noMoreVideos = true
                    }
                })
            }

        },
        

    }

}
</script>