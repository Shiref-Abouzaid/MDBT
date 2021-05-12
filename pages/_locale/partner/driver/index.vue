<template>
  <section class="merchant-register">
    <div class="container">
      <div class="partner-list">
        <h3 class="text-center">{{ $t("partner.become_partner") }}</h3>

        <div class="all-partner">
          <div class="service">
            <nuxt-link :to="'/' + locale + '/partner/merchant'">
              <div class="service-img">
                <img src="/images/icons/svg/shop.svg" alt="" />
              </div>
              <p>{{$t("partner.merchant") }}</p>
            </nuxt-link>
          </div>
          <div class="service">
            <nuxt-link :to="'/' + locale + '/partner/doctor'">
              <div class="service-img">
                <img src="/images/icons/svg/doctor.svg" alt="" />
              </div>
              <p>{{$t("partner.doctor") }}</p>
            </nuxt-link>
          </div>
          <div class="service">
            <nuxt-link :to="'/' + locale + '/partner/profession'">
              <div class="service-img">
                <img src="/images/icons/svg/carpenter.svg" alt="" />
              </div>
              <p>{{$t("partner.profession") }}</p>
            </nuxt-link>
          </div>
          <div class="service">
            <nuxt-link :to="'/' + locale + '/partner/driver'">
              <div class="service-img">
                <img src="/images/icons/svg/driver.svg" alt="" />
              </div>
              <p>{{$t("partner.driver") }}</p>
            </nuxt-link>
          </div>
          <div class="service">
            <nuxt-link :to="'/' + locale + '/partner/realestate-developer'">
              <div class="service-img">
                <img src="/images/icons/svg/dog-house.svg" alt="" />
              </div>
              <p>{{$t("partner.real_state") }}</p>
            </nuxt-link>
          </div>
          <!-- <div class="service">
            <nuxt-link :to="'/' + locale + '/partner/restaurant-owner'">
              <div class="service-img">
                <img src="/images/icons/svg/icon-restaurant.svg" alt="" />
              </div>
              <p>Restaurant Owner</p>
            </nuxt-link>
          </div>
          <div class="service">
            <nuxt-link :to="'/' + locale + '/partner/pharmacist'">
              <div class="service-img">
                <img src="/images/icons/svg/icon-pharmacy.svg" alt="" />
              </div>
              <p>Pharmacist</p>
            </nuxt-link>
          </div> -->
        </div>
      </div>

      <div class="register">
        <v-stepper v-model="e1" alt-labels>
          <v-stepper-header>
            <v-stepper-step :complete="e1 > 1" step="1">
      {{$t("partner.personal_info") }}
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step :complete="e1 > 2" step="2">
              Car Info
            </v-stepper-step>

            <!-- <v-divider></v-divider> -->

            <!-- <v-stepper-step step="3">
              Name of step 3
            </v-stepper-step> -->
          </v-stepper-header>

          <form @submit.prevent="createDriver">
            <v-stepper-items>
              <v-stepper-content step="1">
                <div class="partner-form">
                  <div class="profile-img text-center">
                    <img :src="logoImage ? logoImage : '/images/placeholder.jpg'" alt="" />
                    <div class="form-group">
                      <label for="profile">{{$t("partner.upload") }}</label>
                      <input
                        type="file"
                        class="form-control"
                        id="profile"
                        @change="onFilePicked($event, 'logoImage', '', '')"
                        hidden
                        aria-describedby="emailHelp"
                      />
                    </div>
                  </div>

                  <div class="form-row justify-content-between">
                    <div class="form-group col-md-5">
                      <label for="firstName">{{$t("partner.first_name") }}</label>
                      <input
                        @input="$v.firstName.$touch()"
                        v-model="firstName"
                        :class="{ invalid: $v.firstName.$error }"
                        type="text"
                        class="form-control form-control-lg"
                        id="firstName"
                      />
                      <template v-if="$v.firstName.$error">
                        <small v-if="!$v.firstName.required" class="form-text text-muted">
                          <span>This field is required</span>
                        </small>
                      </template>
                    </div>
                    <div class="form-group col-md-5">
                      <label for="lastName">{{$t("partner.last_name") }}</label>
                      <input
                        @input="$v.lastName.$touch()"
                        v-model="lastName"
                        :class="{ invalid: $v.lastName.$error }"
                        type="text"
                        class="form-control form-control-lg"
                        id="lastName"
                      />
                      <template v-if="$v.lastName.$error">
                        <small v-if="!$v.lastName.required" class="form-text text-muted">
                          <span>This field is required</span>
                        </small>
                      </template>
                    </div>
                  </div>
                  <div class="form-row justify-content-between">
                    <div class="form-group col-md-5">
                      <label for="phone">{{$t("partner.personal_phone") }}</label>
                      <input
                        @input="$v.phone.$touch()"
                        v-model="phone"
                        :class="{ invalid: $v.phone.$error }"
                        type="text"
                        class="form-control form-control-lg"
                        id="phone"
                      />
                      <template v-if="$v.phone.$error">
                        <small class="form-text text-muted">
                          <span v-if="!$v.phone.required">This field is required</span>
                          <span v-if="!$v.phone.numeric">Phone number should be numeric</span>
                          <span v-if="!$v.phone.unique">Phone is already registered</span>
                          <!-- <span v-if="!$v.phone.exact">Phone must be 11 digits</span> -->
                        </small>
                      </template>
                    </div>
                    <div class="form-group col-md-5">
                      <label for="lic-num">License Number</label>
                      <input
                        @input="$v.licenseNumber.$touch()"
                        v-model="licenseNumber"
                        :class="{ invalid: $v.licenseNumber.$error }"
                        type="number"
                        class="form-control form-control-sm"
                        id="licenseNumber"
                      />
                      <template v-if="$v.licenseNumber.$error">
                        <small v-if="!$v.licenseNumber.required" class="form-text text-muted">
                          <span>This field is required</span>
                        </small>
                      </template>
                    </div>
                  </div>
                  <div class="form-row justify-content-between">
                    <div class="form-group col-md-5">
                      <label for="lic-img">License Image</label>
                      <input
                        @change="onFilePicked($event, 'licenseImage', 'licenseImagePlaceholder', 'License image')"

                        type="file"
                        class="form-control-file"
                        id="license"
                      />
                    </div>
                    <div class="form-group col-md-5">
                      <label for="license-datepicker">License Expire Date</label>
                      <b-form-datepicker id="license-datepicker" placeholder="License Expiration" v-model="licenseExpireDate"></b-form-datepicker>
                    </div>
                  </div>
                  <div class="form-row justify-content-between">
                    <div class="form-group col-md-5">
                      <label for="crim-img">Criminal Records Image</label>
                      <input
                        @change="onFilePicked($event, 'crimeRecordsImage', 'crimeRecordsImagePlacehoder', 'Crime records image')"

                        type="file"
                        class="form-control-file"
                        id="crimeRecordsImage"
                      />
                      <template v-if="$v.crimeRecordsImage.$error">
                        <small v-if="!$v.crimeRecordsImage.required" class="form-text text-muted">
                          <span>This field is required</span>
                        </small>
                      </template>
                    </div>
                    <div class="form-group col-md-5">
                        <label for="country">{{$t("partner.country") }}</label>
                        <select 
                            @change="getGovernorates"
                            @input="$v.country.$touch()"
                            :class="{ invalid: $v.country.$error }"
                            v-model="country"
                            id="country" 
                            class="form-control form-control-lg">
                            <option value>Select your country</option>
                            <option
                            :value="country.id"
                            v-for="country in countries"
                            :key="country.id"
                            >{{country.name}}</option>
                        </select>
                        <template v-if="$v.country.$error">
                            <small class="form-text text-muted">
                            <span v-if="!$v.country.required">This field is required</span>
                            </small>
                        </template>
                    </div>
                  </div>
                  <div class="form-row justify-content-between">
                    <div class="form-group col-md-5">
                        <label for="governorate">{{$t("partner.govern") }}</label>
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
                                >{{ government.name }}</option>
                        </select>
                        <template v-if="$v.government.$error">
                            <small class="form-text text-muted">
                            <span v-if="!$v.government.required"
                                >This field is required</span
                            >
                            </small>
                        </template>
                    </div>
                    <div class="form-group col-md-5">
                        <label for="city">{{$t("partner.city") }}</label>
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
                            <span v-if="!$v.city.required"
                                >This field is required</span
                            >
                            </small>
                        </template>
                    </div>
                  </div>
                  <div class="form-row justify-content-between">
                    <div class="form-group col-md-5">
                      <label for="password">{{$t("partner.password") }}</label>
                      <div class="field-container">
                        <input
                          ref="password"
                          @input="$v.password.$touch()"
                          v-model="password"
                          :type="passwordFieldType"
                          :class="{ invalid: $v.password.$error }"
                          class="form-control form-control-lg"
                          id="password"
                        />
                        <div class="icon" @click="showPassword">
                          <img v-if="!showPasswordIcon" src="/images/icons/svg/icon-confirm-password.svg" alt="">
                          <img v-if="showPasswordIcon" src="/images/icons/svg/icon-password.svg" alt="">
                        </div>
                      </div>
                      <template v-if="$v.password.$error">
                        <small class="form-text text-muted">
                          <span v-if="!$v.password.required">This field is required</span>
                          <span
                            v-if="!$v.password.minLen"
                          >Your password shoud be at least {{ $v.password.$params.minLen.min }} characters</span>
                        </small>
                      </template>
                    </div>
                    <div class="form-group col-md-5">
                      <label for="confirmPassword">{{$t("partner.confirm_pass") }}</label>
                      <div class="field-container">
                        <input
                          @input="$v.confirmPassword.$touch()"
                          v-model="confirmPassword"
                          :type="confirmPasswordFieldType"
                          :class="{ invalid: $v.confirmPassword.$error }"
                          class="form-control form-control-lg"
                          id="confirmPassword"
                        />
                        <div class="icon" @click="showConfirmPassword">
                          <img v-if="!showConfirmPasswordIcon" src="/images/icons/svg/icon-confirm-password.svg" alt="">
                          <img v-if="showConfirmPasswordIcon" src="/images/icons/svg/icon-password.svg" alt="">
                        </div>
                      </div>
                      <template v-if="$v.confirmPassword.$error">
                        <small class="form-text text-muted">
                          <span v-if="!$v.confirmPassword.sameAs">passwords must be the same</span>
                        </small>
                      </template>
                      <!-- <nuxt-link to="/">Forgot password?</nuxt-link> -->
                      
                    </div>
                  </div>

                  <div class="btn-next">
                    <button class="btn" type="button" @click="e1 = 2">
                      <span>{{$t("partner.nxt_btn") }}</span>
                      <img
                        src="/images/icons/svg/white-right-arrow.svg"
                        alt=""
                      />
                    </button>
                  </div>
                </div>
              </v-stepper-content>

              <v-stepper-content step="2">

                <div class="partner-form">

                  <div class="form-row justify-content-between">
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

                  <div class="form-row justify-content-between">
                    <div class="form-group col-md-5">
                      <label for="plate-char">License Plate Characters (optional)</label>
                      <input
                        v-model="car.licenseChars"
                        type="text"
                        class="form-control form-control-sm"
                        id="plate-char"
                      />
                    </div>
                    <div class="form-group col-md-5">
                      <label for="plate-num">License Plate Numbers</label>
                      <input
                        @input="$v.car.licenseNumbers.$touch()"
                        v-model="car.licenseNumbers"
                        type="tel"
                        class="form-control form-control-sm"
                        id="carNumber"
                      />
                      <template v-if="$v.car.licenseNumbers.$error">
                        <small v-if="!$v.car.licenseNumbers.required" class="form-text text-muted">
                          <span>This field is required</span>
                        </small>
                      </template>
                    </div>
                  </div>
                  <div class="form-row justify-content-between">
                    <div class="form-group col-md-5">
                      <label for="lic-img">License Image Front</label>
                      <input
                        :class="{ invalid: $v.car.licenseImageFront.$error }"
                        @change="onFilePicked($event, 'licenseImageFront', 'licenseImageFrontPlaceholder', 'Image license front', 'car')"

                        type="file"
                        class="form-control-file"
                        id="licenseImageFront"
                      />
                      <template v-if="$v.car.licenseImageFront.$error">
                        <small v-if="!$v.car.licenseImageFront.required" class="form-text text-muted">
                          <span>This field is required</span>
                        </small>
                      </template>
                    </div>
                    <div class="form-group col-md-5">
                      <label for="crim-img">License Image Back</label>
                      <input
                        :class="{ invalid: $v.car.licenseImageBack.$error }"
                        @change="onFilePicked($event, 'licenseImageBack', 'licenseImageBackPlaceholder', 'Image license back', 'car')"

                        type="file"
                        class="form-control-file"
                        id="crime"
                      />
                      <template v-if="$v.car.licenseImageBack.$error">
                        <small v-if="!$v.car.licenseImageBack.required" class="form-text text-muted">
                          <span>This field is required</span>
                        </small>
                      </template>
                    </div>
                  </div>

                  <div class="form-row justify-content-between">
                    <div class="form-group col-md-5">
                      <label for="man-year">Manufacturer Year</label>
                      <input
                        @input="$v.car.manfacturerYear.$touch()"
                        v-model="car.manfacturerYear"
                        :class="{ invalid: $v.car.manfacturerYear.$error }"
                        type="number"
                        class="form-control form-control-sm"
                        id="carYear"
                      />
                      <template v-if="$v.car.manfacturerYear.$error">
                        <small v-if="!$v.car.manfacturerYear.required" class="form-text text-muted">
                          <span>This field is required</span>
                        </small>
                      </template>
                    </div>
                    <div class="form-group col-md-5">
                      <label for="type">Type</label>
                      <select 
                        v-model="car.type"
                        @input="$v.car.type.$touch()"
                        :class="{ invalid: $v.car.type.$error }"
                        id="type" 
                        class="form-control form-control-lg">
                        <option value>Select Type</option>
                        <option value="taxi">Taxi</option>
                      </select>
                      <template v-if="$v.car.type.$error">
                        <small v-if="!$v.car.type.required" class="form-text text-muted">
                          <span>This field is required</span>
                        </small>
                      </template>
                    </div>
                  </div>

                  <div class="action-btns">
                    <button class="btn perv-btn" type="button" @click="e1 = 1">
                      <img
                        src="/images/icons/svg/left-green-arrow.svg"
                        alt=""
                      />
                      <span>{{$t("partner.previous_link") }}</span>
                    </button>
                    <button class="btn create-btn" type="submit">
                      <span>{{$t("partner.account_btn") }}</span>
                    </button>
                  </div>
                </div>

              </v-stepper-content>
            </v-stepper-items>
          </form>
        </v-stepper>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import {required, numeric, minValue, minLength, sameAs,} from "vuelidate/lib/validators";

