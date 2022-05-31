<template>
      <div v-if="card">
        <Objava :info="card"/>
      </div>      

</template>

<script>
import Objava from "@/components/Objava.vue"
import { Posts } from "@/services";

export default{
  components:{
    Objava
  },
  props:["id"],
  data(){
   return{
     card=null
   }
 },
 async mounted(){
   console.log(this.id);
   this.card = await Posts.getOne(this.id)
 }


}
</script>


<style>

</style>