import { Suspense } from "react";
import "./styles/App.css";
import Product from "./components/Product";
import { Routes, Route, Navigate } from "react-router-dom";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Search from "./pages/Search";
import SignUp from "./pages/SignUp";
import Cart from "./pages/Cart";
import User from "./pages/User";
import NavBar from "./components/NavBar";
import LoginProtected from "./guards/loginProtected";
import AdminProtected from "./guards/AdminProtected";
import AdminPanel from "./pages/AdminPanel";


function AppRoutes() {
  return (
    <>
     <NavBar/>
      <Suspense fallback={<p>...Loading</p>}>
      <Routes>
        <Route path="/" element={<Navigate to='/products' replace={true}/>}/>
          <Route path="products" element={<Products />}></Route>
          <Route path="search" element={<Search />}></Route>
          <Route path="product/:id" element={<Product />}></Route>
          <Route path="about" element={<p>About</p>}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="signup" element={<SignUp />}></Route>
          <Route path="cart" element={<LoginProtected><Cart/></LoginProtected>}></Route>
          <Route path="signup" element={<SignUp />}></Route>
          <Route path="user" element={<User/>}></Route>
          <Route path="admin" element={<AdminProtected><AdminPanel/></AdminProtected>}></Route>
       
      </Routes>
      </Suspense>
    </>
  );
}

export default AppRoutes;
