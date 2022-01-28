import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom"
import axios from "axios"
import Delete from "./../components/Delete"

const Displayall = (props) => {

    const [crew, setCrew] = useState(null)
    const[refresh,setRefresh]=useState(true)

    useEffect(() => {
        axios.get('http://localhost:8000/api/pirates')
            .then(res => {
                console.log(res.data)
                setCrew(res.data)
                console.log(crew)
            }).catch(err => {
                console.log(err)
                setCrew("")
            })
    }, [refresh])

    const reload=()=>{
        setRefresh(!refresh)
    }
    return (
        <div>
            <div style={{display:"flex"}}>
                <h1>Pirate Crew</h1>
                <div><Link to={`/pirates/new`}>Add pirate</Link></div>
            </div>
            <div>
                {
                    crew ? (<div>
                        {
                            crew.map((pirate, i) => (
                                <div key={i} style={{display:"flex"}}>
                                    <div style={{flex:1}}><img src={`${pirate.image}`} alt="Error" width="300" height="300"></img></div>

                                    <div style={{flex:3, height:"300px", border:"solid red"}}>
                                        <h1>{pirate.name}</h1>
                                        <div style={{ display: "flex", justifyContent:"center" }}>
                                            <div><Link to={`/pirates/${pirate._id}/home`}>View pirate</Link></div>
                                            <div><Delete id={pirate._id} reload={reload} /></div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    ) : (
                        <h1>Loading</h1>
                    )
                }
            </div>
        </div>
    )
};

export default Displayall;
