<template>
  <div>
    <li style="color: red">
      {{ nombredeporte }}
      <button @click="seleccionarFavorito()">Seleccionar favorito</button>
    </li>
  </div>
</template>

<script>
export default {
  name: "HijoDeporte",
  props: ["nombredeporte"],
  methods: {
    seleccionarFavorito() {
      console.log("Soy el hijo");
      //debemos realizar la llamada al padre
      //dicha llamada se hace mediante string "nombreMetodoParent"
      //para enviar informacion, se realiza con comas por cada parametro que tengamos en la recepcion
      this.$emit("seleccionarFavoritoParent", this.nombredeporte);
    },
  },
  mounted() {
    console.log(this.nombredeporte);
  },
};
</script>

<style></style>
