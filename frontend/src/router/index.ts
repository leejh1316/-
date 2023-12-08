import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
const URL = "/proxy/3000/absproxy/3000";
const routes: Readonly<RouteRecordRaw[]> = [
  {
    path: URL + "/",
    name: "main",
    component: () => import("@/pages/main/Main.vue"),
  },
  {
    path: URL + "/visit",
    name: "visit",
    component: () => import("@/pages/visit/Visit.vue"),
  },
  {
    path: URL + "/check/:type",
    name: "check",
    component: () => import("@/pages/check/Check.vue"),
  },
  {
    path: URL + '/information',
    name: 'information',
    component: () => import("@/pages/infomation/Information.vue"),
  },
  {
    path: URL + '/admin',
    name: 'admin',
    component: () => import("@/pages/admin/Admin.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
