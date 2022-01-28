import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from "react-router-dom"
import axios from "axios"
import Delete from "./../components/Delete"

const Individual = () => {
    const [onePirate, setonePirate] = useState(null)
    const { id } = useParams()
    const history = useHistory()
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/pirates/${id}`)
            .then(res => setonePirate(res.data))
            .catch(err => console.log(err))
    }, [])

    const reload=()=>{
        history.push("/pirates")
    }

    return (
        <div>
            {
                onePirate ?
                    <div style={{display:"flex"}}>
                        <div>
                            <img src={`${onePirate.image}`} alt="error" width="300" height="300" />
                            <h1>{onePirate.catchphrase}</h1>
                        </div>
                        <div>
                            <h1>About</h1>
                            <p>Name: {onePirate.name}</p>
                            <p>Chests: {onePirate.chests}</p>
                            <p>Post: {onePirate.post}</p>
                            <p>
                                Peripherals:
                                <p>Pegleg?{onePirate.pegleg===true?"Yes,":"Nope"}</p>
                                <p>Eyepatch?{onePirate.eyepatch===true?"Yes,":"nope"}</p>
                                <p>Hookhand?{onePirate.hookhand===true?"Yes,":"Nope"}</p>
                            </p>
                            <button onClick={() => history.goBack()}>Go back</button>
                            <Delete id={onePirate._id} reload={reload}/>
                        </div>
                    </div>:
                    <p>Loading</p>
            }
        </div>
    )
};

export default Individual;
