import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About'
import Broadcasts from '../views/Broadcasts'
import Details from '../views/Details'
import Feedback from '../views/Feedback'
import Finished from '../views/Finished'
import History from '../views/History'
import Home from '../views/Home'
import Listing from '../views/Listing'
import Me from '../views/Me'
import More from '../views/More'
import Ranking from '../views/Ranking'
import Search from '../views/Search'
import SearchResult from '../views/SearchResult'

Vue.use(VueRouter)

const routes = [
  { path: '/home', component: Home },

  {
    path: '/about',
    component: About
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  { path: '/broadcasts', component: Broadcasts },
  { path: '/details', component: Details },
  { path: '/feedback', component: Feedback },
  { path: '/finished', component: Finished },
  { path: '/history', component: History },
  { path: '/listing', component: Listing },
  { path: '/me', component: Me },
  { path: '/more', component: More },
  { path: '/Ranking', component: Ranking },
  { path: '/search', component: Search },
  { path: '/searchresult', component: SearchResult },

  { path: '/', redirect: '/home' }
]

const router = new VueRouter({
  routes
})

export default router
