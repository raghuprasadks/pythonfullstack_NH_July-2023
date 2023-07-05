import React from "react"

const Content=()=>{
    let aboutme={
        name:"Ramesh",
        education:"BE MS",
        location:"Bengaluru"
    }

    return(
        <div>
            <h1> Name : {aboutme.name}</h1>
            <h1> Education : {aboutme.education}</h1>
            <h1> Location : {aboutme.location}</h1>
        </div>
        
    )
}
export default Content