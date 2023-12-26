import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light text-white bg-primary" 
    style={
      {padding : "10px 105px",
       fontSize : '1.3rem'
    }}>
  <div className="container-fluid">
    <a className="navbar-brand fs-2 fw-bold" href="#" >Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link  active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">Products</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">Contact Us</a>
        </li>
        
        </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn bg-success text-white" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Navbar;