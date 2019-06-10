import pages from './autoLoad';

export default [
  {
    path: '/auth',
    component: pages.auth,
    meta: {
      notice: true,
    },
    children: [
      {
        path: 'login',
        component: pages.login,
      },
      {
        path: 'register',
        component: pages.register,
      },
    ],
  },
  {
    path: '/index',
    component: pages.index,
  },
  {
    path: '/personal',
    component: pages.personal,
  },
  {
    path: '/search',
    component: pages.search,
  },
];
