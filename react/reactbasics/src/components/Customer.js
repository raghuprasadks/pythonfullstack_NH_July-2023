import React from 'react'

const Customer=()=>{

    const customers=[
        {
            id:1,
            name:'Balaji',
            location:'Chennai'
        },
        {
            id:2,
            name:'Pawar',
            location:'Mumbai'
        },
        {
            id:3,
            name:'Himanth Biswa Sarma',
            location:'Gauhati'
        },
        {
            id:4,
            name:'Ajith Singh',
            location:'Chandigarh'
        }

    ]
    return(

        <div className="tblcls">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map((customer)=><tr><td>{customer.id}</td><td>{customer.name}</td><td>{customer.location}</td></tr>)}
                </tbody>
            </table>
        </div>

    )
}

export default Customer