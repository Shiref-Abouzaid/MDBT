<template>
    <section class="companies-page">
        <div class="container">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><nuxt-link to="/">Home</nuxt-link></li>
                    <li class="breadcrumb-item"><nuxt-link :to="`/${locale}/companies-categories/`">Companies Index</nuxt-link></li>
                    <li class="breadcrumb-item active" aria-current="page">{{$route.params.categoryName}}</li>
                </ol>
            </nav>

            <!-- <app-main-categories></app-main-categories> -->

            <div class="items">

                <div class="head">
                    <h3>{{ this.$route.params.categoryName }}</h3>
                    <div class="add-btn">
                        <button @click="$router.push('/' + locale + '/companies-categories/add')" class="btn">+ {{$t("companies_index.add_company_btn")}}</button>
                    </div>
                </div>

                <div class="row">
                    <div class="col-sm-4" v-for="comp in companies" :key="comp.id">
                        <app-company-category :comp="comp"></app-company-category>
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
import companyCategory from '~/components/Vendor/SingleCompany'

export default {
    components: {
        // appMainCategories: MainCategories,
        appCompanyCategory : companyCategory
    },
    data() {
        return {
            companies: [],
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
        console.log('cat id >> ', this.$route.params.categoryId)
        let companiesData = await axios.get('/my/index/catalogues/category/' + this.$route.params.categoryId + '/skip/0/take/6');
        this.companies = companiesData.data.data;
        console.log('companies >> ', companiesData.data.data)
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
                        let resData = await axios.get(`/my/index/catalogues/category/' + this.$route.params.categoryId + '/skip/${this.companies}/take/6`);
                        this.companies = [...this.companies,...resData.data.data]
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