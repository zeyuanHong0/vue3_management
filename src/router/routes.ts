export const constantRoute = [
  // 首页
  {
    path: '/',
    name: 'layout',
    component: () => import('@/views/layout/index.vue'),
    meta: {
      title: 'layout',
      hidden: false,
      icon: 'Avatar',
    },
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页',
          hidden: false,
          icon: 'HomeFilled',
        },
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录',
      hidden: true,
      icon: 'Promotion',
    },
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404/index.vue'),
    meta: {
      title: '404',
      hidden: true,
      icon: 'Monitor',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'any',
    redirect: '/404',
    meta: {
      title: '任意路由',
      hidden: true,
      icon: 'Guide',
    },
  },
]
