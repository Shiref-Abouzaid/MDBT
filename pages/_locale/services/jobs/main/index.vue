<template>

<div class="row">
    <div class="col-sm-4" v-for="job in jobs" :key="job.id">
        <app-single-job :job="job"></app-single-job>
    </div>
</div>

</template>

<script>
import axios from 'axios'
// import MainCategories from '~/components/Categories/BuyMainCategories'
import SingleJob from '~/components/Vendor/SingleJob'

export default {
    components: {
        // appMainCategories: MainCategories,
        appSingleJob: SingleJob
    },
    data() {
        return {
            jobs: []
        }
    },
    async fetch() {
        try {
            // console.log('in buy main cat')
            let jobsData = await axios.get('/my/jobs/count/20');
            console.log('jobs data >> ', jobsData.data.data);
            this.jobs = jobsData.data.data;
        } catch (error) {
            console.log('error >> ', error)
        }
    }
}
</script>