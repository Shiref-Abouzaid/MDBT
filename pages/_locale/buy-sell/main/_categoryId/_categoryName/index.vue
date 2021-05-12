<template>
    <div>
        <div class="row">
            <div class="col-sm-4" v-for="item in items" :key="item.id">
                <app-single-buy :item="item"></app-single-buy>
            </div>
        </div>
        <div class="text-center mt-4" v-if="loading.seeMore">
            <b-spinner variant="default" large type="grow" class="spinner-primary" />
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import SingleBuy from '~/components/Vendor/SingleBuy'

export default {
    components: {
        appSingleBuy: SingleBuy
    },
    data() {
        return {
            items: [],
            allowToGetMore:true,
            noMore:false,
            loading:{
                seeMore:false
            },
        }

    },
    async fetch() {
        // console.log('in buy main cat')
        let buyData = await axios.get('/my/buy-sells/category/' + this.$route.params.categoryId);
        console.log('buy data >> ', buyData.data.data);
        this.items = buyData.data.data.items;
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
                        let resData = await axios.get(`/my/buy-sells/category/${this.$route.params.categoryId}/skip/${this.items.length}/take/6`);

                        this.items = [...this.items,...resData.data.data.items]
                        this.loading.seeMore = false
                        this.allowToGetMore = true;
                        if(resData.data.data.items.length < 1) {
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
        $route(from, to) {
            this.$fetch();
        }
    },
}
</script>