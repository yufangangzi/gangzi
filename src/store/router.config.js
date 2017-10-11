import Home from '../components/Home'
import TimeEntries from '../components/TimeEntries.vue'
import LogTime from '../components/LogTime.vue'
import NotFound from '../components/404'
import VueResource from 'vue-resource'
import Cg from '../components/cg.vue'

  var routes= [
    {path : '/', component : Home},
    {path : '/home', component : Home},
    {path : '/name/:sx/:name', component: Cg},
    {path : '/time-entries', component : TimeEntries,
       children : [
         {path : 'log-time', component : LogTime}
       ]
    },
    {path : '*', component : NotFound}
  ]
export default routes

