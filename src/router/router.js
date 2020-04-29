import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../page/home.vue';
import Questions from '../page/questionPage.vue';
Vue.use(VueRouter)
const routes = [
    {path:"/",component:Home},
    {path:"/questions",component:Questions},
]
const router = new VueRouter({
    routes
})
export default router;