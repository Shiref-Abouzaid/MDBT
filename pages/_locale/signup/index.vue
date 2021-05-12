<template>
  <section class="sign-up">
    <div class="container">
      <div class="sign-page">
        <div class="row">
          <div class="col-md-6">
            <div class="left-side">
              <div class="images">
                <img src="/images/sign.png" alt="" />
              </div>
              <!-- <p>{{ $t("login.or") }}</p> -->

              <!-- <ul>
                <li>
                  <a href="" class="facebook-link">
                    <div class="box">
                      <img src="/images/icons/svg/icon-facebook.svg" alt="" />
                    </div>
                    <span>{{ $t("login.facebook") }}</span>
                  </a>
                </li>
                <li>
                  <a href="" class="google-link">
                    <div class="box">
                      <img src="/images/icons/svg/icon-google.svg" alt="" />
                    </div>
                    <span> {{ $t("login.google") }}</span>
                  </a>
                </li>
              </ul> -->
            </div>
            <p>{{ $t("login.or") }}</p>

            <ul>
              <li>
                <a href="" class="facebook-link">
                  <div class="box">
                    <img src="/images/icons/svg/icon-facebook.svg" alt="" />
                  </div>
                  <span>{{ $t("login.facebook") }}</span>
                </a>
              </li>
              <li>
                <a href="" class="google-link">
                  <div class="box">
                    <img src="/images/icons/svg/icon-google.svg" alt="" />
                  </div>
                  <span> {{ $t("login.google") }}</span>
                </a>
              </li>
            </ul>
            <p class="left-par">{{ $t("login.have_account") }}</p>
            <span class="sign-link"
              ><nuxt-link to="login">{{ $t("login.sign_in") }}</nuxt-link></span
            >
          </div>
          <div class="col-md-6">
            <div class="sign-content">
              <h3>{{ $t("login.welcome") }}</h3>
              <p>{{ $t("login.sign_paragraph") }}</p>

              <div class="sign-form">
                <form @submit.prevent="onSubmit">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="firstname">{{
                          $t("login.first_name")
                        }}</label>

                        <input
                          @input="$v.firstName.$touch()"
                          v-model="firstName"
                          type="text"
                          class="form-control form-control-lg"
                          :class="{ invalid: $v.firstName.$error }"
                          id="firstname"
                        />

                        <template v-if="$v.firstName.$error">
                          <small
                            v-if="!$v.firstName.required"
                            class="form-text text-muted"
                          >
                            <span>{{ $t("login.field_req") }}</span>
                          </small>
                        </template>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="lastname">{{
                          $t("login.last_name")
                        }}</label>
                        <input
                          @input="$v.lastName.$touch()"
                          v-model="lastName"
                          type="text"
                          class="form-control form-control-lg"
                          :class="{ invalid: $v.lastName.$error }"
                          id="lastname"
                        />
                        <template v-if="$v.lastName.$error">
                          <small
                            v-if="!$v.lastName.required"
                            class="form-text text-muted"
                          >
                            <span>{{ $t("login.field_req") }}</span>
                          </small>
                        </template>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="mobilenum">{{ $t("login.mobile_num") }}</label>
                    <input
                      @input="$v.phone.$touch()"
                      v-model="phone"
                      type="text"
                      class="form-control form-control-lg"
                      :class="{ invalid: $v.phone.$error }"
                      id="mobilenum"
                    />
                    <template v-if="$v.phone.$error">
                      <small class="form-text text-muted">
                        <span v-if="!$v.phone.required">{{
                          $t("login.field_req")
                        }}</span>
                        <span v-if="!$v.phone.numeric">{{
                          $t("login.phone_numeric")
                        }}</span>
                        <span v-if="!$v.phone.unique">{{
                          $t("login.phone_reg")
                        }}</span>
                        <!-- <span v-if="!$v.phone.exact">Phone must be 11 digits</span> -->
                      </small>
                    </template>
                  </div>
                  <div class="form-group">
                    <label for="createpass">{{
                      $t("login.create_password")
                    }}</label>
                    <div class="input-box">
                      <input
                        @input="$v.password.$touch()"
                        v-model="password"
                        type="password"
                        class="form-control form-control-lg"
                        :class="{ invalid: $v.password.$error }"
                        id="myInput"
                      />
                      <div class="icon" @click="PasswordFunction('myInput')">
                        <img
                          v-if="!passwordisshow"
                          src="/images/icons/svg/icon-confirm-password.svg"
                          alt=""
                        />
                        <img
                          v-if="passwordisshow"
                          src="/images/icons/svg/icon-password.svg"
                          alt=""
                        />
                      </div>
                    </div>
                    <template v-if="$v.password.$error">
                      <small class="form-text text-muted">
                        <span v-if="!$v.password.required">{{
                          $t("login.field_req")
                        }}</span>
                        <span v-if="!$v.password.minLen"
                          >{{ $t("login.least") }}
                          {{ $v.password.$params.minLen.min }}
                          {{ $t("login.char") }}</span
                        >
                      </small>
                    </template>
                  </div>
                  <div class="form-group">
                    <label for="confirmpass">{{
                      $t("login.confirm_passwprd")
                    }}</label>
                    <div class="input-box">
                      <input
                        @input="$v.confirmPassword.$touch()"
                        v-model="confirmPassword"
                        type="password"
                        class="form-control form-control-lg"
                        :class="{ invalid: $v.confirmPassword.$error }"
                        id="myconfirmInput"
                      />
                      <div
                        class="icon"
                        @click="PasswordFunction('myconfirmInput')"
                      >
                        <img
                          v-if="!confirmPasswordIsShow"
                          src="/images/icons/svg/icon-confirm-password.svg"
                          alt=""
                        />
                        <img
                          v-if="confirmPasswordIsShow"
                          src="/images/icons/svg/icon-password.svg"
                          alt=""
                        />
                      </div>
                    </div>
                    <template v-if="$v.confirmPassword.$error">
                      <small class="form-text text-muted">
                        <span v-if="!$v.confirmPassword.sameAs">
                          {{ $t("login.same") }}</span
                        >
                      </small>
                    </template>
                  </div>
                  <button :disabled="isLoading">
                    <b-spinner
                      v-if="isLoading"
                      type="grow"
                      label="Spinning"
                      variant="text-white"
                    ></b-spinner>
                    <span v-if="!isLoading">{{ $t("login.sign_up") }}</span>
                  </button>
                </form>
                <p>{{ $t("login.have_account") }}</p>
                <span class="sign-link"
                  ><nuxt-link to="login">{{
                    $t("login.sign_in")
                  }}</nuxt-link></span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import axios from "axios";
