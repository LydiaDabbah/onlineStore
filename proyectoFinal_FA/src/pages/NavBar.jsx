import { useRef } from "react"
import { Link, Outlet } from "react-router-dom"
import useFilterContext from "../hooks/useFilterContext"

function NavBar() {


  const searchRef=useRef()
  console.log(useFilterContext())
  const {setFilterValue}=useFilterContext()

  const handleSubmit = (event) => {
    event.preventDefault()
    setFilterValue(searchRef.current.value)
  }


  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light sticky-top" style={{backgroundColor:"#B0A9B0"}}>
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" to='/home' >Home</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link active" to='/about' >About</Link>
          </li>
          
          
        </ul>
        <form onSubmit={handleSubmit} className="d-flex">
          <input ref={searchRef} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-dark " type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
 

  <Outlet/>
  </div>

  )
}

export default NavBar