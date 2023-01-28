import React from 'react'
import { useState } from 'react'

const ForexJpy = () => {
    const [usd,setRiskusd] = useState(0)
    const [pips,setRiskpips] = useState(0)
    const [value,setVal] = useState(0)
    


    function normLot(e,risk,pip){
        e.preventDefault()
        let itr1 = pip/4 * 3
        let itr2 = risk / itr1
      
        let answer = itr2/10
        setVal(answer)
       }

    
  return (
    <>
      <form action="" className='form'>
      <div>
          <h1> Lot Calculator Forex (Jpy)</h1>
        </div>
        <div>
            <label htmlFor="">Risk in USD: </label>
            <input type="number" value={usd} className="form-control" id="" onChange={(e)=>{setRiskusd(e.target.value)}} />
        </div>
        <div>
            <label htmlFor="">Risk in pips: </label>
            <input type="number" value={pips} className="form-control" id="" onChange={(e)=>{setRiskpips(e.target.value)}} />
        </div>
         <div className='d-grid'>
            <button className='btn bg-success '  onClick={(e)=>{normLot(e,usd,pips)}}>Calculate</button>
         </div>
      </form>
      <div className='answer'> The lotsize to use is <span className="display-6 "> {value} </span> </div>
    </>
    
  )
}

export default ForexJpy