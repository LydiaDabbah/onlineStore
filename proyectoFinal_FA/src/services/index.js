   import axios from 'axios'

const baseURL='https://ecomerce-master.herokuapp.com/api/v1/item'
const reqApi = async (id='') => {

  const idUrl=id?`/${id}`:''
  const request = await axios.get(baseURL+idUrl)
  console.log(baseURL+idUrl)
  return request

}



export { reqApi }

