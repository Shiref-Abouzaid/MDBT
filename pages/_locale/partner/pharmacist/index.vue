<template>
    <div class="profession-register">
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
                            <div class="profile-img text-center">
                                <img :src="logoImage ? logoImage : '/images/placeholder.jpg'" alt="" />
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
                                    <label for="profession">Profession Type</label>
                                    <select 
                                        @change="$v.profession.$touch()"
                                        v-model="profession"
                                        :class="{ invalid: $v.profession.$error }"
                                        id="profession" 
                                        class="form-control form-control-lg">
                                        <option value>Profession type</option>
                                        <option
                                            :value="profession.id"
                                            v-for="profession in professions"
                                            :key="profession.id"
                                        >{{profession.name}}</option>
                                    </select>
                                    <template v-if="$v.profession.$error">
                                        <small v-if="!$v.profession.required" class="form-text text-muted">
                                        <span>This field is required</span>
                                        </small>
                                    </template>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-12">
                                    <label for="shortDescription">Short Description</label>
                                    <textarea
                                    @input="$v.shortDescription.$touch()"
                                    v-model="shortDescription"
                                    :class="{ invalid: $v.shortDescription.$error }"
                                    class="form-control" 
                                    id="shortDescription" 
                                    rows="2">
                                    </textarea>
                                    <template v-if="$v.shortDescription.$error">
                                    <small v-if="!$v.shortDescription.required" class="form-text text-muted">
                                        <span>This field is required</span>
                                    </small>
                                    </template>
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
                                </div>
                            </div>

                            <div class="btn-next"> <!-- :disabled="$v.personalForm.$invalid" -->
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

                        <div class="workshops" v-if="workshops && workshops.length > 0">
                            <div class="clinic" v-for="(clinic, index) in workshops" :key="index">
                                <div class="head" v-b-toggle="'collapse-' + index">
                                    <h3>{{ workshops[index].title }}</h3>
                                    <img src="/images/icons/svg/medical-bottom-arrow.svg" alt="">
                                </div>

                                <b-collapse :id="'collapse-' + index">
                                    <div class="clinic-info">
                                        <div class="partner-form">
                                            <div class="form-row justify-content-between">
                                                <div class="form-group col-md-6">
                                                    <label for="clinicName">Workshop Name</label>
                                                    <input
                                                        @input="$v.workshops.$each[index].title.$touch()"
                                                        v-model="workshops[index].title"
                                                        :class="{ invalid: $v.workshops.$each[index].title.$error }"
                                                        type="text"
                                                        class="form-control form-control-lg"
                                                        id="clinicName"
                                                    />
                                                    <template v-if="$v.workshops.$each[index].title.$error">
                                                        <small v-if="!$v.workshops.$each[index].title.required" class="form-text text-muted">
                                                            <span>This field is required</span>
                                                        </small>
                                                    </template>
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <label for="phone">{{$t("partner.phone") }}</label>
                                                    <input
                                                        @input="$v.workshops.$each[index].phone.$touch()"
                                                        :class="{ invalid: $v.workshops.$each[index].phone.$error }"
                                                        v-model="workshops[index].phone"
                                                        type="text"
                                                        class="form-control form-control-lg"
                                                        id="phone"
                                                    />
                                                    <template v-if="$v.workshops.$each[index].phone.$error">
                                                        <small class="form-text text-muted">
                                                            <span v-if="!$v.workshops.$each[index].phone.required">This field is required</span>
                                                            <span v-if="!$v.workshops.$each[index].phone.numeric">Phone number should be numeric</span>
                                                        </small>
                                                    </template>
                                                </div>
                                            </div>
                                            <div class="form-row justify-content-between">
                                                <div class="form-group col-12">
                                                    <div class="working-days">
                                                        <div class="chiller_cb">
                                                            <input v-model="workshops[index].workingDays.saturday" id="saturday" type="checkbox">
                                                            <label for="saturday">{{$t("partner.satrday") }}</label>
                                                            <span></span>
                                                        </div>
                                                        <div class="chiller_cb">
                                                            <input v-model="workshops[index].workingDays.sunday" id="sunday" type="checkbox">
                                                            <label for="sunday">{{$t("partner.sunday") }}</label>
                                                            <span></span>
                                                        </div>
                                                        <div class="chiller_cb">
                                                            <input v-model="workshops[index].workingDays.monday" id="monday" type="checkbox">
                                                            <label for="monday">{{$t("partner.monday") }}</label>
                                                            <span></span>
                                                        </div>
                                                        <div class="chiller_cb">
                                                            <input v-model="workshops[index].workingDays.tuesday" id="tuesday" type="checkbox">
                                                            <label for="tuesday">{{$t("partner.tuesday") }}</label>
                                                            <span></span>
                                                        </div>
                                                        <div class="chiller_cb">
                                                            <input v-model="workshops[index].workingDays.wednesday" id="wednesday" type="checkbox">
                                                            <label for="wednesday">{{$t("partner.wednesday") }}</label>
                                                            <span></span>
                                                        </div>
                                                        <div class="chiller_cb">
                                                            <input v-model="workshops[index].workingDays.thursday" id="thursday" type="checkbox">
                                                            <label for="thursday">{{$t("partner.thursday") }}</label>
                                                            <span></span>
                                                        </div>
                                                        <div class="chiller_cb">
                                                            <input v-model="workshops[index].workingDays.friday" id="friday" type="checkbox">
                                                            <label for="friday">{{$t("partner.friday") }}</label>
                                                            <span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-row justify-content-between">
                                                <div class="form-group col-md-6">
                                                    <label for="open">{{$t("partner.open") }}</label>
                                                    <b-form-timepicker 
                                                        @input="$v.workshops.$each[index].openFrom.$touch()"
                                                        :class="{ invalid: $v.workshops.$each[index].openFrom.$error }"
                                                        v-model="workshops[index].openFrom" 
                                                        locale="en">
                                                    </b-form-timepicker>
                                                    <template v-if="$v.workshops.$each[index].openFrom.$error">
                                                        <small class="form-text text-muted">
                                                            <span v-if="!$v.workshops.$each[index].openFrom.required">This field is required</span>
                                                        </small>
                                                    </template>
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <label for="close">{{$t("partner.close") }}</label>
                                                    <b-form-timepicker 
                                                        @input="$v.workshops.$each[index].openTo.$touch()"
                                                        :class="{ invalid: $v.workshops.$each[index].openTo.$error }"
                                                        v-model="workshops[index].openTo" 
                                                        locale="en">
                                                    </b-form-timepicker>
                                                    <template v-if="$v.workshops.$each[index].openTo.$error">
                                                        <small class="form-text text-muted">
                                                            <span v-if="!$v.workshops.$each[index].openTo.required">This field is required</span>
                                                        </small>
                                                    </template>
                                                </div>
                                            </div>

                                            <div class="form-row">
                                                <div class="form-group col-12">
                                                    <label for="workshop-description">{{$t("partner.descrip") }}</label>
                                                    <textarea
                                                        @input="$v.workshops.$each[index].description.$touch()"
                                                        :class="{ invalid: $v.workshops.$each[index].description.$error }"
                                                        v-model="workshops[index].description"
                                                        class="form-control" 
                                                        id="workshop-description" 
                                                        rows="4">
                                                    </textarea>
                                                    <template v-if="$v.workshops.$each[index].description.$error">
                                                        <small class="form-text text-muted">
                                                            <span v-if="!$v.workshops.$each[index].description.required">This field is required</span>
                                                        </small>
                                                    </template>
                                                </div>
                                            </div>

                                            <div class="form-row justify-content-between">
                                                <div class="form-group col-md-6">
                                                    <label for="address">{{$t("partner.address") }}</label>
                                                    <input
                                                        @input="$v.workshops.$each[index].address.$touch()"
                                                        :class="{ invalid: $v.workshops.$each[index].address.$error }"
                                                        v-model="workshops[index].address"
                                                        type="text"
                                                        class="form-control form-control-lg"
                                                        id="address"
                                                    />
                                                    <template v-if="$v.workshops.$each[index].address.$error">
                                                        <small class="form-text text-muted">
                                                            <span v-if="!$v.workshops.$each[index].address.required">This field is required</span>
                                                        </small>
                                                    </template>
                                                </div>
                                                <div class="form-group col-md-6">
                                                <label for="workshop-country">{{$t("partner.country") }}</label>
                                                    <select
                                                        @change="editWorkshopGovernorates(index)"
                                                        v-model="workshops[index].country"
                                                        :class="{ invalid: $v.workshops.$each[index].country.$error }"
                                                        id="workshop-country"
                                                        class="form-control form-control-lg"
                                                    >
                                                        <option value=''>Select your country</option>
                                                        <option
                                                        :value="country.id"
                                                        v-for="country in countries"
                                                        :key="country.id"
                                                        >{{country.name}}</option>
                                                    </select>
                                                    <template v-if="$v.workshops.$each[index].country.$error">
                                                        <small class="form-text text-muted">
                                                            <span v-if="!$v.workshops.$each[index].country.required">This field is required</span>
                                                        </small>
                                                    </template>
                                                </div>
                                            </div>
                                            <div class="form-row justify-content-between">
                                                <div class="form-group col-md-6">
                                                <label for="workshop-governorate">{{$t("partner.govern") }}</label>
                                                    <select
                                                        :disabled="!workshops[index].country"
                                                        @change="editWorkshopCitites(index)"
                                                        v-model="workshops[index].governorate"
                                                        :class="{ invalid: $v.workshops.$each[index].governorate.$error }"
                                                        id="workshop-governorate"
                                                        class="form-control form-control-lg"
                                                    >
                                                        <option value=''>Select your governorate</option>
                                                        <option
                                                        :value="governorate.id"
                                                        v-for="governorate in workshops[index].workshopGovernements"
                                                        :key="governorate.id"
                                                        >{{governorate.name}}</option>
                                                    </select>
                                                    <template v-if="$v.workshops.$each[index].governorate.$error">
                                                        <small class="form-text text-muted">
                                                            <span v-if="!$v.workshops.$each[index].governorate.required">This field is required</span>
                                                        </small>
                                                    </template>
                                                </div>
                                                <div class="form-group col-md-6">
                                                <label for="workshop-city">{{$t("partner.city") }}</label>
                                                    <select
                                                        :disabled="!workshops[index].governorate"
                                                        @change="$v.workshops.$each[index].city.$touch()"
                                                        :class="{ invalid: $v.workshops.$each[index].city.$error }"
                                                        v-model="workshops[index].city"
                                                        id="workshop-city"
                                                        class="form-control form-control-lg"
                                                    >
                                                        <option value=''>Select your city</option>
                                                        <option
                                                        :value="city.id"
                                                        v-for="city in workshops[index].workshopCitites"
                                                        :key="city.id"
                                                        >{{city.name}}</option>
                                                    </select>
                                                    <template v-if="$v.workshops.$each[index].city.$error">
                                                        <small class="form-text text-muted">
                                                            <span v-if="!$v.workshops.$each[index].city.required">This field is required</span>
                                                        </small>
                                                    </template>
                                                </div>
                                            </div>

                                            <!-- <div class="form-row justify-content-between">
                                                <div class="form-group col-md-6">
                                                    <label for="regular">{{$t("partner.regular") }}</label>
                                                    <input
                                                        v-model="workshops[index].regularPrice"
                                                        type="text"
                                                        class="form-control form-control-lg"
                                                        id="regular"
                                                    />
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <label for="urgent">{{$t("partner.urgent") }}</label>
                                                    <input
                                                        v-model="workshops[index].urgentPrice"
                                                        type="text"
                                                        class="form-control form-control-lg"
                                                        id="urgent"
                                                    />
                                                </div>
                                            </div> -->

                                            <div class="action-btns">
                                                <button type="button" @click="removeWorkshop(index)" class="btn remove-clinic">{{$t("partner.remove") }}</button>
                                                <button type="button" @click="saveWorkshop(index)" v-b-toggle="'collapse-' + index" class="btn save-clinic">{{$t("partner.save") }}</button>
                                            </div>

                                        </div>
                                    </div>
                                </b-collapse>

                            </div>
                        </div>

                            <div class="workshop">

                                <div class="partner-form">

                                    <div class="workshop-info">

                                        <div class="head">
                                            <h3>Workshop Info</h3>
                                        </div>

                                        <div class="form-row justify-content-between">
                                            <div class="form-group col-md-6">
                                                <label for="clinicName">Workshop Name</label>
                                                <input
                                                    @input="$v.workshop.title.$touch()"
                                                    v-model="workshop.title"
                                                    :class="{ invalid: $v.workshop.title.$error }"
                                                    type="text"
                                                    class="form-control form-control-lg"
                                                    id="clinicName"
                                                />
                                                <template v-if="$v.workshop.title.$error">
                                                    <small v-if="!$v.workshop.title.required" class="form-text text-muted">
                                                        <span>This field is required</span>
                                                    </small>
                                                </template>
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="workshop-phone">{{$t("partner.phone") }}</label>
                                                <input
                                                    @input="$v.workshop.phone.$touch()"
                                                    v-model="workshop.phone"
                                                    :class="{ invalid: $v.workshop.phone.$error }"
                                                    type="text"
                                                    class="form-control form-control-lg"
                                                    id="workshop-phone"
                                                />
                                                <template v-if="$v.workshop.phone.$error">
                                                    <small class="form-text text-muted">
                                                        <span v-if="!$v.workshop.phone.required">This field is required</span>
                                                        <span v-if="!$v.workshop.phone.numeric">Phone number should be numeric</span>
                                                    </small>
                                                </template>
                                            </div>
                                        </div>
                                        <div class="form-row justify-content-between">
                                        <div class="form-group col-12">
                                            <div class="working-days">
                                                <div class="chiller_cb">
                                                    <input v-model="workshop.workingDays.saturday" id="saturday" type="checkbox">
                                                    <label for="saturday">{{$t("partner.satrday") }}</label>
                                                    <span></span>
                                                </div>
                                                <div class="chiller_cb">
                                                    <input v-model="workshop.workingDays.sunday" id="sunday" type="checkbox">
                                                    <label for="sunday">{{$t("partner.sunday") }}</label>
                                                    <span></span>
                                                </div>
                                                <div class="chiller_cb">
                                                    <input v-model="workshop.workingDays.monday" id="monday" type="checkbox">
                                                    <label for="monday">{{$t("partner.monday") }}</label>
                                                    <span></span>
                                                </div>
                                                <div class="chiller_cb">
                                                    <input v-model="workshop.workingDays.tuesday" id="tuesday" type="checkbox">
                                                    <label for="tuesday">{{$t("partner.tuesday") }}</label>
                                                    <span></span>
                                                </div>
                                                <div class="chiller_cb">
                                                    <input v-model="workshop.workingDays.wednesday" id="wednesday" type="checkbox">
                                                    <label for="wednesday">{{$t("partner.wednesday") }}</label>
                                                    <span></span>
                                                </div>
                                                <div class="chiller_cb">
                                                    <input v-model="workshop.workingDays.thursday" id="thursday" type="checkbox">
                                                    <label for="thursday">{{$t("partner.thursday") }}</label>
                                                    <span></span>
                                                </div>
                                                <div class="chiller_cb">
                                                    <input v-model="workshop.workingDays.friday" id="friday" type="checkbox">
                                                    <label for="friday">{{$t("partner.friday") }}</label>
                                                    <span></span>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        <div class="form-row justify-content-between">
                                            <div class="form-group col-md-6">
                                                <label for="workshop-open">{{$t("partner.open") }}</label>
                                                <b-form-timepicker 
                                                    @input="$v.workshop.openFrom.$touch()"
                                                    v-model="workshop.openFrom"
                                                    :class="{ invalid: $v.workshop.openFrom.$error }"
                                                    locale="en"></b-form-timepicker>
                                                    <template v-if="$v.workshop.openFrom.$error">
                                                        <small v-if="!$v.workshop.openFrom.required" class="form-text text-muted">
                                                            <span>This field is required</span>
                                                        </small>
                                                    </template>
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="workshop-close">{{$t("partner.close") }}</label>
                                                <b-form-timepicker 
                                                    @input="$v.workshop.openTo.$touch()"
                                                    v-model="workshop.openTo"
                                                    locale="en"></b-form-timepicker>
                                                    <template v-if="$v.workshop.openTo.$error">
                                                        <small v-if="!$v.workshop.openTo.required" class="form-text text-muted">
                                                            <span>This field is required</span>
                                                        </small>
                                                    </template>
                                            </div>
                                        </div>

                                        <div class="form-row">
                                            <div class="form-group col-12">
                                                <label for="workshop-description">{{$t("partner.descrip") }}</label>
                                                <textarea
                                                @input="$v.workshop.description.$touch()"
                                                v-model="workshop.description"
                                                :class="{ invalid: $v.workshop.description.$error }"
                                                class="form-control" 
                                                id="workshop-description" 
                                                rows="4">
                                                </textarea>
                                                <template v-if="$v.workshop.description.$error">
                                                <small v-if="!$v.workshop.description.required" class="form-text text-muted">
                                                    <span>This field is required</span>
                                                </small>
                                                </template>
                                            </div>
                                        </div>

                                        <!-- <div class="form-row justify-content-between">
                                            <div class="form-group col-md-6">
                                                <label for="regular">{{$t("partner.regular") }}</label>
                                                <input
                                                    v-model="workshop.regularPrice"
                                                    type="text"
                                                    class="form-control form-control-lg"
                                                    id="regular"
                                                />
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="urgent">{{$t("partner.urgent") }}</label>
                                                <input
                                                    v-model="workshop.urgentPrice"
                                                    type="text"
                                                    class="form-control form-control-lg"
                                                    id="urgent"
                                                />
                                            </div>
                                        </div> -->
                                        <div class="form-row justify-content-between">
                                            <div class="form-group col-md-6">
                                                <label for="address">{{$t("partner.address") }}</label>
                                                <input
                                                    @input="$v.workshop.address.$touch()"
                                                    v-model="workshop.address"
                                                    :class="{ invalid: $v.workshop.address.$error }"
                                                    type="text"
                                                    class="form-control form-control-lg"
                                                    id="address"
                                                />
                                                <template v-if="$v.workshop.address.$error">
                                                    <small v-if="!$v.workshop.address.required" class="form-text text-muted">
                                                        <span>This field is required</span>
                                                    </small>
                                                </template>
                                            </div>
                                            <div class="form-group col-md-6">
                                            <label for="workshop-country">{{$t("partner.country") }}</label>
                                                <select
                                                    @change="getWorkshopGovernorates"
                                                    v-model="workshop.country"
                                                    :class="{ invalid: $v.workshop.country.$error }"
                                                    id="workshop-country"
                                                    class="form-control form-control-lg"
                                                >
                                                    <option value>Select your country</option>
                                                    <option
                                                    :value="country.id"
                                                    v-for="country in countries"
                                                    :key="country.id"
                                                    >{{country.name}}</option>
                                                </select>
                                                <template v-if="$v.workshop.country.$error">
                                                    <small v-if="!$v.workshop.country.required" class="form-text text-muted">
                                                        <span>This field is required</span>
                                                    </small>
                                                </template>
                                            </div>
                                        </div>
                                        <div class="form-row justify-content-between">
                                            <div class="form-group col-md-6">
                                            <label for="workshop-governorate">{{$t("partner.govern") }}</label>
                                            <select
                                                @change="getWorkshopCitites"
                                                :disabled="!workshop.country"
                                                v-model="workshop.governorate"
                                                :class="{ invalid: $v.workshop.governorate.$error }"
                                                id="workshop-governorate"
                                                class="form-control form-control-lg"
                                            >
                                                <option value>Select your governorate</option>
                                                <option
                                                :value="gov.id"
                                                v-for="gov in workshopGovernements"
                                                :key="gov.id"
                                                >{{gov.name}}</option>
                                            </select>
                                            <template v-if="$v.workshop.governorate.$error">
                                                <small v-if="!$v.workshop.governorate.required" class="form-text text-muted">
                                                    <span>This field is required</span>
                                                </small>
                                            </template>
                                            </div>
                                            <div class="form-group col-md-6">
                                            <label for="workshop-city">{{$t("partner.city") }}</label>
                                            <select
                                                @change="$v.workshop.city.$touch()"
                                                :disabled="!workshop.governorate"
                                                v-model="workshop.city"
                                                :class="{ invalid: $v.workshop.city.$error }"
                                                id="workshop-city"
                                                class="form-control form-control-lg"
                                            >
                                                <option value>Select your city</option>
                                                <option
                                                :value="city.id"
                                                v-for="city in workshopCitites"
                                                :key="city.id"
                                                >{{city.name}}</option>
                                            </select>
                                            <template v-if="$v.workshop.city.$error">
                                                <small v-if="!$v.workshop.city.required" class="form-text text-muted">
                                                    <span>This field is required</span>
                                                </small>
                                            </template>
                                            </div>
                                        </div>

                                        <div class="add-btn"><!-- :disabled="$v.businessForm.$invalid" -->
                                            <button type="button"  @click="addWorkshop" class="btn">+ Add Another Workshop</button>
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
                                        <button class="btn create-btn" :disabled="$v.workshopsValidate.$invalid && $v.businessForm.$invalid" type="button" @click="createAccount">
                                            <span>{{$t("partner.account_btn") }}</span>
                                        </button>
                                    </div>

                                </div>
                            </div>

                        </v-stepper-content>
                    </v-stepper-items>
                </form>
                </v-stepper>
            </div>

        </div>
    </div>
