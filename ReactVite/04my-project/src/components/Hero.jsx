import React from 'react'


const Hero = (props) => {

  return (
    <div className='container w-100 h-100 mt-4 '>
        <div className='row justify-content-evenly gap-3 align-items-center bg-success p-3'>
            <div className=' col-sm-8 col-md-5 col-lg-5' style={{border : '3px solid black', padding : "15px", textAlign: "center"}}>
                <img src={ props.img} alt="" className='img-fluid'/>
                <p>{props.des}</p>
            </div>
      
             
        </div>
       
    </div>
  )
}

export default Hero