import axios from "axios";
import $router from "@/router";

let Service = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 1000
})

Service.interceptors.request.use((request)=>{
    try {
        request.headers['Authorization'] = 'Bearer ' + Auth.getToken();
    } catch (e) {
        console.error(e);
    }
    return request;
})

Service.interceptors.response.use((response)=> response, (error)=>{
    if(error.response.status == 401 || error.response.status == 403){
        Auth.logout();
        $router.go();
    }
});

let Posts = {
    async getOne(id){
        let response = await Service.get(`/posts/${id}`);
        let doc = response.data;
        return {
            id: doc._id,
            naslov: doc.title,
            datum: doc.date,
            tekst:doc.text
        }
    }
}

let Auth = {
    async login(username,password){
        let response = await Service.post("/auth",{
            username: username,
            password: password,
        });
        let user = response.data
        localStorage.setItem("korisnik", JSON.stringify(user));

        return true;
    },
     async registerUser(name,username,passowrd){
        let response = await Service.post("/users",{
            name:name,
            username:username,
            password:passowrd
            
        })
        let reg =response.data
        localStorage.setItem("registracija", JSON.stringify(reg));
       
        return true;
    },

    logout(){
           localStorage.removeItem("korisnik");
      },
      getUser(){
          return JSON.parse(localStorage.getItem("korisnik"))
      },
      getToken(){
        let user = Auth.getUser();
        if(user && user.token){
            return user.token;
        }
        else{
            return false;
        }
      },
      authenticated(){
        let user = Auth.getUser()
        if(user && user.token){
            return true;
        }
        return false;
      },

      state:{
          get authenticated(){
              return Auth.authenticated();
          },
          get userEmail(){
            let user = Auth.getUser();
            if(user){
                return user.username
            }
            return Auth.getUser()
          }
      }

};

let data = {
    dodaj_BMI(final_BMI)
    {
        return Service.post('/BMI', final_BMI);
    },

    async dohvati_BMI()
    {
        let response = await Service.get(`/BMI`);
        console.log(response);
        let data = response.data;
        
        data=data.map((doc)=>{
        return {
            id: doc._id,
            final: doc.final
        }    
        });
        console.log("Podaci data: ",data);
        return data;
    },

    async dohvati_raspored()
    {
        let response = await Service.get(`/raspored`);
        console.log(response);
        let data = response.data;
        
        data=data.map((doc)=>{
        return {
            id: doc._id,
            broj_kalorija: doc.broj_kalorija,
            jelo: doc.jelo,
            jelo2: doc.jelo2
            
        }    
        });
        console.log("Podaci data: ",data);
        return data;
    },

    async dohvati_postove()
    {
        let response = await Service.get(`/posts`);
        console.log(response);
        let data = response.data;
        
        data=data.map((doc)=>{
        return {
            id: doc._id,
            naslov: doc.naslov,
            slika: doc.slika,
            datum: doc.datum,
            tekst: doc.tekst
        }    
        });
        console.log("Podaci data: ",data);
        return data;
    },
    async dohvati_raspored_BMI()
    {
        let response = await Service.get(`/rasporedi_BMI`);
        console.log(response);
        let data = response.data;
        
        data=data.map((doc)=>{
        return {
            id: doc._id,
            bmi_1: doc.bmi_1,
            bmi_2: doc.bmi_2,
            kal:doc.kal,
            pon_d : doc.pon_d,
            uto_d : doc.uto_d,
            sri_d : doc.sri_d,
            cet_d : doc.cet_d,
            pet_d : doc.pet_d,
            sub_d : doc.sub_d,
            ned_d : doc.ned_d,
            pon_o1 : doc.pon_o1,
            uto_o1 : doc.uto_o1,
            sri_o1 : doc.sri_o1,
            cet_o1 : doc.cet_o1,
            pet_o1 : doc.pet_o1,
            sub_o1 : doc.sub_o1,
            ned_o1 : doc.ned_o1,
            pon_r : doc.pon_r,
            uto_r : doc.uto_r,
            sri_r : doc.sri_r,
            cet_r : doc.cet_r,
            pet_r : doc.pet_r,
            sub_r : doc.sub_r,
            ned_r : doc.ned_r,
            pon_o2 : doc.pon_o2,
            uto_o2 : doc.uto_o2,
            sri_o2 : doc.sri_o2,
            cet_o2 : doc.cet_o2,
            pet_o2 : doc.pet_o2,
            sub_o2 : doc.sub_o2,
            ned_o2 : doc.ned_o2,
            pon_v : doc.pon_v,
            uto_v : doc.uto_v,
            sri_v : doc.sri_v,
            cet_v : doc.cet_v,
            pet_v : doc.pet_v,
            sub_v : doc.sub_v,
            ned_v : doc.ned_v

        }    
        });
        console.log("Podaci data: ",data);
        return data;
    }
}

export { Service,Auth,Posts, data }