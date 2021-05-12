<template>
    <section class="specialities-list">

            <div class="specialities">
                <div class="head">
                    <h3>{{ $route.params.specialityName }}</h3>
                    <!-- <nuxt-link to="/">See more</nuxt-link> -->
                </div>

                <div class="doctors">
                    <div class="row" v-if="doctors && doctors.length > 0">
                        <div class="col-sm-4" v-for="doctor in doctors" :key="doctor.id">
                            <app-single-doctor :doctor="doctor"></app-single-doctor>
                        </div>
                    </div>
                    <div class="text-center mt-4" v-if="loading.seeMore">
                        <b-spinner variant="default" large type="grow" class="spinner-primary" />
                    </div>
                </div>

            </div>

    </section>
</template>

<script>
import axios from 'axios'
import SingleDoctor from '~/components/Vendor/SingleDoctor'

export default {
    components: {
        appSingleDoctor: SingleDoctor
    },
    data() {
        return {
            doctors: [],
            allowToGetMore:true,
            noMore:false,
            loading:{
                seeMore:false
            },
        }
    },
    
    async fetch() {
        let doctorsData = await axios.get('/my/doctors/speciality/' + this.$route.params.specialityId + '/skip/0/take/6');
        this.doctors = doctorsData.data.data
        console.log('doctors >> ', this.doctors);
    },
    methods:{
        async handleScroll (event) {
            let windowScrollY       =  window.scrollY
            let windowScrollHeight  = document.body.scrollHeight
            let widnowHeight        = window.innerHeight

            if(Math.floor(windowScrollY - (windowScrollHeight-widnowHeight)) < 1 &&  Math.floor(windowScrollY - (windowScrollHeight-widnowHeight)) > -10) {
                 if(this.allowToGetMore && !this.noMore) { 
                     this.allowToGetMore = false;
                     try {
                        this.loading.seeMore = true
                        let resData = await axios.get(`my/doctors/speciality/${this.$route.params.specialityId}/skip/${this.doctors.length}/take/6`);
                        console.log('data >> ', resData.data.data);
                        this.doctors = [...this.doctors,...resData.data.data]
                        this.loading.seeMore = false
                        this.allowToGetMore = true;
                        if(resData.data.data.length < 1) {
                            this.noMore = true
                        }
                     } catch (error) {
                        console.log(error.response)
                     }

                 }

            }
        },
    },
    created() {
        if (process.client) {
            window.addEventListener('scroll', this.handleScroll);
        }   
    },
    watch: {
        '$route.params': function(){
            this.$fetch()
        }
    }
}
</script>