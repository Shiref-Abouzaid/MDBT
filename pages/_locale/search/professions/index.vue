<template>
    <div class="all-results">
        <div class="search-heading">
            <!-- <p>7,618 {{ $t("search_result.found") }}</p> -->
            <p>results</p>
        </div>
        <div class="single-result">
            <div class="row">
                <div class="col-6" v-for="prof in professions" :key="prof.id">
                    <app-single-profession :tech="prof"></app-single-profession>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import SingleProfession from '~/components/Vendor/SingleProfession'

export default {
    components: {
        appSingleProfession: SingleProfession
    },
    data() {
        return {
            professions: []
        }
    },
    async fetch() {
        try {
            let searchData = await axios.post('/my/technicians/search', {
                search: this.$route.query.keyword
            });
            this.professions = searchData.data.data
            console.log('professions results >> ', searchData.data.data);
        } catch (error) {
            console.log('error >> ', error)
        }
    }
}
</script>