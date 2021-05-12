<template>
    <div class="user-reservations">
        <div class="head">
            <div class="row">
                <div class="col-3">
                    <span>{{$t("user_profile.name") }}</span>
                </div>
                <div class="col-2">
                    <span>{{$t("user_profile.date") }}</span>
                </div>
                <div class="col-2">
                    <span>{{$t("user_profile.cost") }}</span>
                </div>
                <div class="col-3">
                    <span>{{$t("user_profile.type") }}</span>
                </div>
                <div class="col-2">

                </div>
            </div>
        </div>
        <div class="reservation" v-for="reserve in 4" :key="reserve">
            <div class="row">
                <div class="col-md-3 col-2">
                    <div class="user">
                        <img src="/images/person.jpeg" alt="">
                        <span>Tom Hanks</span>
                    </div>
                </div>
                <div class="col-md-2 col-3">
                    <div class="date">
                        <p>Apr 4, 2020</p>
                        <span>23:00 PM</span>
                    </div>
                </div>
                <div class="col-md-2 col-2">
                    <div class="cost">
                        <span>{{currSymbol}}54,00</span>
                    </div>
                </div>
                <div class="col-md-3 col-3">
                    <div class="type">
                        <p>Doctor</p>
                        <span>Dentist</span>
                    </div>
                </div>
                <div class="col-md-2 col-2">
                    <div class="remove">
                        <img src="/images/icons/svg/reservation-remove.svg" alt="">
                        <span>{{$t("user_profile.cancel_link") }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        currSymbol() {
            return this.$store.getters['currency/symbol']
        }
    }
}
</script>