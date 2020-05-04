import Vue from 'vue'
import VueRouter from 'vue-router'

// 异步引入router
// const About = () => import('../views/About')
// const Broadcasts = () => ('../views/Broadcasts')
// const Details = () => ('../views/Details')
// const Feedback = () => ('../views/Feedback')
// const Finished = () => ('../views/Finished')
// const History = () => ('../views/History')
// const Home = () => ('../views/Home')
// const Listing = () => ('../views/Listing')
// const Me = () => ('../views/Me')
// const More = () => ('../views/More')
// const Ranking = () => ('../views/Ranking')
// const Search = () => ('../views/Search')
// const SearchResult = () => ('../views/SearchResult')
// const RankCom = () => ('../views/Ranking/RankCom')
// const RankShare = () => ('../views/Ranking/RankShare')
// const RankRead = () => ('../views/Ranking/RankRead')
// const Register = () => ('../views/Register')
// const Login = () => ('../views/Login')
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
import RankCom from '../views/Ranking/RankCom'
import RankShare from '../views/Ranking/RankShare'
import RankRead from '../views/Ranking/RankRead'
import Register from '../views/Register'
import Login from '../views/Login'

// 引入 nprogress 的核心与他的样式
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

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
  { path: '/register', component: Register },
  { path: '/login', component: Login },
  { path: '/details', component: Details },
  { path: '/feedback', component: Feedback },
  { path: '/finished', component: Finished },
  { path: '/history', component: History },
  { path: '/listing', component: Listing },
  {
    path: '/me',
    component: Me,
    beforeEnter (to, from, next) {
      if (window.isLogined) {
        next()
      } else {
        next('/login')
      }
    }

  },
  { path: '/more', component: More },
  {
    path: '/Ranking',
    component: Ranking,
    redirect: '/Ranking/Rankread',
    children: [
      {
        path: 'rankcom',
        component: RankCom
      },
      {
        path: 'Rankshare',
        component: RankShare
      },
      {
        path: 'Rankread',
        component: RankRead
      }

    ]

  },
  { path: '/search', component: Search },
  { path: '/searchresult', component: SearchResult },
  { path: '/', redirect: '/home' }
]

const router = new VueRouter({
  routes
})

// 配置 nprogress 不需要转圈
nprogress.configure({
  showSpinner: false
})

// 全局前置
router.beforeEach((to, from, next) => {
  // 启动进度条
  nprogress.start()
  next()
})

// 全局后置
router.afterEach((to, from) => {
  // 完成进度条
  nprogress.done()
})

export default router
