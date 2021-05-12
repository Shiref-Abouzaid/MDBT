<template>
    <div class="realestates">
        <div class="row">
            <div class="col-sm-4" v-for="realestate in realestates" :key="realestate.id">
                <app-single-realestate :realestate="realestate"></app-single-realestate>
            </div>
        </div>
        <div class="text-center mt-4" v-if="loading.seeMore">
            <b-spinner variant="default" large type="grow" class="spinner-primary" />
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import SingleRealestate from '~/components/Vendor/SingleRealestate';

export default {
    components: {
        appSingleRealestate: SingleRealestate
    },
    data () {
        return {
            realestates: [],
            allowToGetMore:true,
            noMore:false,
            loading:{
                seeMore:false
            },
        }
    },
    watch: {
        $route(form, to) {
            this.$fetch();
        }
    },
    async fetch() {
        try {
            let realestatesData = await axios.post(`my/realestate/search-realestate/skip/0/take/6`, {
                category_id: this.$route.params.categoryId
            });
            console.log('realestaes cat .> ', realestatesData.data.data)
            this.realestates = realestatesData.data.data.realstates
        } catch (error) {
            console.log('error >> ', error)
        }
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
                        let resData = await axios.post(`my/realestate/search-realestate/skip/${this.realestates.length}/take/6`, {
                            category_id: this.$route.params.categoryId
                        });
                        console.log('realestates >> ', resData.data.data);

                        this.realestates = [...this.realestates,...resData.data.data.realstates]
                        
                        this.loading.seeMore = false
                        this.allowToGetMore = true;
                        if(resData.data.data.realstates.length < 1) {
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
}
</script>