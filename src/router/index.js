import Vue from "vue";
import VueRouter from "vue-router";

const MainLayout = () => import("@/layout/MainLayout.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: MainLayout,
    children: [],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
