import Vue from "vue";
import VueRouter from "vue-router";

// layouts
const MainLayout = () => import("@/layout/MainLayout.vue");

// pages
const ChoosePreferredPhoto = () => import("@/views/ChoosePreferredPhoto.vue");
const Photos = () => import("@/views/Photos.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: MainLayout,
    children: [
      {
        path: "/",
        name: "choose-preferred-photo",
        component: ChoosePreferredPhoto,
      },
      {
        path: "/photos/:gender",
        name: "photos",
        component: Photos,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
