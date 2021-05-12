<template>
    <section class="realestates-page">
        <div class="container">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><nuxt-link to="/">{{ $t("subnav.home") }}</nuxt-link></li>
                    <li class="breadcrumb-item"><nuxt-link :to="`/${locale}/services/`">{{ $t("subnav.service") }}</nuxt-link></li>
                    <li class="breadcrumb-item active" aria-current="page">{{ $t("subnav.realstate") }}</li>
                </ol>
            </nav>

            <div class="realestates-filter">
                <div class="form-row">
                    <div class="form-group col-md-3">
                        <label for="specialization">{{ $t("real_state.type") }}</label>
                        <select v-model="type" id="specialization" class="form-control form-control-lg">
                            <option value="">Choose Type</option>
                            <option value="rental">Rental</option>
                            <option value="sale">Sale</option>
                        </select>
                    </div>
                    <div class="form-group col-md-3">
                        <label for="specialization">{{ $t("real_state.finish") }}</label>
                        <select v-model="finishing" id="specialization" class="form-control form-control-lg">
                            <option value="">Choose Finishing</option>
                            <option value="full">Full</option>
                            <option value="three-quarters">Three-quarters</option>
                            <option value="half">Half</option>
                            <option value="none">none</option>
                        </select>
                    </div>
                    <div class="form-group col-md-3">
                        <label for="specialization">{{ $t("real_state.furnishing") }}</label>
                        <select v-model="furnishing" id="specialization" class="form-control form-control-lg">
                            <option value="">Choose furnish</option>
                            <option value="furnished">Furnished</option>
                            <option value="unfurnished">Unfurnished</option>
                        </select>
                    </div>
                    <div class="form-group col-md-3">
                        <label for="specialization">{{ $t("real_state.category") }}</label>
                        <select v-model="category" id="specialization" class="form-control form-control-lg">
                            <option value="">select category</option>
                            <option
                                :value="cat.id"
                                v-for="cat in categories"
                                :key="cat.id"
                                >{{ cat.name }}</option>
                        </select>
                    </div>

                    <div class="form-group col-md-3">
                        <div class="chiller_cb">
                            <input v-model="garden" id="garden" type="checkbox">
                            <label for="garden">{{ $t("real_state.garden") }}</label>
                            <span></span>
                        </div>
                    </div>
                    <div class="form-group col-md-3">
                        <div class="chiller_cb">
                            <input v-model="maidService" id="maid" type="checkbox">
                            <label for="maid">{{ $t("real_state.maid_services") }}</label>
                            <span></span>
                        </div>
                    </div>
                    <div class="form-group col-md-3">
                        <div class="chiller_cb">
                            <input v-model="security" id="security" type="checkbox">
                            <label for="security">{{ $t("real_state.security") }}</label>
                            <span></span>
                        </div>
                    </div>
                    <div class="form-group col-md-3">
                        <div class="chiller_cb">
                            <input v-model="parking" id="parking" type="checkbox">
                            <label for="parking">{{ $t("real_state.parking") }}</label>
                            <span></span>
                        </div>
                    </div>

                </div>

                <div class="filter-btn">
                    <button class="btn" @click="onSearch">{{ $t("real_state.filter") }}</button>
                </div>

            </div>

            <app-main-categories :categories="categories"></app-main-categories>

            <nuxt-child></nuxt-child>

            <!-- <div class="paginator">
                <div class="overflow-auto">
                    <b-pagination-nav :link-gen="linkGen" :limit="10" :hide-goto-end-buttons="true" :number-of-pages="10" align="center" use-router>
                        <template #prev-text><span><img src="/images/icons/svg/chevron-left.svg" alt=""></span></template>
                        <template #next-text><span><img src="/images/icons/svg/chevron-right.svg" alt=""></span></template>
                    </b-pagination-nav>
                </div>
            </div> -->

        </div>
    </section>
</template>

<script>
import axios from 'axios'
import MainCategories from '~/components/Categories/RealestateMainCategories';
import SingleRealestate from '~/components/Vendor/SingleRealestate';

export default {
    components: {
        appMainCategories: MainCategories,
        appSingleRealestate: SingleRealestate
    },
    data () {
        return {
            categories: [],
            category: "",
            type: "",
            furnishing: "",
            finishing: "",
            searchObj: {},
            garden: false,
            maidService: false,
            security: false,
            parking: false,
        }
    },
    computed: {
        locale() {
            return this.$store.getters['locale/locale'];
        },
    },
    mounted() {
        console.log(this.$route.name)
    },
    async fetch() {
        try {
            let realestatesData = await axios.get('/my/realestate');
            console.log('realestaes cat .> ', realestatesData.data.data)
            this.categories = realestatesData.data.data.categories
        } catch (error) {
            console.log('error >> ', error)
        }
    },
    methods: {
      linkGen(pageNum) {
        return pageNum === 1 ? '?' : `?page=${pageNum}`
      },
        onSearch() {
            console.log("search");
            this.searchObj = {
                category_id: this.category,
                estate_type: this.type,
                estate_furnishing: this.furnishing,
                estate_finishing: this.finishing,
                has_garden: this.garden,
                has_maid_service: this.maidService,
                has_security: this.security,
                has_coverd_parking: this.parking
            };

            console.log("search obj >> ", this.searchObj);
            this.$router.push(
                "/" +
                this.$store.getters['locale/locale'] +
                "/services/realestates/search?categoryId=" +
                this.category +
                "&type=" +
                this.type +
                "&furnishing=" +
                this.furnishing +
                "&finishing=" +
                this.finishing +
                "&garden=" +
                this.garden +
                "&maidService=" +
                this.maidService +
                "&security=" +
                this.security +
                "&parking=" +
                this.parking
            );
        }
    }
}
</script>