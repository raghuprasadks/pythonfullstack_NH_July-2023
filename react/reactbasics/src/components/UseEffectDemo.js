import React,{useState,useEffect} from 'react'

const UseEffectDemo=()=>{

    const [users,setUsers]=useState([])
    useEffect(()=>{

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      //.then(json => console.log(json))
      .then(json => setUsers(json))
      .catch((reason)=>console.log("Error while fetching data"))
    },
    
    [])
    return(
        <div>
            <h1>Json Placeholder - Users</h1>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>City</th>
                </tr>
                {users.map((user)=>
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.address.city}</td>
                </tr>
                )}
            </table>
        </div>
    )
}

export default UseEffectDemo
