import React,{useState} from "react"

const SimpleInterest=()=>{

    const [principal,setPrincipal]=useState()
    const [roi,setRoi]=useState()
    const [time,setTime]=useState()
    const [si,setSi]=useState()

    const CalculateSI=()=>{
        let interest = (parseFloat(principal)*parseFloat(roi)*parseFloat(time))/100
        setSi(interest)
    }

    return(

        <div>
            <h1>Simple Interest Calculator</h1>
            <label>Principal</label>
            <input value={principal} onChange={(e)=>setPrincipal(e.target.value)} placeholder="Enter Principal Amount"></input><br/>
            <label>Rate Of Interest</label>
            <input value={roi} onChange={(e)=>setRoi(e.target.value)} placeholder="Enter Rate Of Interest"></input><br/>
            <label>Time</label>
            <input value={time} onChange={(e)=>setTime(e.target.value)} placeholder="Enter Time in years"></input><br/>
            <button onClick={CalculateSI}>Calculate</button>
            <h1>Simple Interest is {si}</h1>
        </div>
    )

}

export default SimpleInterest