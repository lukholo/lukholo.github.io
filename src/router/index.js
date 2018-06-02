import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Dashboard from '@component/Dashboard'
import NewEmployee from '@component/NewEmployee'
import EditEmployee from '@component/EditEmployee'
import ViewEmployee from '@component/ViewEmployee'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/new',
      name: 'new-employee',
      component: NewEmployee
    },
    {
      path: '/edit',
      name: 'edit-employee',
      component: EditEmployee
    },
    {
      path: '/view',
      name: 'view-employee',
      component: ViewEmployee
    }
  ]
})
