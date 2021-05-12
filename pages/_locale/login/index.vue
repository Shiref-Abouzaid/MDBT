<template>
  <section class="login">
    <div class="container">
      <div class="login-page">
        <div class="row">
          <div class="col-sm-6">
            <div class="image">
              <img src="/images/login-pic.png" alt="" />
            </div>
          </div>
          <div class="col-sm-6">
            <div class="login-content">
              <h3>{{ $t("login.welcome_back") }}</h3>
              <p>{{ $t("login.login_paragraph") }}</p>

              <div class="login-form">
                <p>{{ error }}</p>
                <form @submit.prevent="onLogin">
                  <div class="form-group">
                    <label for="mobilenum">{{ $t("login.mobile_num") }}</label>
                    <input
                      @input="$v.phone.$touch()"
                      v-model="phone"
                      type="cardname"
                      class="form-control form-control-lg"
                      :class="{ invalid: $v.phone.$error }"
                      id="mobilenum"
                    />
                    <template v-if="$v.phone.$error">
                      <small class="form-text text-muted">
                        <span v-if="!$v.phone.required">{{ $t("login.field_req") }}</span>
                        <span v-if="!$v.phone.numeric"
                          >{{ $t("login.phone_numeric") }}</span
                        >
                      </small>
                    </template>
                  </div>

                  <div class="form-group">
                    <label for="password">{{ $t("login.password") }}</label>
                    <div class="input-box">
                    <input
                      v-model="password"
                      type="password"
                      class="form-control form-control-lg"
                      id="myInput"
                    />
                    <div class="icon" @click="PasswordFunction()">
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
                  </div>
                  <span class="forget-link"
                    ><nuxt-link to="forget-password">
                     {{ $t("login.forget_password") }}</nuxt-link
                    ></span>
                  <button type="submit" :disabled="isLoading">
                    <b-spinner v-if="isLoading" type="grow" label="Spinning" variant="text-white"></b-spinner>
                    <span v-if="!isLoading">{{ $t("login.logins") }}</span>
                  </button>
                </form>
                <p>{{ $t("login.don_account") }}</p>
                <span class="sign-link">

                  <nuxt-link to="signup">{{ $t("login.sign_up") }}</nuxt-link></span
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
import { required, numeric } from "vuelidate/lib/validators";

export default {
  layout: 'withoutNavbar',
  middleware: ["loggedIn"],
  data() {
    return {
      isLoading: false,
      passwordisshow: false,
      phone: "",
      password: "",
      error: null
    };
  },
  validations: {
    phone: {
      required,
      numeric
    }
  },
  computed: {
    locale() {
      return this.$store.getters["locale/locale"];
    }
  },
  methods: {
    onLogin() {
      // console.log('login');

      if(this.$v.$invalid) {
        console.log('error >> ');
        return;
      }

      const data = {
        phone: this.phone,
        password: this.password
      };

      this.isLoading = true;
      this.$store
        .dispatch("auth/login", data)
        .then(res => {
          console.log("logged in", res);
          this.isLoading = false;
          this.error = null;
          this.$router.push("/");
        })
        .catch(err => {
          console.log("error >>", err);
          this.isLoading = false;
          this.error = "incorrect username or password";
        });
    },
    PasswordFunction() {
      let x = document.getElementById("myInput");
      if (x.type === "password") {
        x.type = "text";
        this.passwordisshow = true
      } else {
        x.type = "password";
        this.passwordisshow = false
      }
    },
  },
};
</script>