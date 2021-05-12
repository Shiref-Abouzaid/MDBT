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
    computed: {
        currSymbol() {
            return this.$store.getters["currency/symbol"];
        }
    },
    async fetch() {
        try {
            let realestatesData = await axios.get('/my/realestate');
            console.log('realestaes cat .> ', realestatesData.data.data)
            this.realestates = realestatesData.data.data.realestates
        } catch (error) {
            console.log('error >> ', error)
        }
    },
    
    watch: {
        currSymbol(oldSymbol, newSymbol) {
            console.log('symbol >> ', oldSymbol, newSymbol);
            this.$fetch();
        }
    }
}
</script>