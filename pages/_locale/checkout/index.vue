<template>
  <section class="checkout">
    <div class="container">
      <div class="checkout-content">
        <h3>{{ $t("cart.checkout_header") }}</h3>
        <v-stepper v-model="e1" alt-labels>
          <v-stepper-header>
            <v-stepper-step :complete="e1 > 1" step="1">{{
              $t("cart.delivery")
            }}</v-stepper-step>

            <v-divider :complete="e1 > 2" step="2"></v-divider>

            <v-stepper-step :complete="e1 > 2" step="2">{{
              $t("cart.confirmation")
            }}</v-stepper-step>

            <v-divider :complete="e1 > 2"></v-divider>

            <v-stepper-step :complete="e1 > 3" step="3">{{
              $t("cart.payment")
            }}</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step :complete="e1 > 4" step="4">{{
              $t("cart.finish")
            }}</v-stepper-step>
          </v-stepper-header>

          <form @submit.prevent>
            <v-stepper-items>
              <v-stepper-content step="1">
                <div class="checkout-form">
                  <div class="row">
                    <div class="form-group col-sm-6">
                      <label for="firstname"
                        >{{ $t("cart.first_name") }}*</label
                      >
                      <input 
                        disabled
                        v-model="firstName"
                        class="form-control form-control-lg"
                        type="text" />
                    </div>

                    <div class="form-group col-sm-6">
                      <label for="lastname">{{ $t("cart.last_name") }}*</label>
                      <input 
                        disabled
                        v-model="lastName"
                        class="form-control form-control-lg" 
                        type="text" />
                    </div>
                  </div>
                  <div class="row">
                    <div class="form-group col-sm-6">
                      <label for="address">Phone*</label>
                      <input 
                        disabled
                        v-model="phone"
                        class="form-control form-control-lg" 
                        type="text" />
                    </div>
                    <div class="form-group col-sm-6">
                      <label for="address">{{ $t("cart.address") }}*</label>
                      <input 
                        :disabled="!!address"
                        v-model="address1"
                        class="form-control form-control-lg" 
                        type="text" />
                    </div>
                  </div>
                  <div class="row">
                    <div class="form-group col-sm-6">
                      <label for="country">{{$t("user_profile.country") }}</label>
                      <select @change="loadGovernorates" v-model="country" id="country" class="form-control">
                          <option value="">Choose country</option>
                          <option :value="country.id" v-for="country in countries" :key="country.id">{{ country.name }}</option>
                      </select>
                    </div>
                    <div class="form-group col-sm-6">
                    <label for="governorate">{{$t("user_profile.govern") }}</label>
                    <select @change="loadCities" v-model="government" id="governorate" class="form-control">
                        <option value="">Choose governorate</option>
                        <option  :value="government.id" v-for="government in governments" :key="government.id">{{ government.name }}</option>
                    </select>
                    </div>
                  </div>
                  <div class="row">
                    <div class="form-group col-sm-6">
                      <label for="city">{{$t("user_profile.city") }}</label>
                      <select v-model="city" id="city" class="form-control">
                          <option value="">Choose City</option>
                          <option  :value="city.id" v-for="city in cities" :key="city.id">{{ city.name }}</option>
                      </select>
                    </div>
                  </div>
                  <div class="country-type">
                    <!-- <span class="country">{{ $t("cart.country") }}:</span>
                    <span class="country-name">Egypt*</span> -->

                    <div class="checkbox">
                      <b-form-checkbox>{{
                        $t("cart.billing_info")
                      }}</b-form-checkbox>
                    </div>
                  </div>
                  <div class="delivery-option">
                    <h4>{{ $t("cart.delivery_options") }}</h4>
                    <div class="radio-button">
                      <div class="row justify-space-between">
                        <div class="col-sm-6">
                          <b-form-radio name="radio-size"
                            >{{ $t("cart.standerd") }}:
                            <span class="busines-day"
                              >(free, 2-3 business day)</span
                            >
                          </b-form-radio>
                        </div>
                        <div class="col-sm-6">
                          <b-form-radio name="radio-size"
                            >{{ $t("cart.express") }}:
                            <span class="busines-day"
                              >(28, 1-2 business day)</span
                            >
                          </b-form-radio>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="buttons-section">
                  <button class="btn" type="button" @click="e1 = 2">
                    <span>{{ $t("cart.next_btn") }}</span>
                  </button>
                </div>
              </v-stepper-content>
              <v-stepper-content step="2">
                <div class="order-confirmation">
                  <div class="row">
                    <div class="col-sm-7">
                      <h5>{{ $t("cart.order") }}</h5>
                      <div class="order-summery-head">
                        <div class="row">
                          <div class="col-sm-8">
                            <span>{{ $t("cart.item") }}</span>
                          </div>
                          <div class="col-sm-2 text-center">
                            <span>{{ $t("cart.qty") }}</span>
                          </div>
                          <div class="col-sm-2 text-center">
                            <span>{{ $t("cart.price") }}</span>
                          </div>
                        </div>
                      </div>
                      <div
                        class="order-summery-content"
                        v-for="order in 4"
                        :key="order"
                      >
                        <div class="row">
                          <div class="col-sm-8">
                            <span class="type"> Green T-shirt </span>
                          </div>
                          <div class="col-sm-2 text-center">
                            <span class="num">2</span>
                          </div>
                          <div class="col-2 text-center">
                            <span class="price">{{currSymbol}}15</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-1"></div>

                    <div class="col-sm-4">
                      <h5>{{ $t("cart.delivery") }}</h5>
                      <div class="details">
                        <h6>{{ $t("cart.address") }}</h6>
                        <p>lorem khloud,kjffkncdmsac.mdl ,<br />vnjfbv ifbk</p>
                        <h6>{{ $t("cart.delivery_options") }}</h6>
                        <p>
                          {{ $t("cart.standerd_delivery") }}<br />{{
                            $t("cart.shortly")
                          }}
                          <span>(free,2-3 days)</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="other-details">
                    <div class="subtotal">
                      <span class="total"> {{ $t("cart.sub_total") }} </span>
                      <span class="num">{{currSymbol}}7000</span>
                    </div>
                    <div class="shiping">
                      <span class="ship"> {{ $t("cart.shipping") }} </span>
                      <span class="free">free</span>
                    </div>
                    <div class="grandtotal">
                      <span class="grand"> {{ $t("cart.grandtotal") }}</span>
                      <span class="total-num">£340</span>
                    </div>
                  </div>
                </div>
                <div class="buttons-section-step">
                  <button class="btn perv-btn" type="button" @click="e1 = 1">
                    <span>{{ $t("cart.back_btn") }}</span>
                  </button>
                  <button class="btn next-btn" type="button" @click="e1 = 3">
                    <span>{{ $t("cart.next_btn") }}</span>
                  </button>
                </div>
              </v-stepper-content>
              <v-stepper-content step="3">
                <div class="payment">
                  <div class="payment-images">
                    <img src="/images/pay with card.png" alt="" />

                    <img src="/images/pay with paypal.png" alt="" />
                  </div>
                  <div class="form-section">
                    <div class="row">
                      <div class="col-sm-6">
                        <div class="form-group">
                          <label for="cardname">{{
                            $t("cart.holder_name")
                          }}</label>
                          <div class="input-box">
                            <input
                              type="cardname"
                              class="form-control form-control-lg"
                              id="cardname"
                            />
                            <img
                              src="/images/icons/svg/icons-person-black.svg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="form-group">
                          <label for="cardnum">{{ $t("cart.card_num") }}</label>
                          <div class="input-box">
                            <input
                              type="cardnum"
                              class="form-control form-control-lg"
                              id="cardnum"
                            />
                            <img
                              src="/images/icons/svg/icons-card-black.svg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-6">
                        <div class="row">
                          <div class="col-sm-6">
                            <div class="form-group">
                              <label for="valid">{{ $t("cart.valid") }}</label>
                              <div class="input-box">
                                <input
                                  type="cardname"
                                  class="form-control form-control-lg"
                                  id="valid"
                                  placeholder="MM/YY"
                                />
                                <img
                                  src="/images/icons/svg/icons-calendar-black.svg"
                                  alt=""
                                />
                              </div>
                              <!-- <b-form-datepicker id="datepicker-lg-placeholder" placeholder="MM/YY" locale="en"></b-form-datepicker> -->
                            </div>
                          </div>
                          <div class="col-sm-6">
                            <div class="form-group">
                              <label for="cvv">CVV/CVC*</label>
                              <div class="input-box">
                                <input
                                  type="cardname"
                                  class="form-control form-control-lg"
                                  id="cvv"
                                />
                                <img
                                  src="/images/icons/svg/icons-lock-black.svg"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <P
                          >*{{ $t("cart.cvv") }}<br />
                          {{ $t("cart.cvv_back") }}</P
                        >
                      </div>
                    </div>
                  </div>
                </div>

                <div class="buttons-section-step">
                  <button class="btn perv-btn" type="button" @click="e1 = 2">
                    <span>{{ $t("cart.back_btn") }}</span>
                  </button>
                  <button class="btn next-btn" type="button" @click="e1 = 4">
                    <span>{{ $t("cart.next_btn") }}</span>
                  </button>
                </div>
              </v-stepper-content>
              <v-stepper-content step="4">
                <div class="sucess">
                  <img src="/images/logo.png" alt="" />
                  <h2>{{ $t("cart.success") }}!</h2>
                  <p>
                    {{ $t("cart.shipped_shortly") }}<br />
                    {{ $t("cart.shortly") }}
                  </p>
                  <button>{{ $t("cart.back_shop-btn") }}</button>
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

