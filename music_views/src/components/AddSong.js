import React, { useRef, useState} from 'react';
import { doAjax } from '../utils/ajax';
export const AddSong=()=>{
    const name= useRef('');
    const url = useRef('');
    const artistName =useRef('');
    const imageurl = useRef('');
    const [message, setMessage] = useState('');
    const addSong =()=>{
        let nm = name.current.value;
        let ul = url.current.value;
        let aName= artistName.current.value;
        let iurl = imageurl.current.value;
        const songObject = {"name":nm, "url":ul,"artistName":aName,"imageurl":iurl};
        const json = JSON.stringify(songObject);
        const promise= doAjax(process.env.REACT_APP_ADDSONG_URL,'POST',json);
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
        <h1>Add A Song</h1>
        <h2>{message}</h2>
        <div className='form-group'>
            <label>SongName</label>
            <input ref={name} className='form-control' type='text' placeholder ='Type Name here' required/>
        </div>
        <div className='form-group'>
            <label>SongUrl</label>
            <input ref={url} className='form-control' type='text' placeholder ='Type Url here' required/>
        </div>
        <div className='form-group'>
            <label>ArtistName</label>
            <input ref={artistName} className='form-control' type='text' placeholder ='Type Artist Name here' required/>
        </div>
        <div className='form-group'>
            <label>ImageUrl</label>
            <input ref={imageurl} className='form-control' type='text' placeholder ='Type Image Url here' required/>
        </div>
        <br />
        <div className='form-group'>
            <button onClick={addSong} className='btn btn-primary'>Add</button>
        </div>
        </>
    )

}