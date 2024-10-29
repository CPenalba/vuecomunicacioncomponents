<template>
  <div>
    <li style="color: red">{{ nombredeporte }}</li>
  </div>
</template>

<script>
export default {
  name: "HijoDeporte",
  props: ["nombredeporte"],
  mounted() {
    console.log(this.nombredeporte);
  },
};
</script>

<style></style>
