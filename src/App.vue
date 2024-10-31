<template>
  <div>
    <MenuTablaMultiplicarVue />
    <router-view></router-view>
  </div>
</template>

<script>
// import Menu from "./components/Menu.vue";
import MenuTablaMultiplicarVue from "./components/MenuTablaMultiplicar.vue";

export default {
  name: "App",
  components: {
    // PadreDeportesVue,
    // PadreNumeros,
    // ComicsComponent,
    // SeleccionMultiple,
    // Menu,
    MenuTablaMultiplicarVue,
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
