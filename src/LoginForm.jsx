import { useState } from "react";
import { Navigate } from "react-router-dom";
import { LoginApi } from "./services/Api";

import { useNavigate } from "react-router-dom";

function LoginForm(){


    const registernav = useNavigate();

    const initialstate={email:'',password:''}

   // state =this.initialstate
  const [email,setEmail]=useState("")

  const [password,setPassword]=useState("")



    const handleSubmit=(e)=>{
         e.preventDefault();    

         if(!email||!password ){
          setError("Both Fields are required ")
         }


            this.setEmail(initialstate);
       this.setPassword(initialstate)
        
         
        //  console.log("yoga",email,password)
              LoginApi(email,password).then((response)=>{
                  console.log(response)

                  
              }).catch((error)=>{
                    console.log(error)
              })


    }

    const navigate=(e) =>{

      e.preventDefault(); 
    
      console.log("navigate");
       registernav('/register')
      // return (<Navigate  to ='/register'/>)
    }

    return (
<> 

 <div className="flex h-full ">
    {/* <!-- Left Side (Image) --> */}
    <div className="w-1/2 bg-gray-200">
      <img 
        src="https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2232&auto=format&fit=crop" 
        alt="Background" 
        className="w-full h-full object-cover"
      />
    </div>
{/* 
    <!-- Right Side (Login Form) --> */}
    <div className="w-1/2 flex items-center justify-center bg-white p-10 ">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Welcome Back</h1>
        
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email" 
              id="email" 
                   value={email}
              placeholder="your@email.com" 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              onChange={(e)=>{setEmail(e.target.value)}}
             
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input 
              type="password" 
              id="password" 
              name="password"
                     value={password}
              placeholder="••••••••" 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
               onChange={(e)=>{setPassword(e.target.value)}}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input 
                type="checkbox" 
                id="remember" 
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">Remember me</label>
            </div>

            <a href="#" className="text-sm text-blue-600 hover:text-blue-500">Forgot password?</a>
          </div>

          <button 
            type="submit" 
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          
          onClick={handleSubmit}>
            Sign in
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          Don't have an account? 
          <a href="#" className="font-medium text-blue-600 hover:text-blue-500" onClick={navigate}>Sign up</a>
        </div>
      </div>
    </div>
  </div>

     
</>


    )
}

export default LoginForm;