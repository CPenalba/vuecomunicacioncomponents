<template>
  <div>
    <h1 style="color: blue">Padre Deportes</h1>
    <ul v-for="sport in deportes" :key="sport">
      <HijoDeporte :nombredeporte="sport" v-on="seleccionarFavoritoParent" />
    </ul>
  </div>
</template>

<script>
import HijoDeporte from "./HijoDeporte.vue";

export default {
  name: "PadreDeportes",
  methods: {
    //creamos un metood para que sea llamado desde el hijo
    seleccionarFavoritoParent() {
      console.log("Yo soy tu padre");
    },
  },
  components: {
    HijoDeporte,
  },
  data() {
    return {
      deportes: ["Surf", "Curling", "Bolos", "Cartas", "Petanca", "Peonza"],
    };
  },
};
</script>

<style></style>
