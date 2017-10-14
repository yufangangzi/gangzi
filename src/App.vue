<template>
  <div class="container">
    <headTab></headTab>
    <leftTab></leftTab>
    <rightCon></rightCon>
  </div>
</template>

<script>
import headTab from './components/common/headTab.vue'
import leftTab from './components/common/leftTab.vue'
import rightCon from './components/common/rightCon.vue'
export default {
  name: 'app',
  data(){
     return {

     }
  },
  components:{
    headTab,
    leftTab,
    rightCon
  }

}
</script>

<style>
  html,body{width:100%;height: 100%}
  *{padding: 0;margin: 0}
  .container{height: 100%;padding: 0;margin: 0}
  ul,li{list-style: none}
</style>
