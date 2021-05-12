<template>
  <section class="car-form pt-0">
    <div class="container">
      <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
              <li class="breadcrumb-item"><nuxt-link to="/">{{ $t("subnav.home") }}</nuxt-link></li>
              <li class="breadcrumb-item"><nuxt-link :to="{name:'locale-services'}">{{ $t("subnav.service") }}</nuxt-link></li>
              <li class="breadcrumb-item"><nuxt-link :to="{name:'locale-services-car-rental-main'}">{{ $t("subnav.rental") }}</nuxt-link></li>
              <!-- this will be restaurant name -->
              <li class="breadcrumb-item active" aria-current="page">Add Car</li>
          </ol>
      </nav>
      <div class="form-content">
        <h3>Add Car</h3>
        <form @submit.prevent="onSave">
          <div class="row justify-content-around">
            <div class="form-group col-md-5">
              <label for="cartype">Car Type</label>
              <select 
                v-model="carType"
                @change="loadModels"
                @input="$v.carType.$touch()"
                :class="{ invalid: $v.carType.$error }"
                id="cartype" 
                class="form-control form-control-lg">
                <option value>Select Type</option>
                <option v-for="cat in carTypes" :value="cat.id" :key="cat.id">{{
                  cat.model_name
                }}</option>
              </select>
              <template v-if="$v.carType.$error">
                <small class="form-text text-muted">
                  <span v-if="!$v.carType.required">This field is required</span>
                </small>
              </template>
            </div>
            <div class="form-group col-md-5">
              <label for="carmodel">Car Model</label>
              <select 
                v-model="carModel"
                @input="$v.carModel.$touch()"
                :class="{ invalid: $v.carModel.$error }"
                :disabled="!carType"
                id="carmodel" 
                class="form-control form-control-lg">
                <option value>Select Model</option>
                <option v-for="cat in carModels" :value="cat.id" :key="cat.id">{{
                  cat.model_name
                }}</option>
              </select>
              <template v-if="$v.carModel.$error">
                <small class="form-text text-muted">
                  <span v-if="!$v.carModel.required">This field is required</span>
                </small>
              </template>
            </div>
          </div>
          <div class="row justify-content-around">
            <div class="form-group col-md-5">
              <label for="rental">Rental Period</label>
              <select 
                v-model="rentalPeriod"
                @input="$v.rentalPeriod.$touch()"
                :class="{ invalid: $v.rentalPeriod.$error }"
                id="rental" 
                class="form-control form-control-lg">
              <option value="">Select rental period</option>
                <option value="hour">Hour</option>
                <option value="day">Day</option>
                <option value="week">Week</option>
                <option value="month">Month</option>
                <option value="year">Year</option>
              </select>
              <template v-if="$v.rentalPeriod.$error">
                <small class="form-text text-muted">
                  <span v-if="!$v.rentalPeriod.required">This field is required</span>
                </small>
              </template>
            </div>
            <div class="form-group col-md-5">
              <label for="bodytype">Body Type</label>
              <select 
                v-model="bodyType"
                @input="$v.bodyType.$touch()"
                :class="{ invalid: $v.bodyType.$error }"
                id="bodytype" 
                class="form-control form-control-lg">
                <option value="">Select body type</option>
                <option value="Sedan">Sedan</option>
                  <option value="SUV">SUV</option>
                  <option value="hatchback">Hatchback</option>
                  <option value="truck">Truck</option>
                  <option value="van">Van</option>
                  <option value="motocycle">Motocycle</option>
              </select>
              <template v-if="$v.bodyType.$error">
                <small class="form-text text-muted">
                  <span v-if="!$v.bodyType.required">This field is required</span>
                </small>
              </template>
            </div>
          </div>
          <div class="row justify-content-around">
            <div class="form-group col-md-5">
              <label for="transmission">Transmission</label>
              <select 
                v-model="transmission"
                @input="$v.transmission.$touch()"
                :class="{ invalid: $v.transmission.$error }"
                id="transmission" 
                class="form-control form-control-lg">
                <option value="">Select transmission</option>
                <option value="manual">Manual</option>
                <option value="automatic">Automatic</option>
              </select>
              <template v-if="$v.transmission.$error">
                <small class="form-text text-muted">
                  <span v-if="!$v.transmission.required">This field is required</span>
                </small>
              </template>
            </div>
            <div class="form-group col-md-5">
              <label for="color">Color</label>
              <input
                v-model="color"
                @input="$v.color.$touch()"
                :class="{ invalid: $v.color.$error }"
                type="text"
                class="form-control form-control-lg"
                id="color"
              />
              <template v-if="$v.color.$error">
                <small class="form-text text-muted">
                  <span v-if="!$v.color.required">This field is required</span>
                </small>
              </template>
            </div>
          </div>

          <div class="row justify-content-around">
            <div class="form-group col-md-5">
              <label for="carname">Car Name</label>
              <input
                v-model="title"
                @input="$v.title.$touch()"
                :class="{ invalid: $v.title.$error }"
                type="text"
                class="form-control form-control-lg"
                id="carname"
              />
              <template v-if="$v.title.$error">
                <small class="form-text text-muted">
                  <span v-if="!$v.title.required">This field is required</span>
                </small>
              </template>
            </div>
            <div class="form-group col-md-5">
              <label for="price">Price</label>
              <input
                v-model="price"
                @input="$v.price.$touch()"
                :class="{ invalid: $v.price.$error }"
                type="text"
                class="form-control form-control-lg"
                id="price"
              />
            <template v-if="$v.price.$error">
              <small class="form-text text-muted">
                <span v-if="!$v.price.required">This field is required</span>
              </small>
            </template>
            </div>
          </div>

          <div class="row justify-content-around">
            <div class="form-group col-md-5">
              <label for="year">Manufacturer Year</label>
              <input
                v-model="manfacturerYear"
                @input="$v.manfacturerYear.$touch()"
                :class="{ invalid: $v.manfacturerYear.$error }"
                type="text"
                class="form-control form-control-lg"
                id="year"
              />
              <template v-if="$v.manfacturerYear.$error">
                <small class="form-text text-muted">
                  <span v-if="!$v.manfacturerYear.required">This field is required</span>
                </small>
              </template>
            </div>
            <div class="form-group col-md-5">
              <label for="mobilenum">Mobile Number</label>
              <input
              v-model="phone"
              @input="$v.phone.$touch()"
              :class="{ invalid: $v.phone.$error }"
                type="text"
                class="form-control form-control-lg"
                id="mobilenum"
              />
            <template v-if="$v.phone.$error">
              <small class="form-text text-muted">
                <span v-if="!$v.phone.required">This field is required</span>
                <span v-if="!$v.phone.numeric">Phone should be numeric</span>
              </small>
            </template>
            </div>
          </div>
          <div class="row justify-content-around">
            <div class="form-group col-md-5">
              <label for="image">Cover Image</label>
                 <div class="text-field">
              <input 
                @change="onCoverPicked($event)"
                @input="$v.cover.$touch()"
                :class="{ invalid: $v.cover.$error }"
                type="file" 
                id="image" />
                <label for="image" class="label-file">Choose File</label>
            </div>
            <template v-if="$v.cover.$error">
              <small class="form-text text-muted">
                <span v-if="!$v.cover.required">This field is required</span>
              </small>
            </template>
                <div class="row" v-if="cover">
                  <div class="col-md-3">
                    <div class="gallery-box">
                      <div class="gallery">
                        <img class="image" :src="cover" alt="">
                      </div>
                      <img @click="deleteImage" class="icon" src="/images/icons/svg/close-btn-blue.svg" alt="">
                    </div>
                  </div>
              </div>
            </div>
            <div class="form-group col-md-5">
              <label for="photo">Car Photos</label>
               <div class="text-field">
              <input 
                multiple
                @input="$v.images.$touch()"
                :class="{ invalid: $v.images.$error }"
                @change="onFilePicked($event)"
                type="file" 
                id="photo" />
                   <label for="photo" class="label-file">Choose File</label>
            </div>
            <template v-if="$v.images.$error">
              <small class="form-text text-muted">
                <span v-if="!$v.images.required">This field is required</span>
              </small>
            </template>
                <div class="row" v-if="images && images.length > 0">
                  <div class="col-md-3" v-for="(img, index) in images" :key="index">
                    <div class="gallery-box">
                    <div class="gallery">
                      <img class="image" :src="img" alt="">
                    </div>
                    <img @click="removeImage(index)" class="icon" src="/images/icons/svg/close-btn-blue.svg" alt="">
                    </div>
                  </div>
                
                </div>
          </div>
          </div>
          <div class="row justify-content-around">
            <div class="form-group col-md-5">
              <label for="country">Country</label>
              <select 
                @change="getGovernorates"
                @input="$v.country.$touch()"
                :class="{ invalid: $v.country.$error }"
                v-model="country"
                id="country" 
                class="form-control form-control-lg">
                <option value>Choose country</option>
                <option
                  :value="country.id"
                  v-for="country in countries"
                  :key="country.id"
                  >{{ country.name }}</option
                >
              </select>
              <template v-if="$v.country.$error">
                <small class="form-text text-muted">
                  <span v-if="!$v.country.required">This field is required</span>
                </small>
              </template>
            </div>
            <div class="form-group col-md-5">
              <label for="governorate">Governorate</label>
              <select 
                @change="getCitites"
                @input="$v.government.$touch()"
                :class="{ invalid: $v.government.$error }"
                :disabled="!country"
                v-model="government"
                id="governorate" 
                class="form-control form-control-lg">
                <option value>Choose governorate</option>
                <option
                  :value="government.id"
                  v-for="government in governments"
                  :key="government.id"
                  >{{ government.name }}</option
                >
              </select>
            </div>
            <div class="form-group col-md-5">
              <label for="city">City</label>
              <select 
                :disabled="!government"
                v-model="city"
                @input="$v.city.$touch()"
                :class="{ invalid: $v.city.$error }"
                id="city" 
                class="form-control form-control-lg">
                <option value>Choose city</option>
                <option :value="city.id" v-for="city in cities" :key="city.id">{{
                  city.name
                }}</option>
              </select>
              <template v-if="$v.city.$error">
                <small class="form-text text-muted">
                  <span v-if="!$v.city.required">This field is required</span>
                </small>
              </template>
            </div>
          </div>
         <div class="form-row justify-content-center">
            <div class="form-group col-11">
              <label for="activity">Business Activity</label>
              <textarea
              v-model="description"
              @input="$v.description.$touch()"
              :class="{ invalid: $v.description.$error }"
                class="form-control"
                id="activity"
                rows="4"
              ></textarea>
            <template v-if="$v.description.$error">
              <small class="form-text text-muted">
                <span v-if="!$v.description.required"
                  >This field is required</span
                >
              </small>
            </template>
            </div>
          </div>
          <div class="checkbox">
             <b-form-checkbox v-model="hasDriver">Has Driver</b-form-checkbox>
             </div>
          <div class="btn-section">
         
            <button class="car-btn">
              <b-spinner v-if="isLoading" type="grow" label="Spinning" variant="text-white"></b-spinner>
              <span v-if="!isLoading">Add Product</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import { required, minLength, numeric } from "vuelidate/lib/validators";

