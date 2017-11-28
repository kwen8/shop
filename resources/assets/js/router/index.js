import Vue from 'vue'
import VueRouter from 'vue-router'
import iView from 'iview'
import { routers } from './router'

Vue.use(VueRouter)

export const router =  new VueRouter({
    routes: routers
})
console.log(routers);
router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    if(to.name !== 'login') {
        next({
            name: 'login'
        });
    } else {
        next();
    }
});

router.afterEach((to) => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});