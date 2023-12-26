import React from 'react'
import img1 from '../assets/1.jpg'

const DevelopSec = () => {
  return (
    <div className='container'>
        <div className="dev-head">
            <h1>Development and design resources</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam praesentium tempore officiis accusantium dolores Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, debitis.
            </p>
        </div>
        <div className="dev-card mt03 mb-5">
            <div className="row justify-content-between ">
                <div className="col-4 ">
                    <img src={ img1 } alt="" className='bg-warning  img-fluid  '/>
                    <div className="tag"> Design Course</div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, rerum.</p>
                </div>
                <div className="col-4">
                    <img src={ img1 } alt="" className='bg-warning  img-fluid ' />
                    <div className="tag">Design Course</div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, rerum.</p>
                </div>
                <div className="col-4">
                    <img src={ img1 } alt="" className='bg-warning  img-fluid ' />
                    <div className="tag  ">Design Course</div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, rerum.</p>
                </div>
                
            </div>

        </div>
    </div>
  )
}

export default DevelopSec