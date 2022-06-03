import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MerchantSite',
    component: () => import(/* webpackChunkName: "merchant-site" */ '../views/MerchantSite.vue')
  },
  {
    path: '/verification',
    name: 'Verification',
    component: () => import(/* webpackChunkName: "verification" */ '../views/Verification.vue')
  },
  {
    path: '/user-details',
    name: 'UserDetailsForm',
    component: () => import(/* webpackChunkName: "home" */ '../views/UserDetailsForm.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/select',
    name: 'Select',
    component: () => import(/* webpackChunkName: "select" */ '../views/Select.vue')
  },
  {
    path: '/identity-verification',
    name: 'UserVerification',
    component: () => import(/* webpackChunkName: "user-verification" */ '../views/UserVerification.vue')
  },
  {
    path: '/verified',
    name: 'Verified',
    component: () => import(/* webpackChunkName: "verified" */ '../views/Verified.vue')
  },
  {
    path: '/failed',
    name: 'Failed',
    component: () => import(/* webpackChunkName: "failed" */ '../views/Failed.vue')
  },
  {
    path: '/merchant-redirect',
    name: 'MerchantSiteRedirect',
    component: () => import(/* webpackChunkName: "merchant-redirect" */ '../views/MerchantSiteRedirect.vue')
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "404" */ '../views/NotFound.vue')
  },
  { path: '*', redirect: '/404' },
  {
    path: '/access-denied',
    name: 'AccessDenied',
    component: () => import(/* webpackChunkName: "404" */ '../views/AccessDenied.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {

  if (to.name == 'Home' && from.name == null || to.name == 'Select' && from.name == null ||
    to.name == 'Verified' && from.name == null || to.name == 'Failed' && from.name == null ||
    to.name == 'UserDetailsForm' && from.name == null) {
    next({ name: 'AccessDenied' })
  }

  else next()
})

const DEFAULT_TITLE = 'Welcome to FTD';

router.afterEach((to) => {

  Vue.nextTick(() => {
    document.title = to.name || DEFAULT_TITLE;
  });
});

export default router
