<template>
  <section class="my-cart">
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="cart">
            <h3>{{ $t("cart.cart_header") }}</h3>
            <div class="cart-item">
              <div class="row no-gutters">
                <div class="col-md-8">
                  <span>{{ $t("cart.item") }}</span>
                </div>

                <div class="col-3"><span style="margin-right: 3rem;">{{ $t("cart.quantity") }}</span></div>
                <div class="col-1">
                  <span>{{ $t("cart.price") }}</span>
                </div>
              </div>
            </div>
            <div class="cart-content" v-for="product in cartProducts" :key="product.id">
              <div class="row counter no-gutters">
                <div class="col-sm-8">
                  <div class="content">
                    <div class="content-img">
                      <nuxt-link :to="'/' + locale + '/services/store/product/' + product.id + '/' + product.name">
                        <img :src="product.imageUrl" alt="" />
                      </nuxt-link>
                    </div>
                    <div class="details">
                      <p class="bold">
                        <nuxt-link :to="'/' + locale + '/services/store/product/' + product.id + '/' + product.name">
                          {{product.name}}
                        </nuxt-link>
                      </p>
                      <!-- <p>Men BK3569</p> -->

                      <div class="remove" @click="deleteProduct(product)">
                        <img
                          src="/images/icons/svg/icons-close-small-red.svg"
                          alt=""
                        />
                      <span>{{ $t("cart.remove") }}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-3">
                  <div class="control">
                    <span @click="removeFromCart(product)">
                      <img
                        src="/images/icons/svg/icons-minus-black.svg"
                        alt=""
                      />
                    </span>
                    <span>{{product.quantity}}</span>
                    <span @click="addToCart(product)">
                      <img src="/images/icons/svg/plus-black.svg" alt="" />
                    </span>
                  </div>
                </div>
                <div class="col-1">
                  <span class="price">{{currSymbol}}{{product.price}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="summery">
            <h3>{{ $t("cart.summary") }}</h3>
            <ul>
              <li>
                <div class="summery-details">
                  <span class="text">{{ $t("cart.sub_total") }}</span>
                  <span class="num">{{currSymbol}}{{totalPrice}}</span>
              </div>
              </li>
              <li>
                <div class="summery-details">
                  <span class="text">{{ $t("cart.shipping") }}</span>
                  <span class="num">{{currSymbol}}00.00</span>
                </div>
              </li>
              <li>
                <div class="summery-details">
                  <span class="text">{{ $t("cart.discount") }}</span>
                  <span class="num">{{currSymbol}}00.00</span>
                </div>
              </li>
              <li>
               <div class="summery-details">
                  <span class="text">{{ $t("cart.taxes") }}</span>
                  <span class="num">{{currSymbol}}00.00</span>
               </div>
              </li>
              <li>
                <div class="summery-details end">
                  <span class="text">{{ $t("cart.total") }}</span>
                  <span class="number">${{totalPrice}}</span>
                </div>
              </li>
            </ul>
            <!-- <div class="btn-ckeckout"> -->
              <nuxt-link to="checkout" class="btn-ckeckout">{{ $t("cart.checkout_btn") }}</nuxt-link>  
            <!-- </div>   -->
        
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {

    }
  },
  computed: {
    totalPrice() {
      return this.$store.getters["cart/totalPrice"];
    },
    cartProducts() {
      return this.$store.getters["cart/cartProducts"];
    },
    currRate() {
      return this.$store.getters["currency/currencyRate"];
    },
    currSymbol() {
      return this.$store.getters["currency/symbol"];
    },
    locale() {
      return this.$store.getters['locale/locale']
    }
  },
  methods: {
    deleteProduct(product) {
      console.log("delete");
      this.$store.dispatch("cart/removeCartProduct", product);
      if (this.$store.getters["auth/isAuthenticated"])
        this.$store.dispatch("cart/deleteCartProduct", product.id);
    },
    addToCart(cartProduct) {
      console.log("cart product >> ", cartProduct);
      cartProduct.quantity++;
      console.log("cart product >> ", cartProduct);
      this.$store.dispatch("cart/addOrUpdateCartProduct", cartProduct);

      if (this.$store.getters["auth/isAuthenticated"])
        this.$store.dispatch("cart/updateCartProduct", cartProduct);
    },
    removeFromCart(cartProduct) {
      if (cartProduct.quantity == 1) return;
      cartProduct.quantity--;

      this.$store.dispatch("cart/addOrUpdateCartProduct", cartProduct);

      if (this.$store.getters["auth/isAuthenticated"])
        this.$store.dispatch("cart/updateCartProduct", cartProduct);
    }
  }
}
</script>