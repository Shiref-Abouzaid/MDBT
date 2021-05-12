<template>
  <section class="mobile-verfiy">
    <div class="container">
      <div class="verfiy-page">
        <div class="row">
          <div class="col-sm-6">
            <div class="image">
              <img src="/images/authentication.png" alt="" />
            </div>
          </div>
          <div class="col-sm-6">
            <h3>{{ $t("login.mobile_verification") }}</h3>
            <p>
              {{ $t("login.mobile_verification_paragraph") }}
            </p>
            <form @submit.prevent="onSubmit">
              <div class="boxes">
                <div v-for="(todo, index) in todos" :key="todo.id" class="box">
                  <input
                    :class="{ invalid: $v.todos.$each[index].value.$error }"
                    type="text"
                    v-model="todo.value"
                    ref="todos"
                    maxlength="1"
                    @input="moveToNextField($event.target.value, index);$v.todos.$each[index].value.$touch()"
                  />
                </div>
              </div>

              <button :disabled="$v.$invalid">{{ $t("login.verify") }}</button>
            </form>
            <p class="resend">Can you resend verification code after 00:{{resendTime}}</p>
            <p class="recive">{{ $t("login.recive_paragraph") }}</p>
            <span class="sign-link" :class="{active: resend}">{{ $t("login.resend") }}</span>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { required, numeric } from "vuelidate/lib/validators";
import axios from "axios";

export default {
  data() {
    return {
      todos: [{value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''}],
      resendTime: 60,
      resend: false
    };
  },
  validations: {
    todos: {
      $each: {
        value: {
          required,
          numeric
        }
      }
    }
  },
  mounted() {
    let time = setInterval(() => {
      this.resendTime--;
      if(this.resendTime <= 0){
        clearInterval(time);
        this.resend = true
      }

    }, 1000);
  },
  methods: {
    moveToNextField(value, index) {
      const nextIndex = index + 1;
      if (nextIndex < this.todos.length && value.length >= 1) {
        this.$refs.todos[nextIndex].focus();
      }
    },
    onSubmit() {

      if(this.$v.$invalid)
        return

      // console.log("user type >> ", this.userType, "userId >> ", this.userId);
      let otp = this.todos[0].value + this.todos[1].value + this.todos[2].value + this.todos[3].value + this.todos[4].value + this.todos[5].value;
      console.log('otp > ', otp);

      axios.get("/my/users/forgot-password/check-otp/" + otp + "/user/" + this.$route.params.userId)
        .then(res => {
          console.log(res);

          // if (res.data) {
          //   this.$store.commit("auth/verify", true);
          //   console.log(
          //     "verified in verify >> ",
          //     this.$store.getters["auth/verified"]
          //   );
          //   if (this.userType == "vendor") {
          //     window.open("http://vendor.dashboard.tbdm.net/");
          //     this.$router.push("/");
          //   } else if(this.userType == "developer") {
          //     window.open("http://developer.dashboard.tbdm.net/");
          //   } else {
          //     this.$router.push("/");
          //   }
          // } else {
            
          // }

        })
        .catch(err => {
          console.log(err);
        });
    },
    resendCode() {
      if(this.resend) {

      }
    }
  },
};
</script>