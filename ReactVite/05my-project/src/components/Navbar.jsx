import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar nav-bg">
    <div className="container-fluid d-flex justify-content-between">
      <div className='fw-bold fs-3'>cuberto</div>
      <div className='fs-5 d-flex gap-3'>
        <h3>menu</h3>
        <i class="bi bi-list pt-1"></i>
        </div>
    </div>
  </nav>
  )
}

export default Navbar