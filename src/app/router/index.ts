import MainView from "@/app/Components/Pages/MainView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', component: MainView
    }
  ],
});

export default router;
