export const constantRoute = [
  // 首页
  {
    path: '/',
    name: 'layout',
    component: () => import('@/views/layout/index.vue'),
    meta: {
      title: 'layout',
      hidden: false,
    },
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页',
          hidden: false,
        },
      },
      {
        path: 'test1',
        meta: {
          title: '测试 1',
          hidden: false,
        },
      },
      {
        path: 'test2',
        meta: {
          title: '测试 2',
          hidden: false,
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
      hidden: false,
    },
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404/index.vue'),
    meta: {
      title: '404',
      hidden: true,
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'any',
    redirect: '/404',
    meta: {
      title: '任意路由',
      hidden: true,
    },
  },
]
