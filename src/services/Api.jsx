import  axios  from "axios"




const Loginurl ='http://localhost:5000/api/user'

export const LoginApi =(email,password)=>{

    let data ={email :email,password:password}

   return  axios.post(loginurl,data)
}

