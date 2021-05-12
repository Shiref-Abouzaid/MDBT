<template>
    <div class="account-info">
        <div class="head">
            <h3>{{$t("user_profile.account_info") }}</h3>
            <button class="btn" @click="saveProfile">{{$t("user_profile.save_button") }}</button>
        </div>
        <div class="account-form">
            <div class="form-row justify-content-between">
                <div class="form-group col-md-6">
                    <label for="firstName">{{$t("user_profile.first_name") }}</label>
                    <input
                    v-model="firstName"
                    type="text"
                    class="form-control form-control-lg"
                    id="firstName"
                    />
                </div>
                <div class="form-group col-md-6">
                    <label for="lastName">{{$t("user_profile.last_name") }}</label>
                    <input
                    v-model="lastName"
                    type="text"
                    class="form-control form-control-lg"
                    id="lastName"
                    />
                </div>
                <div class="form-group col-md-6">
                    <label for="email">{{$t("user_profile.email") }}</label>
                    <input
                    v-model="email"
                    type="text"
                    class="form-control form-control-lg"
                    id="email"
                    />
                </div>
                <div class="form-group col-md-6">
                    <label for="phone">{{$t("user_profile.mobile_num") }}</label>
                    <input
                    v-model="phone"
                    type="text"
                    class="form-control form-control-lg"
                    id="phone"
                    />
                </div>
                <div class="form-group col-md-6">
                    <label for="password">{{$t("user_profile.password") }}</label>
                    <input
                    type="password"
                    class="form-control form-control-lg"
                    id="password"
                    />
                </div>
                <div class="form-group col-md-6">
                    <label for="country">{{$t("user_profile.country") }}</label>
                    <select @change="loadGovernorates" v-model="country" id="country" class="form-control">
                        <option value="">Choose country</option>
                        <option :value="country.id" v-for="country in countries" :key="country.id">{{ country.name }}</option>
                    </select>
                </div>
                <div class="form-group col-md-6">
                    <label for="governorate">{{$t("user_profile.govern") }}</label>
                    <select @change="loadCities" v-model="government" id="governorate" class="form-control">
                        <option value="">Choose governorate</option>
                        <option  :value="government.id" v-for="government in governments" :key="government.id">{{ government.name }}</option>
                    </select>
                </div>
                <div class="form-group col-md-6">
                    <label for="city">{{$t("user_profile.city") }}</label>
                    <select v-model="city" id="city" class="form-control">
                        <option value="">Choose City</option>
                        <option  :value="city.id" v-for="city in cities" :key="city.id">{{ city.name }}</option>
                    </select>
                </div>
                <div class="form-group col-md-12">
                    <label for="address">{{$t("user_profile.adres") }}</label>
                    <input
                    v-model="address"
                    type="text"
                    class="form-control form-control-lg"
                    id="address"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            password: "",
            confirmPassword: "",
            address: "",
            country: "",
            city: "",
            government: "",
            imageId: null,
            cities: [],
            countries: [],
            governments: [],
            image: 'https://orbitermag.com/wp-content/uploads/2017/03/default-user-image-300x300.png',
            baseImage: null,
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
                    this.email = user.details.user_details.email
                    this.address = user.details.user_details.address;
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
        async saveProfile() {
            let updateProfile = await axios.put('/my/social/profile/' + this.$store.getters['auth/userId'], {
                address: this.address,
                email: this.email,
                country: this.country,
                governorate: this.government,
                city: this.city,

            });
            console.log('updated >. ', updateProfile)
        }
    }
}
</script>