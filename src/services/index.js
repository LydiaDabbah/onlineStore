   import axios from 'axios'

   const baseURL='https://ecomerce-master.herokuapp.com/api/v1'
const reqUserData =async(token)=>{
  const request = await axios.get(`${baseURL}/user/me`,
  { headers: 
    {Authorization: `JWT ${token}`}})
  return request
}

const reqAllUsers =async(token)=>{
  const request = await axios.get(`${baseURL}/user`,
  { headers: 
    {Authorization: `JWT ${token}`}})
  return request
}

const reqAddProduct=async({isActive,product_name,description,price,category,brand,sku,image},token)=>{
  const request=await axios.post(`${baseURL}/item`,{
    isActive,
    product_name,
    description,
    price,
    category,
    brand,
    sku,
    image 
  },
  { headers: 
    {Authorization: `JWT ${token}`}})
}






 /*  
const baseURL='https://ecomerce-master.herokuapp.com/api/v1'
const reqApi = async (id='') => {

  const idUrl=id?`/item/${id}`:'/item'
  const request = await axios.get(baseURL+idUrl)
  return request


   
}
}
*/

export { reqUserData,reqAllUsers,reqAddProduct }

