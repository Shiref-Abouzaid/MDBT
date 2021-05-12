<template>
    <div class="all-results">
        <div class="search-heading">
            <!-- <p>7,618 {{ $t("search_result.found") }}</p> -->
            <p>results</p>
        </div>
        <div class="single-result">
            <div class="row">
                <div class="col-6" v-for="user in users" :key="user.id">
                    <app-single-user :user="user"></app-single-user>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import SingleUser from '~/components/Vendor/SearchUser'

export default {
    components: {
        appSingleUser: SingleUser
    },
    data() {
        return {
            users: []
        }
    },
    async fetch() {
        try {
            let searchData = await axios.post('/my/social/users/search/skip/0/take/100', {
                search: this.$route.query.keyword
            });
            this.users = searchData.data.data
            console.log('users results >> ', searchData.data.data);
        } catch (error) {
            console.log('error >> ', error)
        }
    }
}
</script>