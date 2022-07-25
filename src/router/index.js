import {createRouter,createWebHistory} from "vue-router";
import HelloWorldVue from "../components/HelloWorld.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HelloWorldVue
  },
  {
    path: "/:w+",
    name: "*",
    redirect: "/"
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes
});
export default router;