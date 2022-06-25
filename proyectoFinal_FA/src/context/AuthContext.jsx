import axios from "axios";
import { useState, useContext, createContext, useEffect } from "react";
import { reqAllUsers, reqUserData } from "../services";
import { isValidToken, setSession } from "../utils/jwt";
const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [authorized, setAuthorized] = useState(false);

  const [init, setInit] = useState(false); // para ver si se actualizam
  const [userData, setUserData] = useState(null);
  const[userRole,setUserRole]=useState('')

  const loginAuth = async ({ email, password }) => {
    const response = await axios.post(
      "https://ecomerce-master.herokuapp.com/api/v1/login",
      {
        email,
        password,
      }
    );

    const user = response.data;

    setSession(user.token); // se guarda en local_storage
    setAuthorized(true);
    setUserRole('ADMIN')
    console.log("inicio de sesión correcto");
  };

  const logoutAuth = () => {
    window.localStorage.removeItem("token");
    setAuthorized(false);
    setUserData(null)
    setUserRole('')
    console.log("sesion terminada");
  };

  const getUserData = async (token) => {
    try {
      const data = await reqUserData(token);
      setUserData(data);
    } catch (e) {
      console.log(e);
    }
  };

  const getAllUsers = async (token) => {
    try {
      const data = await reqAllUsers(token);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if(authorized){
    const getData = async () => {
      await getAllUsers(window.localStorage.token);
    };
    getData();
  }
  }, [authorized]);


  useEffect(() => {
    const token = window.localStorage.getItem("token");
    setInit(true);

    try {
      if (token && isValidToken(token)) {
        setSession(token);
        setAuthorized(true);
        setUserRole('ADMIN')
        console.log("sesión activa");

      } else {
        console.log("no hay sesión");
        setAuthorized(false);
        setUserData(null)
        setUserRole('')
      }
    } catch (error) {
      console.log("catch error");
      setAuthorized(false);
    }

    
    
  }, []);

  const initialValues = {
    loginAuth,
    authorized,
    logoutAuth,
    userData,
    getUserData,
    getAllUsers,
    userRole
  };

  return (
    <AuthContext.Provider value={initialValues}>
      {children}
    </AuthContext.Provider>
  );
};

// creo el hook dentro del contexto para evitar crear un archivo
const useAuthContext = () => {
  return useContext(AuthContext);
};

export { useAuthContext, AuthProvider };
