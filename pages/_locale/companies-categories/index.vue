<template>
    <section class="company-categories">
        <div class="container">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><nuxt-link to="/">{{ $t("subnav.home") }}</nuxt-link></li>
                    <li class="breadcrumb-item active" aria-current="page">{{$t("menu.companies_index")}}</li>
                </ol>
            </nav>
            <!-- <app-main-categories></app-main-categories> -->

            <div class="items">
                <div class="head">
                    <h3>{{$t("companies_index.popular_categories")}}</h3>
                    <div class="add-btn">
                        <button @click="$router.push('/' + locale + '/companies-categories/add')" class="btn">+ {{$t("companies_index.add_company_btn")}}</button>
                    </div>
                </div>

                <div class="row">
                    <div class="col-sm-4" v-for="cat in categories" :key="cat.id">
                        <app-company-category :category="cat"></app-company-category>
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
// import MainCategories from '~/components/Categories/BuyMainCategories'
import companyCategory from '~/components/Categories/companyMainCategory'

export default {
    components: {
        // appMainCategories: MainCategories,
        appCompanyCategory : companyCategory
    },
    data() {
        return {
            categories: [],
            allowToGetMore:true,
            noMore:false,
            loading:{
                seeMore:false
            },
        }
    },
    computed: {
        locale() {
            return this.$store.getters['locale/locale']
        }
    },
    async fetch() {
        let categories = await axios.get('my/index/categories/parent/2/skip/0/take/6');
        this.categories = categories.data.data
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
                        let resData = await axios.get(`my/index/categories/parent/2/skip/${this.categories.length}/take/6`)

                        this.categories = [...this.categories,...resData.data.data]
                        
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
}
</script>