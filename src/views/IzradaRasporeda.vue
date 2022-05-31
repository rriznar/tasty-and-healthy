<template>
  <div class="container-fluid">
    <div class="row">
    
        <div class="col-lg-1"></div>

        <div class="col-lg-2">
          <button type="button" class="btn btn-info"><router-link style="text-decoration:none; color:black;" to="/Pocetna"><i class="bi bi-arrow-return-left"></i> Natrag</router-link></button>
        </div>
       
        <div class="col-lg-6">
          <h4 style="padding:20px; text-align:center;"><b>Izrada vašeg tjednog plana</b></h4>
          </div>
    
        <div class="col-lg-2"></div>

        <div class="col-lg-1"></div>

    </div>

    <div class="row justify-content-center">
    <div class="col-lg-10">
       <br>
       
      
        <div class="table-responsive" >
                <table class="table">
                <div>
                  <tr>
                   <th>Ponedjeljak</th>
                   <th>Utorak</th>
                   <th>Srijeda</th>
                   <th>Četvrtak</th>
                   <th>Petak</th>
                   <th>Subota</th>   
                   <th>Nedjelja</th>
                  </tr>
                 
                  <tr>
                    <td v-for="(jelo) in dohvat_dorucak.slice(0,7)" :key=jelo.id> <p>Doručak </p>
                    <div >
                      <select class="form-select" aria-label="Default select example">
                        <option selected>Izaberite jelo</option>
                        <option v-on:option="zbroji(jelo.broj_kalorija)">{{jelo.jelo}}</option>
                        <!--<option value="2">{{jelo.broj_kalorija}}</option>-->
                        
                        <option value="3">Three</option>
                      </select>
                      </div>
                      </td>
                 
                  </tr>

                  <tr>
                    <td v-for="(jelo) in dohvat_dorucak.slice(8,15)" :key=jelo.id>Obrok <p style="border-top: 3px solid #dddddd;">
                      <select class="form-select" aria-label="Default select example">
                        <option selected>Izaberite jelo</option>
                        <option value="1" @click="zbroji(jelo.broj_kalorija)" >{{jelo.jelo}}</option>
                        <!--<option value="2">{{jelo.broj_kalorija}}</option>-->
                        <option value="3">Three</option>
                      </select>
                      </p></td>
                  </tr>

                  <tr>
                    <td v-for="(jelo) in dohvat_dorucak.slice(16,23)" :key=jelo.id>Ručak <p style="border-top: 3px solid #dddddd;">
                      <select class="form-select" aria-label="Default select example">
                        <option selected>Izaberite jelo</option>
                        <option value="1" @click="zbroji(jelo.broj_kalorija)">{{jelo.jelo}}</option>
                        <!--<option value="2">{{jelo.broj_kalorija}}</option>-->
                        <option value="3">Three</option>
                      </select>
                      </p></td>
                  </tr>

                  <tr>
                   <td v-for="(jelo) in dohvat_dorucak.slice(24,31)" :key=jelo.id>Obrok <p style="border-top: 3px solid #dddddd;">
                      <select class="form-select" aria-label="Default select example">
                        <option selected>Izaberite jelo</option>
                        <option value="1" @click="zbroji(jelo.broj_kalorija)">{{jelo.jelo}}</option>
                        <!--<option value="2">{{jelo.broj_kalorija}}</option>-->
                        <option value="3">Three</option>
                      </select>
                      </p></td>
                  </tr>

                  <tr>
                   <td v-for="(jelo) in dohvat_dorucak.slice(32,39)" :key=jelo.id>Večera <p style="border-top: 3px solid #dddddd;">
                      <select class="form-select" aria-label="Default select example">
                        <option selected>Izaberite jelo</option>
                        <option value="1" @click="zbroji(jelo.broj_kalorija)">{{jelo.jelo}}</option>
                        <!--<option value="2">{{jelo.broj_kalorija}}</option>-->
                        <option value="3">Three</option>
                      </select>
                      </p></td>
                  </tr>
                </div>
                </table>
                
          </div>
      
      <div class="row">
        <div class="col-lg-4"></div>
      <div class="col-lg-4">
        <p style="text-align:center;">Ukupno kalorija za vas tjedni raspored {{trenutne_kalorije}}</p>
      </div>
      <div class="col-lg-4"></div>
      </div>

      </div>
    
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
     dohvat_dorucak:[],
     dohvat_rucak:[],
     dorucak:"dorucak",
     rucak:"rucak",
     obrok:"obrok",
     vecera: "vecera",
     suma_kalorija:0 ,
     trenutne_kalorije:0,
     kalorije:{
       kalorije_dorucak:0,
       kalorije_rucak:0,
     },
   }
 },
 methods: {
   zbroji(pomocne_kalorije){
     console.log("ulazak u funkciju")
     
     this.suma_kalorija = this.suma_kalorija + pomocne_kalorije;
     console.log("Suma kalorija: ",pomocne_kalorije, this.suma_kalorija) 
   }
 },
 async created(){
   this.dohvat_dorucak = await data.dohvati_raspored();
   this.dohvat_rucak = await data.dohvati_raspored();
   console.log(this.zbroji)
   console.log(this.dohvat_dorucak)
 }


}

</script>

<style scoped>

.col-lg-6{
 background-color: rgb(128, 194, 52);
  height:70px;
  box-shadow: 4px 4px 4px rgb(187, 187, 187);
  margin-top: 30px;
}

.col-lg-10{
 background-color: rgba(233, 233, 233, 0.781);
  min-height:660px;
  box-shadow: 4px 4px 4px rgb(187, 187, 187);
  margin-top: 30px;
}

.col-lg-2{
  margin-top: 30px;
  padding:35px 5px 0px 0px;
}

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

th{
  background-color:rgb(128, 194, 52);
  text-align: center;
  width:500px;
}

td{
  text-align: center;
  background-color: white;
}

td, th {
  border: 1px solid #dddddd;
  }


</style>