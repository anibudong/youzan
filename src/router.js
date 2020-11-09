import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    routes :[
      {path:'/one',component:() =>import('@/views/one/index')},
      {path:'/two',component:() =>import('@/views/two/index')}
    ]
  })


  export default router