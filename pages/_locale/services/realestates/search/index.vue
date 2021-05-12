<template>
    <div class="realestates">
        <div class="row">
            <div class="col-sm-4" v-for="realestate in realestates" :key="realestate.id">
                <app-single-realestate :realestate="realestate"></app-single-realestate>
            </div>
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
            realestates: []
        }
    },
    async fetch() {
        try {

            let searchObj = {
                category_id: this.$route.query.categoryId,
                estate_type: this.$route.query.type,
                estate_furnishing: this.$route.query.furnishing,
                estate_finishing: this.$route.query.finishing,
                has_garden: this.$route.query.garden == 'false' ? 0 : 1,
                has_maid_service: this.$route.query.maidService == 'false' ? 0 : 1,
                has_security: this.$route.query.security == 'false' ? 0 : 1,
                has_coverd_parking: this.$route.query.parking == 'false' ? 0 : 1
            };

            console.log("in search >> ", searchObj, this.$route.query.garden, this.$route.query.garden == 'false');

            let realestatesData = await axios.post("/realestate/search", searchObj);
            console.log('realestaes cat .> ', realestatesData.data.data)
            this.realestates = realestatesData.data.data
        } catch (error) {
            console.log('error >> ', error)
        }
    },
    watch: {
        "$route.query": "$fetch"
    },
}
</script>