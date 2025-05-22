import axios from 'axios';

export const  registerapi =(email,password,name)=>{

let data ={email,password,name}

 return axios.post('http://localhost:5000/api/register',data)// return 
      
}

