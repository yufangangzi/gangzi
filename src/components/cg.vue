<template>
    <div>
       <h3>{{msg}}</h3>
       <p>我是{{$route.params.name}}</p>
       <p>我是{{$route.params.sx}}</p>

    </div>
</template>
<script>
  export default{
     data() {
        return {
           msg:'个人简介'
        }
     },
     methods:{
        getm(){
          
        }
     }
  }
</script>
