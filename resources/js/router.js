import { createRouter } from "vue-router";
import { createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/', component: () => import('./components/User'),
            name: 'user.index',
        },
        {
            path: '/user/:id', component: () => import('./components/User'),
            name: 'user.show',
        },
        {
            path: '/user/login', component: () => import('./components/Login'),
            name: 'user.login',
        },
        {
            path: '/user/register', component: () => import('./components/Register'),
            name: 'user.register'
        },
        {
            path: '/event/:id', component: () => import('./components/Event'),
            name: 'event.show'
        },
        {
            path: '/event/create', component: () => import('./components/Create'),
            name: 'event.create'
        },
        { 
            path: '/404', component: () => import('./components/NotFound'),
            name: 'page404'
        },
        {
            path: '/:catchAll(.*)', redirect: '/404',
        },
    ], // short for `routes: routes`
})

router.beforeEach((to, from, next) => {
    const x_xsrf_token = localStorage.getItem('x_xsrf_token')

    if(!x_xsrf_token) {
        if(to.name === 'user.login' || to.name === 'user.register') 
            return next()
        else
            return next({name: 'user.login'})
    }
    else {
        if(to.name === 'user.login' || to.name === 'user.register')
            return next({name: 'user.index'})
        else
            return next()
    }
})

export default router
