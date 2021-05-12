<template>
    <div class="all-results">
        <div class="search-heading">
            <!-- <p>7,618 {{ $t("search_result.found") }}</p> -->
            <p>results</p>
        </div>
        <div class="single-result">
            <div class="row">
                <div class="col-6" v-for="company in companies" :key="company.id">
                    <app-single-profession :comp="company"></app-single-profession>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import SingleProfession from '~/components/Vendor/SingleCompany'

export default {
    components: {
        appSingleProfession: SingleProfession
    },
    data() {
        return {
            companies: []
        }
    },
    async fetch() {
        try {
            let searchData = await axios.post('/my/catalogues/search', {
                search: this.$route.query.keyword
            });
            this.companies = searchData.data.data
            console.log('companies results >> ', searchData.data.data);
        } catch (error) {
            console.log('error >> ', error)
        }
    }
}
</script>