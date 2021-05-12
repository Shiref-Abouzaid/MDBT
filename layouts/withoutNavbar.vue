<template>
  <div>
      <app-header></app-header>

      <div style="min-height: 80vh; background-color: #F9F9F9">
        <Nuxt />
      </div>

      <app-footer></app-footer>
  </div>
</template>
<script>
import Header from '~/components/Navigation/Header'
import Footer from '~/components/Navigation/Footer'

export default {
  middleware: ["loadCart"],
  head() {
    return {
      link: [
        {
          rel: "stylesheet",
          // href: `/styles/main-${this.dir}.css`
          // href: `@assets/styles/styles-${this.dir}/main.css`,
          // href: `/styles/styles-${this.dir}/main.css`
        }
      ]
    };
  },
  components: {
    appHeader: Header,
    appFooter: Footer
  },
  computed: {
    dir() {
      if (this.$store.getters["locale/rtl"]) return "rtl";
      else return "ltr";
    }
  }
}
</script>
<style lang="scss">
  // @import '~/assets/styles/styles-ltr/main.scss';
</style>
