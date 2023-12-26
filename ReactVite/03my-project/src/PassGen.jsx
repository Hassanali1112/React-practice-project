import React, { useCallback, useEffect, useRef, useState } from 'react'

import './PassGen.css';
const PassGen = () => {
const [length, setLength] = useState(8);
const [numberAllowed, setNumberAllowed] = useState();
const [characterAllowed, setCharacterAllowed] = useState();
const [password, setPassword] = useState();

const passwordGenerator = useCallback(() =>{
    let pass = '';
    let str = ' ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwzyz';

    if (numberAllowed) str += '012356789';
    if(characterAllowed) str += '/_)(*&^%$#@!`~[]{}';
    
    for (let i = 1; i <= length; i++) {
      
        let char = Math.floor(Math.random() * str.length +1);
        pass += str.charAt(char);
        
    }
   
    setPassword (pass);

   
},[length,numberAllowed,characterAllowed,setPassword])

useEffect(() =>{
  passwordGenerator()
},[length,numberAllowed,characterAllowed,passwordGenerator])            
//  clipboard copy functionality
const passwordRef = useRef(null);

const copyPasswordToClipBoard = useCallback(()=>{
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0,40);
  
  window.navigator.clipboard.writeText(password);
},[password])

  return (
    <div className='container '>
        <h1 style={{color : 'green'}}>Password Generator</h1>
        <div className='pass-input '>
          <input type="text" className='flex w-100 rounded-end rounded-pill border-0' value={password}  ref={passwordRef} readOnly
          min={0}
          max={40}/>
          <input type="button" value="copy" className='bg-primary text-white border-0 rounded-pill rounded-start px-3 fs-5 py-1  ' onClick={copyPasswordToClipBoard}/>
        </div>
        <div className=' d-flex gap-1'>
        <input type="range" value={length} min={6} max={40} onChange={(e)=>{ setLength(e.target.value)}} />
        <label htmlFor="lenghtInput">Length : {length}</label>
        <input type="checkbox" defaultChecked={numberAllowed} onChange={() =>{
          setNumberAllowed ( prev=> !prev)
        }} />
        <label htmlFor="numberInput">Numbers</label>

        <input type="checkbox" defaultChecked={characterAllowed} onChange={() =>{
          setCharacterAllowed( prev=> !prev)
        }} />
        <label htmlFor="characterInput">Characters</label>
        </div>
    </div>
  )
  }

export default PassGen