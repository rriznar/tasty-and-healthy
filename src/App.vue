<template>
  <div id="app">
    <div id="nav">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
               <a class="navbar-brand" href="#"><router-link class= "link" to="/">Tasty And Healthy</router-link></a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item" style="margin-right:30px;">
                    <router-link class= "link" to="/">Novosti</router-link>
                  </li>
                  <li class="nav-item" style="margin-right:30px;">
                    <router-link class= "link" to="/Ponude">Ponude</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class= "link" to="/IzradaRasporeda">Izrada Rasporeda</router-link>
                  </li>
                  
                </ul>
              </div>
            </div>
          </nav>
      
     </div>
    <div class="col-12"></div>

    <router-view/>
  </div>
</template>

<style lang="scss">

.link{
  color: black;
  text-decoration: none;
    }
 
.link:hover{
  color:rgb(128, 194, 52);
}

 .col-12{
   padding:30px;
   background-color: rgb(128, 194, 52);
 }



</style>
