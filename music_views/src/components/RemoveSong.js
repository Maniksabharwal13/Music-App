import React, { useRef, useState} from 'react';
import { doAjax } from '../utils/ajax';
export const RemoveSong=()=>{
    const name= useRef('');
    const [message, setMessage] = useState('');
    const removeSong =()=>{
        let nm = name.current.value;
        const songObject = {"name":nm };
        const json = JSON.stringify(songObject);
        const promise= doAjax(process.env.REACT_APP_REMOVESONG_URL,'DELETE',json);
        promise.then(response=>{
            response.json().then(data=>{
                console.log('Data Rec From Server ',data);
                setMessage(data.message);
            }).catch(err=>{
                console.log("Invalid JSON ",err);
            })
            }).catch(err =>{
                console.log('Error During Server Call ',err);
            })
        }
    return(
        <>
        <h1>REMOVE A Song</h1>
        <h2>{message}</h2>
        <div className='form-group'>
            <label>SongName</label>
            <input ref={name} className='form-control' type='text' placeholder ='Type Name here' required/>
        </div>
        <br />
        <div className='form-group'>
            <button onClick={removeSong} className='btn btn-primary'>Delete</button>
        </div>
        </>
    )

}