<template>
    <div class="company-main-category">
        <nuxt-link :to="'/' + locale  + '/companies-categories/' + category.id + '/' + category.name">
            <div class="card">
                <div class="card-hover">
                    <div class="card-img">
                        <img :src="category.image_url" class="card-img-top" alt="...">
                    </div>
                    <div class="card-body">
                        <div class="card-head">
                            <h5 class="card-title">{{category.name}}</h5>
                            <!-- <span class="price">$20.00</span> -->
                        </div>
                        <div class="desc">
                            <p>{{category.description}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </nuxt-link>
    </div>
</template>

<script>
export default {
    props: ['category'],
    computed: {
        locale() {
            return this.$store.getters['locale/locale']
        }
    },
}
</script>