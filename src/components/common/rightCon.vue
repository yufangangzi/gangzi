<template>
  <div class="content">
    <div class="video">
       <videoTen></videoTen>
    </div>
    <div class="selfShow">
      <p>这里是我的自我介绍</p>
      <p>点赞数  <em>{{num}}</em></p>
      <p>点赞数  <em>{{numZAN}}</em></p>
      <button @click="addZAN">点赞</button>
      <button @click="eventZAN">点赞dddd</button>
    </div>
    <transition name="fade">
      <p v-show="show">hello</p>
    </transition>
    <button @click="show=!show">show</button>
  </div>
</template>
<script type="text/ecmascript-6">
  import videoTen from './video.vue'
  import store from '../../store'
  import {mapState,mapActions} from 'vuex'
  export default{
    data(){
      return {
        show:true
      }
    },
    computed:{
      ...mapState({
        num:'zanNum',numZAN:'numZAN'
        })
    },
    methods:{
      ...mapActions(['addZAN']),
      eventZAN(){
        this.$store.dispatch('eventZAN',{num:5})
      }
    },
    components:{
      videoTen
    }
  }
</script>
<style>
  .content div{vertical-align: top;}
.content .video{display: inline-block;width:400px;height: 300px;}
.content .selfShow{
  width: 400px;height: 300px;display: inline-block;
}
  .fade-enter-active,.fade-leave-active{transition: all 0.5s ease     }

.fade-enter,.fade-leave-active{
  opacity: 0
}

</style>
