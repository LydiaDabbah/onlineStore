   import axios from 'axios'


const reqUserData =async(token)=>{
  const request = await axios.get('https://ecomerce-master.herokuapp.com/api/v1/user/me',
  { headers: 
    {Authorization: `JWT ${token}`}})
  return request
}

const reqAllUsers =async(token)=>{
  const request = await axios.get('https://ecomerce-master.herokuapp.com/api/v1/user/',
  { headers: 
    {Authorization: `JWT ${token}`}})
  return request
}


 /*  
const baseURL='https://ecomerce-master.herokuapp.com/api/v1'
const reqApi = async (id='') => {

  const idUrl=id?`/item/${id}`:'/item'
  const request = await axios.get(baseURL+idUrl)
  return request

}
*/

export { reqUserData,reqAllUsers }

