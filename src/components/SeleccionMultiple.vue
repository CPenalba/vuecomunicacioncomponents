<template>
  <div>
    <h1>Seleccion multiple</h1>
    <multiselect
      v-model="selected"
      :options="options"
      :multiple="true"
      placeholder="Seleccione"
    ></multiselect>

    <div v-if="selected.length">
      <h3>Seleccionados:</h3>
      <h2 v-for="(item, index) in selected" :key="index">{{ item }}</h2>
    </div>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";
import "vue-multiselect/dist/vue-multiselect.min.css";

export default {
  name: "SeleccionMultiple",
  components: { Multiselect },
  data() {
    return {
      selected: [],
      options: [
        "Petanca",
        "Bolos",
        "Baile",
        "Futbol",
        "Baloncesto",
        "Badminton",
      ],
    };
  },
};
</script>
