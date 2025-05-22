import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { registerapi } from "./services/registerapi";

function register(){

const [email,setEmail]=useState("")

const [name,setName]=useState("")

const [password,setPassword]=useState("")


const dashboardnav =useNavigate();
    const navigate=(event)=>{

        event.preventDefault();

        console.log(email,password,name);
      if(email=="" || password=="" || name =="")
     
        {
           console.log("All fields are requird ");
      
        }
else {
          console.log(email,name,password)

          registerapi(email,password,name).then((response)=>{
            console.log(response)
            dashboardnav('/dashboard')

          }).catch ((error)=>{

          })
      
}
    }


   const handleInput=(event)=>{
      setEmail(event.target.value)     
    }

    return(
      
        

<div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Create Register</h2>
        
        <form>
          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              id="email"
              onChange={(event)=>{
      setEmail(event.target.value)     
    }}
             //  value ={email}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter your email"
            />
          </div>

          {/* Name Input */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name:
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter your name"
              onChange={(event)=>{setName(event.target.value)}}
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password:
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter your password"
              onChange={(event)=>{setPassword(event.target.value)}}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
             onClick={navigate}
          >
            Register
          </button>
        </form>
      </div>
    </div>

    )


}


export default register