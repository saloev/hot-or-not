import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";

// layouts
const MainLayout = () => import("@/layout/MainLayout.vue");

// pages
const ChoosePreferredPhoto = () => import("@/views/ChoosePreferredPhoto.vue");
const Photos = () => import("@/views/Photos.vue");
const Page404 = () => import("@/views/Error404.vue");

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
        meta: {
          action: "fetchPhotoList",
          params: {
            page: 1,
          },
        },
      },
      {
        path: "*",
        name: "404",
        component: Page404,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const actionName = to.meta && to.meta.action;
  if (!actionName) {
    next();
  } else {
    const params = to.meta.params || {};
    store.dispatch(actionName, { ...params, ...to.params }).then(() => {
      next();
    });
  }
});

export default router;
