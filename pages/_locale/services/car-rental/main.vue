<template>
  <div class="car-rental-page">
    <div class="container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><nuxt-link to="/">{{ $t("subnav.home") }}</nuxt-link></li>
            <li class="breadcrumb-item"><nuxt-link :to="`/${locale}/services/`">{{ $t("subnav.service") }}</nuxt-link></li>
            <li class="breadcrumb-item active" aria-current="page">{{ $t("subnav.rental") }}</li>
        </ol>
      </nav>

      <app-main-categories :categories="categories" :models="models"></app-main-categories>

      <div class="cars">

        <div class="head">
            <h3>{{$t("carRental.popularCars")}}</h3>
            <div class="add-btn">
                <button @click="$router.push('/' + locale + '/services/car-rental/add')" class="btn">+ {{$t("carRental.addCar")}}</button>
            </div>
        </div>

        <nuxt-child></nuxt-child>

      </div>

    </div>
  </div>
</template>

<script>
import axios from 'axios'
import MainCategories from '~/components/Categories/CarRentalMainCategories'
import SingleCar from '~/components/Vendor/SingleCar';

export default {
    components: {
        appMainCategories: MainCategories,
        appSingleCar: SingleCar
    },
    data() {
        return {
        categories: [],
        models: []
        //   cars: []
        }
    },
    computed: {
        locale() {
        return this.$store.getters['locale/locale']
        }
    },
    async fetch() {
        try {
            let carsData = await axios.get('/my/car-rental/skip/0/take/6')
            console.log('categories >> ', carsData.data.data);
            this.categories = carsData.data.data.categories;
            //   this.cars = carsData.data.data.cars;

            if(this.$route.params.categoryId) {
  
                let modelsData = await axios.post('/my/car-rental/filtered/skip/0/take/6', {
                    categories: this.$route.params.categoryId
                })
                this.models = modelsData.data.data.models;
                console.log('models fetch >> ', modelsData.data.data);
            }

        } catch (error) {
        console.log('error >> ', error)
        }
    },
    watch: {
        async '$route.params.categoryId'(from, to) {
            console.log('changed .......', from, to);
            if(this.$route.params.categoryId) {
                try {
                    let modelsData = await axios.post('/my/car-rental/filtered/skip/0/take/6', {
                        categories: this.$route.params.categoryId
                    })
                    this.models = modelsData.data.data.models;
                    console.log('models >> ', modelsData.data.data);
                } catch (error) {
                    console.log('models error >> ', error);
                }
            }
        }
    },
}
</script>