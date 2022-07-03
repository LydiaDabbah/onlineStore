import axios from "axios";
import { useState, useContext, createContext, useEffect } from "react";
import { reqUserData } from "../services";
import { isValidToken, setRole, setSession } from "../utils/jwt";
const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [authorized, setAuthorized] = useState(()=>{
    const token = window.localStorage.token || ''
    return !!(token && isValidToken(token))
  });

  const [init, setInit] = useState(false); // para ver si se actualizam
  const [userData, setUserData] = useState(null);


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
    setRole(user.role)
    setAuthorized(true);
    console.log("inicio de sesión correcto");
  };

  const logoutAuth = () => {
    window.localStorage.removeItem("token")
    window.localStorage.removeItem("role");
    setAuthorized(false);
    setUserData(null)
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

  const signUp=async({first_name,last_name,birth_date,gender,email,password})=>{

      const response = await axios.post(
        "https://ecomerce-master.herokuapp.com/api/v1/signup",
        {
          first_name,
          last_name,
          birth_date,
          gender,
          email,
          password,
        }
      );

    }
  
/*
  const getAllUsers = async (token) => {
    try {
      const data = await reqAllUsers(token);
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
*/

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const role=window.localStorage.getItem("role")
   
    setInit(true);

    try {
      if (token && isValidToken(token)) {
        setSession(token);
        if(role)setRole(role)
        setAuthorized(true);
        console.log("sesión activa",role);

      } else {
        console.log("no hay sesión");
        setAuthorized(false);
        setUserData(null)
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
    signUp,

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
