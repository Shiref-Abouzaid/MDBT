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
  async fetch() {
    try {
      let carsData = await axios.post('/my/car-rental/filtered/skip/0/take/6', {
          categories: this.$route.params.categoryId
      })
      console.log('cars >> ', carsData.data.data);
      // this.categories = carsData.data.data.categories;
      this.cars = carsData.data.data.cars;
    } catch (error) {
      console.log('error >> ', error)
    }
  },
    methods:{
        async handleScroll (event) {
            let windowScrollY       =  window.scrollY
            let windowScrollHeight  = document.body.scrollHeight
            let widnowHeight        = window.innerHeight

            if(Math.floor(windowScrollY - (windowScrollHeight-widnowHeight)) < 1 &&  Math.floor(windowScrollY - (windowScrollHeight-widnowHeight)) > -10) {
                 if(this.allowToGetMore && !this.noMore) { 
                     this.allowToGetMore = false;
                     try {
                        this.loading.seeMore = true
                        let resData = await axios.post(`/my/car-rental/filtered/skip/${this.cars.length}/take/6`, {
                          categories: this.$route.params.categoryId
                        });
                        this.cars = [...this.cars,...resData.data.data.cars]
                        this.loading.seeMore = false
                        this.allowToGetMore = true;
                        if(resData.data.data.cars.length < 1) {
                            this.noMore = true
                        }
                     } catch (error) {
                         console.log(error.response)
                     }

                 }

            }
        },
    },
    created() {
        if (process.client) {
            window.addEventListener('scroll', this.handleScroll);
        }   
    },
    watch:{
      '$route.params': function() {
         this.$fetch()
      }
    }


}
</script>