</template>

<script>
import axios from "axios";
import {
  required,
  numeric,
  minValue,
  minLength,
  sameAs,
} from "vuelidate/lib/validators";

export default {
    layout: 'withoutNavbar',
  data() {
    return {
        e1: 1,
        logoImage: "",
        value: '',

        professions: [],
        profession: "",

        firstName: '',
        lastName: '',
        commercialName: '',
        phone: '',
        shortDescription: '',
        description: '',
        password: '',
        confirmPassword: '',
        passwordFieldType: "password",
        confirmPasswordFieldType: "password",
        showPasswordIcon: false,
        showConfirmPasswordIcon: false,
        country: '',
        government: '',
        city: '',
        cities: [],
        countries: [],
        governments: [],
        workshop: {
            title: "",
            phone: "",
            workingDays: {
                saturday: false,
                sunday: false,
                monday: false,
                tuesday: false,
                wednesday: false,
                thursday: false,
                friday: false
            },
            openFrom: "",
            openTo: "",
            description: "",
            // regularPrice: "",
            // urgentPrice: "",
            address: "",
            country: "",
            governorate: "",
            city: "",
            workshopGovernements: [],
            workshopCitites: []
        },
        workshops: [],
        workshopGovernements: [],
        workshopCitites: [],
    };
  },
  computed: {
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
    profession: {
      required
    },
    description: {
      required
    },
    shortDescription: {
      required
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
    workshop: {
      title: {
        required,
      },
      address: {
        required,
      },
      phone: {
        required,
        numeric,
      },
      openFrom: {
        required,
      },
      openTo: {
        required,
      },
      description: {
        required
      },
      //   regularPrice: {
      //     required,
      //     minVal: minValue(0),
      //   },
      //   urgentPrice: {
      //     required,
      //     minVal: minValue(0),
      //   },
      country: {
        required,
      },
      governorate: {
        required,
      },
      city: {
        required,
      },
    },
    workshops: {
      required,
      minLen: minLength(1),
      $each: {
        phone: {
          required,
          numeric,
        },
        openFrom: {
          required,
        },
        openTo: {
          required,
        },
        country: {
          required,
        },
        governorate: {
          required,
        },
        city: {
          required,
        },
      }
    },
    personalForm: ['firstName', 'lastName', 'commercialName', 'profession', 'description', 'shortDescription', 'phone', 'country', 'government', 'city', 'password', 'confirmPassword'],
    businessForm: ['workshop.title', 'workshop.address', 'workshop.phone', 'workshop.openFrom', 'workshop.openTo', 'workshop.description', 'workshop.country', 'workshop.governorate', 'workshop.city'],
    workshopsValidate: ['workshops'],
  },
  async fetch() {

    let professionTypes = await axios.get("/categories/parent/12");
    this.professions = professionTypes.data.data;
    console.log("professions >> ", professionTypes.data.data);

    let countriesData = await axios.get("/countries");
    // console.log('countries data >> ', countriesData.data.data);
    this.countries = countriesData.data.data;

  },
  methods: {
    async createAccount() {

        // if(!this.$v.businessForm.$invalid) {
        //   this.workshops.push({
        //       // title: this.workshop.title,
        //       phone: this.workshop.phone,
        //       openFrom: this.workshop.openFrom,
        //       openTo: this.workshop.openTo,
        //       // description: this.workshop.description,
        //       // address: this.workshop.address,
        //       country: this.workshop.country,
        //       governorate: this.workshop.governorate,
        //       city: this.workshop.city,
        //       workshopGovernements: [...this.workshopGovernements],
        //       workshopCitites: [...this.workshopCitites],
        //       workingDays: { ...this.workshop.workingDays },
        //       langs: [{
        //           langCode: this.defaultLangCode,
        //           langName: this.defaultLang,
        //           title: this.workshop.title,
        //           address: this.workshop.address,
        //           description: this.workshop.description,
        //       }, ...this.defaultWorkshopTranslates]
        //   });
        // }

        let technicianObject = {
            first_name: this.firstName,
            last_name: this.lastName,
            //   commercial_name: this.commercialName,
            image: this.image,
            phone: this.phone,
            password: this.password,
            //   description: this.description,
            //   short_description: this.shortDescription,
            category_id: this.profession,
            workshops: this.workshops,
            image: this.image,
            type: "technician",
            chanel: "web",

            [this.$store.getters['locale/langCode']]: {
                commercial_name: this.commercialName,
                short_description: this.shortDescription,
                description: this.description
            },
            ...this.selectedLangs,

        };

        console.log("technician >> ", technicianObject);
    },
    addWorkshop() {
        this.workshops.push({
            ...this.workshop,
            workingDays: { ...this.workshop.workingDays }
        });

        // this.id++;

        // this.workshops.push({
        //     // title: this.workshop.title,
        //     id: this.id,
        //     phone: this.workshop.phone,
        //     openFrom: this.workshop.openFrom,
        //     openTo: this.workshop.openTo,
        //     // description: this.workshop.description,
        //     // address: this.workshop.address,
        //     country: this.workshop.country,
        //     governorate: this.workshop.governorate,
        //     city: this.workshop.city,
        //     workshopGovernements: [...this.workshopGovernements],
        //     workshopCitites: [...this.workshopCitites],
        //     workingDays: { ...this.workshop.workingDays },
        //     langs: [
        //         {
        //             langCode: this.defaultLangCode,
        //             langName: this.defaultLang,
        //             // ...this.businessTranslate,
        //             title: this.workshop.title,
        //             address: this.workshop.address,
        //             description: this.workshop.description,
        //         }
        //     ]
        // });

        // this.translatedWorkshops.push({
        //     id: this.id,
        //     ...this.workshop,
        //     workingDays: { ...this.workshop.workingDays }
        // });

        // console.log('workshops >>', this.workshops, this.translatedWorkshops);
        this.resetWorkshop();
    },
    resetWorkshop() {
        this.workshop.title = "";
        this.workshop.phone = "";

        this.workshop.saturday = false;
        this.workshop.sunday = false;
        this.workshop.monday = false;
        this.workshop.tuesday = false;
        this.workshop.wednesday = false;
        this.workshop.thursday = false;
        this.workshop.friday = false;

        this.workshop.openFrom = "";
        this.workshop.openTo = "";
        this.workshop.description = "";
        // regularPrice: "",
        // urgentPrice: "",
        this.workshop.address = "";
        this.workshop.country = "";
        this.workshop.governorate = "";
        this.workshop.city = "";

        this.$v.businessForm.$reset();

    },
    saveWorkshop(index) {
      console.log('saved');
    },
    removeWorkshop(index) {
      this.workshops.splice(index, 1);
    },
    onImagePicked(event) {
      console.log("picked");
      let file = event.target.files[0];

      if (file) {
        const fileReader = new FileReader();
        fileReader.addEventListener("load", () => {
          this.image = fileReader.result;
          console.log("image >> ", this.image);
        });
        fileReader.readAsDataURL(file);
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
    async getWorkshopGovernorates() {

        this.$v.workshop.country.$touch()

        this.workshop.governorate = ''
        this.workshop.city = ''

      if (this.workshop.country) {
        let governoratesData = await axios.get(
          "/governorates/country/" + this.workshop.country
        );
        console.log("gover >> ", governoratesData.data.data);
        this.workshopGovernements = governoratesData.data.data;
      }
    },
    async getWorkshopCitites() {
        
        this.$v.workshop.governorate.$touch()

        this.workshop.city = ''

      if (this.workshop.governorate) {
        let citiesData = await axios(
          "/cities/governorate/" + this.workshop.governorate
        );
        console.log("cities >> ", citiesData.data.data);
        this.workshopCitites = citiesData.data.data;
      }
    },
    async editWorkshopGovernorates(index) {

        this.$v.workshops.$each[index].country.$touch()

        this.workshops[index].governorate = ''
        this.workshops[index].city = '';

      if (this.workshops[index].country) {

        let governoratesData = await axios.get(
          "/governorates/country/" + this.workshops[index].country
        );
        console.log("gover >> ", governoratesData.data.data);
        this.workshops[index].workshopGovernements = governoratesData.data.data;
      }
    },
    async editWorkshopCitites(index) {

        this.$v.workshops.$each[index].governorate.$touch()

        this.workshops[index].city = ''

      if (this.workshops[index].governorate) {
        let citiesData = await axios(
          "/cities/governorate/" + this.workshops[index].governorate
        );
        console.log("cities >> ", citiesData.data.data);
        this.workshops[index].workshopCitites = citiesData.data.data;
      }
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