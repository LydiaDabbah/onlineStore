import jwtDecode from 'jwt-decode'
//npm i jwt-decode

//se valida el token con jwt. 
const isValidToken = (token) => {
  if (!token) {
    return false
  }

  const { exp } = jwtDecode(token)
 
  const currentTime = Date.now() / 1000

  return exp > currentTime // si la fecha de expiracion es mayor que la de hpy me manda true 
}

// se manda la sesion a Local storag con el nombre de "token" y el onjeto token
const setSession = (token) => {
  if (token) {
    window.localStorage.setItem('token', token)
  } else {
    window.localStorage.removeItem('token')
  }
}

export { isValidToken, setSession }