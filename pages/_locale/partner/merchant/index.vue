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
              {{$t("partner.merchant_info") }}
            </v-stepper-step>

            <!-- <v-divider></v-divider> -->

            <!-- <v-stepper-step step="3">
              Name of step 3
            </v-stepper-step> -->
          </v-stepper-header>

          <form @submit.prevent="">
            <v-stepper-items>
              <v-stepper-content step="1">
                <div class="partner-form">
                  <!-- <div class="profile-img text-center">
                    <img :src="image" alt="" />
                    <div class="form-group">
                      <label for="profile">{{$t("partner.upload") }}</label>
                      <input
                        type="file"
                        class="form-control"
                        id="profile"
                        @change="onImagePicked($event)"
                        hidden
                        aria-describedby="emailHelp"
                      />
                    </div>
                  </div> -->

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
                      <label for="country">{{$t("partner.country") }}</label>
                      <select
                        @change="getGovernorates"
                        @input="$v.country.$touch()"
                        :class="{ invalid: $v.country.$error }"
                        v-model="country"
                        id="country" 
                        class="form-control 
                        form-control-lg">
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

                  <div class="btn-next"> <!-- :disabled="$v.personalForm.$invalid" -->
                    <button :disabled="$v.personalForm.$invalid" class="btn" type="button" @click="e1 = 2">
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
                      <label for="commercial">{{$t("partner.commerical_name") }}</label>
                      <input
                        @input="$v.commercialName.$touch()"
                        v-model="commercialName"
                        :class="{ invalid: $v.commercialName.$error }"
                        type="text"
                        class="form-control form-control-lg"
                        id="commercial"
                      />
                      <template v-if="$v.commercialName.$error">
                        <small v-if="!$v.commercialName.required" class="form-text text-muted">
                          <span>This field is required</span>
                        </small>
                      </template>
                    </div>
                    <div class="form-group col-md-5">
                      <label for="category">{{$t("partner.select_cate") }}</label>
                      <select 
                        @change="$v.merchantCat.$touch()"
                        v-model="merchantCat"
                        :class="{ invalid: $v.merchantCat.$error }"
                        id="category" 
                        class="form-control form-control-lg">
                        <option value>Choose Category</option>
                        <option :value="cat.id" v-for="cat in merchantCats" :key="cat.id">{{cat.name}}</option>
                      </select>
                      <template v-if="$v.merchantCat.$error">
                        <small v-if="!$v.merchantCat.required" class="form-text text-muted">
                          <span>This field is required</span>
                        </small>
                      </template>
                    </div>
                  </div>
                  <div class="form-row justify-content-between">
                    <div class="form-group col-md-5">
                      <label for="commercialPhone">{{$t("partner.commercial_phone") }}</label>
                      <input
                        @input="$v.contactNumber.$touch()"
                        v-model="contactNumber"
                        :class="{ invalid: $v.contactNumber.$error }"
                        type="text"
                        class="form-control form-control-lg"
                        id="commercialPhone"
                      />
                      <template v-if="$v.contactNumber.$error">
                        <small class="form-text text-muted">
                          <span v-if="!$v.contactNumber.required">This field is required</span>
                          <span v-if="!$v.contactNumber.numeric">Phone number should be numeric</span>
                        </small>
                      </template>
                    </div>
                    <div class="form-group col-md-5">
                      <label for="hotline">{{$t("partner.hotline") }}</label>
                      <input
                        v-model="hotline"
                        type="text"
                        class="form-control form-control-lg"
                        id="hotline"
                      />
                    </div>
                  </div>

                  <div class="form-row justify-content-between">
                    <div class="form-group col-md-5">
                      <label for="email">Email</label>
                      <input
                        v-model="email"
                        type="text"
                        class="form-control form-control-lg"
                        id="email"
                      />
                    </div>
                    <div class="form-group col-md-5">
                      <label for="website">Website</label>
                      <input
                        v-model="website"
                        type="text"
                        class="form-control form-control-lg"
                        id="website"
                      />
                    </div>
                  </div>

                  <div class="form-row justify-content-between">
                    <div class="form-group col-md-5">
                      <label for="address">{{$t("partner.address") }}</label>
                      <input
                        @input="$v.address.$touch()"
                        v-model="address"
                        :class="{ invalid: $v.address.$error }"
                        type="text"
                        class="form-control form-control-lg"
                        id="address"
                      />
                      <template v-if="$v.address.$error">
                        <small v-if="!$v.address.required" class="form-text text-muted">
                          <span>This field is required</span>
                        </small>
                      </template>
                    </div>
                    <div class="form-group col-md-5">
                      <label for="confirmPassword">{{$t("partner.delivery_state") }}</label>
                      <select 
                        v-model="delivery"
                        class="form-control form-control-lg">
                        <option value="none">None</option>
                        <option value="as_open">during working hours</option>
                        <option value="24/7">24/7</option>
                      </select>
                    </div>
                  </div>

                  <div class="form-row justify-content-between">
                    <div class="form-group col-md-5">
                        <label for="address">{{$t("partner.open") }}</label>
                        <b-form-timepicker 
                          @input="$v.openFrom.$touch()"
                          v-model="openFrom"
                          :class="{ invalid: $v.openFrom.$error }"
                          locale="en">
                        </b-form-timepicker>
                        <template v-if="$v.openFrom.$error">
                          <small v-if="!$v.openFrom.required" class="form-text text-muted">
                            <span>This field is required</span>
                          </small>
                        </template>
                    </div>
                    <div class="form-group col-md-5">
                        <label for="address">{{$t("partner.close") }}</label>
                        <b-form-timepicker 
                          @input="$v.openTo.$touch()"
                          v-model="openTo"
                          :class="{ invalid: $v.openTo.$error }"
                          locale="en">
                        </b-form-timepicker>
                        <template v-if="$v.openTo.$error">
                          <small v-if="!$v.openTo.required" class="form-text text-muted">
                            <span>This field is required</span>
                          </small>
                        </template>
                    </div>
                  </div>

                  <div class="form-row justify-content-between">
                    <div class="form-group col-md-5">
                      <label for="lic-img">Logo Image</label>
                      <input
                        @change="onFilePicked($event, 'logoImage', 'logoPlaceholder', 'Upload profile image')"
                        type="file"
                        id="lic-img"
                      />
                    </div>
                    <div class="form-group col-md-5">
                      <label for="crim-img">Cover Image</label>
                      <input
                        @change="onFilePicked($event, 'coverImage', 'coverImagePlaceholder', 'Upload profile image')"
                        type="file"
                        id="crim-img"
                      />
                    </div>
                  </div>

                  <div class="form-row">
                    <div class="form-group col-12">
                        <label for="description">{{$t("partner.descrip") }}</label>
                        <textarea
                          @input="$v.description.$touch()"
                          v-model="description"
                          :class="{ invalid: $v.description.$error }"
                          class="form-control" 
                          id="description" 
                          rows="4">
                        </textarea>
                        <template v-if="$v.description.$error">
                          <small v-if="!$v.description.required" class="form-text text-muted">
                            <span>This field is required</span>
                          </small>
                        </template>
                    </div>
                  </div>

                  <div class="langs">
                    <div class="row justify-content-center">
                      <div class="col-11">
                        <h5>Product Languages</h5>
                        <div class="languages">
                          <span class="badge badge-pill">
                            <span class="text">{{defaultLang}}</span>
                          </span>
                          <span class="badge badge-pill edit" v-for="(label, index) in langLabels" :key="index">
                            <span class="text">{{label.name}}</span>
                            <span class="edit-text" @click="editLang(label)" style="cursor:pointer">Edit</span>
                            <img @click="deleteLang(label)" style="cursor:pointer" src="/images/icons/svg/reservation-remove.svg" alt="">
                          </span>
                          <span class="badge badge-pill another" @click="openModal" style="cursor:pointer">
                            <span class="text">+ Add Another Language</span>
                          </span>
                        </div>
                      </div>
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
                    <!-- :disabled="$v.businessForm.$invalid" -->
                    <button :disabled="$v.businessForm.$invalid" @click="createAccount" class="btn create-btn" type="button">
                      <span>{{$t("partner.account_btn") }}</span>
                    </button>
                  </div>
                </div>

              </v-stepper-content>
            </v-stepper-items>
          </form>
        </v-stepper>
      </div>

      <b-modal id="modal-lang" title="BootstrapVue" centered size='lg' @hidden='modalHidden' hide-footer hide-header>
        <div class="popup-lang">
          <h3>Add Another Language</h3>

          <span class="remove">
            <img src="/images/icons/svg/icon-lang-remove.svg" alt="">
          </span>

          <div class="form-row">

            <div class="form-group col-md-6">
              <label for="lang">Select Language</label>
              <select 
                :disabled="editMode"
                v-model="selectedLang"
                id="lang" 
                class="form-control 
                form-control-lg">
                  <option value>select Language</option>
                  <option :value="lang" v-for="(lang, index) in langs" :key="index" >{{lang.name}}</option>
              </select>
            </div>
            <div class="form-group col-md-6">
              <label for="lang-title">Commercial Name</label>
              <input
                @input="$v.translate.commercialName.$touch()"
                :class="{ invalid: $v.translate.commercialName.$error }"
                v-model="translate.commercialName"
                type="text"
                class="form-control form-control-lg"
                id="lang-title"
              />
              <template v-if="$v.translate.commercialName.$error">
                <small class="form-text text-muted">
                  <span v-if="!$v.translate.commercialName.required">This field is required</span>
                </small>
              </template>
            </div>

          </div>
          <div class="form-row">
            <div class="form-group col-12">
              <label for="description">Description</label>
              <textarea
                @input="$v.translate.description.$touch()"
                :class="{ invalid: $v.translate.description.$error }"
                v-model="translate.description"
                class="form-control"
                id="description"
                rows="4"
              ></textarea>
              <template v-if="$v.translate.description.$error">
                <small class="form-text text-muted">
                  <span v-if="!$v.translate.description.required">This field is required</span>
                </small>
              </template>
            </div>
          </div>

          <div class="btn-section" v-if="!editMode"  @click="addLang">
            <button class="auction-btn" :disabled="$v.translateForm.$invalid"> <!-- :disabled="$v.$invalid || isLoading" -->
              <!-- <b-spinner v-if="isLoading" type="grow" label="Spinning" variant="text-white"></b-spinner> -->
              <span>Add Language</span>
            </button>
          </div>
          <div class="btn-section" v-else @click="saveLang">
            <button class="auction-btn" :disabled="$v.translateForm.$invalid"> <!-- :disabled="$v.$invalid || isLoading" -->
              <!-- <b-spinner v-if="isLoading" type="grow" label="Spinning" variant="text-white"></b-spinner> -->
              <span>Save Language</span>
            </button>
          </div>

        </div>
      </b-modal>

    </div>
  </section>