export default {
  middleware: ["auth"],
  layout: "withoutNavbar",
  data() {
    return {
      e1: 1,

      firstName: "",
      lastName: "",
      phone: "",
      address: "", //to disable the input field if there is no address
      address1: "",
      address2: "",
      country: "",
      city: "",
      government: "",

      cities: [],
      countries: [],
      governments: [],

    };
  },
  computed: {
    currSymbol() {
        return this.$store.getters['currency/symbol']
    }
  },
    async fetch() {
        
        try {

            let userData = await axios.get('/my/social/profile/' + this.$store.getters['auth/userId']);
            console.log('user >> ', userData.data.data);
            let user = userData.data.data;

            let countriesData = await axios.get('/countries');
            console.log('countries data >> ', countriesData.data.data);
            this.countries = countriesData.data.data;

            if(user.details) {
                this.firstName = user.details.first_name;
                this.lastName = user.details.last_name;
                this.phone = user.details.phone;

                if(user.details.user_details) {
                    console.log('add >> ', user.details.user_details.address)
                    this.address = user.details.user_details.address
                    this.address1 = user.details.user_details.address;
                    this.country = user.details.user_details.country;
                    this.government = user.details.user_details.governorate;
                    this.city = user.details.user_details.city;

                    if(user.details.user_details.image_url)
                        this.image = user.details.user_details.image_url;

                    console.log('country >> ', this.country, user.details.user_details.governorate, this.government, this.address)

                    if(this.country) {
                        // this.loadGovernorates();
                        let governoratesData = await axios.get('/governorates/country/' + this.country);
                        console.log('gover >> ', governoratesData.data.data);
                        this.governments = governoratesData.data.data;
                    }

                    if(this.government) {
                        // this.loadCities()
                        let citiesData = await axios('/cities/governorate/' + this.government);
                        console.log('cities >> ', citiesData.data.data);
                        this.cities = citiesData.data.data;
                    }


                }

            }

        } catch (error) {
            console.log('error >> ', error);
        }
    },
    methods: {
      async loadCountries() {
          //load countries
          console.log('in load countries method >> ');
          let countriesData = await axios.get('/countries');
          console.log('countries data >> ', countriesData.data.data);
          this.countries = countriesData.data.data;
      },
      async loadGovernorates() {
          //load governorates
          let governoratesData = await axios.get('/governorates/country/' + this.country);
          console.log('gover >> ', governoratesData.data.data);
          this.governments = governoratesData.data.data;
      },
      async loadCities() {
          //load cities
          let citiesData = await axios('/cities/governorate/' + this.government);
          console.log('cities >> ', citiesData.data.data);
          this.cities = citiesData.data.data;
      },
    }
};
</script>