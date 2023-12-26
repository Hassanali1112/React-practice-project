import React from 'react'
import { useParams } from 'react-router-dom'


const User = () => {
  const { userid } = useParams();
  return (
    <div className=' bg-gray-700 text-center p-5 text-5xl mx-36 rounded border border-green-500 m-auto'>user : { userid }</div>
  )
}

export default User