import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from "react-router-dom"
import axios from "axios"

const Main= (props)=>{
    
    const[test,setTest]=useState("")

    useEffect(() => {
        axios.get('http://localhost:8000/')
            .then(res => {
                console.log(res.data)
                setTest(res.data)
                console.log(test)
            }).catch(err => {
                console.log(err)
                setTest("")
            })
    }, [])

    return (
        <div>
         <p>
             {test.message}
             </p>
        </div>
    )
}

export default Main;