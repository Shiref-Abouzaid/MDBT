<template>
  <section class="create-password">
    <div class="container">
      <div class="password-page">
        <div class="row">
          <div class="col-sm-6">
            <div class="image">
              <img src="/images/authentication.png" alt="" />
            </div>
          </div>
          <div class="col-sm-6">
            <div class="password-content">
              <h3>{{ $t("login.create_pass") }}</h3>
              <p>
                {{ $t("login.create_pass_paragraph") }}
              </p>
              <div class="password-form">
                <form>
                  <div class="form-group">
                    <label for="newpass">{{ $t("login.new_Pass") }}</label>
                    <div class="input-box">
                    <input
                      type="password"
                      class="form-control form-control-lg"
                      id="newpass"
                    />
                    <div class="icon" @click="PasswordFunction('newpass')">
                      <img
                        v-if="!passwordIsShow"
                        src="/images/icons/svg/icon-confirm-password.svg"
                        alt=""
                      />
                      <img
                        v-if="passwordIsShow"
                        src="/images/icons/svg/icon-password.svg"
                        alt=""
                      />
                    </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="confirm">{{ $t("login.confirm_pass") }}</label>
                    <div class="input-box">
                    <input
                      type="password"
                      class="form-control form-control-lg"
                      id="confirm"
                    />
                    <div class="icon" @click="PasswordFunction('confirm')">
                      <img
                        v-if="!ConfirmPasswordIsShow"
                        src="/images/icons/svg/icon-confirm-password.svg"
                        alt=""
                      />
                      <img
                        v-if="ConfirmPasswordIsShow"
                        src="/images/icons/svg/icon-password.svg"
                        alt=""
                      />
                    </div>
                    </div>
                  </div>

                  <button>{{ $t("login.confirm") }}</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  layout: "withoutNavbar",
  data() {
    return {
      passwordIsShow: false,
      ConfirmPasswordIsShow: false,
    };
  },
  methods: {
    PasswordFunction(id) {
      let x = document.getElementById(id);
      if (x.type === "password") {
        x.type = "text";
        if (id == "newpass") {
          this.passwordIsShow = true;
        }
        if (id == "confirm") {
          this.ConfirmPasswordIsShow = true;
        }
      } else {
        x.type = "password";
        if (id == "newpass") {
          this.passwordIsShow = false;
        }
        if (id == "confirm") {
          this.ConfirmPasswordIsShow = false;
        }
      }
    },
  },
};
</script>