<template>
  <div class="jumbotron">
    <h1>家庭介绍==>{{age}}</h1>
    <p>我家三口人。我是户主陈刚，胡晓伟是我的妻子，</p>
  </div>
</template>
<style>

</style>
<script>

    export default{
        data(){
            return{

            }
        },
        computed:{
            age(){
              return this.$store.state.age
            }
        },
        components:{

        }
    }
</script>
