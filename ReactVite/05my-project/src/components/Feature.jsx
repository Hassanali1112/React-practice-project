import React from 'react'

import './Feature.css';

const Feature = () => {
  return (
    <div className='container w-80 feature'>
        <div className='feature-head d-flex flex-column justify-content-center  my-5'> 
        <h1 className='fw-bolder'>Feature</h1>
        <h1 className='fw-bolder stoke'>projects</h1>
        </div>
        <div className="row  justify-content-between pt-5 gap-1 ">
            <div className="col-5 bg-warning feat-left">
                <div className="feat-left-elm">
                    <h4>Riyadh</h4>
                    <p className="h1 my-4 px-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, animi.</p>
                    <p className="h4">lorm5</p>
                </div>
                <div className="feat-left-elm">
                    <h4>Riyadh</h4>
                    <p className="h1 my-4 px-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, animi.</p>
                    <p className="h4">lorm5</p>
                </div>
                <div className="feat-left-elm">
                    <h4>Riyadh</h4>
                    <p className="h1 my-4 px-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, animi.</p>
                    <p className="h4">lorm5</p>
                </div>
                <div className="feat-left-elm">
                    <h4>Riyadh</h4>
                    <p className="h1 my-4 px-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, animi.</p>
                    <p className="h4">lorm5</p>
                </div>
               
            </div>
            <div className="col-5 bg-info feat-right">
                
            </div>
        </div>

    </div>
  )
}

export default Feature