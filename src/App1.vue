<template>
  <div id="wrapper">
    <nav class="navbar navbar-default">
      <div class="container">
        <a class="navbar-brand" href="#">
          <i @click="change('home')" class="glyphicon glyphicon-time"></i>
          家庭成员
        </a>
        <ul  class="nav navbar-nav">
          <li @click="change('cg')">
              <router-link to="/name/gg/陈刚">陈刚</router-link>
          </li>
          <li @click="change('hxw')">
              <router-link to="/name/mm/胡晓伟">胡晓伟</router-link>
          </li>
          <li @click="change('cyf')">
              <router-link to="/name/gg/陈宇梵">陈宇梵</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <div class="col-sm-3">
        <sidebar :get-parent="msgApp"></sidebar>
      </div>
      <div class="col-sm-9">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
import Bus from './store/event-bus.js'
export default {
  name: 'app',
  data(){
     return {
        famList:['胡晓炜','陈刚','陈宇梵'],
       msgApp:'我组建'
     }
  },
  methods:{
     change(name){
        Bus.$emit('change-img',name)
     }
  },
  components: {
    Sidebar
  }
}
</script>

