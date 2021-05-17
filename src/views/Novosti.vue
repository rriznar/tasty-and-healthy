<template>
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
      
           <div class="col-lg-3" style="padding:0px;"><h4 style="padding:15px 15px 15px 0px;">Današnje novosti</h4></div>
          <div class="col-lg-4"></div>
           <div class="col-lg-3" style="padding:15px 0px 15px 15px;">
             <div class="natrag"><router-link style="text-decoration:none; color:black;" to="/"><i class="bi bi-arrow-return-left"></i> Natrag</router-link></div>
           </div>

        <div class="col-1"></div>
      </div>

    <div class="row">
          <div class="col-1"></div>
          <div class="col-lg-10" style="height:700px; margin-bottom:20px;">
                     
                      <div class="row justify-content-center">
                          <div class="col-lg-9">
                            <div class="datum">15. svibnja 2021.godine</div>
                              <div class="col-lg-12">ssss</div>
                          </div>
                     </div>

                <div class="row justify-content-center">
                      <div class="col-lg-9">
                        <div class="datum">5. svibnja 2021.godine</div>
                          <div class="col-lg-12">ssss</div>
                      </div>
                </div>

            
          </div>
          <div class="col-1"></div>
    </div>
    
    
    </div>
</template>

<style scoped>

.col-lg-10{
 background-color: rgba(233, 233, 233, 0.781);
  height:200px;
  box-shadow: 4px 4px 4px rgb(187, 187, 187);
}

.col-lg-9{
  margin-top: 30px;
  
}

.col-lg-12{
  background-color: white;
  height:250px;
  box-shadow: 4px 4px 4px rgb(187, 187, 187);
  padding:15px;

}

.natrag{
  float: right;
  background-color: rgb(128, 194, 52);
  width:150px;
  height:35px;
  text-align: center;
  padding:4px;
  box-shadow: 3px 3px 3px rgb(187, 187, 187);
}

</style>