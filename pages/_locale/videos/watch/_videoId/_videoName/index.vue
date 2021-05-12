<template>
    <div class="single-video-page">
        <b-container>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><nuxt-link to="/">Home</nuxt-link></li>
                    <li class="breadcrumb-item"><nuxt-link :to="`/${locale}/videos`">Funny Video</nuxt-link></li>
                    <li class="breadcrumb-item active" aria-current="page">{{$route.params.videoName}}</li>
                </ol>
            </nav>
            <div class="single-video-page-container">
                <b-row>
                    <b-col sm="8">
                        <div class="video-side">
                            <h1 class="title">
                                {{videoData.title}}
                            </h1>
                            <div class="box">
                                <b-embed class="the-frame" autoplay  type="iframe" aspect="4by3" allow="fullscreen" controls :src="videoData.path">
<!--     
                                    <source src="/images/BoJack-Horseman.mp4" type="video/mp4"> -->
                                </b-embed>
                            </div>

                        </div>
                    </b-col>
                    <b-col sm="4" v-if="videoData"> 
                        <div class="info-side">
                            <div class="d-flex channle-info">
                                <div>
                                    <b-img :src="videoData.user.user_image ? videoData.user.user_image : '/images/placeholder.jpg'" alt="channle-img"/>
                                </div>

                                <div>
                                    <nuxt-link :to="`/${locale}/user-profile/${videoData.user.id}/${videoData.user.username}`">
                                        <h2 class="channle-name">{{videoData.user.first_name}} {{videoData.user.last_name}}</h2>
                                    </nuxt-link>
                                    
                                    <p class="date">{{ $moment(videoData.created_at).fromNow() }}</p>
                                </div> 


                            </div>
                            <p class="description">{{videoData.description}}</p>
                            <b-row class="mt-2 mb-2 views-and-comments-count" >
                                <b-col>
                                    <b-img src="/images/icons/svg/videos-view.svg" alt="views"></b-img>
                                    <span>{{videoData.views}} Views</span>
                                </b-col>
                                <b-col>
                                    <b-img src="/images/icons/svg/viedos-comment.svg" alt="views"></b-img>
                                    <span>{{videoData.comments.length}} Comments</span>
                                </b-col>
                            </b-row>
                            <h3 class="title-comments">Comments</h3>
                            <div class="comments-box">
                                <!--single comment-->
                                <div class="single-comment d-flex" v-for="comment in videoData.comments" :key="comment.id">
                                    <div class="comment-user-img">
                                        <b-img :src="comment.user_image ? comment.user_image : '/images/placeholder.jpg'" :title="comment.user_name" alt="user-img"></b-img>
                                    </div>

                                    <div>
                                        
                                        <nuxt-link :to="`/${locale}/user-profile/${comment.user_id}/${comment.user_name}`">
                                            <span class="comment-name">{{comment.user_name}}</span>
                                        </nuxt-link>                              
                                        <span class="comment-date">{{ $moment(comment.created_at).fromNow() }}</span>
                                        <p class="commen-content">
                                            {{comment.comment}}
                                        </p>
                                    </div>

                                    <template v-if="comment.user_id == $store.getters['auth/userId']">
                                        <div class="my-edit-edit">
                                            <b-button variant="defailt" class="no-shadow p-0" :id="`edit-options-${comment.id}`">
                                                <b-img src="/images/icons/svg/social-dots.svg"></b-img>
                                            </b-button>
                                        </div>

                                        <b-popover custom-class="my-video-edit" placement="bottomleft" :target="`edit-options-${comment.id}`" triggers="click blur">
                                            <div class="box">
                                                <b-button @click="$bvModal.show(`modal-${comment.id}`)" variant="default" class="d-flex p-0 no-shadow">
                                                    <b-img src="/images/icons/svg/videos-remove.svg" alt="icon"></b-img>
                                                    <span>Remove Comment</span>
                                                </b-button>
                                            </div>
                                        </b-popover>


                                        <b-modal :id="`modal-${comment.id}`" centered dialog-class="delete-video-modal" hide-header>
                                            <p class="m-0">Are you sure you want to delete this comment?</p>
                                            
                                            <template #modal-footer>
                                                <div class="d-flex">
                                                    <div class="pt-1" v-if="loading.delete">
                                                        <b-spinner class="spinner-primary" small type="grow"  />
                                                    </div>
                                                    <b-button variant="default" class="no-shadow" @click="$bvModal.hide(`modal-${comment.id}`)">No</b-button>
                                                    <b-button variant="default" class="no-shadow color-white bg-secondary-1" @click="deleteComment(comment.id)">Yes</b-button>
                                                </div>
                                            </template>
                                        </b-modal>
                                    </template>

                                </div>
                            </div>
                            <div class="input-comment-box">
                                <b-input-group class="mt-3">
                                    <template #prepend>
                                        <div class="current-user-img">
                                            <b-img class="user" src="/images/placeholder.jpg" alt="current-user"></b-img>
                                            <b-img v-if="!loading.comment" class="icon" src="/images/icons/svg/viedos-comment.svg" alt="current-user"></b-img>
                                            <b-spinner v-if="loading.comment" variant="dfault" class="spinner-primary icon" type="grow" small/>
                                        </div>
                                    </template>
                                    <template #append>
                                        <div class="input-icon">
                                            <b-button variant="default bg-secondary-1 send-btn" @click="addComment()">
                                                <b-img src="/images/icons/svg/videos-comment-btn.svg" alt="icon"></b-img>
                                            </b-button>
                                        </div>
                                    </template>
                                    <b-form-input @keyup.enter="addComment()" class="input-comment no-shadow" type="text" placeholder="Add Comment.." v-model="commentData.comment"></b-form-input>
                                </b-input-group>
                                
                            </div>
                        </div>
                    </b-col>
                </b-row>

                <div class="related-videos">
                    <h2 class="title-related">Related Videos</h2>
                    <b-row>
                        <b-col sm="3" v-for="video in relatedVideos" :key="video.id">
                            <div class="single-video-card">
                                <nuxt-link :to="`/${locale}/videos/watch/${video.id}/${$route.params.videoName}`">
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
                </div>
            </div>

        </b-container>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    name:'SingleVideo',
    data() {
        return {
            videoData:'',
            commentData:{},
            relatedVideos:[],
            currentUserId:2,
            loading:{
                comment:false,
                delete:false
            }
        }
    },
    computed:{
        locale() {
            return this.$store.getters["locale/locale"];
        },
    },
    methods:{
        getVideoData() {
            axios.get(`/my/videos/${this.$nuxt.$route.params.videoId}`)
            .then(res=>{
                this.videoData = res.data;
                this.videoData.comments.reverse();
                console.log('video >> ', res.data);
            })
        },
        scrollToBottomOfChat() {
            if (process.browser) {
                setTimeout(()=>{
                    var container = this.$el.querySelector(".comments-box");
                    container.scrollTop = container.scrollHeight;
                },10)
            }  

        },
        addComment() {
            if(!this.$store.getters['auth/isAuthenticated'])
                return

            let comment = this.commentData
            comment.video_id    = this.videoData.id
            comment.user_id     = this.$store.getters['auth/userId']
            comment.parent_id   = 0
            this.loading.comment = true
            axios.post(`/my/videos/comments`, comment)
            .then(res=>{
                console.log(res)
                this.videoData.comments.push({
                    "user_image": res.data.data.image_url,
                    "comment": this.commentData.comment,
                    "user_name": res.data.data.username,
                })
                this.loading.comment = false
                this.commentData.comment = ''
                this.scrollToBottomOfChat();
            })
        },

        //related videos
        getrelatedVideos() {
            let randomnumber =  Math.floor(Math.random() * 20) + 1  
            axios.get(`/my/videos/skip/${randomnumber}/take/4`)
            .then(res=>{
                this.relatedVideos = res.data.data;
                console.log('related video', res.data.data)
            })
            .catch(err=>{
                console.log(err.response)
            })
        },

        //delete video
        deleteComment(id) {
            this.loading.delete = true
            axios.delete(`/my/videos/comment/${id}`)
            .then(res=>{
                this.loading.delete = false
                //remove viedo static
                this.$bvModal.hide(`modal-${id}`)
                this.videoData.comments = this.videoData.comments.filter(comment => {
                    return comment.id != id
                })
                this.$bvToast.toast(`comment has ben deleted successfuly`, {
                    title: 'Video deleted',
                    autoHideDelay: 5000,
                    variant:'default'
                })
            })
            .catch(err=>{
                console.log(err)
                this.loading.delete = false
            })
        },
        

    },

    created() {
        this.getVideoData();
        this.getrelatedVideos()
    }

}
</script>