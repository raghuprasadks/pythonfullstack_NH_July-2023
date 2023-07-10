import React,{useState} from 'react'

const Employee=({saveEmployee,empdata})=>{
    const [code,setCode]=useState(-1)
    const [name,setName]=useState('')
    const [dept,setDept]=useState('')
    const [sal,setSal]=useState(-1)

    const addEmployee=(e)=>{
        e.preventDefault()
        console.log('code ',code)
        console.log('name ',name) 
        saveEmployee(code,name,dept,sal)
        clearData()
    }
    const clearData=()=>{
        setCode(-1)
        setName('')
        setDept('')
        setSal(-1)
    }
    return(
        <div>
        <div>
            <form onSubmit={addEmployee}>
                <label>Code</label><br/>
                <input value={code} onChange={(e)=>setCode(e.target.value)}/><br/>
                <label>Name</label><br/>
                <input value={name} onChange={(e)=>setName(e.target.value)}/><br/>
                <label>Department</label><br/>
                <input value={dept} onChange={(e)=>setDept(e.target.value)}/><br/>
                <label>Salary</label><br/>
                <input value={sal} onChange={(e)=>setSal(e.target.value)}/><br/>
                <input type="submit" value="Add Employee"/>                

            </form>
        </div>
        <div>

        <table>
            <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Department</th>
            <th>Salary</th>
                        
            </tr>
            {empdata.map((emp)=>
         <tr key={emp.code}>
             <td>{emp.code}</td>
             <td>{emp.dept}</td>
             <td>{emp.sal}</td>        
             
         </tr>
         )}
        
        </table>


        </div>
        </div>
    )
}

export default Employee