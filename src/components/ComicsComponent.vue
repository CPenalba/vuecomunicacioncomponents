<template>
  <div class="container">
    <h1 style="color: red">Comics</h1>
    <div class="form_area">
      <form v-on:submit.prevent="createComic()">
        <div class="form_group">
          <label class="sub_title">Titulo</label>
          <input class="form_style" type="text" v-model="comicForm.titulo" />
        </div>
        <div class="form_group">
          <label class="sub_title">Descripcion</label>
          <input
            class="form_style"
            type="text"
            v-model="comicForm.descripcion"
          />
        </div>
        <div class="form_group">
          <label class="sub_title">Imagen</label>
          <input class="form_style" type="text" v-model="comicForm.imagen" />
        </div>
        <div class="form_group">
          <label class="sub_title">Año</label>
          <input class="form_style" type="number" v-model="comicForm.year" />
        </div>
        <div>
          <button class="btn">Crear comic</button>
        </div>
      </form>
    </div>
  </div>
  <div v-if="comicFavorito" class="verde">
    <h2 style="color: blue">{{ comicFavorito.titulo }}</h2>
    <h2 style="color: yellow">{{ comicFavorito.descripcion }}</h2>
  </div>
  <div id="comics" v-for="(comic, index) in comics" :key="comic">
    <ComicComponent
      :comic="comic"
      :index="index"
      v-on:seleccionarFavorito="seleccionarFavorito"
      v-on:deleteComic="deleteComic"
    />
  </div>
</template>

<script>
import ComicComponent from "./ComicComponent.vue";

export default {
  name: "ComicsComponent",
  components: {
    ComicComponent,
  },
  methods: {
    createComic() {
      this.comics.push(this.comicForm);
    },
    seleccionarFavorito(comic) {
      console.log(comic.titulo);
      this.comicFavorito = comic;
    },
    deleteComic(index) {
      this.comics.splice(index, 1);
    },
  },
  data() {
    return {
      comicFavorito: null,
      comicForm: {
        titulo: "",
        imagen: "",
        descripcion: "",
        year: 0,
      },
      comics: [
        {
          titulo: "Spiderman",
          imagen:
            "https://3.bp.blogspot.com/-i70Zu_LAHwI/T290xxduu-I/AAAAAAAALq8/8bXDrdvW50o/s1600/spiderman1.jpg",
          descripcion: "Hombre araña",
          year: 1997,
        },
        {
          titulo: "Wolverine",
          imagen:
            "https://images-na.ssl-images-amazon.com/images/I/51c1Q1IdUBL._SX259_BO1,204,203,200_.jpg",
          descripcion: "Lobezno",
          year: 2003,
        },
        {
          titulo: "Guardianes de la Galaxia",
          imagen: "https://i.ebayimg.com/images/g/w~8AAOSw4-teEHj3/s-l1200.jpg",
          descripcion: "Yo soy Groot",
          year: 2006,
        },
        {
          titulo: "Avengers",
          imagen:
            "https://d26lpennugtm8s.cloudfront.net/stores/057/977/products/ma_avengers_01_01-891178138c020318f315132687055371-640-0.jpg",
          descripcion: "Los Vengadores",
          year: 1993,
        },
        {
          titulo: "Spawn",
          imagen:
            "https://i.pinimg.com/originals/e1/d8/ff/e1d8ff4aeab5e567798635008fe98ee1.png",
          descripcion: "Al Simmons",
          year: 2000,
        },
        {
          titulo: "Batman",
          imagen:
            "https://www.comicverso.com/wp-content/uploads/2020/06/The-Killing-Joke-657x1024.jpg",
          descripcion: "Murcielago",
          year: 2001,
        },
      ],
    };
  },
};
</script>

<style>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}

.form_area {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #eddcd9;
  height: auto;
  width: auto;
  border: 2px solid #264143;
  border-radius: 20px;
  box-shadow: 3px 4px 0px 1px #e99f4c;
}
.sub_title {
  font-weight: 600;
  margin: 5px 0;
}

.form_group {
  display: flex;
  flex-direction: column;
  align-items: baseline;
  margin: 10px;
}

.form_style {
  outline: none;
  border: 2px solid #264143;
  box-shadow: 3px 4px 0px 1px #e99f4c;
  width: 290px;
  padding: 12px 10px;
  border-radius: 4px;
  font-size: 15px;
}

.form_style:focus,
.btn:focus {
  transform: translateY(4px);
  box-shadow: 1px 2px 0px 0px #e99f4c;
}

.btn {
  padding: 15px;
  margin: 25px 0px;
  width: 290px;
  font-size: 15px;
  background: #de5499;
  border-radius: 10px;
  font-weight: 800;
  box-shadow: 3px 3px 0px 0px #e99f4c;
}

.btn:hover {
  opacity: 0.9;
}
</style>
