import { createRouter } from "vue-router";
import { createWebHistory } from "vue-router";
import ComicsComponet from "./components/ComicsComponent.vue";
import PadreDeportes from "./components/PadreDeportes.vue";
import PadreNumeros from "./components/PadreNumeros.vue";
import SeleccionMultiple from "./components/SeleccionMultiple.vue";
import SeleccionMultipleNormal from "./components/SeleccionMultipleNormal.vue";
import SumaCheckbox from "./components/SumaCheckbox.vue";
import NumeroDoble from "./components/NumeroDoble.vue";

const myRoutes = [
  { path: "/", component: ComicsComponet },
  { path: "/padredepor", component: PadreDeportes },
  { path: "/padrenum", component: PadreNumeros },
  { path: "/selectmultiple", component: SeleccionMultiple },
  { path: "/selectmultiplenormal", component: SeleccionMultipleNormal },
  { path: "/sumachk", component: SumaCheckbox },
  { path: "/numdoble/:numero?", component: NumeroDoble },
];

const router = createRouter({
  history: createWebHistory(),
  routes: myRoutes,
});

export default router;
