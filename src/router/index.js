import { createRouter as _createRouter, createWebHistory } from "vue-router";
import Home from "@/Pages/Home.vue";

export const routes = [{ path: "/", component: Home }];

export function createRouter() {
  return _createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
  });
}
