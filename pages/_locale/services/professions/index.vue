<template>
    <div class="professions-content">

        <section class="professions" v-for="cat in categories" :key="cat.id">
            <div class="head">
                <h3>{{cat.name}}</h3>
                <nuxt-link :to="{name:'locale-services-professions-professionId-professionName', params:{professionId:cat.id,professionName:cat.name}}">{{$t("professions.more")}}</nuxt-link>
            </div>

            <div class="profession-cards">
                <app-slider-profession :technicians="cat.technicians"></app-slider-profession>
            </div>

        </section>

        <section class="professions">
            <div class="head">
                <h3>{{ $t("professions.plumber") }}</h3>
                <nuxt-link to="/">{{ $t("professions.more") }}</nuxt-link>
            </div>

            <div class="profession-cards">
                <app-slider-profession></app-slider-profession>
            </div>

        </section>
    </div>
</template>

<script>
import axios from 'axios'
import SliderProfession from '~/components/Vendor/SliderProfession';

export default {
    components: {
        appSliderProfession: SliderProfession
    },
    data() {
        return {
            categories: []
        }
    },
    async fetch() {
        try {
            let professionsData = await axios.get('/my/technicians');
            this.categories = professionsData.data.data.CategoryTechnicians
            console.log('tdch  >> ', this.categories);
        } catch (error) {
            console.log('error << ', error)
        }
    },

}
</script>