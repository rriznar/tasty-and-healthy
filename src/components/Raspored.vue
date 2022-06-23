<template>

         <div class="table-responsive">
                <div class="col-lg-2">BMI od {{raspored.bmi_1}} do {{raspored.bmi_2}}</div>
                <div class="col-lg-2">Ukupno kalorija: {{raspored.kal}}</div>
                <br>
                <table class="table" style="box-shadow: 4px 4px 4px rgb(216, 216, 216);">
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
                    <td style="text-align:center;">Doručak <p style="border-top: 3px solid #dddddd;">{{raspored.pon_d}}</p></td>
                    <td style="text-align:center;">Doručak <p style="border-top: 3px solid #dddddd;">{{raspored.uto_d}}</p></td>
                    <td style="text-align:center;">Doručak <p style="border-top: 3px solid #dddddd;">{{raspored.sri_d}}</p></td>
                    <td style="text-align:center;">Doručak <p style="border-top: 3px solid #dddddd;">{{raspored.cet_d}}</p></td>
                    <td style="text-align:center;">Doručak <p style="border-top: 3px solid #dddddd;">{{raspored.pet_d}}</p></td>
                    <td style="text-align:center;">Doručak <p style="border-top: 3px solid #dddddd;">{{raspored.sub_d}}</p></td>
                    <td style="text-align:center;">Doručak <p style="border-top: 3px solid #dddddd;">{{raspored.ned_d}}</p></td>
                 
                  </tr>

                  <tr>
                    <td style="text-align:center;">Obrok <p style="border-top: 3px solid #dddddd;">{{raspored.pon_o1}}</p></td>
                    <td style="text-align:center;">Obrok <p style="border-top: 3px solid #dddddd;">{{raspored.uto_o1}}</p></td>
                    <td style="text-align:center;">Obrok <p style="border-top: 3px solid #dddddd;">{{raspored.sri_o1}}</p></td>
                    <td style="text-align:center;">Obrok <p style="border-top: 3px solid #dddddd;">{{raspored.cet_o1}}</p></td>
                    <td style="text-align:center;">Obrok <p style="border-top: 3px solid #dddddd;">{{raspored.pet_o1}}</p></td>
                    <td style="text-align:center;">Obrok <p style="border-top: 3px solid #dddddd;">{{raspored.sub_o1}}</p></td>
                    <td style="text-align:center;">Obrok <p style="border-top: 3px solid #dddddd;">{{raspored.ned_o1}}</p></td>
                  </tr>

                  <tr>
                    <td style="text-align:center;">Ručak <p style="border-top: 3px solid #dddddd;">{{raspored.pon_r}}</p></td>
                    <td style="text-align:center;">Ručak <p style="border-top: 3px solid #dddddd;">{{raspored.uto_r}}</p></td>
                    <td style="text-align:center;">Ručak <p style="border-top: 3px solid #dddddd;">{{raspored.sri_r}}</p></td>
                    <td style="text-align:center;">Ručak <p style="border-top: 3px solid #dddddd;">{{raspored.cet_r}}</p></td>
                    <td style="text-align:center;">Ručak <p style="border-top: 3px solid #dddddd;">{{raspored.pet_r}}</p></td>
                    <td style="text-align:center;">Ručak <p style="border-top: 3px solid #dddddd;">{{raspored.sub_r}}</p></td>
                    <td style="text-align:center;">Ručak <p style="border-top: 3px solid #dddddd;">{{raspored.ned_r}}</p></td>
                    
                  </tr>

                   <tr>
                    <td style="text-align:center;">Obrok <p style="border-top: 3px solid #dddddd;">{{raspored.pon_o2}}</p></td>
                    <td style="text-align:center;">Obrok <p style="border-top: 3px solid #dddddd;">{{raspored.uto_o2}}</p></td>
                    <td style="text-align:center;">Obrok <p style="border-top: 3px solid #dddddd;">{{raspored.sri_o2}}</p></td>
                    <td style="text-align:center;">Obrok <p style="border-top: 3px solid #dddddd;">{{raspored.cet_o2}}</p></td>
                    <td style="text-align:center;">Obrok <p style="border-top: 3px solid #dddddd;">{{raspored.pet_o2}}</p></td>
                    <td style="text-align:center;">Obrok <p style="border-top: 3px solid #dddddd;">{{raspored.sub_o2}}</p></td>
                    <td style="text-align:center;">Obrok <p style="border-top: 3px solid #dddddd;">{{raspored.ned_o2}}</p></td>
                  </tr>

                  <tr>
                    <td style="text-align:center;">Večera <p style="border-top: 3px solid #dddddd;">{{raspored.pon_v}}</p></td>
                    <td style="text-align:center;">Večera <p style="border-top: 3px solid #dddddd;">{{raspored.uto_v}}</p></td>
                    <td style="text-align:center;">Večera <p style="border-top: 3px solid #dddddd;">{{raspored.sri_v}}</p></td>
                    <td style="text-align:center;">Večera <p style="border-top: 3px solid #dddddd;">{{raspored.cet_v}}</p></td>
                    <td style="text-align:center;">Večera <p style="border-top: 3px solid #dddddd;">{{raspored.pet_v}}</p></td>
                    <td style="text-align:center;">Večera <p style="border-top: 3px solid #dddddd;">{{raspored.sub_v}}</p></td>
                    <td style="text-align:center;">Večera <p style="border-top: 3px solid #dddddd;">{{raspored.ned_v}}</p></td>
                  </tr>
                </table>
                
          </div>



</template>

<script>

export default {
    props:["raspored"],
    
}
</script>

<style scoped>
.col-lg-2{
  border: 1px solid #dddddd; 
  width:230px;
  padding:7px;
  background-color: rgb(255, 255, 255);
  text-align:center;
  box-shadow: 4px 4px 4px rgb(216, 216, 216);
}

th{
  background-color:rgb(128, 194, 52);
  text-align: center;
  width:500px;
}

td{
  background-color: white;
  
}

td, th {
  border: 1px solid #dddddd;
  
  }

p{
  height:80px;
  margin:0px;
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

</style>