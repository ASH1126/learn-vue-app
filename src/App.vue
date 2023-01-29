<template>
  <Header />
  <div>
    <router-view/>
  </div>
  <Footer />
</template>

<script>
import Header from "./components/headerComp.vue"
import Footer from "./components/footerComp.vue"

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  }
}
</script>

<style>

</style>