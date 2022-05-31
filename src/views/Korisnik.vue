<template>
 <div class="container-fluid">
      <br>
      <div class="row"></div>

      <div class="row justify-content-center">
        <div class="col-lg-5"> 
            <div class="about">
                      <div class="container">
                       <br>
                       <br>
                      <div class="row">
                          <hr style="margin-bottom:0px;">
                          <div class="col-sm"></div> 
                          <div class="col-sm" style="padding:20px; text-align:center;"> <h3>Informacije o korisniku</h3></div>
                          <div class="col-sm"></div>
                         <hr>
                         </div>
                        <div class="row">
                          <div class="col-sm"></div>
                            <div class="col-sm">
                              <br>
                          
                              <br>
                            </div>
                          <div class="col-sm"></div>
                        </div>
                      
                    </div>

                     <div class="container">
                       <br>
                       <br>
                      <div class="row">
                          <hr style="margin-bottom:0px;">
                          <div class="col-sm"></div> 
                          <div class="col-sm" style="padding:20px; text-align:center;"> <h3>Spremljeni rasporedi</h3></div>
                          <div class="col-sm"></div>
                         <hr>
                         </div>
                        <div class="row">
                          <div class="col-sm"></div>
                            <div class="col-sm">
                              <br>
                          
                              <br>
                            </div>
                          <div class="col-sm"></div>
                        </div>
                      
                    </div>
                 </div>
                
                 <hr>
                 

              
              <div class="row justify-content-center">
              <div class="col-sm"></div>
              <div class="col-sm" style="text-align:center;">
                
                <button type="button" class="btn btn-info"><router-link style="text-decoration:none; color:black;" to="/Pocetna"><i class="bi bi-arrow-return-left"></i> Natrag</router-link></button>
                </div>
              <div class="col-sm"></div>
                
              </div>
              <br>
              <br>

           
            
          
            
      
        </div>
    
    </div>
    <br>
    

    </div>




      

</template>

<script>
import {Auth} from "@/services";

export default{
 data(){
   return{
     auth: Auth.state
   }
 },
name: "Korisnik"

}

</script>


<style scoped>
.btn:hover {
  background-color: rgb(113, 172, 46);
}

.btn-success{
  background-color: rgb(128, 194, 52);
  border-color:rgb(128, 194, 52);
}

.btn-info{
 
  background-color: rgb(128, 194, 52);
  border-color:rgb(128, 194, 52);
  width:150px;
  text-align: center;
  padding:4px;
  
  
}


.col-lg-5{
 background-color: rgba(233, 233, 233, 0.781);
  min-height:500px;
  box-shadow: 4px 4px 4px rgb(187, 187, 187);
  margin-top: 30px;
  
  
}

.col-lg-3{
 background-color: rgb(128, 194, 52);
  text-align: center;
  box-shadow: 4px 4px 4px rgb(187, 187, 187);
  padding:15px;
  
}

.col-lg-2{
  margin-top: 30px;
  padding:35px 5px 0px 0px;
}

.natrag{
 
  background-color: rgb(128, 194, 52);
  width:150px;
  height:35px;
  text-align: center;
  padding:4px;
  box-shadow: 3px 3px 3px rgb(187, 187, 187);
}


</style>