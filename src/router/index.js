import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../layout/components/AppBoard.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    children: [
      {
        path: "/content",
        name: "account",
        component: () => import("../views/AccountView.vue"),
        meta: { title: "帳戶管理", icon: "el-icon-notebook-1" },
      },
      {
        path: "/content",
        name: "content",
        component: () => import("../views/ContentView.vue"),
        meta: { title: "聯絡方式", icon: "el-icon-money" },
      },
      {
        path: "/about",
        name: "about",
        component: () => import("../views/AboutView.vue"),
        meta: { title: "AA", icon: "el-icon-money" },
      },
    ],
  },
  {
    path: "/account",
    name: "account",
    component: () =>
      import(/* webpackChunkName: "AccountView" */ "../views/AccountView.vue"),
  },
  {
    path: "/content",
    name: "content",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ContentView.vue"),
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
