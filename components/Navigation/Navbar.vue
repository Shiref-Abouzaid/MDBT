<template>
    <div class="nav-header">
        <ul class="nav justify-content-center">
            <li class="nav-item">
                <nuxt-link class="nav-link active" :to="'/' + locale + '/services/'">{{ $t("menu.services") }}</nuxt-link>
            </li>
            <li class="nav-item">
                <nuxt-link class="nav-link" :to="'/' + locale + '/companies-categories/'">{{ $t("menu.index") }}</nuxt-link>
            </li>
            <li class="nav-item">
                <nuxt-link class="nav-link" :to="'/' + locale + '/VIP/'">{{ $t("menu.vip") }}</nuxt-link>
            </li>
            <li class="nav-item">
                <nuxt-link class="nav-link" :to="'/' + locale + '/buy-sell/main/'">{{ $t("menu.buy_sell") }}</nuxt-link>
            </li>
            <li class="nav-item">
                <nuxt-link class="nav-link" :to="'/' + locale + '/social/'">{{ $t("menu.chat") }}</nuxt-link>
            </li>
            <li class="nav-item">
                <nuxt-link class="nav-link" :to="'/' + locale + '/news/'">{{ $t("menu.new") }}</nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selected: 1
        }
    },
    computed: {
        locale() {
            return this.$store.getters['locale/locale']
        }
    }
}
</script>