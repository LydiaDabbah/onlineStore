import { useEffect, useRef } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import "../styles/loginStyle.css";

const Login = () => {
  const { loginAuth, authorized:user } = useAuthContext();
  const [error, setError] = useState(null);

  const navigate = useNavigate()
  useEffect(()=>{
 
    if(user){
      navigate('/',{replace:true})
    }
  },[user])
  
 
  const defaultValues = {
    email: "danylo@gmail.com",
    password: "gatito123",
  };

  const refEmail=useRef()
  const refPassword=useRef()
  const handleSubmit = async (event) => {
    event.preventDefault();

    const refValues = {
      email: refEmail.current.value,
      password: refPassword.current.value,
    };

    try {
      await loginAuth(refValues);
    } catch (error) {
      setError("Incorrect email or password");
    }
  };

  return (
    <div
      className="container mt-5 "
      style={{ width: "450px", display: "grid", gap: "2rem" }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          display: "grid",
          gap: "1.5rem",
        }}
      >
        <div className="text-center">
          <h3 className="m-0">Login</h3>
          {error && <p className="m-1 text-danger">{error}</p>}
        </div>
        <div>
          <input
          ref={refEmail}
            name="username"
            placeholder="Username"
            type="text"
            className="form-control"
            autoComplete="off"
          />
        </div>
        <div>
          <input
          ref={refPassword}
            name="password"
            placeholder="Password"
            type="password"
            className="form-control"
          />
        </div>
        <button type="submit" className="w-100 btn btn-dark">
          Login
        </button>
      </form>
      <div className="text-center">
        <p>Don´t you have an account?</p>
        <Link to={"/signup"}>
          <button type="link" className="w-100 btn btn-white border">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
