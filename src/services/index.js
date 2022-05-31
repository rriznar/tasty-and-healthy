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
            tip_obroka: doc.tip_obroka
        }    
        });
        console.log("Podaci data: ",data);
        return data;
    }
}

export { Service,Auth,Posts, data }