<template>
  <section class="developer-register">
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
        <!-- <v-stepper v-model="e1" alt-labels> -->

          <form @submit.prevent="">
            <!-- <v-stepper-items> -->
              <!-- <v-stepper-content step="1"> -->
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
                        <label for="lang-title">Commercial Name</label>
                        <input
                            @input="$v.commercialName.$touch()"
                            :class="{ invalid: $v.commercialName.$error }"
                            v-model="commercialName"
                            type="text"
                            class="form-control form-control-lg"
                            id="lang-title"
                        />
                        <template v-if="$v.commercialName.$error">
                            <small class="form-text text-muted">
                            <span v-if="!$v.commercialName.required">This field is required</span>
                            </small>
                        </template>
                    </div>
                    <div class="form-group col-md-5">
                      <label for="phone">Phone</label>
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
                  </div>
                  <div class="form-row justify-content-between">
                    <div class="form-group col-md-5">
                      <label for="email">Email</label>
                      <input
                        @input="$v.email.$touch()"
                        v-model="email"
                        :class="{ invalid: $v.email.$error }"
                        type="text"
                        class="form-control form-control-lg"
                        id="email"
                      />
                      <template v-if="$v.email.$error">
                        <small class="form-text text-muted">
                            <span v-if="!$v.email.required">This field is required</span>
                          <span v-if="!$v.email.email">enter valid email address</span>
                        </small>
                      </template>
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
                      <label for="hotline">Contact Person Name</label>
                      <input
                        @input="$v.contactPerson.$touch()"
                        v-model="contactPerson"
                        :class="{ invalid: $v.contactPerson.$error }"
                        type="text"
                        class="form-control form-control-lg"
                        id="hotline"
                      />
                      <template v-if="$v.contactPerson.$error">
                        <small class="form-text text-muted">
                          <span v-if="!$v.contactPerson.required">This field is required</span>
                        </small>
                      </template>
                    </div>
                    <div class="form-group col-md-5">
                      <label for="commercialPhone">Contact Person Phone</label>
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
                  </div>
                    <div class="form-row">
                        <div class="form-group col-12">
                        <label for="description">Description</label>
                        <textarea
                            @input="$v.description.$touch()"
                            :class="{ invalid: $v.description.$error }"
                            v-model="description"
                            class="form-control"
                            id="description"
                            rows="4"
                        ></textarea>
                        <template v-if="$v.description.$error">
                            <small class="form-text text-muted">
                            <span v-if="!$v.description.required">This field is required</span>
                            </small>
                        </template>
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

                  <div class="langs">
                    <div class="row">
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

                  <div class="action-btns text-center">
                    <!-- <button class="btn perv-btn" type="button" @click="e1 = 1">
                      <img
                        src="/images/icons/svg/left-green-arrow.svg"
                        alt=""
                      />
                      <span>{{$t("partner.previous_link") }}</span>
                    </button> -->
                    <!-- :disabled="$v.businessForm.$invalid" -->
                    <button :disabled="$v.personalForm.$invalid" @click="createAccount" class="btn create-btn" type="button">
                      <span>{{$t("partner.account_btn") }}</span>
                    </button>
                  </div>
                  
                </div>
              <!-- </v-stepper-content> -->

            <!-- </v-stepper-items> -->
          </form>
        <!-- </v-stepper> -->
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
import {required, numeric, email, minValue, minLength, sameAs,} from "vuelidate/lib/validators";

export default {
    layout: 'withoutNavbar',
  data() {
    return {
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
      phone: "",
      description: "",
      contactPerson: "",
      contactNumber: "",
      email: "",
      website: "",
      address: "",
      password: "",
      confirmPassword: "",
      passwordFieldType: "password",
      confirmPasswordFieldType: "password",
      showPasswordIcon: false,
      showConfirmPasswordIcon: false,
      country: "",
      government: "",
      city: "",
      cities: [],
      countries: [],
      governments: [],

      logoImage: '',
      logoPlaceholder: '',

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
    phone: {
      required,
      numeric,
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
    email: {
        required,
        email
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
    personalForm: ['logoImage', 'firstName', 'lastName', 'commercialName', 'phone', 'contactPerson', 'contactNumber', 'address', 'email', 'description', 'country', 'government', 'city', 'password', 'confirmPassword'],
    // businessForm: ['commercialName', 'merchantCat', 'contactNumber', 'address', 'delivery', 'openFrom', 'openTo', 'description', 'logoImage', 'coverImage'],
    translateForm: ['selectedLang', 'translate.commercialName', 'translate.description']
  },
  async fetch() {

    let countriesData = await axios.get("/countries");
    // console.log('countries data >> ', countriesData.data.data);
    this.countries = countriesData.data.data;

  },
  methods: {
    async createAccount() {



      let developerObj = {
        first_name: this.firstName,
        last_name: this.lastName,
        // comercial_name: this.commercialName,
        phone: this.phone,
        image: this.logoImage,
        // description: this.description,
        contact_person: this.contactPerson,
        contact_number: this.contactNumber,
        country: this.country,
        governorate: this.government,
        city: this.city,
        address: this.address,
        address_latitude: 1.22,
        address_longitude: 1.35,
        password: this.password,
        email: this.email,
        website: this.website,

        [this.$store.getters['locale/langCode']]: {
          commercial_name: this.commercialName,
          description: this.description
        },
        ...this.selectedLangs,
      };
      console.log("developer object >> ", developerObj);

      try {
        let createDeveloper = await axios.post('/my/users/developer/register', developerObj);
        this.$router.push("/" + locale + "/verify");

        console.log('vendor created >> ', createDeveloper);
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
