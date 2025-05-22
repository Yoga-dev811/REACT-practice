import axios from "axios"

const BASE_URL ='http://localhost:5000/api/usermanagement'
export const usermanagementapi =(initialstate,isEdit)=>{
    

      console.log('[1] API Call - Data:', JSON.stringify(initialstate), 'IsEdit:', isEdit);
// create : (data)=> axios.post(usermanagementurl,data),

// update : (id,data)=>axios.put(`${usermanagementurl}/${id}`,data),

// delete : (id) =>axios.delete(`${usermanagementurl}/${id}`),

// getAll : () => axios.getAll(usermanagementurl)
 if (isEdit && initialstate.id) {
        console.log('[2] Making PUT Request');
    return axios.put(`${BASE_URL}/${initialstate.id}`,initialstate);
  } else {
        console.log('[2] Making POST Request');
    return axios.post('http://localhost:5000/api/usermanagement',initialstate );
  }
}

// ❌ Delete User
export const deleteUserApi = (id) => {
     //const cleanId = Number(id)
  return axios.delete(`http://localhost:5000/api/usermanagement/${id}`);
};

// ✅ Get All Users
export const getAllUsers = () => {
  return axios.get(BASE_URL);
};



