<template>
    <div>
      <div class="row">
          <div class="col-sm-4" v-for="car in cars" :key="car.id">
            <app-single-car :car="car"></app-single-car>
          </div>
      </div>
      <div class="text-center mt-4" v-if="loading.seeMore">
          <b-spinner variant="default" large type="grow" class="spinner-primary" />
      </div>
    </div>
</template>

<script>
import axios from 'axios'
import SingleCar from '~/components/Vendor/SingleCar';

export default {
  components: {
    appSingleCar: SingleCar
  },
  data() {
    return {
      // categories: [],
      cars: [],
      allowToGetMore:true,
      noMore:false,
      loading:{
          seeMore:false
      },
    }
  },
  computed: {
      currSymbol() {
          return this.$store.getters['currency/symbol']
      }
  },
  async fetch() {
    try {
      let carsData = await axios.get('/my/car-rental/skip/0/take/6')
      console.log('cars >> ', carsData.data.data);
      // this.categories = carsData.data.data.categories;
      this.cars = carsData.data.data.cars;
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