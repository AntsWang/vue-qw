import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../page/home.vue';
import Questions from '../page/questionPage.vue';
import Score from '../page/score';
Vue.use(VueRouter)
const routes = [
    { path: "/", component: Home },
    { path: "/questions", component: Questions },
    { path: "/score", component: Score },
]
const router = new VueRouter({
    routes,
    // scrollBehavior(to, from, savedPosition) {
    //     // return 期望滚动到哪个的位置
    // }
})

router.beforeEach((to, from, next) => {
    // console.log(router,to,from);
    if (to.path == '/') {
        router.app.$options.store.commit("clearAnswer");
    }
    next();

});
export default router;