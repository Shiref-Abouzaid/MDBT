<template>
    <div class="user-card">
        <div class="user" v-if="user">
            <div class="info">
                <nuxt-link :to="'/' + locale + '/user-profile/' + user.id + '/' + user.username">
                    <img :src="user.image_url ? user.image_url : '/images/placeholder.jpg'" alt="">
                    <h6>{{user.first_name}} {{user.last_name}}</h6>
                </nuxt-link>
            </div>
            <!-- <button class="btn add" v-if="false">
                <img src="/images/icons/svg/social-friend-request.svg" alt="">
                <span>Add Friend</span>
            </button>
            <button class="btn sent">
                <img src="/images/icons/svg/social-friend-request-sent.svg" alt="">
                <span>Friend Request Sent</span>
            </button> -->
        </div>
    </div>
</template>

<script>
export default {
    props: ['user'],
    computed: {
        locale() {
            return this.$store.getters['locale/locale']
        }
    }
}
</script>