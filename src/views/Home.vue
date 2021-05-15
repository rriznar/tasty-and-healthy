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
      
           <div class="col-8" style="border-style: solid; border-color: green; padding:15px;">Danasnje novosti</div>
          <div class="col-2" style="border-style: solid; border-color: red; padding:15px;">O nama</div>

        <div class="col-1"></div>
      </div>


      <div class="row">
      <div class="col-1"></div>
      <div class="col-8" style="border-style: solid; border-color: red; height:780px; background-color:rgba(233, 233, 233, 0.781);">
        
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
          


      <div class="col-2" style="border-style: solid; border-color: red; height:780px; background-color:rgba(233, 233, 233, 0.781); margin-left:10px;">

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


<style lang="scss">


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