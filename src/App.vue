<template>

  <div id="app">
    <nav id="nav" class="navbar navbar-expand-lg navbar-light ">
        
          <div class="container-fluid">
            <a class="navbar-brand">
              <img src="@/assets/logo_tah.jpg" alt="" width="45" height="32" class="d-inline-block align-text-top">
              Tasty And Healthy
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul v-if='auth.authenticated' class="navbar-nav me-auto mb-2 mb-lg-0">
              <li v-if='auth.authenticated' class="nav-item"> <router-link class= "nav-link" to="/Pocetna">Naslovnica</router-link> </li>
              <li v-if='auth.authenticated' class="nav-item"> <router-link class= "nav-link" to="/Novosti">Novosti</router-link> </li>
              <li v-if='auth.authenticated' class="nav-item"> <router-link class= "nav-link" to="/Ponude">Ponude</router-link> </li>
              <li v-if='auth.authenticated' class="nav-item"> <router-link class= "nav-link" to="/IzradaRasporeda">Izrada Rasporeda</router-link> </li>
              </ul>
              <ul class="navbar-nav mb-2 mb-lg-0 ml-auto">
              <span v-if='auth.authenticated' class="btn btn-link my-2 my-sm-0 mr-2"><a style="color:rgb(128, 194, 52);" @click="logout()" href="#">Odjavite se </a></span>
              <span v-if='auth.authenticated'><router-link class= "nav-link" to="/Korisnik">Korisnik: {{auth.userEmail}}</router-link></span>
              </ul>
            </div>
          </div>
        </nav>
    <div class="col-12"></div>

    <router-view/>
  </div>
</template>
<script>

import { Auth } from '@/services'

export default ({
  data() {
    return {
    auth: Auth.state,
    }    
  },
  methods:{
    logout(){
      Auth.logout();
      this.$router.go();
    },
  }
})
</script>



<style>

.nav-link{
  color: black;
  text-decoration: none;
  margin-right:10px;
  }
 
.nav-link:hover{
  color:rgb(128, 194, 52);
}

 .col-12{
   padding:30px;
   background-color: rgb(128, 194, 52);
 }


</style>
