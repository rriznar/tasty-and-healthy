<template>
  <div class="home">
    <div class="container-fluid">
      <br>
      <div class="row">
        <div class="col-1"></div>
        <div class="col-10">
      </div>  
      
            <div class="col-1"></div>
      </div>

      <div class="row">
        <div class="col-1"></div>
      
           <div class="col-3" style="padding:0px;"> <h4 style="padding:15px 15px 15px 0px;"><router-link style="text-decoration:none; color:black;" to="/Novosti">Današnje novosti</router-link></h4></div>
          <div class="col-5"></div>
          <div class="col-2"> <h4 style="padding:15px;">O nama</h4></div>

        <div class="col-1"></div>
      </div>


      <div class="row">
      <div class="col-1"></div>
      <div class="col-8" style="margin-bottom:20px; height:670px; background-color:rgba(233, 233, 233, 0.781);">
        
        <div class="row">
              <div class="novost">
                <div class="datum">15. svibnja 2021.godine</div>
                  <div class="tekst">ssss</div>
              </div>
        </div>

         <div class="row">
              <div class="novost">
                <div class="datum">5. svibnja 2021.godine</div>
                  <div class="tekst">ssss</div>
              </div>
        </div>
        
        </div>  
          


      <div class="col-2" style="margin-bottom:20px; height:670px; background-color:rgba(233, 233, 233, 0.781); margin-left:10px;">

        <div class="row">
        <div class="onama">
          <div class="naslov">Tko smo mi</div>

        </div>
        </div>

        <div class="row">
        <div class="onama">
          <div class="naslov">Sto nudimo</div>
        </div>
        </div>

      </div>
          
      </div>


    </div>
    
  </div>
</template>

<script>

</script>


<style>
.naslov{
  background-color: rgb(128, 194, 52);
  height:50px;
  width:270px;
  padding:10px;
}

.tekst{
  background-color: white;
  height:250px;
  width:1200px;
  padding:15px;
  box-shadow: 4px 4px 4px rgb(187, 187, 187);

}


.datum{
  background-color: rgb(128, 194, 52);
  height:50px;
  width:280px;
  padding:10px;

}

.onama{
  background-color: white;
  height:300px;
  width:280px;
  margin:auto;
  margin-top: 20px;
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
}



</style>