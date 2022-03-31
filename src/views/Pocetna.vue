<template>
  
    <div class="container-fluid">
      <br>
      <div class="row">
        <div class="col-lg-1"></div>
        <div class="col-10">
      </div>  
      
            <div class="col-lg-1"></div>
      </div>

        <div class="row">
      
        <div class="col-lg-1"></div>  

     <div class="col-lg-8">
      <div class="row">
        <div class="col-lg-3" style="padding:0px;"> <h4 style="padding:15px 15px 15px 0px;"><router-link style="text-decoration:none; color:black;" to="/Novosti">Današnje novosti</router-link></h4></div>
        <div class="col-lg-5"></div>
        </div>
          
            <div class="row justify-content-center">
              <div class="col-lg-12" style="overflow:auto; margin-bottom:20px; height:670px; background-color:rgba(233, 233, 233, 0.781); box-shadow: 4px 4px 4px rgb(187, 187, 187); margin-right:15px;">
                <div class="row justify-content-center">
                <div class="col-lg-1"></div>
                <div class="col-lg-10">
                <br>  
                <objava />
                <objava />
                <objava />
                <objava />
                <objava />
                
                
                
              </div>
              
                <div class="col-lg-1"></div>
                </div>  
              </div>
            </div>
             
      </div>
      


      <div class="col-lg-2">

        

        <div class="row">
         <div class="col-lg-12"> <h4 style="padding:15px;">O nama</h4></div>
          </div>

        

       <div class="row">

      <div class="col-lg-12" style="margin-bottom:20px; min-height:670px; background-color:rgba(233, 233, 233, 0.781); box-shadow: 4px 4px 4px rgb(187, 187, 187); margin-left:5px;">
        <br>
        <onama />

        <onama />
              

          </div>
      </div>   
         
         
         
         
         </div> 
      </div>
    

    </div>
    
  
</template>

<script>
import Objava from '@/components/Objava.vue';
import Onama from '@/components/Onama.vue';

export default{
  components:{
    Objava,
    Onama
    },
 data(){
   return{}
 },


}

</script>


<style>
body {
  position: relative;
}


.datum{
  background-color: rgb(128, 194, 52);
  height:50px;
  width:280px;
  padding:10px;
  box-shadow: 4px 4px 4px rgb(187, 187, 187);
}

.novost{
  background-color: rgba(233, 233, 233, 0.781);
  height:300px;
  width:1200px;
  margin:auto;
  margin-top: 20px;
}

.col-10{

  background-image: url("../assets/food.jpg");
  height:200px;
  box-shadow: 4px 4px 4px rgb(187, 187, 187);
}



</style>