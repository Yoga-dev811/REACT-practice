import { useEffect, useState } from "react";

function UserManagement({userfunction,editon}){

 

  //usestate and array and function  

  //changing thezse because to mainytail edit value 
const [email,setEmail]=useState(editon?.email||"");
const [name,setName]=useState(editon?.name||"");
const [role,setRole]=useState(editon?.role||"")

//changing the incoming value 
useEffect(()=>{
  setEmail(editon?.email||"")
  setName(editon?.name||"")
  setRole(editon?.role||"")
},[editon])


  const userSubmit=(e)=>{
    e.preventDefault();
       
   const initialstate= {
      email :email,
      name:name,
      role:role 
    }


    userfunction(initialstate);
 if (!editon) {
      setEmail("");
      setName("");
      setRole("");
    }
     console.log(initialstate);

     
  }
    return(
        <>

        <form className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
  <div className="mb-4">
    <h1 className="font-inter text-md font-bold"> Add user</h1>
    <label htmlFor="name" className="block text-gray-700 mb-2">Name:</label>
    <input
      type="text"
      id="name"
      name="name"
      value={name}
      onChange={(e)=>setName(e.target.value)}
      className="w-full p-2 border border-gray-300 rounded-md"
      
    />
   
  </div>

  <div className="mb-4">
    <label  htmlFor="email" className="block text-gray-700 mb-2">Email:</label>
    <input
      type="email"
      id="email"
      name="email"
       value={email}
     onChange={(e)=>setEmail(e.target.value)}
      className="w-full p-2 border border-gray-300 rounded-md"
      
    />
  
  </div>

  <div className="mb-4">
    <label htmlFor="role" className="block text-gray-700 mb-2">role:</label>
    <input
      type="role"
      id="role"
      name="role"
     value={role}
       onChange={(e)=>setRole(e.target.value)}
      className="w-full p-2 border border-gray-300 rounded-md"
   
    />
   
  </div>

  <button
    type="submit"
    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
    onClick={userSubmit}
  >
    Submit
  </button>
</form>
        </>
    )

}

export default UserManagement