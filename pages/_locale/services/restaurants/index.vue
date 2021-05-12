<template>
    <div>
        <div class="restaurants">
            <div class="row">
                <div class="col-sm-4" v-for="restaurant in restaurants" :key="restaurant.id">
                    <app-single-restaurant :restaurant="restaurant"></app-single-restaurant>
                </div>
            </div>
        </div>

        <!-- <div class="paginator">
            <div class="overflow-auto">
                <b-pagination-nav :link-gen="linkGen" :limit="10" :hide-goto-end-buttons="true" :number-of-pages="10" align="center" use-router>
                    <template #prev-text><span><img src="/images/icons/svg/chevron-left.svg" alt=""></span></template>
                    <template #next-text><span><img src="/images/icons/svg/chevron-right.svg" alt=""></span></template>
                </b-pagination-nav>
            </div>
        </div> -->
    </div>
</template>

<script>
import axios from 'axios'
import SingleRestaurant from '~/components/Vendor/SingleRestaurant'

export default {
    components: {
        appSingleRestaurant: SingleRestaurant
    },
    data() {
        return {
            restaurants: []
        }
    },
    methods: {
      linkGen(pageNum) {
        return pageNum === 1 ? '?' : `?page=${pageNum}`
      }
    },
    async fetch() {
        try {
            let restaurantsData = await axios.get('/my/restaurants/count/6');
            console.log('restaurnats data >> ', restaurantsData.data.data);
            if(restaurantsData.data.data) {
                this.restaurants = restaurantsData.data.data.restaurants;
            }
        } catch (error) {
            console.log('error >> ', error);
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