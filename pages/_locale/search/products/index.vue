<template>
    <div class="all-results">
        <div class="search-heading">
            <!-- <p>7,618 {{ $t("search_result.found") }}</p> -->
            <p>results</p>
        </div>
        <div class="single-result">
            <div class="row">
                <div class="col-6" v-for="product in products" :key="product.id">
                    <app-single-product :product="product"></app-single-product>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import SingleProduct from '~/components/Product/StoreSingleProduct'

export default {
    components: {
        appSingleProduct: SingleProduct
    },
    data() {
        return {
            products: []
        }
    },
    async fetch() {
        try {
            let searchData = await axios.post('/my/product/search/skip/0/take/6', {
                search: this.$route.query.keyword
            });
            this.products = searchData.data.data
            console.log('products results >> ', searchData.data.data);
        } catch (error) {
            console.log('error >> ', error)
        }
    }
}
</script>