import { useAuthContext } from '../context/AuthContext'
import { reqAddProduct } from '../services'
import { useEffect, useRef } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";// investigar
import "../styles/loginStyle.css";

const AdminPanel = () => {

    const{authorized:user}=useAuthContext()
  
    const addProduct = async (data,token) => {
 
       
    
        try {
          await reqAddProduct(data,token)
        } catch (error) {
          console.log(error);
        }
      };

      const refIsActive=useRef()
      const refProductName=useRef()
      const refDescription=useRef()
      const refPrice=useRef()
      const refCategory=useRef()
      const refBrand=useRef()
      const refSku=useRef()
      const refImage=useRef()

      const navigate=useNavigate()

      const handleSubmit = async (event) => {
        event.preventDefault()

        const defaultValues = {
            isActive: refIsActive.current.value || true,
            product_name: refProductName.current.value,
            description: refDescription.current.value,
            price: refPrice.current.value,
            category: refCategory.current.value,
            brand: refBrand.current.value,
            sku: refSku.current.value ||'ABCDFGHI-123JKL',
            image:refImage.current.value ||'https://media.istockphoto.com/photos/wooden-modern-table-isolated-on-white-background-folding-kitchen-picture-id1214818861?s=612x612'
        };
        console.log(defaultValues);
        try {
          await addProduct(defaultValues,window.localStorage.token)
          
        } catch (error) {
            console.log(error)
        }finally{
          event.target.reset()
          console.log('producto gregado')
        }
      }


  return (
    <div
      className="container mt-5 "
      style={{ width: "450px", display: "grid", gap: ".5rem" }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          display: "grid",
          gap: "1.5rem",
        }}
      >
        <div className="text-center">
          <h3 className="m-0">New product</h3>
         
        </div>
        <div>
        <div ref={refIsActive} className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="IsActive"  value='true'/>
  <label className="form-check-label" htmlFor="inlineRadio1">Active</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="IsActive" id="inlineRadio2" value="false"/>
  <label className="form-check-label" htmlFor="inlineRadio2">Not active</label>
</div>
        </div>
        <div>
          <input
          ref={refProductName}
            name="Product_name"
            placeholder="Product name"
            type="text"
            className="form-control"
            autoComplete="off"
          />
        </div>
        <div>
          <input
            ref={refDescription}
            name="Description:"
            placeholder="Description"
            type="text"
            className="form-control"
          />
        </div>
        <div>
          <input
          ref={refPrice}
            name="Price"
            placeholder="Price"
            type="number"
            className="form-control"
            autoComplete="off"
          />
        </div>
        <div>
          <input
          ref={refCategory}
            name="Category"
            placeholder="Category"
            type="text"
            className="form-control"
            autoComplete="off"
          />
        </div>
        <div>
          <input
          ref={refBrand}
            name="Brand"
            placeholder="Brand"
            type="text"
            className="form-control"
            autoComplete="off"
          />
        </div>
        <div>
          <input
          ref={refSku}
            name="Sku"
            placeholder="Sku"
            type="text"
            className="form-control"
            autoComplete="off"
          />
        </div>
        <div>
        <label htmlFor="image"></label>
      <input  ref={refImage} type="file" className="form-control-file" id="image"/>
        </div>
        
        <button type="submit" className="w-100 btn btn-dark">
          Submit
        </button>
      </form>
      
    </div>
   
  )
}

export default AdminPanel