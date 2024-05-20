import React, { useState } from 'react'
const Contador = () => {
    const [ counter, setCounter] = useState(5);
    const soma = ()=>{
        setCounter((counter)=>counter + 1)
    }
    return (
    <>
    <div><h1 className='h1'>{counter}</h1></div>
    <button onClick={soma}>+</button>
    </>
  )
}

export default Contador