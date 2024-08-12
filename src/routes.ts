export default [
    {
        path: '/',
        redirect: '/home',
    },
    {
        name: '首页',
        path: '/home',
        component: './Home',
    },
    {
        name: '表格',
        path: '/table',
        component: './Table',
        access: 'canSeeNormal',
    },
]