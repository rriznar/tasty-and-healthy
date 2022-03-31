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

export { Service,Auth }