import Vue from "vue"
import VueRouter from "vue-router"
import HomeView from "../views/HomeView.vue"
import QnaView from "../views/QnaView.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/qna",
    name: "qna",
    component: QnaView,
  },
  {
    path: "/result",
    name: "result",
    component: QnaView,
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
