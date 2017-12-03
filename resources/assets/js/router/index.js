import Vue from 'vue'
import VueRouter from 'vue-router'
import iView from 'iview'
import { routers } from './router'
import jwt from '../helpers/jwt'

Vue.use(VueRouter)

export const router =  new VueRouter({
    routes: routers
})

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start()
    if(!jwt.getToken() && to.name !== 'login') {
        next({
            name: 'login'
        })
    } else if(jwt.getToken() && to.name === 'login') {
        next({
            name: 'member'
        })
    } else {
        next()
    }
});

router.afterEach((to) => {
    iView.LoadingBar.finish()
    window.scrollTo(0, 0)
});