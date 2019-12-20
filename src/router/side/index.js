import Router from 'vue-router'

const side = new Router({
  routes: [{
      path: '/sidelist',
      name: 'Sidelist',
      component: () => import('@/components/side/sidelist'),
    },
    {
      path: '/sideadd',
      name: 'Sideadd',
      component: () => import('@/components/side/sideadd'),
    }
  ]
})

export default side
