import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase/app";
import axios from "axios";

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
var firebaseConfig = {
  apiKey: "AIzaSyDoAoOmQUareUWcmXeG8jeMVQ8atDsbF4g",
  authDomain: "tes-project-1dd02.firebaseapp.com",
  databaseURL: "https://tes-project-1dd02.firebaseio.com",
  projectId: "tes-project-1dd02",
  storageBucket: "PROJECT_ID.appspot.com",
  messagingSenderId: "820122845356",
  appId: "APP_ID",
  measurementId: "G-MEASUREMENT_ID",
};


firebase.initializeApp(firebaseConfig);

let app;

firebase.auth().onAuthStateChanged(user => {
  console.log("user", user);
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});

// app = new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount("#app");
