<template>
    <div class="store-vendor">
        <nuxt-link :to="'/' + locale + '/services/store/vendor/' + vendor.vendor_id">
            <img :src="vendor.image_url" alt="">
            <h4>{{ vendor.commercial_name }}</h4>
            <p>{{ vendor.productsCount }} Product</p>
            <div class="rate-box">
                <span>{{ vendor.total_rates }}</span>
                <img src="/images/icons/svg/vendor-star.svg" alt="">
            </div>
        </nuxt-link>
    </div>
</template>

<script>
export default {
    props: ["vendor"],
    computed: {
        locale() {
            return this.$store.getters['locale/locale']
        }
    }
}
</script>