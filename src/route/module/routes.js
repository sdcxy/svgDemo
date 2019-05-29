const routes =  [
    {
        path: '/demo',
        name: 'demo',
        meta: { title: '首页' },
        component: ()=> import('../../views/Demo.vue')
    }
]


export default routes
