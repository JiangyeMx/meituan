import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "defaultPage",
    redirect: "/index",
    component: () => import("@/layouts/defaultPage.vue"),
    children: [
      {
        path: "/index",
        name: "index",
        component: () => import("@/views/main.vue"),
      },
      {
        path: "/city",
        name: "city",
        component: () => import("@/views/city.vue"),
      },
    ],
  },
  {
    path: "/blank",
    name: "blankPage",
    component: () => import("@/layouts/blankPage.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
