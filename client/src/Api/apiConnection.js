import axios from "axios";

export const getAllData=async()=>{
    const response=await axios.get('http://localhost:3000/api')
   return response.data
}