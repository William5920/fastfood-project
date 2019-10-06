<template>
  <div>
    <router-view />
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'
  import { mapActions } from 'vuex'


  export default {
    mounted() {
        // this.$store.dispatch('getAddress')
        this.getAddress()
        this.getUserinfo()
    },
    methods: {
      ...mapActions(['getAddress', 'getUserinfo'])
    },
    components: {
      FooterGuide
    },

  }
</script>

<style lang="scss">

</style>
