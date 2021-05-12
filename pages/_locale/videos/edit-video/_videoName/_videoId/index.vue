<template>
    <div class="add-video">
        <b-container>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><nuxt-link to="/">Home</nuxt-link></li>
                    <li class="breadcrumb-item"><nuxt-link to="/videos/popularvideos">Funny Videos</nuxt-link></li>
                    <li class="breadcrumb-item active" aria-current="page">Edit Video</li>
                </ol>
            </nav>

            
            <div class="add-video-container" >
                <h1 class="title">Edit Video</h1>


                <!--video data-->
                <div class="add-video-data">
                    <b-form @submit.prevent="editVideo()">
                        <b-row>
                            <b-col sm="6" class="pl-4 pr-4">
                                <div class="preview">
                                    <label class="label">Preview</label>



                                    <!--if upload complete-->
                                    <div class="selected-video-container" >
                                        <b-embed type="video" aspect="4by3" controls >
                                            <!--should we load the video while user cant play it in this page? -->
                                            <source src="https://funvideos.tbdm.net/storage/app/public/video/2020-12/22-Tue/new_video1608635752.mp4" type="video/mp4">
                                        </b-embed>
                                    </div>
                                    <!-- <p class="file-name">File want-to-be-on-my-show.mp4</p> -->

                                </div>
                            </b-col>
                            <b-col sm="6" class="pl-4 pr-4">
                                <div class="video-data">
                                    <!--title-->
                                    <label for="title" class="label" >Title</label>
                                    <b-form-input placeholder="Title" type="text" class="text-input no-shadow" id="title" v-model="mainData.title"/>

                                    <!--Description-->
                                    <label for="description" class="label  ">Description</label>
                                    <b-textarea placeholder="Description" id="description" class="text-area no-shadow" rows="3" v-model="mainData.description"></b-textarea>

                                    <b-button variant="default" type="submit" class="bg-primary-1 color-white no-shadow w-100 p-2 h2">Edit Video</b-button>
                                    <div class="text-center">
                                        <b-spinner class="spinner-primary"  v-if="loading.edit" small type="grow"/>
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
    name:'editVideo',
    data() {
        return {
            videoSelected:false,
            videoUploaded:false,
            mainData:{},
            loading:{
                edit:false
            }
        }
    },
    methods:{
        getMainData() {
            axios.get(`/my/videos/${this.$nuxt.$route.params.videoId}`)
            .then(res=>{
                this.mainData = res.data
            })
        },
         
        editVideo() {
            let editData = {
                title: this.mainData.title,
                description: this.mainData.description
            }
            let data = new FormData()
            data.append('title', this.mainData.title)
            data.append('description', this.mainData.description)
            this.loading.edit = true
            axios.patch(`/my/videos/${this.$nuxt.$route.params.id}`, data, {
                headers:{
                    "Content-Type":"application/x-www-form-urlencoded",
                    "Authorization": 2
                }
            })
            .then(res=>{
                console.log(res)
                this.loading.edit = false
            })
        }
    },
    created() {
        this.getMainData()
    }
}
</script>