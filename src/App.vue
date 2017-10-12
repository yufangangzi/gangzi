<template>
  <div class="container">
    <headTab></headTab>
    <leftTab></leftTab>
  </div>
</template>

<script>
import headTab from './components/common/headTab.vue'
import leftTab from './components/common/leftTab.vue'
export default {
  name: 'app',
  data(){
     return {

     }
  },
  components:{
    headTab,
    leftTab
  }

}
</script>

<style>
  html,body{width:100%;height: 100%}
  *{padding: 0;margin: 0}
  .container{height: 100%;padding: 0;margin: 0}
  ul,li{list-style: none}
</style>
