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
      
           <div class="col-lg-2" style="padding:0px;"><h4 style="padding:15px 0px 15px 0px;">Naše ponude</h4></div>
          <div class="col-lg-6">
            <p style="padding:20px 15px 0px 0px; font-size:15px;">Upišite svoju visinu i težinu za izračun tjelesne mase</p>
                <div class="form-floating mb-3">
                  <input v-model="visina" type="number" class="form-control" id="floatingInput" placeholder="0">
                  <label for="floatingInput">Visina</label>
                </div>
           
                 <div class="form-floating mb-3">
                  <input v-model="tezina" type="number" class="form-control" id="floatingInput" placeholder="0">
                  <label for="floatingInput">Težina</label>
                <div class="col-lg-1" style="margin-top:10px;">
                <button type="submit" class="btn btn-outline-success" @click="dohvatiPodatke()">Izračunaj</button>
                
                <p style="margin-top:20px;">Vaš BMI:</p>
                <div type="text" class="form-control" style="min-width:150px; height:50px; padding:12px;">{{recentBMI}}</div>
                
                </div>
                </div>

          
          
          </div>
           <div class="col-lg-2" style="padding:15px 0px 15px 15px; text-align:right;">
             <button type="button" class="btn btn-info"><router-link style="text-decoration:none; color:black;" to="/Pocetna"><i class="bi bi-arrow-return-left"></i> Natrag</router-link></button>
           </div>

        <div class="col-1"></div>
      </div>

    <div class="row">
         <div class="col-1"></div>
          <div class="col-lg-10" style="height:700px; margin-bottom:20px; overflow: auto;">
          <br>

          <div class="row">
          
          <raspored v-for="raspored in raspored" :key="raspored.id" :raspored="raspored"/>
          </div>  
          </div>
          <div class="col-1"></div> 
    </div>
    
    
    </div>
</template>

<script>
import Raspored from '@/components/Raspored.vue';
import {data} from '@/services';

export default{
  components:{
    Raspored,
    },
 data(){
   return{
     visina: "",
     tezina: "",
     final: "",
     svi_BMI: [],
     recentBMI: "",
     raspored:[
      {bmi_1 : "bmi_1"},
      {bmi_2 : "bmi_2"},
      {kal : "kal"},
      {pon_d : "pon_d"},
       {uto_d : "uto_d"},
       {sri_d : "sri_d"},
       {cet_d : "cet_d"},
       {pet_d : "pet_d"},
       {sub_d : "sub_d"},
       {ned_d : "ned_d"},
       {pon_o1 : "pon_o1"},
       {uto_o1 : "uto_o1"},
       {sri_o1 : "sri_o1"},
       {cet_o1 : "cet_o1"},
       {pet_o1 : "pet_o1"},
       {sub_o1 : "sub_o1"},
       {ned_o1 : "ned_o1"},
       {pon_r : "pon_r"},
       {uto_r : "uto_r"},
       {sri_r : "sri_r"},
       {cet_r : "cet_r"},
       {pet_r : "pet_r"},
       {sub_r : "sub_r"},
       {ned_r : "ned_r"},
       {pon_o2 : "pon_o2"},
       {uto_o2 : "uto_o2"},
       {sri_o2 : "sri_o2"},
       {cet_o2 : "cet_o2"},
       {pet_o2 : "pet_o2"},
       {sub_o2 : "sub_o2"},
       {ned_o2 : "ned_o2"},
       {pon_v : "pon_v"},
       {uto_v : "uto_v"},
       {sri_v : "sri_v"},
       {cet_v : "cet_v"},
       {pet_v : "pet_v"},
       {sub_v : "sub_v"},
       {ned_v : "ned_v"}
     ]
     
   }
 },
  methods: {
     async dohvatiPodatke(){
       let dodaj_BMI = {
        visina: this.visina,
        tezina: this.tezina,
        
       }
       let kvadriraj = dodaj_BMI.visina*dodaj_BMI.visina;
       
       let final_BMI = {
          final: (dodaj_BMI.tezina/kvadriraj)*10000
       }
      
       console.log(final_BMI);
       data.dodaj_BMI(final_BMI);

        this.svi_BMI = await data.dohvati_BMI();
        
        let last = this.svi_BMI.length;
        console.log("Objave su tu: ",this.svi_BMI[last-1].final);

        console.log(this.svi_BMI.length)
        this.recentBMI = this.svi_BMI[last-1].final;
     }    
   },
  async created(){
    this.raspored = await data.dohvati_raspored_BMI();
  
    console.log(this.raspored);

}

}

</script>


<style scoped>

.btn{
  background-color:rgb(128, 194, 52);
  border-color: rgb(128, 194, 52);
  color:black;
  width:100px;
}

.btn:hover {
  background-color: rgb(113, 172, 46);
}

.btn-info{
 
  background-color: rgb(128, 194, 52);
  border-color:rgb(128, 194, 52);
  width:150px;
  text-align: center;
  padding:5px;
}

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



</style>