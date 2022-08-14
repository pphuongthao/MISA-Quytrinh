<template>
  <div id="app">
    <div class="container">
      <TheNavbar />
      <TheMainContent/>
      <!-- <TPopUp/> -->
      <!-- <TUpdateUser/> -->
      <!-- <TDeleteUser/> -->
      <!-- <AddUser/> -->
      <!-- <TCustomColumn/> -->
    </div>
  </div>
</template>
<script>
// import AddUser from './view/AddUser.vue';
import TheNavbar from "./components/layout/TheNavbar.vue";
import TheMainContent from "./components/layout/TheMainContent.vue"
// import TUpdateUser from './components/base/TUpdateUser.vue'
// import TDeleteUser from './components/base/TDeleteUser.vue'
// import TPopUp from './components/base/TPopUp.vue'
// import TCustomColumn from './components/base/TCustomColumn.vue'
export default {
  name: "App",
  components: {
    TheNavbar,
    TheMainContent
    // AddUser,
    // TUpdateUser
    // TDeleteUser
    // TPopUp
    // TCustomColumn
},
};
</script>

<style>
@import url(./css/main.css);

</style>
