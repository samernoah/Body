import { createRouter, createWebHistory } from 'vue-router'
import HomeViewBody from '../views/HomeViewBody'
import BodyView from '../views/BodyView.vue'
import CoursesView from '../views/CoursesView'
import TestCourseView from '../views/TestCourseView'
import ComponentTestView from '../views/ComponentTestView'



const routes = [
  {
    path: '/',
    name: 'homebody',
    component: HomeViewBody
  },
  {
    path: '/body',
    name: 'body',
    component: BodyView
  },
  {
    path: '/courses',
    name: 'courses',
    component: CoursesView
  },
  {
    path: '/testcourse/:courseLink',
    name: 'testcourse',
    component: TestCourseView,
    props: true
  },
  {
    path: '/ComponentTest',
    name: 'ComponentTest',
    component: ComponentTestView,
    props: true
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
