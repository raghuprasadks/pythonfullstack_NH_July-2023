import React from "react"

const CovidDashboard=()=>{

   let coviddata=[
        {
            state:'Maharashtra',
            totalcases:8169873,
            active:79,
            discharged:8031279,
            deaths:148555,
            activeratio:0.0,
            dischargeratio:98.18,
            deathratio:1.82
        },
        {
            state:'Kerala',
            totalcases:8169873,
            active:79,
            discharged:8031279,
            deaths:148555,
            activeratio:0.0,
            dischargeratio:98.18,
            deathratio:1.82
        }

]
    return(
        <div className="covidcls">
            <h1>Covid Dashboard</h1>
            <table>
                <tr>
                    <th>State</th>
                    <th>Total Cases</th>
                    <th>Active</th>
                    <th>Discharged</th>
                    <th>Deaths</th>
                    <th>Active Ratio</th>
                    <th>Discharge Ratio</th>
                    <th>Death Ratio</th>
                </tr>
                {coviddata.map((data)=><tr  key={data.state}>
                    <td>{data.state}</td>
                    <td>{data.totalcases}</td>
                    <td>{data.active}</td>
                    <td>{data.discharged}</td>
                    <td>{data.deaths}</td>
                    <td>{data.activeratio}</td>
                    <td>{data.deathratio}</td>
                    <td>{data.deathratio}</td>
                    </tr>
                )}

            </table>
        </div>
    )
}

export default CovidDashboard