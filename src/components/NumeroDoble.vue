<template>
  <div>
    <h1>Numero doble</h1>
    <button @click="redirectHome()">Go to home</button>
    <h2>{{ mensaje }}</h2>
    <h3>
      El doble de este numero: {{ this.$route.params.numero }} es {{ doble }}
    </h3>
  </div>
</template>

<script>
export default {
  name: "NumeroDoble",
  methods: {
    redirectHome() {
      this.$router.push("/");
    },
  },
  watch: {
    "$route.params.numero"(valorAntiguo, valorNuevo) {
      //solamente debemos reaizar las acciones cunaod nuestro paraetro cambie
      if (valorNuevo != valorAntiguo) {
        this.mensaje = "Esto ha cambiado: " + this.$route.params.numero;
        let valor = parseInt(this.$route.params.numero);
        this.doble = valor * 2;
      }
    },
  },
  data() {
    return {
      mensaje: "",
      doble: 0,
    };
  },
  mounted() {
    console.log("Param: " + this.$route.params.numero);
    let paramNumero = this.$route.params.numero;
    if (paramNumero == "") {
      console.log("sin parametros");
      this.mensaje = "Sin parametros en routing";
    } else {
      this.mensaje = "Parametro recibido: " + paramNumero;
      let valor = parseInt(paramNumero);
      this.doble = valor * 2;
    }
  },
};
</script>

<style></style>
