<template>
  <section class="company-form">
    <div class="container">
      <div class="company-content">
        <h3>Add Job</h3>
        <form @submit.prevent="onSave">
          <div class="row justify-content-around">
            <div class="form-group col-md-5">
              <label for="category">Category</label>
              <select 
                v-model="category"
                @input="$v.category.$touch()"
                :class="{ invalid: $v.category.$error }"
                id="category" 
                class="form-control form-control-lg">
                <option value>Choose category</option>
                <option v-for="cat in categories" :value="cat.id" :key="cat.id">{{
                  cat.name
                }}</option>
              </select>
              <template v-if="$v.category.$error">
                <small class="form-text text-muted">
                  <span v-if="!$v.category.required">This field is required</span>
                </small>
              </template>
            </div>
            <div class="form-group col-md-5">
              <label for="companyname">Job Title</label>
              <input
                v-model="title"
                @input="$v.title.$touch()"
                :class="{ invalid: $v.title.$error }"
                type="text"
                class="form-control form-control-lg"
                id="companyname"
              />
              <template v-if="$v.title.$error">
                <small class="form-text text-muted">
                  <span v-if="!$v.title.required">This field is required</span>
                </small>
              </template>
            </div>
          </div>
          <div class="row justify-content-around">
            <div class="form-group col-md-5">
              <label for="email">Email</label>
              <input
                v-model="email"
                @input="$v.email.$touch()"
                :class="{ invalid: $v.email.$error }"
                type="text"
                class="form-control form-control-lg"
                id="phone"
              />
              <template v-if="$v.email.$error">
                <small class="form-text text-muted">
                  <span v-if="!$v.email.required">This field is required</span>
                  <span v-if="!$v.email.email">Enter valid email address</span>
                </small>
              </template>
            </div>
            <div class="form-group col-md-5">
              <label for="phone">Phone</label>
              <input
                type="text"
                class="form-control form-control-lg"
                id="phone"
              />
            </div>
          </div>
          <div class="row justify-content-around">
            <div class="form-group col-md-5">
              <label for="address">Location</label>
              <input
                v-model="address"
                @input="$v.address.$touch()"
                :class="{ invalid: $v.address.$error }"
                type="text"
                class="form-control form-control-lg"
                id="address"
              />
              <template v-if="$v.address.$error">
                <small class="form-text text-muted">
                  <span v-if="!$v.address.required">This field is required</span>
                </small>
              </template>
            </div>
            <div class="form-group col-md-5">
              <label for="country">Employment Type</label>
              <select 
                @change="getGovernorates"
                v-model="country"
                @input="$v.country.$touch()"
                :class="{ invalid: $v.country.$error }"
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
            </div>
          </div>
          <div class="row justify-content-around">
            <div class="form-group col-md-5">
              <label for="country">Experience Level</label>
              <select 
                id="country" 
                class="form-control form-control-lg">
                <option value='jonior'>Junior</option>
                <option value='senior'>Senior</option>
              </select>
            </div>
            <div class="form-group col-md-5">
              <label for="logo">Company Logo</label>
                 <div class="text-field">
                  <input
                    @input="$v.cover.$touch()"
                    :class="{ invalid: $v.cover.$error }"
                    @change="onCoverPicked($event)"
                    type="file"
                    id="logo"
                  />
                  <label for="logo" class="label-file">Choose File</label>
             
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
          </div>
          <div class="row justify-content-around">
            <div class="form-group col-md-5">
              <label for="country">Country</label>
              <select 
                @change="getGovernorates"
                v-model="country"
                @input="$v.country.$touch()"
                :class="{ invalid: $v.country.$error }"
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
            </div>
            <div class="form-group col-md-5">
              <label for="governorate">Governorate</label>
              <select 
                @change="getCitites"
                :disabled="!country"
                v-model="government"
                @input="$v.government.$touch()"
                :class="{ invalid: $v.government.$error }"
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
              <template v-if="$v.government.$error">
                <small class="form-text text-muted">
                  <span v-if="!$v.government.required">This field is required</span>
                </small>
              </template>
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
            </div>
          </div>
          <div class="form-row justify-content-center">
            <div class="form-group col-11">
              <label for="activity">Job Description</label>
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
                  <span v-if="!$v.description.required">This field is required</span>
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
          <div class="btn-section">
          <button class="company-btn" :disabled="$v.mainForm.$invalid || isLoading">
              <b-spinner v-if="isLoading" type="grow" label="Spinning" variant="text-white"></b-spinner>
              <span v-if="!isLoading">Post Job</span>
          </button>
          </div>
        </form>

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
                <label for="lang-title">Title</label>
                <input
                  @input="$v.translate.title.$touch()"
                  :class="{ invalid: $v.translate.title.$error }"
                  v-model="translate.title"
                  type="text"
                  class="form-control form-control-lg"
                  id="lang-title"
                />
                <template v-if="$v.translate.title.$error">
                  <small class="form-text text-muted">
                    <span v-if="!$v.translate.title.required">This field is required</span>
                  </small>
                </template>
              </div>

            </div>
            <div class="form-row">
              <div class="form-group col-md-12">
                <label for="lang-address">Address</label>
                <input
                  @input="$v.translate.address.$touch()"
                  :class="{ invalid: $v.translate.address.$error }"
                  v-model="translate.address"
                  type="text"
                  class="form-control form-control-lg"
                  id="lang-address"
                />
                <template v-if="$v.translate.address.$error">
                  <small class="form-text text-muted">
                    <span v-if="!$v.translate.address.required">This field is required</span>
                  </small>
                </template>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-12">
                <label for="businessActivity">Business Activity</label>
                <textarea
                  @input="$v.translate.businessActivity.$touch()"
                  :class="{ invalid: $v.translate.businessActivity.$error }"
                  v-model="translate.businessActivity"
                  class="form-control"
                  id="businessActivity"
                  rows="4"
                ></textarea>
                <template v-if="$v.translate.businessActivity.$error">
                  <small class="form-text text-muted">
                    <span v-if="!$v.translate.businessActivity.required">This field is required</span>
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
    </div>
  </section>
