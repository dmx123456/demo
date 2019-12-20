import Router from 'vue-router'

const user = new Router({
  routes: [{
      path: '/sidelist',
      name: 'Sidelist',
      component: () => import('@/components/side/sidelist'),
    },
    {
      path: '/sideadd',
      name: 'Sideadd',
      component: () => import('@/components/side/sideadd'),
    }, 
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/components/home'),
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/components/login'),
    },
    {
      path: '/',
      name: 'Index',
      component: () => import('@/components'),
    },
    {
      path: '*',
      redirect: '/home',
      meta: {}
    }
  ]
})

export default user
