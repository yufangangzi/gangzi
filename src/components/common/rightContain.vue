<template>
   <div class="main">
		<transition>
			<router-view></router-view>
		</transition>
   </div>
</template>
<script>
import list from './list.vue'
export default {
   components:{
    list
  }
}
</script>
<style>
   .main{width:100%;

   }
</style>

