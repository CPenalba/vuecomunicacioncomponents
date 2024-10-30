<template>
  <div class="container">
    <ul id="menu">
      <li>
        <router-link to="/"> Comics </router-link>
      </li>
      <li>
        <router-link to="/padredepor">Padre deportes</router-link>
      </li>
      <li>
        <router-link to="/padrenum">Padre numeros</router-link>
      </li>
      <li>
        <router-link to="/selectmultiple">Select multiple</router-link>
      </li>
      <li>
        <router-link to="/selectmultiplenormal"
          >Select multiple normal</router-link
        >
      </li>
      <li>
        <router-link to="/sumachk">Suma checkbox</router-link>
      </li>
      <li>
        <router-link to="/numdoble">Numero doble SIN</router-link>
      </li>
      <li>
        <router-link to="/numdoble/7">Numero doble CON</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MenuComponent",
};
</script>

<style scoped>
ul#menu li {
  display: inline;
}
li {
  margin: 10px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 20px;
}
li a {
  color: white;
  text-decoration-style: wavy;
}
.container {
  width: 100%;
  height: 100%;
  --s: 200px; /* control the size */
  --c1: #1d1d1d;
  --c2: #4e4f51;
  --c3: #3c3c3c;
  border-radius: 50px;

  background: repeating-conic-gradient(
        from 30deg,
        #0000 0 120deg,
        var(--c3) 0 180deg
      )
      calc(0.5 * var(--s)) calc(0.5 * var(--s) * 0.577),
    repeating-conic-gradient(
      from 30deg,
      var(--c1) 0 60deg,
      var(--c2) 0 120deg,
      var(--c3) 0 180deg
    );
  background-size: var(--s) calc(var(--s) * 0.577);
}
</style>
