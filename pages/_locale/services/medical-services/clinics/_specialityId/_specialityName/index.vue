<template>
    <section class="specialities-list">

            <div class="specialities">
                <div class="head">
                    <h3>{{ $route.params.specialityName }}</h3>
                    <!-- <nuxt-link to="/">See more</nuxt-link> -->
                </div>

                <div class="doctors">
                    <div class="row" v-if="clinics && clinics.length > 0">
                        <div class="col-sm-4" v-for="clinic in clinics" :key="clinic.id">
                            <app-single-clinic :clinic="clinic"></app-single-clinic>
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
import SingleClinic from '~/components/Vendor/SingleClinic'

export default {
    components: {
        appSingleClinic: SingleClinic
    },
    data() {
        return {
            clinics: [],
            allowToGetMore:true,
            noMore:false,
            loading:{
                seeMore:false
            },
        }
    },
    async fetch() {
        let ClinicsData = await axios.get('/my/clinics/specialty/' + this.$route.params.specialityId + '/skip/0/take/6');
        this.clinics = ClinicsData.data.data
        console.log('clinics speciality >> ', this.clinics);
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
                        let resData = await axios.get(`my/clinics/specialty/${this.$route.params.specialityId}/skip/${this.clinics.length}/take/6`);
                        console.log('data >> ', resData.data.data);
                        this.clinics = [...this.clinics,...resData.data.data]
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