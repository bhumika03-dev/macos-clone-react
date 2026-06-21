import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import './DateTime.scss'

const DateTime = () => {
    const [dateTimes, setdateTimes] = useState(new Date());

    useEffect(()=>{
       const Interval = setInterval(()=>{setdateTimes(new Date());},1000);
        return ()=>clearInterval(Interval)},[]);
  return (
    <div className='date'>
        <p>{dateTimes.toLocaleDateString()}</p>
        <p>{dateTimes.toLocaleTimeString()}</p>
    </div>
  )
}

export default DateTime
