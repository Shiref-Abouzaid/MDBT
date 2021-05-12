<template>
    <div class="all-results">
        <div class="search-heading">
            <p>7,618 {{ $t("search_result.found") }}</p>
        </div>
        <div class="single-result">
            <h3>vendor</h3>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {

        }
    },
    async fetch() {
        try {
            let searchData = axios.post()
        } catch (error) {
            console.log('error >> ', error)
        }
    }
}
</script>