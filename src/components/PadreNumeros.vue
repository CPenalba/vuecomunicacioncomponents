<template>
  <div>
    <h1 style="color: red">Padre Numeros</h1>
    <h2>La suma es {{ suma }}</h2>
    <button @click="generarAleatorio()" class="button">Nuevo numero</button>
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

<style>
.button {
  cursor: pointer;
  font-size: large;
  font-family: inherit;
  font-weight: bold;
  color: #0011ff;
  background-color: #f8f8fd;
  padding: 0.8em 2.2em;
  border-radius: 50em;
  border: 6px solid #8b93f8;
  box-shadow: 0px 8px #1f35ff;
}
.button:active {
  position: relative;
  top: 8px;
  border: 6px solid #646fff;
  box-shadow: 0px 0px;
}
</style>
