import React, { useEffect, useState } from 'react'

const Github = () => {
   const [ data , setData ] = useState()
    useEffect(()=>{
        fetch(`https://api.github.com/users/hiteshchoudhary`)
        .then((response)=> response.json)
        .then(data =>{
          console.clear()
            
            setData(data)
            console.log(data)
        })
    },[])
  return (
    <div>
        <h1 className=' bg-slate-500 text-white'> Github followers : { } </h1>
    </div>
  )
}

export default Github