export default {
  middleware: ["auth"],
  data() {
    return {
      isLoading: false,
      images: [],
      cover: "",
      carTypes: [],
      carType: "",
      carModels: [],
      carModel: "",
      rentalPeriod: "",
      bodyType: "",
      transmission: "",
      color: "",
      price: "",
      manfacturerYear: "",
      hasDriver: false,
      title: "",
      description: "",
      phone: "",
      country: "",
      city: "",
      government: "",
      cities: [],
      countries: [],
      governments: []
    };
  },
  validations: {
    carType: {
      required
    },
    rentalPeriod: {
      required
    },
    bodyType: {
      required
    },
    transmission: {
      required
    },
    carModel: {
      required
    },
    color: {
      required
    },
    phone: {
      required,
      numeric,
    },
    manfacturerYear: {
        required
    },
    price: {
      required
    },
    title: {
      required
    },
    cover: {
      required
    },
    images: {
      required,
      minLen: minLength(1)
    },
    country: {
      required
    },
    government: {
      required
    },
    city: {
      required
    },
    description: {
      required
    }
  },
  async fetch() {
    let CarsData = await axios.get("/car-models");
    console.log("car rental >> ", CarsData.data.data);
    this.carTypes = CarsData.data.data;

    console.log("cats >> ", this.categories);

    let countriesData = await axios.get("/countries");
    // console.log('countries data >> ', countriesData.data.data);
    this.countries = countriesData.data.data;

    // let data = await axios.get('/catalogues');
    // this.companies = data.data.data;
    // console.log('data >> ', this.companies);
  },
  methods: {
    onFilePicked(event) {
      console.log(event);
      this.$v.images.$touch();
      let files = event.target.files;

      if (files.length > 0) {
        for (let file of files) {
          const fileReader = new FileReader();
          fileReader.addEventListener("load", () => {
            // this.imageUrl = fileReader.result
            this.images.push(fileReader.result);
            //   console.log("base 64 >> ", fileReader.result);
          });
          fileReader.readAsDataURL(file); //used to preview image in the browser, considered as a string
        }
      } else {
        this.images = [];
      }
    },
    onCoverPicked(event) {
      console.log("picked");
      this.$v.cover.$touch();
      // console.log(event);
      let file = event.target.files[0];

      if (file) {
        const fileReader = new FileReader();
        fileReader.addEventListener("load", () => {
          // this.imageUrl = fileReader.result
          this.cover = fileReader.result;
          console.log("base 64 >> ", this.cover);
        });
        fileReader.readAsDataURL(file); //used to preview image in the browser, considered as a string
      } else {
        this.cover = "";
      }
    },
    async getGovernorates() {
      console.log("governorates >> ", this.country);
      if (!this.country) {
        this.government = "";
        return;
      }

      let governoratesData = await axios.get(
        "/governorates/country/" + this.country
      );
      console.log("gover >> ", governoratesData.data.data);
      this.governments = governoratesData.data.data;
    },
    async getCitites() {
      if (!this.government) {
        this.city = "";
        return;
      }
      let citiesData = await axios("/cities/governorate/" + this.government);
      console.log("cities >> ", citiesData.data.data);
      this.cities = citiesData.data.data;
    },
    onSave() {
      // console.log('save');
      let userId = +this.$store.getters["auth/userId"];
      let item = {
        user_id: userId,
        car_model_id: this.carModel,
        title: this.title,
        phone: this.phone,
        rental_period: this.rentalPeriod,
        rental_price_per_period: this.price,
        transmission: this.transmission,
        color: this.color,
        has_driver: this.hasDriver,
        body_type: this.bodyType,
        description: this.description,
        manufacturer_year: this.manfacturerYear,
        gallery: this.images,
        main_image: this.cover,
        country: this.country,
        city: this.city,
        governorate: this.government,
        
      };

      console.log("item >> ", item);

      this.isLoading = true;
      axios
        .post("/car-rental", item)
        .then(res => {
          console.log(res);
          this.isLoading = false;
          // this.$bvToast.show("my-toast");
          // this.$router.push(
          //   "/car/" + res.data.data.id
          // );
        })
        .catch(err => {
          this.isLoading = false;
          console.log(err);
        });
    },
    async loadModels() {
        console.log('changed');
        if(!this.carType) {
            this.carModel = "";
            return;
        }

    let carModelsData = await axios.get(
      "/car-models/parent/" + this.carType
    );

    console.log('car models >> ', carModelsData.data.data);

    this.carModels = carModelsData.data.data;

    },
    removeImage(index) {
      console.log('index >> ', index)
      this.images.splice(index, 1);
    },
    deleteImage() {
      this.cover = ''
    }
  }
}
</script>