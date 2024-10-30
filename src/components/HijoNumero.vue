<template>
  <div>
    <h2 style="color: blue">Numero hijo: {{ numerosvarios }}</h2>
    <button @click="sumarNumero()" class="button">
      Sumar {{ numerosvarios }}
    </button>
  </div>
</template>

<script>
export default {
  name: "HijoNumero",
  props: ["numerosvarios"],
  methods: {
    sumarNumero() {
      this.$emit("sumarNumeroParent", this.numerosvarios);
    },
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
