<template>
    <div class="all-results">
        <div class="search-heading">
            <!-- <p>7,618 {{ $t("search_result.found") }}</p> -->
            <p>results</p>
        </div>
        <div class="single-result">
            <div class="row">
                <div class="col-6" v-for="doctor in doctors" :key="doctor.id">
                    <app-single-profession :doctor="doctor"></app-single-profession>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import SingleDoctor from '~/components/Vendor/SingleDoctor'

export default {
    components: {
        appSingleDoctor: SingleDoctor
    },
    data() {
        return {
            doctors: []
        }
    },
    async fetch() {
        try {
            let searchData = await axios.post('/my/technicians/search', {
                search: this.$route.query.keyword
            });
            this.doctors = searchData.data.data
            console.log('doctors results >> ', searchData.data.data);
        } catch (error) {
            console.log('error >> ', error)
        }
    }
}
</script>