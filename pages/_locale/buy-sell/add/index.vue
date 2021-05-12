<template>
  <section class="product-form">
    <div class="container">
      <div class="product-content">
        <h3>Add Product</h3>
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
                <option value>Choose Category</option>
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
              <label for="title">Title</label>
              <input
                v-model="title"
                @input="$v.title.$touch()"
                :class="{ invalid: $v.title.$error }"
                type="text"
                class="form-control form-control-lg"
                id="title"
              />
              <template v-if="$v.title.$error">
                <small class="form-text text-muted">
                  <span v-if="!$v.title.required">This field is required</span>
                </small>
              </template>
            </div>
          </div>
          <div class="row justify-content-around">
            <div class="form-group price-box col-md-5">
              <label for="select-price">Price</label>
              <select
                @input="$v.selectPrice.$touch()"
                :class="{ invalid: $v.selectPrice.$error }"
                v-model="selectPrice"
                id="select-price" 
                class="form-control form-control-lg">
                  <option value>Select Price Type</option>
                  <option value="fixed">Fixed Price</option>
                  <option value="highest">Highest Price</option>
              </select>
              <div class="box" v-if="selectPrice">
                <label for="price">{{ selectPrice == 'fixed' ? 'Price' : 'Start Price' }}</label>
                <input
                  v-model="price"
                  @input="$v.price.$touch()"
                  :class="{ invalid: $v.price.$error }"
                  :placeholder="selectPrice == 'fixed' ? 'Enter the price you will sell by' : 'Enter the price that you\'ll start by'"
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
              <template v-if="$v.selectPrice.$error">
                <small class="form-text text-muted">
                  <span v-if="!$v.selectPrice.required">This field is required</span>
                </small>
              </template>
            </div>
            <div class="form-group col-md-5">
              <label for="phone">phone</label>
              <input
                v-model="phone"
                @input="$v.phone.$touch()"
                :class="{ invalid: $v.phone.$error }"
                type="text"
                class="form-control form-control-lg"
                id="phone"
              />
              <template v-if="$v.phone.$error">
                <small class="form-text text-muted">
                  <span v-if="!$v.phone.required">This field is required</span>
                  <span v-if="!$v.phone.numeric">Phone should be numeric</span>
                </small>
              </template>
            </div>
          </div>

          <div class="row justify-content-around" v-if="selectPrice == 'highest'">
            <div class="form-group col-md-5">
              <label for="value">Increment Value</label>
              <input
                v-model="increment"
                @input="$v.increment.$touch()"
                :class="{ invalid: $v.increment.$error }"
                type="text"
                class="form-control form-control-lg"
                id="value"
              />
              <template v-if="$v.increment.$error">
                <small class="form-text text-muted">
                  <span v-if="!$v.increment.required">This field is required</span>
                </small>
              </template>
            </div>
          </div>

          <div class="row justify-content-around">
            <div class="form-group col-md-5">
              <label for="logo">Product Cover</label>
              <div class="text-field">
                <input
                  @change="onCoverPicked($event)"
                  @input="$v.cover.$touch()"
                  :class="{ invalid: $v.cover.$error }"
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
            <div class="form-group col-md-5">
              <label for="photos">Product Photos</label>
               <div class="text-field">
              <input 
                multiple
                @input="$v.images.$touch()"
                :class="{ invalid: $v.images.$error }"
                @change="onFilePicked($event)"
                type="file" 
                id="photos" />
                <label for="photos" class="label-file">Choose File</label>
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
          <div class="row justify-content-around" v-if="selectPrice == 'fixed'">
            <div class="form-group col-md-5">
              <label for="address">Address</label>
                <input
                  @input="$v.address.$touch()"
                  :class="{ invalid: $v.address.$error }"
                  v-model="address"
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
              <template v-if="$v.government.$error">
                <small class="form-text text-muted">
                  <span v-if="!$v.government.required"
                    >This field is required</span
                  >
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
              <template v-if="$v.city.$error">
                <small class="form-text text-muted">
                  <span v-if="!$v.city.required"
                    >This field is required</span
                  >
                </small>
              </template>
            </div>
          </div>
          <div class="form-row justify-content-center">
            <div class="form-group col-11">
              <label for="activity">Description</label>
              <textarea 
                v-model="description"
                @input="$v.description.$touch()"
                :class="{ invalid: $v.description.$error }"
                class="form-control" 
                id="activity" rows="4"></textarea>
                <template v-if="$v.description.$error">
                  <small class="form-text text-muted">
                    <span v-if="!$v.description.required"
                      >This field is required</span
                    >
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
          <div class="btn-section" v-if="selectPrice == 'fixed'">
            <button class="product-btn" :disabled="$v.mainForm.$invalid || isLoading">
              <b-spinner v-if="isLoading" type="grow" label="Spinning" variant="text-white"></b-spinner>
              <span v-if="!isLoading">Add Product</span>
            </button>
          </div>
          <div class="btn-section" v-else>
            <button class="product-btn" :disabled="$v.auctionForm.$invalid || isLoading">
              <b-spinner v-if="isLoading" type="grow" label="Spinning" variant="text-white"></b-spinner>
              <span v-if="!isLoading">Add Product</span>
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
              <div class="form-group col-md-6">
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
import { required, minLength, numeric } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      availableLangs: this.$store.getters['locale/langs'],
      selectedLangs: {},
      selectedLang: '',
      translate: {
        title: '',
        description: '',
        address: ''
      },
      langLabels: [],
      editMode: false,

      isLoading: false,
      images: [],
      cover: "",
      categories: [],
      category: "",
      selectPrice: "",
      price: "",
      title: "",
      description: "",
      phone: "",
      address: "",
      country: "",
      city: "",
      government: "",
      cities: [],
      countries: [],
      governments: [],

      increment: "",

    }
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
    selectPrice: {
      required
    },
    price: {
      required
    },
    title: {
      required
    },
    phone: {
      required,
      numeric
    },
    cover: {
      required
    },
    images: {
      required,
      minLen: minLength(1)
    },
    address: {
      required
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
    },

    increment: {
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
      address: {
        required
      }
    },
    mainForm: ['category', 'selectPrice', 'price', 'title', 'phone', 'cover', 'images', 'country', 'government', 'city', 'description'],
    auctionForm: ['category', 'selectPrice', 'price', 'increment', 'title', 'phone', 'cover', 'images', 'description'],
    translateForm: ['selectedLang', 'translate.title', 'translate.description', 'translate.address']
  },
  async fetch() {
    // console.log("id >> ", this.$route.params.id);
    let catsData = await axios.get(
      "/categories/parent/" + 5
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
        this.translate.description = '';
        this.translate.address = '';
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

      if(this.selectPrice == 'fixed') {

        if(this.$v.mainForm.$invalid)
          return

        let userId = +this.$store.getters["auth/userId"];
        let item = {
          seller_id: userId,
          // title: this.title,
          phone: this.phone,
          // description: this.description,
          category_id: this.category,
          price: this.price,
          gallery: this.images,
          main_image: this.cover,
          country: this.country,
          city: this.city,
          governorate: this.government,

          [this.$store.getters['locale/langCode']]: {
            title: this.title,
            description: this.description,
            address: this.address
          },
          ...this.selectedLangs,
          status: "pending"
        };

        console.log("item >> ", item);

        this.isLoading = true;
        axios
          .post("/my/buy-sells", item)
          .then(res => {
            console.log(res);
            this.isLoading = false;
            // this.$bvToast.show("my-toast");
            // this.$router.push(
            //   "/property/" + res.data.data.id + "/" + res.data.data.title + ""
            // );
          })
          .catch(err => {
            this.isLoading = false;
            console.log(err);
          });

      } else {

        if(this.$v.auctionForm.$invalid)
          return

        let start = new Date();
        // start.setHours(+this.openFrom.substring(0, 2));
        // start.setMinutes(+this.openFrom.substring(3, 5));
        // start.setSeconds(+this.openFrom.substring(6, 8));

        let auctionObj = {
          category_id: this.category,
          seller_id: this.$store.getters["auth/userId"],
          opens_from:
            start.toISOString().substr(0, 10) +
            " " +
            start.toTimeString().substr(0, 8),
          ends_at: '2025-12-30 12:00:00',
          increment_value: this.increment,
          open_price: this.price,
          main_image: this.cover,
          gallery: this.images,

          [this.$store.getters['locale/langCode']]: {
            title: this.title,
            description: this.description
          },
          ...this.selectedLangs,
          status: "pending",
          is_vip: '0'
        };

        console.log("auction obj >> ", auctionObj);

        this.isLoading = true;
        axios
          .post("/my/auctions", auctionObj)
          .then(res => {
            console.log(res);
            this.isLoading = false;
            // this.$bvToast.show("my-toast");
            // this.$router.push('/' + this.$store.getters['locale/locale'] + '/VIP/auction/' + res.data.data.id + '/' + 'res.data.data.title');
          })
          .catch(err => {
            this.isLoading = false;
            console.log(err);
          });

      }

    },
    removeImage(index) {
      console.log('index >> ', index)
      this.images.splice(index, 1);
    },
    deleteImage() {
      this.cover = ''
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
        this.translate.description = '';
        this.translate.address = '';
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
      this.translate.description = '';
      this.translate.address = '';
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
  }

}
</script>