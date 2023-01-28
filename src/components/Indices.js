import React from 'react'
import { useState } from 'react'
const Indices = () => {
    const [usd,setRiskusd] = useState(0)
    const [pips,setRiskpips] = useState(0)
    const [value,setVal] = useState(0)
    


    function normLot(e,risk,pip){
        e.preventDefault()
        
      
        let answer = 
        setVal(answer)
       }

    
  return (
    <>
      <form action="" className='form'>
      <div>
          <h1> Lot Calculator Indices</h1>
        </div>
        <div>
            <label htmlFor="">Risk in USD: </label>
            <input type="number" value={usd} className="form-control" id="" onChange={(e)=>{setRiskusd(e.target.value)}} />
        </div>
        <div>
            <label htmlFor="">Risk in points: </label>
            <input type="number" value={pips} className="form-control" id="" onChange={(e)=>{setRiskpips(e.target.value)}} />
        </div>
         <div className='d-grid'>
            <button className='btn bg-success' onClick={(e)=>{normLot(e,usd,pips)}}>Calculate</button>
         </div>
      </form>
      <div className='answer'> The lotsize to use is <span className="display-6 "> {value} </span> </div>
    </>
  )
}

export default Indices