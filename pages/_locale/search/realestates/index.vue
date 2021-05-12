<template>
    <div class="all-results">
        <div class="search-heading">
            <!-- <p>7,618 {{ $t("search_result.found") }}</p> -->
            <p>results</p>
        </div>
        <div class="single-result">
            <div class="row">
                <div class="col-6" v-for="estate in realestates" :key="estate.id">
                    <app-single-realestate :realestate="estate"></app-single-realestate>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import SingleRealestate from '~/components/Vendor/SingleRealestate'

export default {
    components: {
        appSingleRealestate: SingleRealestate
    },
    data() {
        return {
            realestates: []
        }
    },
    async fetch() {
        try {
            let searchData = await axios.post('/my/realestate/search-realestate', {
                search: this.$route.query.keyword
            });
            this.realestates = searchData.data.data
            console.log('realestates results >> ', searchData.data.data);
        } catch (error) {
            console.log('error >> ', error)
        }
    }
}
</script>