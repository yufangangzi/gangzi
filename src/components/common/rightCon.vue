<template>
  <div class="content">
    <div class="video">
       <videoTen></videoTen>
    </div>
    <div class="selfShow">
      <p>这里是我的自我介绍</p>
      <p>点赞数  <em>{{num}}</em></p>
      <button @click="addZAN">点赞</button>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import videoTen from './video.vue'
  import store from '../../store'
  import {mapState,mapActions} from 'vuex'
  export default{
    data(){
      return {

      }
    },
    computed:{
      ...mapState({
        num:'zanNum'
        })
    },
    methods:{
      ...mapActions(['addZAN'])

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
</style>
