<template>
    <div class="wishlist">
        <h3>{{$t("user_profile.wishlist") }}</h3>
            <div class="item" v-for="product in wishlist" :key="product.id">
                <div class="item-img">
                    <img class="img-thumbnail" :src="product.imageUrl" alt="">
                </div>
                <div class="desc">
                    <h5>{{ product.name }}</h5>
                    <!-- <p>Men BK3569</p> -->
                    <span class="remove" @click="removeProduct(product)">
                        <img src="/images/icons/svg/wishlist-remove.svg" alt="">
                    {{$t("user_profile.remove") }}
                    </span>
                </div>
                <div class="price">
                    {{currSymbol}}{{product.regularPrice}}
                </div>
                <div class="add-cart">
                    <button @click="moveToCart(product)" class="btn">{{$t("user_profile.move") }}</button>
                </div>
            </div>
    </div>
</template>

<script>
export default {
  computed: {
    wishlist() {
      return this.$store.getters["wishlist/wishlist"];
    },
    currSymbol() {
        return this.$store.getters['currency/symbol']
    }
  },
  methods: {
    removeProduct(product) {
      this.$store.dispatch("wishlist/removeFromWishlist", product);
      if (this.$store.getters["auth/isAuthenticated"])
        this.$store.dispatch("wishlist/deleteFromWishlist", product.id);
    },
    moveToCart(product) {
      console.log("product >> ", product);

      this.$store.dispatch("wishlist/removeFromWishlist", product);

      if (this.$store.getters["auth/isAuthenticated"])
        this.$store.dispatch("wishlist/deleteFromWishlist", product.id);

      let cartProduct = {
        id: product.id,
        name: product.name,
        imageUrl: product.imageUrl,
        quantity: 1,
        price: product.salePrice ? product.salePrice : product.regularPrice,
        vendorId: product.vendorId
      };

      // console.log('cart product >> ', cartProduct);
      this.$store.dispatch("cart/moveToCart", cartProduct);
    }
  }
}
</script>