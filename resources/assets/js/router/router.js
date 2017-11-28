import Main from '../components/Main'

export const loginRouter = {
    path: '/login',
    name: 'login',
    meta: {
        title: 'Login - 登录'
    },
    component: resolve => { require(['../pages/login.vue'], resolve) }
};

export const otherRouter = {
    path: '/',
    component: Main
}

export const appRouter = [
    {
        path: '/member',
        icon: 'person',
        name: 'member',
        title: '会员管理',
        component: Main,
        children: [
            { path: '/index', icon: 'person', title: '会员管理', name: 'member_index', component: resolve => { require(['../components/member/member.vue'], resolve) }},
            { path: '/add', icon: 'person-add', title: '添加会员', name: 'member_add', component: resolve=> { require(['../components/member/add.vue'], resolve) }}
        ]
    }
]

export const routers = [
    loginRouter,
    otherRouter,
    ...appRouter
]