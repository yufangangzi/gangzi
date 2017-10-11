<template>
  <div class="panel panel-default">
    <h5 @click='changeAge'>个人相片</h5>
    <h4 @click='reduce'>减小</h4>
    <p>{{getParent}}</p>
    <p>{{age}}</P>
    <p>{{addage}}</p>
    <img v-bind:src="userImg" alt="">

  </div>
</template>
<style scoped>
   img{
      width:140px
   }
</style>
<script>
import Bus from '../store/event-bus.js'
import {mapState,mapActions} from 'vuex'
    export default {
      name : 'Sidebar',
      props:['getParent'],
      data(){
         return {
            userImg:'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1319050398,2947214651&fm=58&u_exp_0=752016783,2613909241&fm_exp_0=86&bpow=500&bpoh=645'
         }
      },
      computed:
         mapState({
            age:state=>state.age,
            addage(state){
               return state.age+'nian'
            }
         })
      ,
      methods:{
         ...mapActions(['changeAge','reduce'])

      },
      mounted:function(){
         Bus.$on('change-img',function(data){
            if(data=='cg'){
               this.userImg='https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3710470845,2924724193&fm=58'
            }else if(data=='hxw'){
               this.userImg='https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=228721674,2223896312&fm=58'
            }else if(data=='cyf'){
               this.userImg='https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=4257379756,2156844838&fm=58'
            }else if(data=='home'){
               this.userImg='https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1319050398,2947214651&fm=58&u_exp_0=752016783,2613909241&fm_exp_0=86&bpow=500&bpoh=645'
            }
         }.bind(this))
      }

    }
</script>