export default {
    layout: 'withoutNavbar',
  data() {
    return {
      e1: 1,
      logoImage: '',
        value: '',

      firstName: "",
      lastName: "",
      phone: "",
      password: "",
      confirmPassword: "",
      passwordFieldType: "password",
      confirmPasswordFieldType: "password",
      showPasswordIcon: false,
      showConfirmPasswordIcon: false,

      licenseNumber: "",
      licenseImage: "",
      licenseExpireDate: "",
      crimeRecordsImage: "",

      carTypes: [],
      carType: "",
      carModels: [],
      carModel: "",
      car: {
        type: "",
        licenseChars: "",
        licenseNumbers: "",
        licenseImageFront: "",
        licenseImageBack: "",

        //image placeholders
        licenseImageFrontPlaceholder: "Image license front",
        licenseImageBackPlaceholder: "Image license back",

        carModel: "",
        manfacturerYear: ""
      },

      country: '',
      government: '',
      city: '',
      cities: [],
      countries: [],
      governments: [],

    };
  },
  computed: {
    locale() {
      return this.$store.getters['locale/locale']
    }
  },
  validations: {
    logoImage: {
      required
    },
    firstName: {
      required,
    },
    lastName: {
      required,
    },
    phone: {
      required,
      numeric,
      // exact: val => {
      // if (val === "")
      //     return true;

      // if (val.length == 11)
      //     return true;
      // else 
      //     return false;
      // },
      unique: (val) => {
        if (val === "")
          return true;
        return axios.get("/users/check-phone/" + val).then((res) => {
          console.log(res);
          // return Object.keys(res.data).length === 0
          return !res.data;
        });
      },
    },
    password: {
      required,
      minLen: minLength(8),
    },
    confirmPassword: {
      sameAs: sameAs("password"),
    },
    licenseNumber: {
      required
    },
    licenseImage: {
      required
    },
    licenseExpireDate: {
      required
    },
    crimeRecordsImage: {
      required
    },
    carType: {
      required
    },
    carModel: {
      required
    },
    car: {
      type: {
        required
      },
      licenseChars: {
        required
      },
      licenseNumbers: {
        required
      },
      licenseImageFront: {
        required
      },
      licenseImageBack: {
        required
      },
      carModel: {
        required
      },
      manfacturerYear: {
        required
      },
    },
    country: {
      required,
    },
    government: {
      required,
    },
    city: {
      required,
    },
  },
  async fetch() {

    try {
      let countriesData = await axios.get("/countries");
      // console.log('countries data >> ', countriesData.data.data);
      this.countries = countriesData.data.data;

      let CarsData = await axios.get("/car-models");
      console.log("car rental >> ", CarsData.data.data);
      this.carTypes = CarsData.data.data;
    } catch (error) {
      console.log('error >> ', error)
    }

  },
  methods: {
    async createDriver() {

      let driver = {
        first_name: this.firstName,
        last_name: this.lastName,
        image: this.logoImage,
        phone: this.phone,
        license_number: this.licenseNumber,
        license_image: this.licenseImage,
        crime_records_image: this.crimeRecordsImage,
        license_expiry_date: this.licenseExpireDate,

        type: this.car.type,
        license_plate: this.car.licenseChars + this.car.licenseNumbers,
        image_license_front: this.car.licenseImageFront,
        image_license_back: this.car.licenseImageBack,
        car_model_id: this.carModel,
        manufacturer_year: this.car.manfacturerYear,
        country: this.country,
        governorate: this.government,
        city: this.city,
        password: this.password,
      }

      console.log('driver created > ', driver)

      try {
        let driverCreate = await axios.post('/my/users/driver/register', driver);
        // this.$router.push("/" + locale + "/verify");

        console.log('vendor created >> ', driverCreate);
      } catch (error) {
        console.log('error >> ', error);
      }

    },
    onFilePicked(event, image, placeholder, text, nest = null) {
      console.log("picked");
      console.log(event);
      // this.$v[image].$touch();
      let file = event.target.files[0];

      if (file) {
        if(nest)
          this[nest][placeholder] = file.name;
        else  
          this[placeholder] = file.name;
        const fileReader = new FileReader();
        fileReader.addEventListener("load", () => {
          // this.imageUrl = fileReader.result
          if(nest) {
            this[nest][image] = fileReader.result;
            console.log("base 64 nest >> ", this[nest][image]);
          } else {
            this[image] = fileReader.result;
            console.log("base 64 >> ", this[image]);
          }
            
          
        });
        fileReader.readAsDataURL(file); //used to preview image in the browser, considered as a string
      } else {
        //so that if he choosed image, then cancelled
        // this[placeholder] = "Upload profile image";
        if(nest) {
          this[nest][placeholder] = text;
          this[nest][image] = "";
          this.$v[nest][image].$touch();
        } else {
          this[placeholder] = text;
          this[image] = "";
          this.$v[image].$touch();
        }
        console.log("cancelled");
      }
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
    showPassword() {
      // this.$refs.password.type = 'text'
      this.passwordFieldType =
        this.passwordFieldType === "password" ? "text" : "password";
      this.showPasswordIcon = !this.showPasswordIcon;
    },
    showConfirmPassword() {
      this.confirmPasswordFieldType =
        this.confirmPasswordFieldType === "password" ? "text" : "password";
      this.showConfirmPasswordIcon = !this.showConfirmPasswordIcon;
    }
  },
};
</script>
