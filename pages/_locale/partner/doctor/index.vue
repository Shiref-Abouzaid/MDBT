<template>
  <div class="doctor-register">
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
              {{$t("partner.business_info") }}
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
                  </div>

                  <div class="form-row justify-content-between">
                    <div class="form-group col-md-5">
                      <label for="firstName">{{$t("partner.first_name") }}</label>
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        id="firstName"
                      />
                    </div>
                    <div class="form-group col-md-5">
                      <label for="lastName">{{$t("partner.last_name") }}</label>
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        id="lastName"
                      />
                    </div>
                  </div>
                  <div class="form-row justify-content-between">
                    <div class="form-group col-md-5">
                      <label for="phone">{{$t("partner.personal_phone") }}</label>
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        id="phone"
                      />
                    </div>
                    <div class="form-group col-md-5">
                      <label for="specialization">{{$t("partner.specializattion") }}</label>
                      <select
                        id="specialization"
                        class="form-control form-control-lg"
                      >
                        <option>Egypt</option>
                        <option>syria</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-row justify-content-between">
                    <div class="form-group col-md-5">
                      <label for="degree">{{$t("partner.degree") }}</label>
                      <select id="degree" class="form-control form-control-lg">
                        <option>Egypt</option>
                        <option>syria</option>
                      </select>
                    </div>
                    <div class="form-group col-md-5">
                      <label for="homeVisit">{{$t("partner.home_visit") }}</label>
                      <select
                        id="homeVisit"
                        class="form-control form-control-lg"
                      >
                        <option>Egypt</option>
                        <option>syria</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-row justify-content-between">
                    <div class="form-group col-md-5">
                      <label for="phone">{{$t("partner.commerical_name") }}</label>
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        id="phone"
                      />
                    </div>
                    <div class="form-group col-md-5">
                      <label for="country">{{$t("partner.country") }}</label>
                      <select id="country" class="form-control form-control-lg">
                        <option>Egypt</option>
                        <option>syria</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-row justify-content-between">
                    <div class="form-group col-md-5">
                      <label for="city">{{$t("partner.city") }}</label>
                      <select id="city" class="form-control form-control-lg">
                        <option>Egypt</option>
                        <option>syria</option>
                      </select>
                    </div>
                    <div class="form-group col-md-5">
                      <label for="governorate">{{$t("partner.govern") }}</label>
                      <select
                        id="governorate"
                        class="form-control form-control-lg"
                      >
                        <option>Egypt</option>
                        <option>syria</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-row justify-content-between">
                    <div class="form-group col-md-5">
                      <label for="password">{{$t("partner.password") }}</label>
                      <input
                        type="password"
                        class="form-control form-control-lg"
                        id="password"
                      />
                    </div>
                    <div class="form-group col-md-5">
                      <label for="confirmPassword">{{$t("partner.create_pass") }}</label>
                      <input
                        type="password"
                        class="form-control form-control-lg"
                        id="confirmPassword"
                      />
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
                <div class="doctor-business">
                  <b-tabs pills align="center">
                    <b-tab active>
                      <template #title>
                        <div class="service">
                          <div class="service-content">
                            <div class="service-img">
                              <img
                                src="/images/icons/svg/hospital.svg"
                                alt=""
                              />
                            </div>
                            <p>
                            {{$t("partner.hospital") }} / <br />
                            {{$t("partner.medical_center") }} 
                            </p>
                          </div>
                        </div>
                      </template>

                      <div class="hospital">

                        <div class="hospital-info">
                            <div class="head">
                                <h3> {{$t("partner.personal_info") }} </h3>
                            </div>
                          <div class="partner-form">
                            <div class="form-row justify-content-between">
                              <div class="form-group col-md-5">
                                <label for="name">{{$t("partner.hospital_name") }}</label>
                                <input
                                  :class="{ invalid: $v.hospital.title.$error }"
                                  @input="$v.hospital.title.$touch()"
                                  v-model="hospital.title"
                                  type="text"
                                  class="form-control form-control-lg"
                                  id="name"
                                />
                                <template v-if="$v.hospital.title.$error">
                                  <small v-if="!$v.hospital.title.required" class="form-text text-muted">
                                    <span>This field is required</span>
                                  </small>
                                </template>
                              </div>
                              <div class="form-group col-md-5">
                                <label for="phone">{{$t("partner.phone") }}</label>
                                <input
                                  type="text"
                                  class="form-control form-control-lg"
                                  id="phone"
                                />
                              </div>
                            </div>
                            <div class="form-row justify-content-between">
                              <div class="form-group col-md-5">
                                <label for="address">{{$t("partner.address") }}</label>
                                <input
                                  type="text"
                                  class="form-control form-control-lg"
                                  id="address"
                                />
                              </div>
                              <div class="form-group col-md-5">
                                <label for="country">{{$t("partner.country") }}</label>
                                <select
                                  id="country"
                                  class="form-control form-control-lg"
                                >
                                  <option>Egypt</option>
                                  <option>syria</option>
                                </select>
                              </div>
                            </div>
                            <div class="form-row justify-content-between">
                              <div class="form-group col-md-5">
                                <label for="city">{{$t("partner.city") }}</label>
                                <select
                                  id="city"
                                  class="form-control form-control-lg"
                                >
                                  <option>Egypt</option>
                                  <option>syria</option>
                                </select>
                              </div>
                              <div class="form-group col-md-5">
                                <label for="governorate">{{$t("partner.govern") }}</label>
                                <select
                                  id="governorate"
                                  class="form-control form-control-lg"
                                >
                                  <option>Egypt</option>
                                  <option>syria</option>
                                </select>
                              </div>
                            </div>

                            <div class="form-row">
                              <div class="form-group col-12">
                                <label for="description">{{$t("partner.descrip") }}</label>
                                <textarea
                                  class="form-control"
                                  id="description"
                                  rows="4"
                                ></textarea>
                              </div>
                            </div>

                          </div>
                        </div>

                        <div class="hospital-clinics" v-if="hospital.clinics && hospital.clinics.length > 0">
                            <div class="clinic" v-for="(clinic, index) in hospital.clinics" :key="index">
                                <div class="head" v-b-toggle="'collapse-' + index">
                                    <h3>{{ hospital.clinics[index].title }}</h3>
                                    <img src="/images/icons/svg/medical-bottom-arrow.svg" alt="">
                                </div>

                                <b-collapse :id="'collapse-' + index">
                                    <div class="clinic-info">
                                        <div class="partner-form">
                                            <div class="form-row justify-content-between">
                                                <div class="form-group col-md-6">
                                                    <label for="clinicName">{{$t("partner.clinic_name") }}</label>
                                                    <input
                                                        v-model="hospital.clinics[index].title"
                                                        type="text"
                                                        class="form-control form-control-lg"
                                                        id="clinicName"
                                                    />
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <label for="phone">{{$t("partner.phone") }}</label>
                                                    <input
                                                        v-model="hospital.clinics[index].phone"
                                                        type="text"
                                                        class="form-control form-control-lg"
                                                        id="phone"
                                                    />
                                                </div>
                                            </div>
                                            <div class="form-row justify-content-between">
                                                <div class="form-group col-12">
                                                    <div class="working-days">
                                                        <div class="chiller_cb">
                                                            <input v-model="hospital.clinics[index].workingDays.saturday" id="saturday" type="checkbox">
                                                            <label for="saturday">{{$t("partner.satrday") }}</label>
                                                            <span></span>
                                                        </div>
                                                        <div class="chiller_cb">
                                                            <input v-model="hospital.clinics[index].workingDays.sunday" id="sunday" type="checkbox">
                                                            <label for="sunday">{{$t("partner.sunday") }}</label>
                                                            <span></span>
                                                        </div>
                                                        <div class="chiller_cb">
                                                            <input v-model="hospital.clinics[index].workingDays.monday" id="monday" type="checkbox">
                                                            <label for="monday">{{$t("partner.monday") }}</label>
                                                            <span></span>
                                                        </div>
                                                        <div class="chiller_cb">
                                                            <input v-model="hospital.clinics[index].workingDays.tuesday" id="tuesday" type="checkbox">
                                                            <label for="tuesday">{{$t("partner.tuesday") }}</label>
                                                            <span></span>
                                                        </div>
                                                        <div class="chiller_cb">
                                                            <input v-model="hospital.clinics[index].workingDays.wednesday" id="wednesday" type="checkbox">
                                                            <label for="wednesday">{{$t("partner.wednesday") }}</label>
                                                            <span></span>
                                                        </div>
                                                        <div class="chiller_cb">
                                                            <input v-model="hospital.clinics[index].workingDays.thursday" id="thursday" type="checkbox">
                                                            <label for="thursday">{{$t("partner.thursday") }}</label>
                                                            <span></span>
                                                        </div>
                                                        <div class="chiller_cb">
                                                            <input v-model="hospital.clinics[index].workingDays.friday" id="friday" type="checkbox">
                                                            <label for="friday">{{$t("partner.friday") }}</label>
                                                            <span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-row justify-content-between">
                                                <div class="form-group col-md-6">
                                                    <label for="address">{{$t("partner.open") }}</label>
                                                    <b-form-timepicker v-model="hospital.clinics[index].openFrom" locale="en"></b-form-timepicker>
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <label for="address">{{$t("partner.close") }}</label>
                                                    <b-form-timepicker v-model="hospital.clinics[index].openTo" locale="en"></b-form-timepicker>
                                                </div>
                                            </div>
                                            <div class="form-row justify-content-between">
                                                <div class="form-group col-md-6">
                                                    <label for="regular">{{$t("partner.regular") }}</label>
                                                    <input
                                                        v-model="hospital.clinics[index].regularPrice"
                                                        type="text"
                                                        class="form-control form-control-lg"
                                                        id="regular"
                                                    />
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <label for="urgent">{{$t("partner.urgent") }}</label>
                                                    <input
                                                        v-model="hospital.clinics[index].urgentPrice"
                                                        type="text"
                                                        class="form-control form-control-lg"
                                                        id="urgent"
                                                    />
                                                </div>
                                            </div>
                                            <div class="action-btns">
                                                <button type="button" @click="removeHospitalClinic(index)" class="btn remove-clinic">{{$t("partner.remove") }}</button>
                                                <button type="button" @click="saveHospitalClinic(index)" v-b-toggle="'collapse-' + index" class="btn save-clinic">{{$t("partner.save") }}</button>
                                            </div>

                                        </div>
                                    </div>
                                </b-collapse>

                            </div>
                        </div>

                        <div class="add-clinic">
                          <div class="head">
                              <h3>{{$t("partner.add") }}</h3>
                          </div>
                          <div class="partner-form">
                            <div class="form-row justify-content-between">
                                <div class="form-group col-md-6">
                                    <label for="clinicName">{{$t("partner.clinic_name") }}</label>
                                    <input
                                        v-model="hospitalClinic.title"
                                        type="text"
                                        class="form-control form-control-lg"
                                        id="clinicName"
                                    />
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="phone">{{$t("partner.phone") }}</label>
                                    <input
                                        v-model="hospitalClinic.phone"
                                        type="text"
                                        class="form-control form-control-lg"
                                        id="phone"
                                    />
                                </div>
                            </div>
                            <div class="form-row justify-content-between">
                              <div class="form-group col-12">
                                  <div class="working-days">
                                    <div class="chiller_cb">
                                        <input v-model="hospitalClinic.workingDays.saturday" id="saturday" type="checkbox">
                                        <label for="saturday">{{$t("partner.satrday") }}</label>
                                        <span></span>
                                    </div>
                                    <div class="chiller_cb">
                                        <input v-model="hospitalClinic.workingDays.sunday" id="sunday" type="checkbox">
                                        <label for="sunday">{{$t("partner.sunday") }}</label>
                                        <span></span>
                                    </div>
                                    <div class="chiller_cb">
                                        <input v-model="hospitalClinic.workingDays.monday" id="monday" type="checkbox">
                                        <label for="monday">{{$t("partner.monday") }}</label>
                                        <span></span>
                                    </div>
                                    <div class="chiller_cb">
                                        <input v-model="hospitalClinic.workingDays.tuesday" id="tuesday" type="checkbox">
                                        <label for="tuesday">{{$t("partner.tuesday") }}</label>
                                        <span></span>
                                    </div>
                                    <div class="chiller_cb">
                                        <input v-model="hospitalClinic.workingDays.wednesday" id="wednesday" type="checkbox">
                                        <label for="wednesday">{{$t("partner.wednesday") }}</label>
                                        <span></span>
                                    </div>
                                    <div class="chiller_cb">
                                        <input v-model="hospitalClinic.workingDays.thursday" id="thursday" type="checkbox">
                                        <label for="thursday">{{$t("partner.thursday") }}</label>
                                        <span></span>
                                    </div>
                                    <div class="chiller_cb">
                                        <input v-model="hospitalClinic.workingDays.friday" id="friday" type="checkbox">
                                        <label for="friday">{{$t("partner.friday") }}</label>
                                        <span></span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="form-row justify-content-between">
                                  <div class="form-group col-md-6">
                                      <label for="address">{{$t("partner.open") }}</label>
                                      <b-form-timepicker v-model="hospitalClinic.openFrom" locale="en"></b-form-timepicker>
                                  </div>
                                  <div class="form-group col-md-6">
                                      <label for="address">{{$t("partner.close") }}</label>
                                      <b-form-timepicker v-model="hospitalClinic.openTo" locale="en"></b-form-timepicker>
                                  </div>
                              </div>
                              <div class="form-row justify-content-between">
                                  <div class="form-group col-md-6">
                                      <label for="regular">{{$t("partner.regular") }}</label>
                                      <input
                                          v-model="hospitalClinic.regularPrice"
                                          type="text"
                                          class="form-control form-control-lg"
                                          id="regular"
                                      />
                                  </div>
                                  <div class="form-group col-md-6">
                                      <label for="urgent">{{$t("partner.urgent") }}</label>
                                      <input
                                          v-model="hospitalClinic.urgentPrice"
                                          type="text"
                                          class="form-control form-control-lg"
                                          id="urgent"
                                      />
                                  </div>
                              </div>
                              <div class="add-btn">
                                  <button type="button" @click="addHospitalClinic" class="btn">+ {{$t("partner.add_clinic_btn") }}</button>
                              </div>

                          </div>
                        </div>

                      </div>
                    </b-tab>
                    <b-tab>
                      <template #title>
                        <div class="service">
                          <div class="service-content">
                            <div class="service-img">
                              <img src="/images/icons/svg/clinic.svg" alt="" />
                            </div>
                            <p>
                         {{$t("partner.private") }} <br />
                          {{$t("partner.clinic") }}
                            </p>
                          </div>
                        </div>
                      </template>

                        <div class="hospital-clinics" v-if="privateClinics && privateClinics.length > 0">
                            <div class="clinic" v-for="(clinic, index) in privateClinics" :key="index">
                                <div class="head" v-b-toggle="'collapse-' + index">
                                    <h3>{{ privateClinics[index].title }}</h3>
                                    <img src="/images/icons/svg/medical-bottom-arrow.svg" alt="">
                                </div>

                                <b-collapse :id="'collapse-' + index">
                                    <div class="clinic-info">
                                        <div class="partner-form">
                                            <div class="form-row justify-content-between">
                                                <div class="form-group col-md-6">
                                                    <label for="clinicName">{{$t("partner.clinic_name") }}</label>
                                                    <input
                                                        v-model="privateClinics[index].title"
                                                        type="text"
                                                        class="form-control form-control-lg"
                                                        id="clinicName"
                                                    />
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <label for="phone">{{$t("partner.phone") }}</label>
                                                    <input
                                                        v-model="privateClinics[index].phone"
                                                        type="text"
                                                        class="form-control form-control-lg"
                                                        id="phone"
                                                    />
                                                </div>
                                            </div>
                                            <div class="form-row justify-content-between">
                                                <div class="form-group col-12">
                                                    <div class="working-days">
                                                        <div class="chiller_cb">
                                                            <input v-model="privateClinics[index].workingDays.saturday" id="saturday" type="checkbox">
                                                            <label for="saturday">{{$t("partner.satrday") }}</label>
                                                            <span></span>
                                                        </div>
                                                        <div class="chiller_cb">
                                                            <input v-model="privateClinics[index].workingDays.sunday" id="sunday" type="checkbox">
                                                            <label for="sunday">{{$t("partner.sunday") }}</label>
                                                            <span></span>
                                                        </div>
                                                        <div class="chiller_cb">
                                                            <input v-model="privateClinics[index].workingDays.monday" id="monday" type="checkbox">
                                                            <label for="monday">{{$t("partner.monday") }}</label>
                                                            <span></span>
                                                        </div>
                                                        <div class="chiller_cb">
                                                            <input v-model="privateClinics[index].workingDays.tuesday" id="tuesday" type="checkbox">
                                                            <label for="tuesday">{{$t("partner.tuesday") }}</label>
                                                            <span></span>
                                                        </div>
                                                        <div class="chiller_cb">
                                                            <input v-model="privateClinics[index].workingDays.wednesday" id="wednesday" type="checkbox">
                                                            <label for="wednesday">{{$t("partner.wednesday") }}</label>
                                                            <span></span>
                                                        </div>
                                                        <div class="chiller_cb">
                                                            <input v-model="privateClinics[index].workingDays.thursday" id="thursday" type="checkbox">
                                                            <label for="thursday">{{$t("partner.thursday") }}</label>
                                                            <span></span>
                                                        </div>
                                                        <div class="chiller_cb">
                                                            <input v-model="privateClinics[index].workingDays.friday" id="friday" type="checkbox">
                                                            <label for="friday">{{$t("partner.friday") }}</label>
                                                            <span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-row justify-content-between">
                                                <div class="form-group col-md-6">
                                                    <label for="address">{{$t("partner.open") }}</label>
                                                    <b-form-timepicker v-model="privateClinics[index].openFrom" locale="en"></b-form-timepicker>
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <label for="address">{{$t("partner.close") }}</label>
                                                    <b-form-timepicker v-model="privateClinics[index].openTo" locale="en"></b-form-timepicker>
                                                </div>
                                            </div>
                                            <div class="form-row justify-content-between">
                                                <div class="form-group col-md-6">
                                                    <label for="regular">{{$t("partner.regular") }}</label>
                                                    <input
                                                        v-model="privateClinics[index].regularPrice"
                                                        type="text"
                                                        class="form-control form-control-lg"
                                                        id="regular"
                                                    />
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <label for="urgent">{{$t("partner.urgent") }}</label>
                                                    <input
                                                        v-model="privateClinics[index].urgentPrice"
                                                        type="text"
                                                        class="form-control form-control-lg"
                                                        id="urgent"
                                                    />
                                                </div>
                                            </div>
                                            <div class="action-btns">
                                                <button type="button" @click="removePrivateClinic(index)" class="btn remove-clinic">{{$t("partner.remove") }}</button>
                                                <button type="button" @click="savePrivateClinic(index)" v-b-toggle="'collapse-' + index" class="btn save-clinic">{{$t("partner.save") }}</button>
                                            </div>

                                        </div>
                                    </div>
                                </b-collapse>

                            </div>
                        </div>

                        <div class="private-clinic">
                          <div class="head">
                              <h3> {{$t("partner.clinic_header") }}</h3>
                          </div>
                          <div class="partner-form">
                            <div class="form-row justify-content-between">
                                <div class="form-group col-md-6">
                                    <label for="clinicName">{{$t("partner.clinic_name") }}</label>
                                    <input
                                        v-model="privateClinic.title"
                                        type="text"
                                        class="form-control form-control-lg"
                                        id="clinicName"
                                    />
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="phone">{{$t("partner.phone") }}</label>
                                    <input
                                        v-model="privateClinic.phone"
                                        type="text"
                                        class="form-control form-control-lg"
                                        id="phone"
                                    />
                                </div>
                            </div>
                            <div class="form-row justify-content-between">
                              <div class="form-group col-12">
                                   <div class="working-days">
                                    <div class="chiller_cb">
                                        <input v-model="privateClinic.workingDays.saturday" id="saturday" type="checkbox">
                                        <label for="saturday">{{$t("partner.satrday") }}</label>
                                        <span></span>
                                    </div>
                                    <div class="chiller_cb">
                                        <input v-model="privateClinic.workingDays.sunday" id="sunday" type="checkbox">
                                        <label for="sunday">{{$t("partner.sunday") }}</label>
                                        <span></span>
                                    </div>
                                    <div class="chiller_cb">
                                        <input v-model="privateClinic.workingDays.monday" id="monday" type="checkbox">
                                        <label for="monday">{{$t("partner.monday") }}</label>
                                        <span></span>
                                    </div>
                                    <div class="chiller_cb">
                                        <input v-model="privateClinic.workingDays.tuesday" id="tuesday" type="checkbox">
                                        <label for="tuesday">{{$t("partner.tuesday") }}</label>
                                        <span></span>
                                    </div>
                                    <div class="chiller_cb">
                                        <input v-model="privateClinic.workingDays.wednesday" id="wednesday" type="checkbox">
                                        <label for="wednesday">{{$t("partner.wednesday") }}</label>
                                        <span></span>
                                    </div>
                                    <div class="chiller_cb">
                                        <input v-model="privateClinic.workingDays.thursday" id="thursday" type="checkbox">
                                        <label for="thursday">{{$t("partner.thursday") }}</label>
                                        <span></span>
                                    </div>
                                    <div class="chiller_cb">
                                        <input v-model="privateClinic.workingDays.friday" id="friday" type="checkbox">
                                        <label for="friday">{{$t("partner.friday") }}</label>
                                        <span></span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="form-row justify-content-between">
                                  <div class="form-group col-md-6">
                                      <label for="address">{{$t("partner.open") }}</label>
                                      <b-form-timepicker v-model="privateClinic.openFrom" locale="en"></b-form-timepicker>
                                  </div>
                                  <div class="form-group col-md-6">
                                      <label for="address">{{$t("partner.close") }}</label>
                                      <b-form-timepicker v-model="privateClinic.openTo" locale="en"></b-form-timepicker>
                                  </div>
                              </div>
                              <div class="form-row justify-content-between">
                                  <div class="form-group col-md-6">
                                      <label for="regular">{{$t("partner.regular") }}</label>
                                      <input
                                          v-model="privateClinic.regularPrice"
                                          type="text"
                                          class="form-control form-control-lg"
                                          id="regular"
                                      />
                                  </div>
                                  <div class="form-group col-md-6">
                                      <label for="urgent">{{$t("partner.urgent") }}</label>
                                      <input
                                          v-model="privateClinic.urgentPrice"
                                          type="text"
                                          class="form-control form-control-lg"
                                          id="urgent"
                                      />
                                  </div>
                              </div>
                              <div class="form-row justify-content-between">
                                <div class="form-group col-md-6">
                                  <label for="address">{{$t("partner.address") }}</label>
                                  <input
                                  v-model="privateClinic.address"
                                    type="text"
                                    class="form-control form-control-lg"
                                    id="address"
                                  />
                                </div>
                                <div class="form-group col-md-6">
                                  <label for="country">{{$t("partner.country") }}</label>
                                  <select
                                    v-model="privateClinic.country"
                                    id="country"
                                    class="form-control form-control-lg"
                                  >
                                    <option>Egypt</option>
                                    <option>syria</option>
                                  </select>
                                </div>
                              </div>
                              <div class="form-row justify-content-between">
                                <div class="form-group col-md-6">
                                  <label for="governorate">{{$t("partner.govern") }}</label>
                                  <select
                                    v-model="privateClinic.governorate"
                                    id="governorate"
                                    class="form-control form-control-lg"
                                  >
                                    <option>Egypt</option>
                                    <option>syria</option>
                                  </select>
                                </div>
                                <div class="form-group col-md-6">
                                  <label for="city">{{$t("partner.city") }}</label>
                                  <select
                                  v-model="privateClinic.city"
                                    id="city"
                                    class="form-control form-control-lg"
                                  >
                                    <option>Egypt</option>
                                    <option>syria</option>
                                  </select>
                                </div>
                              </div>
                              <div class="add-btn">
                                  <button type="button" @click="addPrivateClinic" class="btn">+ {{$t("partner.add_clinic_btn") }}</button>
                              </div>

                          </div>
                        </div>

                    </b-tab>
                    <b-tab>
                      <template #title>
                        <div class="service">
                          <div class="service-content">
                            <div class="service-img">
                              <img
                                src="/images/icons/svg/laboratory.svg"
                                alt=""
                              />
                            </div>
                            <p>{{$t("partner.labratory") }}</p>
                          </div>
                        </div>
                      </template>

                        <div class="hospital-clinics" v-if="laboratories && laboratories.length > 0">
                            <div class="clinic" v-for="(clinic, index) in laboratories" :key="index">
                                <div class="head" v-b-toggle="'collapse-' + index">
                                    <h3>{{ laboratories[index].title }}</h3>
                                    <img src="/images/icons/svg/medical-bottom-arrow.svg" alt="">
                                </div>

                                <b-collapse :id="'collapse-' + index">
                                    <div class="clinic-info">
                                        <div class="partner-form">
                                            <div class="form-row justify-content-between">
                                                <div class="form-group col-md-6">
                                                    <label for="clinicName">{{$t("partner.clinic_name") }}</label>
                                                    <input
                                                        v-model="laboratories[index].title"
                                                        type="text"
                                                        class="form-control form-control-lg"
                                                        id="clinicName"
                                                    />
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <label for="phone">{{$t("partner.phone") }}</label>
                                                    <input
                                                        v-model="laboratories[index].phone"
                                                        type="text"
                                                        class="form-control form-control-lg"
                                                        id="phone"
                                                    />
                                                </div>
                                            </div>
                                            <div class="form-row justify-content-between">
                                                <div class="form-group col-12">
                                                    <div class="working-days">
                                                        <div class="chiller_cb">
                                                            <input v-model="laboratories[index].workingDays.saturday" id="saturday" type="checkbox">
                                                            <label for="saturday">{{$t("partner.satrday") }}</label>
                                                            <span></span>
                                                        </div>
                                                        <div class="chiller_cb">
                                                            <input v-model="laboratories[index].workingDays.sunday" id="sunday" type="checkbox">
                                                            <label for="sunday">{{$t("partner.sunday") }}</label>
                                                            <span></span>
                                                        </div>
                                                        <div class="chiller_cb">
                                                            <input v-model="laboratories[index].workingDays.monday" id="monday" type="checkbox">
                                                            <label for="monday">{{$t("partner.monday") }}</label>
                                                            <span></span>
                                                        </div>
                                                        <div class="chiller_cb">
                                                            <input v-model="laboratories[index].workingDays.tuesday" id="tuesday" type="checkbox">
                                                            <label for="tuesday">{{$t("partner.tuesday") }}</label>
                                                            <span></span>
                                                        </div>
                                                        <div class="chiller_cb">
                                                            <input v-model="laboratories[index].workingDays.wednesday" id="wednesday" type="checkbox">
                                                            <label for="wednesday">{{$t("partner.wednesday") }}</label>
                                                            <span></span>
                                                        </div>
                                                        <div class="chiller_cb">
                                                            <input v-model="laboratories[index].workingDays.thursday" id="thursday" type="checkbox">
                                                            <label for="thursday">{{$t("partner.thursday") }}</label>
                                                            <span></span>
                                                        </div>
                                                        <div class="chiller_cb">
                                                            <input v-model="laboratories[index].workingDays.friday" id="friday" type="checkbox">
                                                            <label for="friday">{{$t("partner.friday") }}</label>
                                                            <span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-row justify-content-between">
                                                <div class="form-group col-md-6">
                                                    <label for="address">{{$t("partner.open") }}</label>
                                                    <b-form-timepicker v-model="laboratories[index].openFrom" locale="en"></b-form-timepicker>
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <label for="address">{{$t("partner.close") }}</label>
                                                    <b-form-timepicker v-model="laboratories[index].openTo" locale="en"></b-form-timepicker>
                                                </div>
                                            </div>
                                            <div class="form-row justify-content-between">
                                                <div class="form-group col-md-6">
                                                    <label for="regular">{{$t("partner.regular") }}</label>
                                                    <input
                                                        v-model="laboratories[index].regularPrice"
                                                        type="text"
                                                        class="form-control form-control-lg"
                                                        id="regular"
                                                    />
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <label for="urgent">{{$t("partner.urgent") }}</label>
                                                    <input
                                                        v-model="laboratories[index].urgentPrice"
                                                        type="text"
                                                        class="form-control form-control-lg"
                                                        id="urgent"
                                                    />
                                                </div>
                                            </div>
                                            <div class="action-btns">
                                                <button type="button" @click="removeLaboratory(index)" class="btn remove-clinic">{{$t("partner.remove") }}</button>
                                                <button type="button" @click="saveLaboratory(index)" v-b-toggle="'collapse-' + index" class="btn save-clinic">{{$t("partner.save") }}</button>
                                            </div>

                                        </div>
                                    </div>
                                </b-collapse>

                            </div>
                        </div>

                        <div class="laboratory">
                          <div class="head">
                              <h3>{{$t("partner.lab_header") }}</h3>
                          </div>
                          <div class="partner-form">
                            <div class="form-row justify-content-between">
                                <div class="form-group col-md-6">
                                    <label for="clinicName">{{$t("partner.clinic_name") }}</label>
                                    <input
                                        v-model="laboratory.title"
                                        type="text"
                                        class="form-control form-control-lg"
                                        id="clinicName"
                                    />
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="phone">{{$t("partner.phone") }}</label>
                                    <input
                                        v-model="laboratory.phone"
                                        type="text"
                                        class="form-control form-control-lg"
                                        id="phone"
                                    />
                                </div>
                            </div>
                            <div class="form-row justify-content-between">
                              <div class="form-group col-12">
                                <div class="working-days">
                                    <div class="chiller_cb">
                                        <input v-model="laboratory.workingDays.saturday" id="saturday" type="checkbox">
                                        <label for="saturday">{{$t("partner.satrday") }}</label>
                                        <span></span>
                                    </div>
                                    <div class="chiller_cb">
                                        <input v-model="laboratory.workingDays.sunday" id="sunday" type="checkbox">
                                        <label for="sunday">{{$t("partner.sunday") }}</label>
                                        <span></span>
                                    </div>
                                    <div class="chiller_cb">
                                        <input v-model="laboratory.workingDays.monday" id="monday" type="checkbox">
                                        <label for="monday">{{$t("partner.monday") }}</label>
                                        <span></span>
                                    </div>
                                    <div class="chiller_cb">
                                        <input v-model="laboratory.workingDays.tuesday" id="tuesday" type="checkbox">
                                        <label for="tuesday">{{$t("partner.tuesday") }}</label>
                                        <span></span>
                                    </div>
                                    <div class="chiller_cb">
                                        <input v-model="laboratory.workingDays.wednesday" id="wednesday" type="checkbox">
                                        <label for="wednesday">{{$t("partner.wednesday") }}</label>
                                        <span></span>
                                    </div>
                                    <div class="chiller_cb">
                                        <input v-model="laboratory.workingDays.thursday" id="thursday" type="checkbox">
                                        <label for="thursday">{{$t("partner.thursday") }}</label>
                                        <span></span>
                                    </div>
                                    <div class="chiller_cb">
                                        <input v-model="laboratory.workingDays.friday" id="friday" type="checkbox">
                                        <label for="friday">{{$t("partner.friday") }}</label>
                                        <span></span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="form-row justify-content-between">
                                  <div class="form-group col-md-6">
                                      <label for="address">{{$t("partner.open") }}</label>
                                      <b-form-timepicker v-model="laboratory.openFrom" locale="en"></b-form-timepicker>
                                  </div>
                                  <div class="form-group col-md-6">
                                      <label for="address">{{$t("partner.close") }}</label>
                                      <b-form-timepicker v-model="laboratory.openTo" locale="en"></b-form-timepicker>
                                  </div>
                              </div>
                              <div class="form-row justify-content-between">
                                <div class="form-group col-md-6">
                                  <label for="address">{{$t("partner.address") }}</label>
                                  <input
                                  v-model="laboratory.address"
                                    type="text"
                                    class="form-control form-control-lg"
                                    id="address"
                                  />
                                </div>
                                <div class="form-group col-md-6">
                                  <label for="country">{{$t("partner.country") }}</label>
                                  <select
                                    v-model="laboratory.country"
                                    id="country"
                                    class="form-control form-control-lg"
                                  >
                                    <option>Egypt</option>
                                    <option>syria</option>
                                  </select>
                                </div>
                              </div>
                              <div class="form-row justify-content-between">
                                <div class="form-group col-md-6">
                                  <label for="governorate">{{$t("partner.govern") }}</label>
                                  <select
                                    v-model="laboratory.governorate"
                                    id="governorate"
                                    class="form-control form-control-lg"
                                  >
                                    <option>Egypt</option>
                                    <option>syria</option>
                                  </select>
                                </div>
                                <div class="form-group col-md-6">
                                  <label for="city">{{$t("partner.city") }}</label>
                                  <select
                                  v-model="laboratory.city"
                                    id="city"
                                    class="form-control form-control-lg"
                                  >
                                    <option>Egypt</option>
                                    <option>syria</option>
                                  </select>
                                </div>
                              </div>
                              <div class="add-btn">
                                  <button type="button" @click="addLaboratory" class="btn">+ Add Another Laboratory</button>
                              </div>

                          </div>
                        </div>

                    </b-tab>
                    <b-tab>
                      <template #title>
                        <div class="service">
                          <div class="service-content">
                            <div class="service-img">
                              <img src="/images/icons/svg/spa.svg" alt="" />
                            </div>
                            <p>{{$t("partner.spa") }}</p>
                          </div>
                        </div>
                      </template>

                        <div class="hospital-clinics" v-if="spas && spas.length > 0">
                            <div class="clinic" v-for="(clinic, index) in spas" :key="index">
                                <div class="head" v-b-toggle="'collapse-' + index">
                                    <h3>{{ spas[index].title }}</h3>
                                    <img src="/images/icons/svg/medical-bottom-arrow.svg" alt="">
                                </div>

                                <b-collapse :id="'collapse-' + index">
                                    <div class="clinic-info">
                                        <div class="partner-form">
                                            <div class="form-row justify-content-between">
                                                <div class="form-group col-md-6">
                                                    <label for="clinicName">{{$t("partner.clinic_name") }}</label>
                                                    <input
                                                        v-model="spas[index].title"
                                                        type="text"
                                                        class="form-control form-control-lg"
                                                        id="clinicName"
                                                    />
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <label for="phone">{{$t("partner.phone") }}</label>
                                                    <input
                                                        v-model="spas[index].phone"
                                                        type="text"
                                                        class="form-control form-control-lg"
                                                        id="phone"
                                                    />
                                                </div>
                                            </div>
                                            <div class="form-row justify-content-between">
                                                <div class="form-group col-12">
                                                    <div class="working-days">
                                                        <div class="chiller_cb">
                                                            <input v-model="spas[index].workingDays.saturday" id="saturday" type="checkbox">
                                                            <label for="saturday">{{$t("partner.satrday") }}</label>
                                                            <span></span>
                                                        </div>
                                                        <div class="chiller_cb">
                                                            <input v-model="spas[index].workingDays.sunday" id="sunday" type="checkbox">
                                                            <label for="sunday">{{$t("partner.sunday") }}</label>
                                                            <span></span>
                                                        </div>
                                                        <div class="chiller_cb">
                                                            <input v-model="spas[index].workingDays.monday" id="monday" type="checkbox">
                                                            <label for="monday">{{$t("partner.monday") }}</label>
                                                            <span></span>
                                                        </div>
                                                        <div class="chiller_cb">
                                                            <input v-model="spas[index].workingDays.tuesday" id="tuesday" type="checkbox">
                                                            <label for="tuesday">{{$t("partner.tuesday") }}</label>
                                                            <span></span>
                                                        </div>
                                                        <div class="chiller_cb">
                                                            <input v-model="spas[index].workingDays.wednesday" id="wednesday" type="checkbox">
                                                            <label for="wednesday">{{$t("partner.wednesday") }}</label>
                                                            <span></span>
                                                        </div>
                                                        <div class="chiller_cb">
                                                            <input v-model="spas[index].workingDays.thursday" id="thursday" type="checkbox">
                                                            <label for="thursday">{{$t("partner.thursday") }}</label>
                                                            <span></span>
                                                        </div>
                                                        <div class="chiller_cb">
                                                            <input v-model="spas[index].workingDays.friday" id="friday" type="checkbox">
                                                            <label for="friday">{{$t("partner.friday") }}</label>
                                                            <span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-row justify-content-between">
                                                <div class="form-group col-md-6">
                                                    <label for="address">{{$t("partner.open") }}</label>
                                                    <b-form-timepicker v-model="spas[index].openFrom" locale="en"></b-form-timepicker>
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <label for="address">{{$t("partner.close") }}</label>
                                                    <b-form-timepicker v-model="spas[index].openTo" locale="en"></b-form-timepicker>
                                                </div>
                                            </div>
                                            <div class="form-row justify-content-between">
                                                <div class="form-group col-md-6">
                                                    <label for="regular">{{$t("partner.regular") }}</label>
                                                    <input
                                                        v-model="spas[index].regularPrice"
                                                        type="text"
                                                        class="form-control form-control-lg"
                                                        id="regular"
                                                    />
                                                </div>
                                                <div class="form-group col-md-6">
                                                    <label for="urgent">{{$t("partner.urgent") }}</label>
                                                    <input
                                                        v-model="spas[index].urgentPrice"
                                                        type="text"
                                                        class="form-control form-control-lg"
                                                        id="urgent"
                                                    />
                                                </div>
                                            </div>
                                            <div class="action-btns">
                                                <button type="button" @click="removeSpa(index)" class="btn remove-clinic">{{$t("partner.remove") }}</button>
                                                <button type="button" @click="saveSpa(index)" v-b-toggle="'collapse-' + index" class="btn save-clinic">{{$t("partner.save") }}</button>
                                            </div>

                                        </div>
                                    </div>
                                </b-collapse>

                            </div>
                        </div>

                        <div class="spa">
                          <div class="head">
                              <h3>{{$t("partner.info") }}</h3>
                          </div>
                          <div class="partner-form">
                            <div class="form-row justify-content-between">
                                <div class="form-group col-md-6">
                                    <label for="clinicName">{{$t("partner.clinic_name") }}</label>
                                    <input
                                        v-model="spa.title"
                                        type="text"
                                        class="form-control form-control-lg"
                                        id="clinicName"
                                    />
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="phone">{{$t("partner.phone") }}</label>
                                    <input
                                        v-model="spa.phone"
                                        type="text"
                                        class="form-control form-control-lg"
                                        id="phone"
                                    />
                                </div>
                            </div>
                            <div class="form-row justify-content-between">
                              <div class="form-group col-12">
                                 <div class="working-days">
                                    <div class="chiller_cb">
                                        <input v-model="spa.workingDays.saturday" id="saturday" type="checkbox">
                                        <label for="saturday">{{$t("partner.satrday") }}</label>
                                        <span></span>
                                    </div>
                                    <div class="chiller_cb">
                                        <input v-model="spa.workingDays.sunday" id="sunday" type="checkbox">
                                        <label for="sunday">{{$t("partner.sunday") }}</label>
                                        <span></span>
                                    </div>
                                    <div class="chiller_cb">
                                        <input v-model="spa.workingDays.monday" id="monday" type="checkbox">
                                        <label for="monday">{{$t("partner.monday") }}</label>
                                        <span></span>
                                    </div>
                                    <div class="chiller_cb">
                                        <input v-model="spa.workingDays.tuesday" id="tuesday" type="checkbox">
                                        <label for="tuesday">{{$t("partner.tuesday") }}</label>
                                        <span></span>
                                    </div>
                                    <div class="chiller_cb">
                                        <input v-model="spa.workingDays.wednesday" id="wednesday" type="checkbox">
                                        <label for="wednesday">{{$t("partner.wednesday") }}</label>
                                        <span></span>
                                    </div>
                                    <div class="chiller_cb">
                                        <input v-model="spa.workingDays.thursday" id="thursday" type="checkbox">
                                        <label for="thursday">{{$t("partner.thursday") }}</label>
                                        <span></span>
                                    </div>
                                    <div class="chiller_cb">
                                        <input v-model="spa.workingDays.friday" id="friday" type="checkbox">
                                        <label for="friday">{{$t("partner.friday") }}</label>
                                        <span></span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="form-row justify-content-between">
                                  <div class="form-group col-md-6">
                                      <label for="address">{{$t("partner.open") }}</label>
                                      <b-form-timepicker v-model="spa.openFrom" locale="en"></b-form-timepicker>
                                  </div>
                                  <div class="form-group col-md-6">
                                      <label for="address">{{$t("partner.close") }}</label>
                                      <b-form-timepicker v-model="spa.openTo" locale="en"></b-form-timepicker>
                                  </div>
                              </div>
                              <div class="form-row justify-content-between">
                                <div class="form-group col-md-6">
                                  <label for="address">{{$t("partner.address") }}</label>
                                  <input
                                  v-model="spa.address"
                                    type="text"
                                    class="form-control form-control-lg"
                                    id="address"
                                  />
                                </div>
                                <div class="form-group col-md-6">
                                  <label for="country">{{$t("partner.country") }}</label>
                                  <select
                                    v-model="spa.country"
                                    id="country"
                                    class="form-control form-control-lg"
                                  >
                                    <option>Egypt</option>
                                    <option>syria</option>
                                  </select>
                                </div>
                              </div>
                              <div class="form-row justify-content-between">
                                <div class="form-group col-md-6">
                                  <label for="governorate">{{$t("partner.govern") }}</label>
                                  <select
                                    v-model="spa.governorate"
                                    id="governorate"
                                    class="form-control form-control-lg"
                                  >
                                    <option>Egypt</option>
                                    <option>syria</option>
                                  </select>
                                </div>
                                <div class="form-group col-md-6">
                                  <label for="city">{{$t("partner.city") }}</label>
                                  <select
                                  v-model="spa.city"
                                    id="city"
                                    class="form-control form-control-lg"
                                  >
                                    <option>Egypt</option>
                                    <option>syria</option>
                                  </select>
                                </div>
                              </div>
                              <div class="add-btn">
                                  <button type="button" @click="addSpa" class="btn">+ Add Another SPA</button>
                              </div>

                          </div>
                        </div>

                    </b-tab>
                  </b-tabs>

                    <!-- Because action-btns styles included in partner-form -->
                    <div class="partner-form">
                        <div class="action-btns">
                            <button
                            class="btn perv-btn"
                            type="button"
                            @click="e1 = 1"
                            >
                            <img
                                src="/images/icons/svg/left-green-arrow.svg"
                                alt=""
                            />
                            <span>{{$t("partner.previous_link") }}</span>
                            </button>
                            <button
                            class="btn create-btn"
                            type="button"
                            @click="e1 = 1"
                            >
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
  layout: "withoutNavbar",
  data() {
    return {
      e1: 1,
      image: "/images/person.jpeg",
      value: "",
      hospital: {
        title: "",
        phone: "",
        address: "",
        shortDescription: "",
        description: "",
        mainImage: "",
        gallery: [],
        country: "",
        city: "",
        governorate: "",
        clinics: []
      },
      hospitalClinic: {
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
        regularPrice: "",
        urgentPrice: ""
      },
      // hospitalClinics: [],
      privateClinic: {
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
        regularPrice: "",
        urgentPrice: "",
        address: "",
        country: "",
        governorate: "",
        city: ""
      },
      privateClinics: [],
      laboratory: {
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
        address: "",
        country: "",
        governorate: "",
        city: ""
      },
      laboratories: [],
      spa: {
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
        address: "",
        country: "",
        governorate: "",
        city: ""
      },
      spas: [],
      hospitalCountries: [],
      hospitalGovernorates: [],
      hospitalCities: [],
      clinicCountries: [],
      clinicGovernorates: [],
      clinicCities: [],
      laboratoryCountries: [],
      laboratoryGovernorates: [],
      laboratoryCities: [],
      spaCountries: [],
      spaGovernorates: [],
      spaCities: []

    };
  },
  validations: {
    hospital: {
      title: {
        required
      },
      phone: {
        required,
        numeric
      },
      address: {
        required
      },
      shortDescription: {
        required
      },
      description: {
        required
      },
      mainImage: {
        required
      },
      gallery: {
        required,
        minLen: minLength(1)
      },
      country: {
        required
      },
      city: {
        required
      },
      governorate: {
        required
      },
      clinics: {
        required,
        minLen: minLength(1)
      }
    },
    hospitalClinic: {
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
      regularPrice: {
        required,
        minVal: minValue(0),
      },
      urgentPrice: {
        required,
        minVal: minValue(0),
      },
    },
    privateClinic: {
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
      regularPrice: {
        required,
        minVal: minValue(0),
      },
      urgentPrice: {
        required,
        minVal: minValue(0),
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
    },
    laboratory: {
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
    spa: {
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
  },
  async fetch() {

    try {

      let countriesData = await axios.get("/countries");
      console.log("countries data >> ", countriesData.data.data);
      this.hospitalCountries = countriesData.data.data;
      this.clinicCountries = countriesData.data.data;
      this.laboratoryCountries = countriesData.data.data;
      this.spaCountries = countriesData.data.data;

    } catch (error) {
      console.log('error >> ', error)
    }

  },
  methods: {
    addHospitalClinic() {
        this.hospital.clinics.push({
            ...this.hospitalClinic,
            workingDays: { ...this.hospitalClinic.workingDays }
        });
        console.log('hospital clinics >>', this.hospital.clinics);
    },
    saveHospitalClinic(index) {
        console.log('saved');
    },
    removeHospitalClinic(index) {
        this.hospital.clinics.splice(index, 1);
    },
    addPrivateClinic() {
        this.privateClinics.push({
            ...this.privateClinic,
            workingDays: { ...this.privateClinic.workingDays }
        });
        console.log('private clinics >>', this.privateClinics);
    },
    savePrivateClinic(index) {
        console.log('saved');
    },
    removePrivateClinic(index) {
        this.privateClinics.splice(index, 1);
    },
    addLaboratory() {
      this.laboratories.push({
          ...this.laboratory,
          workingDays: { ...this.laboratory.workingDays }
      });
      console.log('Laboratories >>', this.privateClinics);
    },
    saveLaboratory(index) {
      console.log('saved');
    },
    removeLaboratory(index) {
      this.laboratories.splice(index, 1);
    },
    addSpa() {
      this.spas.push({
          ...this.spa,
          workingDays: { ...this.spa.workingDays }
      });
      console.log('Spas >>', this.privateClinics);
    },
    saveSpa(index) {
      console.log('saved');
    },
    removeSpa(index) {
      this.spas.splice(index, 1);
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
    getHospitalGovernorates() {

    },
    getHospitalCities() {
      
    },
    getClinicGovernorates() {

    },
    getClinicCities() {
      
    },
    getLaboratoryGovernorates() {

    },
    getLaboratoryCities() {
      
    },
    getSpaGovernorates() {

    },
    getSpaCities() {
      
    }

  },
};
</script>
