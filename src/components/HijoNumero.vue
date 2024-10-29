<template>
  <div>
    <h2 style="color: blue">Numero hijo: {{ numerosvarios }}</h2>
    <button @click="sumarNumero()">Sumar {{ numerosvarios }}</button>
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

<style></style>
