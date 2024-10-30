<template>
  <div>
    <!-- <PadreDeportesVue /> -->
    <!-- <PadreNumeros /> -->
    <ComicsComponent />
  </div>
</template>

<script>
import ComicsComponent from "./components/ComicsComponent.vue";
// import PadreNumeros from "./components/PadreNumeros.vue";
// import PadreDeportesVue from "./components/PadreDeportes.vue";

export default {
  name: "App",
  components: {
    // PadreDeportesVue,
    // PadreNumeros,
    ComicsComponent,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
