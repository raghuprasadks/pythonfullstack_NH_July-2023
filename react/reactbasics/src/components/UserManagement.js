import React,{useState,useEffect} from "react"

const UserManagement=()=>{

    const [users,setUsers]=useState([])

    const userapi = "http://127.0.0.1:5000/api/users"

    useEffect(()=>{

        fetch(userapi)
        .then(response=>response.json())
        .then(json=>setUsers(json))
        .catch(error=>console.log('error occured'))
    },[])


    return(
        <div>
            <h1>User Management</h1>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>Country</th>
                </tr>
                
                {users.map((user)=><tr key={user.user_id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.address}</td>
                    <td>{user.country}</td>                    
                </tr>)}
            </table>
        </div>
    )
}

export default UserManagement