import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "../view/home.vue";


const routes = [
  { path: '/', component: HomeView },
  
]

export const routePaths = routes.map(e => e.path);

export const router = createRouter({
  routes,
  history: createWebHistory(),
  
})