</template>

<script>
import axios from "axios";
import { required, minLength, numeric, url, email } from "vuelidate/lib/validators";

export default {
  middleware: ["auth"],
  data() {
    return {
      availableLangs: this.$store.getters['locale/langs'],
      selectedLangs: {},
      selectedLang: '',
      translate: {
        title: '',
        description: ''
      },
      langLabels: [],
      editMode: false,

      isLoading: false,
      images: [],
      cover: "",
      categories: [],
      category: "",
      website: "",
      title: "",
      description: "",
      businessActivity: "",
      phone: "",
      email: "",
      address: "",
      country: "",
      city: "",
      government: "",
      cities: [],
      countries: [],
      governments: []
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
    }
  },
  validations: {
    category: {
      required
    },
    title: {
      required
    },
    website: {
      required,
      url
    },
    phone: {
      required,
      numeric
    },
    email: {
      required,
      email
    },
    address: {
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
    businessActivity: {
      required
    },
    description: {
      required
    },
    selectedLang: {
      required
    },
    translate: {
      title: {
        required
      },
      description: {
        required
      },
      businessActivity: {
        required
      },
      address: {
        required
      },
    },
    mainForm: ['category', 'title', 'website', 'phone', 'email', 'address', 'cover', 'images', 'country', 'government', 'city', 'businessActivity', 'description'],
    translateForm: ['selectedLang', 'translate.title', 'translate.description', 'translate.businessActivity', 'translate.address']
  },
  async fetch() {
    // console.log("id >> ", this.$route.params.id);
    let catsData = await axios.get(
      "/categories/parent/" + 2
    );
    let cats = catsData.data.data;
    for (let cat of cats) {
      let catObject = {
        name: cat.name,
        id: cat.id
      };
      this.categories.push(catObject);
    }

    console.log("cats >> ", this.categories);

    let countriesData = await axios.get("/countries");
    // console.log('countries data >> ', countriesData.data.data);
    this.countries = countriesData.data.data;

    // let data = await axios.get('/catalogues');
    // this.companies = data.data.data;
    // console.log('data >> ', this.companies);
  },
  methods: {
    openModal() {

      console.log('lang add > ', this.selectedLang, this.selectedLangs, this.editMode);

      // if(this.selectedLang && this.editMode) {
      //   //it was in edit mode, but not edit anything, and try to add a new language
      //   this.editMode = false;
      //   this.langs = this.langs.filter(lang => {
      //     return lang.code != this.selectedLang.code
      //   });

      //   //save before reset if you were in editMode
      //   this.selectedLangs[this.selectedLang.code] = {
      //     ...this.translate
      //   }

      //   this.selectedLang = '';
      //   this.translate.title = '';
      //   this.translate.description = '';
      //   this.$v.translateForm.$reset();
      // }

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
        this.translate.title = '';
        this.translate.address = '';
        this.translate.businessActivity = '';
        this.translate.description = '';
        this.$v.translateForm.$reset();
      }

      this.editMode = false;

      console.log('hidden', this.editMode);
    },
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
          console.log("base 64 >> ", this.image);
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

      if(this.$v.mainForm.$invalid)
        return

      let userId = +this.$store.getters["auth/userId"];
      let item = {
        seller_id: userId,
        // title: this.title,
        phone: this.phone,
        email: this.email,
        // address: this.address,
        // description: this.description,
        // business_activity: this.businessActivity,
        category_id: this.category,
        website: this.website,
        main_image: this.cover,
        gallery: this.images,
        country: this.country,
        city: this.city,
        governorate: this.government,
        // status: 'pending',

        [this.$store.getters['locale/langCode']]: {
          title: this.title,
          description: this.description,
          business_activity: this.businessActivity,
          address: this.address,
        },
        ...this.selectedLangs,

      };

      console.log("item >> ", item);

      this.isLoading = true;
      axios
        .post("/catalogues", item)
        .then(res => {
          this.isLoading = false;
          // this.$bvToast.show("my-toast");
          // this.$router.push(
          //   "/companies/company-single/" + res.data.data.id + "/"
          // );
          console.log("company res >> ", res);
        })
        .catch(err => {
          this.isLoading = false;
          console.log("error response >> ", err.response);
        });
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
        this.translate.title = '';
        this.translate.address = '';
        this.translate.businessActivity = '';
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
      this.translate.title = '';
      this.translate.address = '';
      this.translate.businessActivity = '';
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