<template>
    <div class="social-my-profile">
        <!--social nav bar-->

        <div class="social-profile-section">
            <b-container>
                <!--my profile-->
                <div class="social-my-profile mt-sm-4">
                    <div class="social-main">
                        <!--cover-->
                        <div class="cover" :style="`background-image:url('${coverImg}')`" >
                            <!--edit profile cover button-->
                            <div class="edit-profile-cover">
                                <label for="edit-cover-photo" class="mb-0">
                                    <b-img src="/images/icons/svg/social-edit-cover.svg" alt="icon"/>
                                    <span>{{ $t("chat.edit_cover") }}</span>
                                </label>
                                <input @change="onCoverPicked($event)" type="file" id="edit-cover-photo" hidden/>
                            </div>

                            <!--profile image-->
                            <div class="profile-image" :style="`background-image:url('${profileURL}')`" >
                                <input @change="onImagePicked($event)" type="file" id="edit-profile" hidden/>
                                <label class="edit-profile-image mb-0" for="edit-profile">
                                    <span>{{ $t("chat.edit") }}</span>
                                </label>
                            </div>
                        </div>

                        <!--name and bio-->
                        <b-row class="social-name-bio m-0">
                            <b-col sm="9" class="info pl-1 pr-1" >
                                <h1 class="title">{{firstName}} {{lastName}}</h1>
                                <b-form-textarea
                                    ref="bio"
                                    class="bio"
                                    v-model="bio"
                                    :disabled="!editMode"
                                    :class="{'no-info' : !bio && !editMode}"
                                    rows="3"
                                    :placeholder="$t('chat.your_bio')"
                                    
                                ></b-form-textarea>
                                <div @click="$refs.bio.focus()">
                                    <b-button variant="default" class="edit-my-profile no-shadow p-0" v-if="!bio && !editMode" @click="editMode = true">{{ $t("chat.bio") }}</b-button>
                                </div>
                            </b-col>
                            <b-col sm="3" class="edit-info-container">
                                <b-button variant="default" @click="saveProfile" :class="{editmodebtn : editMode}" class="edit-info">
                                    <!--to be editable-->
                                    <span class="show" :class="{'hide': editMode}">
                                        <b-img src="/images/icons/svg/social-edit-primary.svg" alt="icon"/>
                                        <span>{{ $t("chat.edit_profile") }}</span>
                                    </span>

                                    <!--to save edit-->
                                    <span class="show" :class="{'hide': !editMode}">
                                        <span>{{ $t("chat.save_button") }}</span>
                                    </span>

                                </b-button>
                            </b-col>
                        </b-row>


                        <!--about-->
                        <div class="social-myprofile-about mt-3">
                            <h2>{{ $t("chat.about") }}</h2>
                            <b-row>
                                <b-col sm="7">
                                    <!--education-->
                                    <div class="info">
                                        <b-img src="/images/icons/svg/social-education.svg" alt="icon"/>
                                        <b-input ref="education" :placeholder="$t('chat.educat') " :disabled="!editMode" v-model="education" class="info-input" type="text" :class="{'no-info' : !education && !editMode}"/>
                                        <div @click="$refs.education.focus()" class="d-inline-block">
                                            <b-button
                                            variant="default"
                                            class="edit-my-profile no-shadow p-0"
                                            v-if="!education && !editMode"
                                            @click="editMode = true">{{ $t("chat.education") }}</b-button>            
                                        </div>

                                    </div>

                                    <!--job-->
                                    <div class="info">
                                        <b-img src="/images/icons/svg/social-job.svg" alt="icon"/>
                                        <b-input ref="job" :placeholder="$t('chat.jop')" :class="{'no-info' : !job && !editMode}" :disabled="!editMode" v-model="job" class="info-input" type="text"/>
                                        <div @click="$refs.job.focus()" class="d-inline-block">
                                            <b-button variant="default" class="edit-my-profile no-shadow p-0" v-if="!job && !editMode" @click="editMode = true">{{ $t("chat.jop") }}</b-button>
                                        </div>
                                    </div>

                                    <!--address-->
                                    <div class="info">
                                        <b-img src="/images/icons/svg/social-location.svg" alt="icon"/>
                                        <b-input ref="address" :placeholder="$t('chat.addres')" :disabled="!editMode" :class="{'no-info' : !location && !editMode}" v-model="location" class="info-input" type="text"/>
                                        <div @click="$refs.address.focus()" class="d-inline-block">
                                            <b-button variant="default" class="edit-my-profile no-shadow p-0" v-if="!job && !editMode" @click="editMode = true">{{ $t("chat.addres") }}</b-button>
                                        </div>
                                    </div>
                                </b-col>
                            </b-row>

                        </div>

                        <!--gallery-->
                        <div class="social-myprofile-gallery mb-3 mt-3">
                            <h2>{{firstName}} {{lastName}}'s Gallery</h2>
                            <b-row>
                                <b-col sm="4">
                                    <label class="add-photo" for="addphoto">
                                        <div class="images" v-if="imagesFiles && imagesFiles.length > 0">
                                            <div class="row">
                                                <div class="col-sm-4" v-for="img in imagesFiles" :key="img">
                                                    <div class="image">
                                                        <img class="gallery-user-img" :src="img" alt="">
                                                        <img src="/images/icons/svg/icon-remove-gallery.svg" alt="" class="icon">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="actions">
                                                <button @click="publishImages" class="btn publish">Publish</button>
                                                <button @click="cancelImages" class="btn cancel">Cancel</button>
                                            </div>
                                        </div>
                                        <div class="select-photos" v-else>
                                            <span>+ {{ $t("chat.add_photo") }}</span>
                                        </div>
                                    </label>
                                    <input @change="onImagesPicked($event)" :disabled="imagesFiles && imagesFiles.length > 0" multiple type="file" id="addphoto" hidden/>
                                </b-col>
                                <b-col sm="4" v-for="(img, index) in userGallery" :key="index">
                                    <b-img class="gallery-img" :src="img" alt="img"></b-img>
                                    <div class="gallery-img-container"  :style="`background-image:url('${img}')`">
                                        <div class="remove-photo-btn" :class="{'show':editMode}">
                                            <b-button variant="default">
                                                <b-img src="/images/icons/svg/social-remove.svg"/>
                                                <span>{{ $t("chat.remove") }}</span>
                                            </b-button>
                                        </div>
                                    </div>
                                </b-col>
                            </b-row>
                        </div>
                    </div>
                </div>
            </b-container>
        </div>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    layout: 'withoutNavbar',
    data() {
        return {
            coverImg:'https://ilike2like.com/wp-content/uploads/2019/10/ilike2like_com_facebook_cover_sea_05.jpg',
            profileURL:'https://pbs.twimg.com/profile_images/884959376871706626/c459hnjB.jpg',
            savedCoverImage: '',
            savedProfileImage: '',
            //bio:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            firstName: '',
            lastName: '',
            bio:'',
            editMode:false,
            myprofile:false,
            location:'',
            education:'',
            job:'',
            imagesFiles: [],
            userGallery:[],
        }
    },
    async fetch() {
        try {
            let userData = await axios.get('/my/social/profile/' + this.$store.getters['auth/userId']);
            console.log('user data >> ', userData.data.data);
            let user = userData.data.data;
            this.coverImg = user.details.user_details.cover_image_url || '/images/background-placeholder.png';
            this.profileURL = user.details.user_details.image_url || '/images/placeholder.jpg';
            this.firstName = user.details.first_name;
            this.lastName = user.details.last_name;
            this.bio = user.details.user_details.description;
            this.education = user.details.user_details.education;
            this.job = user.details.user_details.job_title;
            this.location = user.details.user_details.address
            this.userGallery = user.gallery.reverse();

        } catch (error) {
            console.log('error >> ', error)
        }
    },
    methods: {
        async saveProfile() {
            this.editMode = !this.editMode
            if(!this.editMode) {
                let userObj = {
                    education: this.education,
                    job_title: this.job,
                    description: this.bio,
                    address: this.location,
                    cover_image: this.savedCoverImage,
                    image: this.savedProfileImage
                }
                console.log('user obj >> ', userObj);
                try {
                    let saveUser = await axios.put('my/social/profile/'+ this.$store.getters['auth/userId'], userObj);
                    console.log('profile saved', saveUser);
                } catch (error) {
                    console.log('error >> ', error);
                }
            }
        },
        onCoverPicked(event) {
            console.log("picked");
            // console.log(event);
            let file = event.target.files[0];

            if (file) {
                const fileReader = new FileReader();
                fileReader.addEventListener("load", () => {
                // this.imageUrl = fileReader.result
                this.coverImg = fileReader.result;
                this.savedCoverImage = fileReader.result;
                console.log("base 64 >> ", this.coverImg);
                });
                fileReader.readAsDataURL(file); //used to preview image in the browser, considered as a string
                this.editMode = !this.editMode
            } else {
                this.coverImg = "";
            }
        },
        onImagePicked(event) {
            console.log("picked");
            // console.log(event);
            let file = event.target.files[0];

            if (file) {
                const fileReader = new FileReader();
                fileReader.addEventListener("load", () => {
                // this.imageUrl = fileReader.result
                this.profileURL = fileReader.result;
                this.savedProfileImage = fileReader.result;
                console.log("base 64 >> ", this.profileURL);
                });
                fileReader.readAsDataURL(file); //used to preview image in the browser, considered as a string
                this.editMode = !this.editMode
            } else {
                console.log('cancelled')
                this.profileURL = "";
            }
        },
        onImagesPicked(event) {
            console.log("picked", event);
            // console.log(event);

            let files = event.target.files;

            if (files) {
                for (const file of files) {
                    const fileReader = new FileReader();
                    fileReader.addEventListener("load", () => {
                    // this.imageUrl = fileReader.result
                    this.imagesFiles.push(fileReader.result);
                    });
                    fileReader.readAsDataURL(file); //used to preview image in the browser, considered as a string
                }
                console.log('images files >> ', this.imagesFiles)
            } else {
                this.imagesFiles = []
            }
        },
        async publishImages() {

            //because when emptying the array directly, opens the file selector
            setTimeout(async () => {
                console.log('image publishing');
                this.userGallery.unshift(...this.imagesFiles);
                let sendGallery = [...this.imagesFiles];
                this.imagesFiles = [];
                try {
                    let publishImages = await axios.post('/my/social/user/' + this.$store.getters['auth/userId'] +'/add/gallery-items', {
                        gallery: sendGallery
                    });
                    console.log('published >> ', sendGallery);

                    sendGallery = [];
                } catch (error) {
                    console.log('error >> ', error)
                }
            }, 10);
        },
        cancelImages() {
            setTimeout(() => {
                this.imagesFiles = [];
            }, 10);
            console.log('image cancelled');
        }
    }
}
</script>