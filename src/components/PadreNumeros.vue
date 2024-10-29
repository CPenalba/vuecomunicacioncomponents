<template>
  <div>
    <h1 style="color: red">Padre Numeros</h1>
    <h2>La suma es {{ suma }}</h2>
    <button @click="generarAleatorio()">Nuevo numero</button>
    <h2 v-for="num in numeros" :key="num">
      <HijoNumero
        :numerosvarios="num"
        v-on:sumarNumeroParent="sumarNumeroParent"
      />
    </h2>
  </div>
</template>

<script>
import HijoNumero from "./HijoNumero.vue";

export default {
  name: "PadreNumeros",
  components: {
    HijoNumero,
  },
  methods: {
    generarAleatorio() {
      let aleatorio = parseInt(Math.random() * 200) + 1;
      this.numeros.push(aleatorio);
    },
    sumarNumeroParent(valor) {
      this.suma = this.suma + valor;
    },
  },
  data() {
    return {
      numeros: [4, 8, 7, 11, 2, 96],
      suma: 0,
    };
  },
};
</script>

<style></style>