import { required, numeric, minLength, sameAs } from "vuelidate/lib/validators";

export default {
  layout: "withoutNavbar",
  middleware: ["loggedIn"],
  data() {
    return {
      isLoading: false,
      firstName: "",
      lastName: "",
      phone: "",
      password: "",
      confirmPassword: "",
      passwordisshow: false,
      confirmPasswordIsShow: false,
      // confirmpasswordisshow: false,
    };
  },
  validations: {
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
        if (val === "") return true;
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
  },
  methods: {
    onSubmit() {
      console.log("submitted");

      if (this.$v.$invalid) {
        console.log("error >> ");
        return;
      }

      const data = {
        first_name: this.firstName,
        last_name: this.lastName,
        phone: this.phone,
        password: this.password,
        type: "user",
        chanel: "web",
      };

      this.isLoading = true;
      this.$store
        .dispatch("auth/signup", data)
        .then(() => {
          this.isLoading = false;
          this.$router.push("verify");
        })
        .catch((err) => {
          console.log(err);
          this.isLoading = false;
        });
    },
    PasswordFunction(id) {
      let x = document.getElementById(id);
      if (x.type === "password") {
        x.type = "text";
        if (id == "myInput") {
          this.passwordisshow = true;
        }
        if (id == "myconfirmInput") {
          this.confirmPasswordIsShow = true;
        }
      } else {
        x.type = "password";
        if (id == "myInput") {
          this.passwordisshow = false;
        }
        if (id == "myconfirmInput") {
          this.confirmPasswordIsShow = false;
        }
      }
    },
  },
};
</script>