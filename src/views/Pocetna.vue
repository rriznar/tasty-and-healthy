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
                <objava v-for="post in post" :key="post.id" :info="post"/>
                              
                
                
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
  
          <div class="card border-secondary mb-3" style="max-width: 18rem;">
          <div class="card-header">Tko smo mi</div>
          <div class="card-body text-secondary">
            <p class="card-text" style="text-align: justify;">Mi smo grupa nutricionista i fitnes trenera koji smo odlučili stvoriti aplikaciju kako bi pomogli ostalim ljudima koji se muče sa viškom kila.</p>
          </div>
        </div>

          <div class="card border-secondary mb-3" style="max-width: 18rem;">
          <div class="card-header">Što nudimo</div>
          <div class="card-body text-secondary">
              <p class="card-text"> - portal sa korisnim informacijama u vezi mršavljenja </p>
              <p class="card-text"> - pregled naših planova prehrane prema indeksu tjelesne mase </p>
              <p class="card-text">- izradu svog vlastitog plana prehrane.</p>
          </div>
        </div>

              

          </div>
      </div>   
          
         </div> 

      </div>
    

    </div>
    
  
</template>

<script>
import Objava from '@/components/Objava.vue';
import {data} from '@/services';



export default{
  components:{
    Objava,
    
    },
 data(){
        return{
            post:
            [
            {naslov:"naslov"},
            {datum:"datum"},
            {slika:"slika"},
            {tekst:"tekst"}
            ],

        }
    },
    
async created(){
    this.post = await data.dohvati_postove();
  
    console.log(this.naslov);

}


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

.card{
    padding:0px;
    border: none;
}

.card-header{
    background-color: rgb(128, 194, 52);
    font-weight: bold;
    text-align: center;
}






</style>