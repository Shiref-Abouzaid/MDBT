<template>
    <div class="company">
        <nuxt-link :to="'/' + locale + '/company/' + comp.id + '/' + comp.title">
            <div class="card">
                <div class="card-hover">
                    <div class="card-img">
                        <img :src="comp.image_url" class="card-img-top" alt="...">
                    </div>
                    <div class="card-body">
                        <div class="card-head">
                            <h5 class="card-title">{{comp.title}}</h5>
                            <!-- <span class="price">$20.00</span> -->
                            <div class="rate-box">
                                <span>{{comp.total_rates}}</span>
                                <img src="/images/icons/svg/vendor-star.svg" alt="">
                            </div>
                        </div>
                        <div class="contacts">
                            <div class="row no-gutters" v-if="comp.phone">
                                <div class="col-1">
                                    <div class="icon">
                                        <img src="/images/icons/svg/phone.svg" alt="">
                                    </div>
                                </div>
                                <div class="col-1"></div>
                                <div class="col-10"><p>{{comp.phone}}</p></div>
                            </div>
                            <div class="row no-gutters" v-if="comp.email">
                                <div class="col-1">
                                    <div class="icon">
                                        <img class="mail" src="/images/icons/svg/mail.svg" alt="">
                                    </div>
                                </div>
                                <div class="col-1"></div>
                                <div class="col-10"><p>{{comp.email}}</p></div>
                            </div>
                            <div class="row no-gutters" v-if="comp.address">
                                <div class="col-1">
                                    <div class="icon">
                                        <img src="/images/icons/svg/location.svg" alt="">
                                    </div>
                                </div>
                                <div class="col-1"></div>
                                <div class="col-10"><p>{{comp.address}}</p></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </nuxt-link>
    </div>
</template>

<script>
export default {
    props: ['comp'],
    computed: {
        locale() {
            return this.$store.getters['locale/locale']
        }
    }
}
</script>