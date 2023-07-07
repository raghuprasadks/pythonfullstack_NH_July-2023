import React,{useState} from 'react'

const EmployeeMaster=()=>{

    const [code,setCode]=useState('')
    const [name,setName]=useState('')
    const [dept,setDept]=useState('')
    const [desg,setDesg]=useState('')
    const [sal,setSal]=useState('')
    const [emplist,setEmplist]=useState([])

    const [isEdit,setIsEdit]=useState(true)
    const [isAdd,setIsAdd]=useState(false)
    
    
    const addEmployee=()=>{
        const emp = {code:code,name:name,dept:dept,desg:desg,sal:sal}
        console.log("Add Employee")
        console.log(emp)
        console.log("Employee list")
        //const updEmpList = [...emplist, emp];
        //console.log(updEmpList)
        const updEmpList = [...emplist, emp];
        setEmplist(updEmpList);
       // setEmplist([...emplist,emp]);       
       console.log(updEmpList)  
       clearData()
    }

    const clearData=()=>{
        setCode('')
        setName('')
        setDept('')
        setDesg('')
        setSal('') 
    }

    const deleteEmployee=(code)=>{
        console.log('code',code)
        const afterdelete = emplist.filter((emp)=>emp.code!=code)
        setEmplist(afterdelete)
    }

    const updateEmployee=(emptoupdate)=>{
        console.log('emp to update',emptoupdate)
        //const employeetobeupdated = emplist.filter((emp)=>emp.code!=code)
        //setEmplist(afterdelete)
        setCode(emptoupdate.code)
        setName(emptoupdate.name)
        setDept(emptoupdate.dept)
        setDesg(emptoupdate.desg)
        setSal(emptoupdate.sal)  
        setIsEdit(false) 
        setIsAdd(true)
    }

    const editEmployee=()=>{
        const editedemployee = {code:code,name:name,dept:dept,desg:desg,sal:sal}
        console.log("edit Employee",editedemployee)
        
        const afteredit=emplist.map((emp)=>emp.code==editedemployee.code?editedemployee:emp)
        console.log("after edit",afteredit)
        
        setEmplist(afteredit)
        clearData()
        setIsEdit(true) 
        setIsAdd(false)
    }

    const emplistfordisplay=emplist.map((emp)=><tr key={emp.code}>
        <td>{emp.code}</td>
        <td>{emp.name}</td>
        <td>{emp.dept}</td>
        <td>{emp.desg}</td>
        <td>{emp.sal}</td>
        <td><button onClick={()=>deleteEmployee(emp.code)} >Delete</button></td>
        <td><button onClick={()=>updateEmployee(emp)}>Update</button></td>
    </tr>)

    return(
        <div>
        <div>
            <h1>Employee Master</h1>
            <input value={code} onChange={(e)=>setCode(e.target.value)} placeholder='Enter Code'></input><br/>
            <input value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Name'></input><br/>
            <input value={dept} onChange={(e)=>setDept(e.target.value)} placeholder='Enter Department'></input><br/>
            <input value={desg} onChange={(e)=>setDesg(e.target.value)} placeholder='Enter Designation'></input><br/>
            <input value={sal} onChange={(e)=>setSal(e.target.value)} placeholder='Enter Salary'></input><br/>
            <button onClick={addEmployee} disabled={isAdd}>Add Employee</button>
            <button onClick={editEmployee} disabled={isEdit}>Edit Employee</button>

        </div>
        <div>
            <h1>Employee List</h1>
            <table>
                <tr>
                    <th>Code</th>
                    <th>Name</th>
                    <th>Department</th>
                    <th>Designation</th>
                    <th>Salary</th>
                </tr>
                {emplistfordisplay}
            </table>
        </div>
        </div>
    )    

}

export default EmployeeMaster