<template>
    <div class="add-video">
        <b-container>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><nuxt-link to="/">Home</nuxt-link></li>
                    <li class="breadcrumb-item"><nuxt-link to="/videos/popularvideos">Funny Videos</nuxt-link></li>
                    <li class="breadcrumb-item active" aria-current="page">Add New Video</li>
                </ol>
            </nav>

            
            <div class="add-video-container" >
                <h1 class="title">Add New Video</h1>

                <!--select video-->
                <div class="d-flex h-100 mt-3" v-if="validate.videoSize">
                    <div class="text-center upload-video-panner" >
                        <label class="img-as-label" for="uploadvideo">
                            <b-img src="/images/icons/svg/add-video-hero.svg" alt="img"/>
                        </label>
                        <h2 class="title-upload">Upload Video</h2>
                        <p class="mb-1 color-grey-light-5">
                            Max size is 100MB
                        </p>
                        <p class="mb-2 color-grey-light-5">
                            Max duration is 30 second
                        </p>
                        <div class="input container">
                            <label class="label bg-primary-opacity-1 color-primary-1  w-100" for="uploadvideo">
                                <b-img src="/images/icons/svg/social-photo-cloud.svg" alt="img" />
                                <span>Choose Video</span>
                            </label>
                            <input type="file" accept=".mp4" @change="getVideoData($event)" hidden id="uploadvideo">

                            <label class="label bg-primary-opacity-1 color-primary-1  w-100" for="posterupload">
                                <b-img src="/images/icons/svg/social-photo-cloud.svg" alt="img" />
                                <span>Choose Poster</span>
                            </label>
                            <input type="file" accept=".mp4" @change="videoSelected = true" hidden id="posterupload">

                            <p class="text-center text-danger pt-2" v-if="validate.videoSize && video">
                                Video Should be less than 100MB
                            </p>
                        </div>
                    </div>
                </div>

                <!--video data-->
                <div class="add-video-data">
                    <b-form @submit.prevent="addVideo()">
                        <b-row>
                            <b-col sm="6" class="pl-0 pr-0 pl-sm-4 pr-sm-4">
                                <div class="preview" v-if="video && !validate.videoSize">
                                    <label class="label">Preview</label>

                                    <!--uploading-->
                                    <div class="box selected-video-container" v-if="loading.main">
                                        <!-- <img src="https://cdn.shopify.com/s/files/1/0043/8471/8938/products/156996225711018765_3c233107-cfee-4138-ae79-b4ea9bbf1f92.jpg?v=1572022178" alt="video-poster"> -->
                                        <b-embed type="video" aspect="4by3" controls >
                                            <source :src="videoSrc" type="video/mp4">
                                        </b-embed>
                                        <div class="overlay">
                                            <div class="overlay-progress-bar">
                                                <b-progress variant="default" :value="loading.count" :max="100" class="mb-3"></b-progress>
                                                <p class="progress-count-upload">Uploading {{loading.count}}%</p>
                                            </div>
                                        </div>
                                    </div>

                                    <!--if upload complete-->
                                    <div class="selected-video-container"  v-if="!loading.main">
                                        <b-embed type="video" aspect="4by3" controls >
                                            <source :src="videoSrc" type="video/mp4">
                                        </b-embed>
                                    </div>
                                    <p class="file-name">File {{video.name}}</p>
                                </div>
                            </b-col>
                            <b-col sm="6" class="pl-0 pr-0 pl-sm-4 pr-sm-4" v-if="video && !validate.videoSize">
                                <div class="video-data">
                                    <!--title-->
                                    <label for="title" class="label">Title</label>
                                    <b-form-input v-model="videoData.title" placeholder="Title" type="text" class="text-input no-shadow" id="title"/>
                                    <p class="text-danger validate"  v-if="validate.title" >Title is Reqiured</p>

                                    <!--Description-->
                                    <label for="description" class="label  ">Description</label>
                                    <b-textarea v-model="videoData.description" placeholder="Description" id="description" class="text-area no-shadow" rows="3"></b-textarea>
                                    <p class="text-danger validate" v-if="validate.description">Description is Reqiured</p>

                                    <b-button variant="default" type="submit" class="bg-primary-1 color-white no-shadow w-100 p-2 h2">Publish Video</b-button>
                                    <div class="text-center mt-2" v-if="loading.main">
                                        <b-spinner type="grow" variant="default" class="spinner-primary"/>
                                    </div>
                                </div>
                            </b-col>
                        </b-row>
                    </b-form>
                </div>
            </div>
        </b-container>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    name:'addVideo',
    data() {
        return {
            videoSelected:false,
            videoUploaded:false,
            loading:{
                main:false,
                count:0,
            },

            video:'',
            videoSrc:'',
            videoData:{
                title:"",
                description:"",
            },
            validate:{
                videoSize:true,
                title:false,
                description:false,
            }
        }
    },

    watch:{
        'videoData.title': function() {
            if(this.videoData.title == '') {
                this.validate.title = true
            } else {
                this.validate.title = false
            }
        },
        'videoData.description': function() {
            if(this.videoData.description == '') {
                this.validate.description = true
            } else {
                this.validate.description = false
            }
        }
    },
    methods:{
        //fakeCount

        getVideoData(event) {
            let video     = event.srcElement.files[0];
            this.video    = video,
            this.videoSrc = URL.createObjectURL(video)

            if((video.size / 1000) < 100000) {
                this.validate.videoSize = false
            }
            
        },
        addVideo() {
            if(!this.validate.title && !this.validate.description) {
                this.loading.main = true
                let formData = new FormData()
                formData.append("video", this.video);
                formData.append("title", this.videoData.title);
                formData.append("description", this.videoData.description);
                formData.append("user_id", this.$store.getters['auth/userId'])


                const config = {
                    onUploadProgress: progressEvent => this.loading.count = Math.round((progressEvent.loaded * 100) / progressEvent.total)

                }

                axios.post(
                    `/my/videos`,
                    formData,
                    config,
                    {
                        headers: {
                        'content-Type': 'multipart/form-data'
                        }
                    }).then(res => {
                    console.log(res)
                    this.loading.main = false

                    this.videoData.title = ''
                    this.videoData.description = ''
                    setTimeout(() => {
                        this.validate.title = false
                        this.validate.description = false
                    },100)

                    this.$bvToast.toast(`Video has ben published successfuly`, {
                        title: 'Video published',
                        autoHideDelay: 5000,
                        variant:'default'
                    })

                    this.video = ''
                    this.validate.videoSize = true
                    this.loading.count = 0
                })
                .catch(error => {
                    console.log(error.response)
                    this.loading.main = false
                    this.$bvToast.toast(`${error.response.data.message}`, {
                        title: 'Error',
                        autoHideDelay: 5000,
                        variant:'danger'
                    })
                })
            }

        }
    },

}
</script>