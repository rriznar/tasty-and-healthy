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
                          <div class="col-sm" style="padding:20px; text-align:center;"> <h1>Prijava</h1></div>
                          <div class="col-sm"></div>
                         <hr>
                         </div>
                        <div class="row">
                          <div class="col-sm"></div>
                            <div class="col-sm">
                              <br>
                            <form @submit.prevent="login">
                              <div class="form-group">
                                <label for="exampleInputEmail1">Email adresa</label>
                                <input v-model="email" type="email" class="form-control" id="exampleInputEmail" aria-describeby="emailHelp" placeholder="Unesite email"/>                  
                                </div>
                                <div class="form-group">
                                  <label for="exampleInputPassword1">Lozinka</label>
                                  <input v-model="password" type="password" class="form-control"
                                  id="exampleInputPassword1" placeholder="Unesite Lozinku" />
                                </div>
                                
                                <br>
                                <div class="row justify-content-center">
                                <button type="submit" class="btn btn-success">Prijavite se</button>
                                </div>
                              </form>
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
                <p>Nemate račun?</p>
                <button type="button" class="btn btn-info"><router-link style="text-decoration:none; color:white;" to="/Registracija">Registrirajte se</router-link></button>
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
import { Auth } from "@/services";

export default {
  name:"Prijava",
  data(){
    return{
      email: "",
      password: "",
    }
  },
  methods:{
    async login(){
      let success = await Auth.login(this.email,this.password);
      console.log("Rezulat prijave", success);

      if(success == true){
        this.$router.push({path: "/Pocetna"});
        
      }
    
    },
    

  },
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