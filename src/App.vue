<template>
  <Header />
  <div>
    <router-view v-slot="{ Component }" :key="componentKey" @success="success" @error="error" @warning="warning"
      @forceUpdate="forceUpdate">
      <keep-alive include="BooksComposition">
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
  <Footer />
</template>

<script>
import Header from "./components/headerComp.vue";
import Footer from "./components/footerComp.vue";
import { store } from "./components/store.js";
import notie from "notie";
// import Security from './components/security.js';

const getCookie = (name) => {
  return document.cookie.split("; ").reduce((r, v) => {
    const parts = v.split("=");
    return parts[0] === name ? decodeURIComponent(parts[1]) : r;
  }, "");
}

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      store,
      componentKey: 0,
    };
  },
  beforeMount() {
    // check for a cookie
    let data = getCookie("_site_data");

    if (data !== "") {
      let cookieData = JSON.parse(data);

      // update store
      store.token = cookieData.token.token;
      store.user = {
        id: cookieData.user.id,
        first_name: cookieData.user.first_name,
        last_name: cookieData.user.last_name,
        email: cookieData.user.email,
      }
    }
  },
  // mounted() {
  // const payload = {
  //   foo: "bar",
  // }

  // const headers = new Headers();
  // headers.append("Content-Type", "application/json");
  // headers.append("Authorization", "Bearer " + store.token);

  // const requestOptions = {
  //   method: "POST",
  //   body: JSON.stringify(payload),
  //   // headers: headers,
  // }

  // fetch(process.env.VUE_APP_API_URL + "/admin/foo", Security.requestOptions(payload))
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log(data);
  //   })
  // },
  methods: {
    success(msg) {
      notie.alert({
        type: 'success',
        text: msg,
      })
    },
    error(msg) {
      notie.alert({
        type: 'error',
        text: msg,
      })
    },
    warning(msg) {
      notie.alert({
        type: 'warning',
        text: msg,
      })
    },
    forceUpdate() {
      this.componentKey += 1;
    },
  }
};
</script>

<style>

</style>
