<template>
    <section class="professions">

        <div class="profession-cards">
            <div class="row">
                <div class="col-sm-4" v-for="tech in techs" :key="tech.id">
                    <app-single-profession :tech="tech"></app-single-profession>
                </div>
            </div>
            <div class="text-center mt-4" v-if="loading.seeMore">
                <b-spinner variant="default" large type="grow" class="spinner-primary" />
            </div>
        </div>

    </section>
</template>

<script>
import axios from 'axios'
import SingleProfession from '~/components/Vendor/SingleProfession';

export default {
    components: {
        appSingleProfession: SingleProfession
    },
    data() {
        return {
            techs: [],
            allowToGetMore:true,
            noMore:false,
            loading:{
                seeMore:false
            },
        }
    },

    async fetch() {
        let techsData = await axios.get('/my/technicians/category/' + this.$route.params.professionId);
        this.techs = techsData.data.data;
        console.log('techs >> ', this.techs)
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
                        let resData = await axios.get(`my/technicians/category/${this.$route.params.professionId}/skip/${this.techs.length}/take/6`);
                        console.log('techs >> ', resData.data.data);
                        this.techs = [...this.techs,...resData.data.data]
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
    watch:{
        '$route.params':function() {
            this.$fetch()
        }
    }
}
</script>