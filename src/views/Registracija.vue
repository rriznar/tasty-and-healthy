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
                          <div class="col-sm" style="padding:20px;"> <h1>Registracija</h1></div>
                          <div class="col-sm"></div>
                         <hr>
                         </div>
                          <div class="row">
                          <div class="col-sm"></div>
                            <div class="col-sm">
                              <br>
                            <form @submit.prevent="registerUser">
                              <div class="form-group">
                                <label for="basicAddon1">Korisničko ime</label>
                                <input v-model="username" type="text" class="form-control"
                                id="basicAddon1" aria-describedby="basicAddon1" placeholder="Unesite korisničko ime" />
                                </div>
                              <div class="form-group">
                                <label for="exampleInputEmail1">Email adresa</label>
                                <input v-model="email" type="email" class="form-control"
                                id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Unesite Email" />
                                </div>
                                <div class="form-group">
                                  <label for="exampleInputPassword1">Lozinka</label>
                                  <input v-model="password" type="password" class="form-control"
                                  id="exampleInputPassword1" placeholder="Unesite Lozinku" />
                                </div>
                               <!-- <div class="form-group">
                                  <label for="exampleInputPassword1">Ponovi Lozinku</label>
                                  <input v-model="user.passwordRepeat" type="password" class="form-control"
                                  id="exampleInputPassword1" placeholder="Ponovite lozinku" />
                                </div> -->
                                <br>
                                <div class="row justify-content-center">
                                <button type="submit" class="btn btn-success">Registriraj se</button>
                                </div>
                              </form>
                            </div>
                          <div class="col-sm"></div>
                          
                        </div>
                        
                      </div>
                      <br>
                      <hr>
                      <br>
                      <div class="row justify-content-center">
                        <div class="col-sm"></div>
                        <div class="col-sm" style="text-align:center;"><button type="button" class="btn btn-info"><router-link style="text-decoration:none; color:white;" to="/Prijava">Odustani</router-link></button></div>
                      <div class="col-sm"></div>
                      </div>


            </div>

        </div>
    
      </div>
    </div>
</template>

<script>
import { Auth } from "@/services";

export default {
  name:"Registracija",
  data(){
    return{
        username: "",
        email: "",
        password: "",
       
              
    }
  },
methods:{
  
  async registerUser(){
      let success = await Auth.registerUser(this.username,this.email,this.password);
      console.log("Rezulat registracije", success);

      if(success == true){
        this.$router.push({path: "/Prijava"});
        
      }
    
    },
}
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
  box-shadow: 3px 3px 3px rgb(187, 187, 187);
  
}

.col-lg-5{
 background-color: rgba(233, 233, 233, 0.781);
  height:600px;
  box-shadow: 4px 4px 4px rgb(187, 187, 187);
  margin-top: 30px;
  
}

.col-lg-2{
  margin-top: 30px;
  padding:35px 5px 0px 0px;
}

</style>