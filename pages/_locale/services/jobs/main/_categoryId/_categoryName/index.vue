<template>
<div class="row">
    <div class="col-sm-4" v-for="job in jobs" :key="job.id">
        <app-single-buy :job="job"></app-single-buy>
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
            jobs: []
        }
    },
    async fetch() {
        // console.log('in buy main cat')
        let jobsData = await axios.get('/my/jobs/category/' + this.$route.params.categoryId);
        console.log('buy data >> ', jobsData.data.data);
        this.jobs = jobsData.data.data.items;
    },
    watch: {
        $route(from, to) {
            this.$fetch();
        }
    },
}
</script>