</template>

<script>
import axios from "axios";
import {required, numeric, minValue, minLength, sameAs,} from "vuelidate/lib/validators";
import { locale } from 'vue-moment';

export default {
    layout: 'withoutNavbar',
  data() {
    return {
      e1: 1,
      image: "/images/person.jpeg",
      value: '',

      availableLangs: this.$store.getters['locale/langs'],
      selectedLangs: {},
      selectedLang: '',
      translate: {
        commercialName: '',
        description: ''
      },
      langLabels: [],
      editMode: false,

      firstName: "",
      lastName: "",
      commercialName: "",
      merchantCat: "",
      merchantCats: [],
      phone: "",
      description: "",
      shortDescription: "",
      contactPerson: "",
      contactNumber: "",
      email: "",
      website: "",
      address: "",
      openFrom: "",
      openTo: "",
      delivery: "as_open",
      password: "",
      confirmPassword: "",
      passwordFieldType: "password",
      confirmPasswordFieldType: "password",
      showPasswordIcon: false,
      showConfirmPasswordIcon: false,
      hotline: "",
      country: "",
      government: "",
      city: "",
      cities: [],
      countries: [],
      governments: [],

      logoImage: '',
      logoPlaceholder: '',
      coverImage: '',
      coverImagePlaceholder: ''

    };
  },
  computed: {
    langs: {
      get: function() {
        // let availableLangs = this.$store.getters['locale/langs'];
        let filteredLangs = this.availableLangs.filter(lang => {
          return lang.code != this.$store.getters['locale/langCode']
        })
        return filteredLangs
      },
      set: function(newLangs) {
        this.availableLangs = newLangs
      }
    },
    defaultLang() {
      return this.$store.getters['locale/langName']
    },
    locale() {
      return this.$store.getters['locale/locale']
    }
  },
  validations: {
    firstName: {
      required,
    },
    lastName: {
      required,
    },
    commercialName: {
      required,
    },
    merchantCat: {
      required,
    },
    contactPerson: {
      required,
    },
    contactNumber: {
      required,
      numeric,
    },
    description: {
      required,
    },
    logoImage: {
      required,
    },
    coverImage: {
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
    address: {
      required,
    },
    openFrom: {
      required,
    },
    openTo: {
      required,
    },
    delivery: {
      required,
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
    password: {
      required,
      minLen: minLength(8),
    },
    confirmPassword: {
      sameAs: sameAs("password"),
    },
    selectedLang: {
      required
    },
    translate: {
      commercialName: {
        required
      },
      description: {
        required
      }
    },
    personalForm: ['firstName', 'lastName', 'phone', 'country', 'government', 'city', 'password', 'confirmPassword'],
    businessForm: ['commercialName', 'merchantCat', 'contactNumber', 'address', 'delivery', 'openFrom', 'openTo', 'description', 'logoImage', 'coverImage'],
    translateForm: ['selectedLang', 'translate.commercialName', 'translate.description']
  },
  async fetch() {

    let merchantCatsData = await axios.get("/categories/parent/8");
    console.log("merchant >> ", merchantCatsData.data.data);
    this.merchantCats = merchantCatsData.data.data;

    let countriesData = await axios.get("/countries");
    // console.log('countries data >> ', countriesData.data.data);
    this.countries = countriesData.data.data;

  },
  methods: {
    async createAccount() {
      let vendorObject = {
        first_name: this.firstName,
        last_name: this.lastName,
        // comercial_name: this.commercialName,
        category_id: this.merchantCat,
        phone: this.phone,
        image: this.logoImage,
        cover_image: this.coverImage,
        // description: this.description,
        contact_person: this.contactPerson,
        contact_number: this.contactNumber,
        country: this.country,
        governorate: this.government,
        city: this.city,
        open_from_time: this.openFrom,
        open_to_time: this.openTo,
        address: this.address,
        delivery_status: this.delivery,
        address_latitude: 1.22,
        address_longitude: 1.35,
        password: this.password,
        hotline: this.hotline,
        email: this.email,
        website: this.website,
        type: "vendor",
        chanel: "web",

        [this.$store.getters['locale/langCode']]: {
          commercial_name: this.commercialName,
          description: this.description
        },
        ...this.selectedLangs,
      };
      console.log("vedor object >> ", vendorObject);

      try {
        let createVendor = await axios.post('/my/users/vendor/register', vendorObject);
        this.$router.push("/" + locale + "/verify");

        console.log('vendor created >> ', createVendor);
      } catch (error) {
        console.log('error >> ', error);
      }

    },
    openModal() {

      console.log('lang add > ', this.selectedLang, this.selectedLangs, this.editMode);

      this.$bvModal.show('modal-lang');
    },
    modalHidden() {
      // this.editMode = false;
      if(this.editMode) {
        this.langs = this.langs.filter(lang => {
          return lang.code != this.selectedLang.code
        });
        this.selectedLangs[this.selectedLang.code] = {
          ...this.translate
        }

        this.selectedLang = '';
        this.translate.commercialName = '';
        this.translate.description = '';
        this.$v.translateForm.$reset();
      }

      this.editMode = false;

      console.log('hidden', this.editMode);
    },
    addLang() {

      if(this.$v.translateForm.$invalid)
        return
      
        this.selectedLangs[this.selectedLang.code] = {
          ...this.translate
        }

        this.langs = this.langs.filter(lang => {
          return lang.code != this.selectedLang.code
        });

        this.langLabels.push(this.selectedLang);

        this.selectedLang = '';
        this.translate.commercialName = '';
        this.translate.description = '';
        this.$v.translateForm.$reset();

        console.log('lang added!', this.selectedLang, this.selectedLangs, this.langLabels);
        this.$bvModal.hide('modal-lang');

    },
    editLang(label) {
      console.log('edit!');
      this.editMode = true;
      let editedLang = this.selectedLangs[label.code];
      console.log('lang >. ', editedLang);
      this.translate = editedLang;
      let found = this.availableLangs.find(ele => {
        return ele.code == label.code
      })
      console.log('found >> ', found)
      if(!found)
        this.availableLangs.push(label);

      this.selectedLang = label;
      console.log('result >> ', this.availableLangs, this.selectedLang);
      this.$bvModal.show('modal-lang');
    },
    saveLang() {

      if(this.$v.translateForm.$invalid)
        return

      console.log('saved!');
      this.selectedLangs[this.selectedLang.code] = {
        ...this.translate
      }
      console.log('saved >> ', this.selectedLangs);

      this.langs = this.langs.filter(lang => {
        return lang.code != this.selectedLang.code
      });

      this.selectedLang = '';
      this.translate.commercialName = '';
      this.translate.description = '';
      this.$v.translateForm.$reset();

      this.editMode = false;
      this.$bvModal.hide('modal-lang');

    },
    deleteLang(label) {
      console.log('delete lang!', label);
      let index = this.langLabels.findIndex(lang => {
        return lang.code == label.code
      });
      this.langLabels.splice(index, 1);
      delete this.selectedLangs[label.code];
      this.availableLangs.push(label);

      console.log('result >> ', this.langLabels, this.selectedLangs, this.selectedLang);
    },
    // onImagePicked(event) {
    //   console.log("picked");
    //   let file = event.target.files[0];

    //   if (file) {
    //     const fileReader = new FileReader();
    //     fileReader.addEventListener("load", () => {
    //       this.image = fileReader.result;
    //       console.log("image >> ", this.image);
    //     });
    //     fileReader.readAsDataURL(file);
    //   }
    // },
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
