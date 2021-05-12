<template>
  <section class="forget-password">
    <div class="container">
      <div class="forget-page">
        <div class="row">
          <div class="col-md-6 col-12">
            <div class="image">
              <img src="/images/forget-password.png" alt="" />
            </div>
          </div>
          <div class="col-md-6 col-12">
            <div class="forget-content">
              <h3>{{ $t("login.forget_password") }}</h3>
              <p>{{ $t("login.forget_paragraph") }}</p>
              <div class="forget-form">
                <form @submit.prevent="onVerify">
                  <div class="form-group">
                    <label for="mobilenum">{{ $t("login.mobile_num") }}</label>
                    <input
                      @input="$v.phone.$touch()"
                      v-model="phone"
                      :class="{ invalid: $v.phone.$error }"
                      type="text"
                      class="form-control form-control-lg"
                      id="mobilenum"
                    />
                    <template v-if="$v.phone.$error">
                        <small class="form-text text-muted">
                        <span v-if="!$v.phone.required">This field is required</span>
                        <span v-if="!$v.phone.numeric">Phone number should be numeric</span>
                        <span v-if="!$v.phone.unique">Phone not found</span>
                        <!-- <span v-if="!$v.phone.exact">Phone must be 11 digits</span> -->
                        </small>
                    </template>
                  </div>
                  <button :disabled="$v.$invalid">{{ $t("login.verify") }}</button>
                </form>
                <p>{{ $t("login.don_account") }}</p>
                <span class="sign-link"
                  ><nuxt-link to="signup">{{
                    $t("login.sign_up")
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
import axios from 'axios'
import {required, numeric} from "vuelidate/lib/validators";

export default {
  layout: "withoutNavbar",
  data() {
    return {
      phone: '',
    }
  },
  validations: {
    phone: {
        required,
        numeric,
        unique: (val) => {
            if (val === "")
            return true;
            return axios.get("/users/check-phone/" + val).then((res) => {
            console.log(res);
            // return Object.keys(res.data).length === 0
            return res.data;
            });
        },
    },
  },
  methods: {
    async onVerify() {
      console.log('verified');
      try {
        let sendCode = await axios.post('/my/users/forgot-password/send', {
          phone: this.phone
        });

        console.log('code sent >', sendCode)

        this.$router.push('/' + this.$store.getters['locale/locale'] + '/verify/' + sendCode.data.data.user_id);

      } catch (error) {
        console.log('error > ', error);
      }
      
    }
  }

};
</script>