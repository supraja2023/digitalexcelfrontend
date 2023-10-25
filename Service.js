import axios from "axios";

export async function getData()
{
   return await axios.get("http://localhost:3000/getAllProducts");
}
export async function deleteData(id)
{
   return await axios.delete(`http://localhost:3000/deleteProduct/${id}`);

}
export async function getDataByStandard(standard)
{
   return await axios.get(`http://localhost:3000/getControlsByStandard/${standard}`);

}
export async function postData(data)
{
   return await axios.post("http://localhost:3000/addProduct",data,{headers:{'Content-Type':'application/json'}}
   )
}
export async function putData(subcontrolId ,data)
{
   return await axios.put(`http://localhost:3000/updateSubcontrol/${subcontrolId }`,data,{headers:{'Content-Type':'application/json'}}
   )
}