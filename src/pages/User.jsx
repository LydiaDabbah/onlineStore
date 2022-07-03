
import { useEffect } from 'react';
import { useAuthContext } from '../context/AuthContext'

const User = () => {
 
const {getUserData,userData,authorized:user}=useAuthContext()


useEffect(() => {
  if(user){
  const getData = async () => {
    await getUserData(window.localStorage.token);
  };
  getData();
}
}, [user]);

  if(!user) return <p>No hay usuario activo</p>

  const activeUser=userData.data.user

  return (
  
    <>
    
    <p>Nombre: {activeUser.first_name} {user.last_name}</p>
    <p>Email: {activeUser.email}</p>
    <p>Role: {activeUser.role}</p>
  </>


  )
}

export default User