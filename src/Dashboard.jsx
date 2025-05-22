import { useNavigate } from 'react-router-dom'
import Table from './Table'
import UserManagement from './userManagement'
import { useState } from 'react';
import {usermanagementapi} from './services/usermanagementservice'
import { useEffect } from 'react';
import { getAllUsers } from './services/usermanagementservice';
import { deleteUserApi } from './services/usermanagementservice';
function dashboard(){

const [showuser,setShowuser]=useState(false);
const [user,setuser]=useState([]); //writing a user to store values 
const [edituser,setedituser]=useState("")


useEffect(() => {
  getAllUsers()
    .then((response) => {
      console.log('Fetched Users:', response.data); // ✅ Check here
      setuser(response.data);
    })
    .catch((error) => {
      console.error('Failed to fetch users:', error); // ❌ Error log
    });
}, []);

//creating a functiomn to store values and pass a new value to the user management
const addUser = async(initialstate)=>{

  // here i have using the async and aeait and with edit data boolean 
 const isEdit = edituser != null && edituser !== "";

  console.log(edituser);




   usermanagementapi(initialstate, isEdit)
    .then((res) => {
      const savedUser = res.data;

      let updatedUsers;
      if (isEdit) {
        updatedUsers = user.map((u, i) => i === edituser ? savedUser : u);
      } else {
        updatedUsers = [...user, savedUser];
      }

      setuser(updatedUsers);
      setedituser(null);
      setShowuser(false);
    })
    .catch((err) => {
      console.error("API call failed:", err);
    });
//   try {
//  if(editdata){
//        editdata ? 
//        await usermanagementapi.update(initialstate.id,initialstate) :
//        await usermanagementapi.create(initialstate)

//  }
//      setuser(user => isedit  ? 
//       user.map(u => u.id===index ? Response.data :u ) :
//       [...user,Response.data]
//     )
//     setedituser(null)
//     setShowuser(false);
//   }

//   catch(err){
//    console.log(err)
//   }
    // if(edituser !==null){
       
    // user[edituser]=initialstate;//weare changing the initial update the data we are selectinh
    // // setuser(user);
    // setedituser(null)
    // }
    // else {
    // setuser([...user,initialstate]);
  

    // }


 
}

 const removeCharacter= async(index)=>{


  const userToDelete = user[index];
  console.log(userToDelete)
  if (!userToDelete?.id) return;
const  id= userToDelete.id
  deleteUserApi(id)
    .then(() => {
      const updatedList = user.filter((_, i) => i !==index );
      setuser(updatedList);
    })
    .catch((err) => {
      console.error("Delete failed:", err);
    });
//     let data =user[index] //index matum vangaren 
// // let flitereduser=user.filter((_,i)=>
// //  i!==index)

// // setuser(flitereduser)
// if(!data==null){ //if data la illa return 
//   return
// }

// try {
//      //step:1 call the api
//      //step 2 set the user 
//       await usermanagementapi.delete(data.id);

//       setuser( user=>
//         user.filter (u => u.id === data.index )
//       )
   



// }
// catch(err){
// console.log ("error")
// }

}

const editCharacter=(index)=>{
/// giving the index value to the state  

setedituser(index);//
//setedituser(user[index].id);

    setShowuser(true);
}

const usernav=useNavigate();

    return (
        <>

<div className="p-4 border border-gray-300 ">
 <h1 className="text-xl  font-bold font-inter"> UserManagement  System </h1>
</div>

 <div className="flex justify-between items-start  gap-2 p-4   shadow-md">
      <input
        type="text"
        placeholder="Search..."
        className="w-96 p-2.5"
      />

      <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Search</button>
      <button type="button" onClick={()=> setShowuser(true)}
      className=" flex  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">AddUser</button>
 
    </div>

{showuser && (
    

//         <div id="authentication-modal" tabIndex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
//     <div className="relative p-4 w-full max-w-md max-h-full">
      
//         <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
         
//             <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
//                 <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
//                     Sign in to our platform
//                 </h3>
//                 <button type="button" className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
//                     <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
//                         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
//                     </svg>
//                     <span className="sr-only">Close modal</span>
//                 </button>
//             </div>
       
//             <div className="p-4 md:p-5">
//                 <form className="space-y-4" action="#">
//                     <div>
//                         <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
//                         <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
//                     </div>
//                     <div>
//                         <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
//                         <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
//                     </div>
//                     <div className="flex justify-between">
//                         <div className="flex items-start">
//                             <div className="flex items-center h-5">
//                                 <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
//                             </div>
//                             <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
//                         </div>
//                         <a href="#" className="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
//                     </div>
//                     <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
//                     <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
//                         Not registered? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     </div>
// </div> 

<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    
    <div className="bg-white p-6 rounded-lg w-full max-w-md">
      <UserManagement userfunction={addUser}  editon ={ edituser !== null ?  user[edituser] :null}  //iam just passing thge va;;ue to setting top into here
      />
      <button 
        onClick={() => setShowuser(false)}
        className="mt-4 bg-gray-300 px-4 py-2 rounded"
      >
        Cancel
      </button>
    </div>
  </div>
)
    }


    

        <Table  user={user} removeCharacter={removeCharacter} editCharacter={editCharacter} /> 

        {/* removeCharacter={removeCharacter} */}

     
         
        </>
    )
}

export default dashboard