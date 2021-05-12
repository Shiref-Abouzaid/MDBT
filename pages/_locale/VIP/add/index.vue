<template>
  <section class="auction-form">
    <div class="container">
      <div class="auction-content">
        <h3>Add Auction</h3>
        <form @submit.prevent="onSave">
          <div class="row justify-content-around">
            <div class="form-group col-md-5">
              <label for="auctitle">Auction Title</label>
              <input
                @input="$v.title.$touch()"
                :class="{ invalid: $v.title.$error }"
                v-model="title"
                type="text"
                class="form-control form-control-lg"
                id="auctitle"
              />
              <template v-if="$v.title.$error">
                <small class="form-text text-muted">
                  <span v-if="!$v.title.required">This field is required</span>
                </small>
              </template>
            </div>
            <div class="form-group col-md-5">
              <label for="auccategory">Auction Category</label>
              <select 
                v-model="category"
                @input="$v.category.$touch()"
                :class="{ invalid: $v.category.$error }"
                id="auccategory" 
                class="form-control 
                form-control-lg">
                  <option value>Choose Category</option>
                  <!-- <option value="1">1</option> -->
                  <option
                    v-for="cat in categories"
                    :value="cat.id"
                    :key="cat.id"
                    >{{ cat.name }}</option
                  >
              </select>
              <template v-if="$v.category.$error">
                <small class="form-text text-muted">
                  <span v-if="!$v.category.required">This field is required</span>
                </small>
              </template>
            </div>
          </div>
          <div class="row justify-content-around">
            <div class="form-group col-md-5">
              <label for="opendate">Open Date</label>

              <b-form-datepicker
                @input="$v.startDate.$touch()"
                :class="{ invalid: $v.startDate.$error }"
                v-model="startDate"
              ></b-form-datepicker>
              <template v-if="$v.startDate.$error">
                <small class="form-text text-muted">
                  <span v-if="!$v.startDate.required">This field is required</span>
                </small>
              </template>
            </div>
            <div class="form-group col-md-5">
              <label for="enddate">End Date</label>
              <b-form-datepicker
                @input="$v.endDate.$touch()"
                :class="{ invalid: $v.endDate.$error }"
                v-model="endDate"
              ></b-form-datepicker>
              <template v-if="$v.endDate.$error">
                <small class="form-text text-muted">
                  <span v-if="!$v.endDate.required">This field is required</span>
                </small>
              </template>
            </div>
          </div>
          <div class="row justify-content-around">
            <div class="form-group col-md-5">
              <label for="opendate">Open From</label>
              <b-form-timepicker
                show-seconds
                @input="$v.openFrom.$touch()"
                :class="{ invalid: $v.openFrom.$error }"
                v-model="openFrom"
              ></b-form-timepicker>
              <template v-if="$v.openFrom.$error">
                <small class="form-text text-muted">
                  <span v-if="!$v.openFrom.required">This field is required</span>
                </small>
              </template>
            </div>
            <div class="form-group col-md-5">
              <label for="enddate">End To</label>
              <b-form-timepicker
                show-seconds
                @input="$v.openTo.$touch()"
                :class="{ invalid: $v.openTo.$error }"
                v-model="openTo"
              ></b-form-timepicker>
              <template v-if="$v.openTo.$error">
                <small class="form-text text-muted">
                  <span v-if="!$v.openTo.required">This field is required</span>
                </small>
              </template>
            </div>
          </div>
          <div class="row justify-content-around">
            <div class="form-group col-md-5">
              <label for="openprice">Open Price</label>
              <input
                @input="$v.openPrice.$touch()"
                :class="{ invalid: $v.openPrice.$error }"
                v-model="openPrice"
                type="text"
                class="form-control form-control-lg"
                id="openprice"
              />
              <template v-if="$v.openPrice.$error">
                <small class="form-text text-muted">
                  <span v-if="!$v.openPrice.required">This field is required</span>
                </small>
              </template>
            </div>
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
              <label for="coverimage">Cover Image</label>
              <div class="text-field">
                <input
                  @change="onCoverPicked($event)"
                  :class="{ invalid: $v.cover.$error }"
                  type="file" 
                  id="coverimage" />

                <label for="coverimage" class="label-file">Choose File</label>
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
              <label for="gallery">Gallery</label>
              <div class="text-field">
                <input 
                multiple
                @change="onFilePicked($event)"
                :class="{ invalid: $v.images.$error }"
                type="file" 
                id="gallery" />
                <label for="gallery" class="label-file">Choose File</label>
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
          <div class="form-row justify-content-center">
            <div class="form-group col-11">
              <label for="description">Description</label>
              <textarea
                v-model="description"
                @input="$v.description.$touch()"
                :class="{ invalid: $v.description.$error }"
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
            <button class="auction-btn" :disabled="$v.mainForm.$invalid || isLoading"> <!-- :disabled="$v.$invalid || isLoading" -->
              <b-spinner v-if="isLoading" type="grow" label="Spinning" variant="text-white"></b-spinner>
              <span v-if="!isLoading">Add Auction</span>
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
import { required, minLength } from "vuelidate/lib/validators";
import { lang } from 'vue-moment';

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
      title: "",
      startDate: "",
      endDate: "",
      openFrom: "",
      openTo: "",
      openPrice: "",
      increment: "",
      images: [],
      cover: "",
      description: "",
      categories: [],
      category: "",
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
    title: {
      required
    },
    startDate: {
      required
    },
    endDate: {
      required
    },
    openFrom: {
      required
    },
    openTo: {
      required
    },
    openPrice: {
      required
    },
    increment: {
      required
    },
    images: {
      required,
      minLen: minLength(1)
    },
    cover: {
      required
    },
    description: {
      required
    },
    category: {
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
      }
    },
    mainForm: ['title', 'startDate', 'endDate', 'openFrom', 'openTo', 'openPrice', 'increment', 'images', 'cover', 'description', 'category'],
    translateForm: ['selectedLang', 'translate.title', 'translate.description']
  },
  async fetch() {
    let auctionsData = await axios.get("/categories/parent/3");
    console.log("cats >> ", auctionsData.data.data);
    this.categories = auctionsData.data.data;
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
        this.$v.translateForm.$reset();
      }

      this.editMode = false;

      console.log('hidden', this.editMode);
    },
    onSave() {
      console.log("save");

      if(this.$v.mainForm.$invalid)
        return

      console.log("date and >>", +this.openFrom.substring(0, 2));
      console.log("date >> ", +this.openFrom.substring(3, 5) + 1);
      console.log("date hh >> ", +this.openFrom.substring(6, 8) + 1);

      let start = new Date(this.startDate);
      start.setHours(+this.openFrom.substring(0, 2));
      start.setMinutes(+this.openFrom.substring(3, 5));
      start.setSeconds(+this.openFrom.substring(6, 8));

      console.log(
        "date >>> ",
        start.toLocaleString("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false
        })
      );

      let end = new Date(this.endDate);
      // end.setHours(+this.openTo.substring(0,2), +this.openTo.substring(3,2), +this.openTo.substring(6,2));
      end.setHours(+this.openTo.substring(0, 2));
      end.setMinutes(+this.openTo.substring(3, 5));
      end.setSeconds(+this.openTo.substring(6, 8));

      // let end = new Date(this.endDate);

      let auctionObj = {
        category_id: this.category,
        seller_id: this.$store.getters["auth/userId"],
        opens_from:
          start.toISOString().substr(0, 10) +
          " " +
          start.toTimeString().substr(0, 8),
        ends_at:
          end.toISOString().substr(0, 10) +
          " " +
          end.toTimeString().substr(0, 8),
        increment_value: this.increment,
        open_price: this.openPrice,
        main_image: this.cover,
        gallery: this.images,

        [this.$store.getters['locale/langCode']]: {
          title: this.title,
          description: this.description
        },
        ...this.selectedLangs,
        status: "pending",
        is_vip: 1
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
      console.log("cover picked");
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