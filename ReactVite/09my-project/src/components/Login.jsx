import React, { useState , useContext } from 'react';
import UserContext from '../UserContext/UserContext';

const Login = () => {
   const [username , setUsername] = useState('')
   const [userPwd , setUserPwd] = useState('')
   
   const { setUser } = useContext(UserContext)

   const handleSubmit = (e) => {
    e.preventDefault();
    setUser({username , userPwd})
   }
  return (
    <div>
        <h2>Login</h2>
        <div>
            <label htmlFor="name">Name : </label>
            <input type="text" placeholder='user name' value={ username} onChange={(e)=>{setUsername(e.target.value)}}/>
        </div>
        <div>
            <label htmlFor="pwd">Password : </label>
            <input type="password" placeholder='user password' value={ userPwd} onChange={(e)=>{setUserPwd(e.target.value)}}/>
        </div>
        <input type="submit" value="submit" onClick={ handleSubmit } />
    </div>
  )
}

export default Login