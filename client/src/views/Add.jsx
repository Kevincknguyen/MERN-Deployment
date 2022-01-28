import React, {useState} from 'react';
import axios from "axios"
import {useHistory} from "react-router-dom"

const Add = () => {
    
    let [result, setResult] = useState({name:"",chests:0,catchphrase:"", image:"",post:"",pegleg:true,eyepatch:true,hookhand:true})
    let[errorArray,seterrorArray]=useState([])
    const history=useHistory()
    // ,history.push("/pirates")}
    const submitHandler = e => {
        e.preventDefault()
        seterrorArray([])
        axios.post('http://localhost:8000/api/pirates/add',result)
        .then(res=>(console.log(res),console.log("success"),history.push("/pirates")))
        .catch(err=>{
            console.log(err.response.data)
            const errResponse=err.response.data.errors
            console.log(errResponse)
            let tempArr=[];
            for (const key in errResponse){
                if(errResponse.hasOwnProperty(key)){
                    tempArr.push(errResponse[key].message)
                }

            }
            seterrorArray(tempArr)
        })
        
        setResult({name:"",chests:0,catchphrase:"", image:"",post:"",pegleg:true,eyepatch:true,hookhand:true})
        

    }

    const resultHandler=e=>{
        console.log(typeof e.target.value)
        console.log(typeof e.target.name)
        console.log(e.target.value)
        if (e.target.name==="pegleg"){
            setResult({...result,
            [e.target.name]: !result.pegleg})
        }

        else if (e.target.name==="hookhand"){
            setResult({...result,
            [e.target.name]: !result.hookhand})
        }

        else if (e.target.name==="eyepatch"){
            setResult({...result,
            [e.target.name]: !result.eyepatch})
        }



        // else if (typeof e.target.value===Boolean){
        //     console.log("boolean")
        //     setResult({...result,
        //     [e.target.name]: !e.target.value})
        // }
        else {
            setResult({...result,
                [e.target.name]:e.target.value
            })
            
        }
    }

    return (
        <div>
            <button onClick={()=>history.goBack()}>Go back</button>
        <form onSubmit={submitHandler}>
            <p>
                <label>Name</label><br />
                <input type="text" name="name" onChange={e => resultHandler(e)} value={result.name} />
                <p>{result.name.length>0 && result.name.length<3?"You need a better name than that!":""}</p>
            </p>
            <p>
                <label>Chests</label><br />
                <input type="number" name="chests" onChange={e => resultHandler(e)} value={result.price} />
                <p>{result.chests<1?"Whats a pirate without his booty!":""}</p>
            </p>
            <p>
                <label>Catchphrase</label><br />
                <input type="text" name="catchphrase" onChange={e => resultHandler(e)} value={result.catchphrase} />
                <p>{result.catchphrase.length<5?"Every pirate needs a good catch phrase!":""}</p>
            </p>
            <p>
                <label>Post</label><br />
                <select name="post" onClick={e=>resultHandler(e)}>
                    <option  value="" >Choose your post!</option>
                    <option   value="Captain" >Captain</option>
                    <option   value="First Mate" >First Mate</option>
                    <option  value="Boatswain" > Boatswain</option>
                    <option   value="Powder Monkey" >Powder Monkey</option>
                </select>
                <p>{result.post===""?"Man your post!":""}</p>
            </p>
            <p>
                <label>image</label><br />
                <input type="text" name="image" onChange={e => resultHandler(e)} value={result.image} />
                <p>{result.image<1?"Every pirate needs picture!":""}</p>
            </p>
            <p>
                <label>Pegleg?</label><br/>
                <input type="checkbox" name="pegleg" checked={result.pegleg} onChange={e => resultHandler(e)} />
            </p>
            <p>
                <label>Eyepatch?</label><br/>
                <input type="checkbox" name="eyepatch" checked={result.eyepatch} onChange={e => resultHandler(e)} />
            </p>
            <p>
                <label>Hookhand?</label><br/>
                <input type="checkbox" name="hookhand" checked={result.hookhand} onChange={e => resultHandler(e)} />
            </p>
            <button disabled={result.name<3 || result.chests<1 || result.catchphrase<5 || result.image==="" || result.post===""} type="submit">Submit form</button>
        </form>
        {
            errorArray.map((err,i)=>(
                <p key={i}>{err}</p>
            ))
            }
        </div>
    )
};


export default Add;
